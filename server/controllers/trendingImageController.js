const TrendingImage = require('../models/TrendingImage');
const { uploadBase64ToFirebase, deleteFromFirebase } = require('../utils/uploadToFirebase');
const Replicate = require('replicate');
const Scene = require('../models/Scene');
const mongoose = require('mongoose');

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

// @desc    Generate trending image using nano-banana
// @route   POST /api/trending-images/generate
// @access  Private
const generateTrendingImage = async (req, res) => {
  try {
    const { trendingImageId, personImage } = req.body;

    if (!trendingImageId || !personImage) {
      return res.status(400).json({
        success: false,
        message: 'Please provide trending image ID and person image',
      });
    }

    // Get trending image from database
    const trendingImage = await TrendingImage.findById(trendingImageId);
    if (!trendingImage) {
      return res.status(404).json({
        success: false,
        message: 'Trending image not found',
      });
    }

    console.log('Generating trending image with nano-banana...');
    console.log('Trending prompt:', trendingImage.prompt);

    // Use nano-banana model
    const output = await replicate.run(
      'google/nano-banana',
      {
        input: {
          image_input: [
            trendingImage.imageUrl, // Style/outfit image first
            personImage,            // Person image second
          ],
          prompt: trendingImage.prompt,
          num_inference_steps: 25,
          guidance_scale: 7.5,
        },
      }
    );

    console.log('Replicate output:', output);

    // Handle ReadableStream - nano-banana returns binary data
    let imageBuffer = null;
    
    if (output && typeof output[Symbol.asyncIterator] === 'function') {
      // It's an async iterable (ReadableStream) - collect all chunks
      console.log('Output is ReadableStream, collecting binary chunks...');
      const chunks = [];
      for await (const chunk of output) {
        chunks.push(chunk);
      }
      
      console.log(`Collected ${chunks.length} chunks`);
      
      // Concatenate all Uint8Array chunks into a single buffer
      const totalLength = chunks.reduce((acc, chunk) => acc + chunk.length, 0);
      imageBuffer = Buffer.concat(chunks.map(chunk => Buffer.from(chunk)));
      
      console.log(`Total image size: ${imageBuffer.length} bytes`);
    } else {
      console.error('Unexpected output format from Replicate');
      return res.status(500).json({
        success: false,
        message: 'Unexpected output format from Replicate',
      });
    }

    if (!imageBuffer || imageBuffer.length === 0) {
      console.error('No image data received from Replicate');
      return res.status(500).json({
        success: false,
        message: 'No image data received from Replicate',
      });
    }

    console.log('Converting buffer to base64...');
    const base64Image = `data:image/png;base64,${imageBuffer.toString('base64')}`;

    console.log('Uploading to Firebase...');
    const firebaseUrl = await uploadBase64ToFirebase(base64Image, 'trending-generated');

    // Save to database
    const generatedImage = await Scene.create({
      user: req.user._id,
      prompt: trendingImage.prompt,
      style: trendingImage.category || 'trending',
      imageUrl: firebaseUrl,
      status: 'completed',
      imageType: 'trending',
    });

    res.status(201).json({
      success: true,
      data: generatedImage,
    });
  } catch (error) {
    console.error('Error generating trending image:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to generate trending image',
      error: error.message,
    });
  }
};

// @desc    Get all trending images
// @route   GET /api/trending-images
// @access  Public
const getTrendingImages = async (req, res) => {
  try {
    const images = await TrendingImage.find({ isActive: true }).sort({ order: 1, createdAt: -1 });

    res.status(200).json({
      success: true,
      count: images.length,
      data: images,
    });
  } catch (error) {
    console.error('Error fetching trending images:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to fetch trending images',
      error: error.message 
    });
  }
};

// @desc    Get all trending images (admin)
// @route   GET /api/trending-images/admin
// @access  Private/Admin
const getAllTrendingImages = async (req, res) => {
  try {
    const images = await TrendingImage.find().sort({ order: 1, createdAt: -1 });

    res.status(200).json({
      success: true,
      count: images.length,
      data: images,
    });
  } catch (error) {
    console.error('Error fetching trending images:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to fetch trending images',
      error: error.message 
    });
  }
};

// @desc    Get single trending image
// @route   GET /api/trending-images/:id
// @access  Public
const getTrendingImage = async (req, res) => {
  try {
    const image = await TrendingImage.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ 
        success: false,
        message: 'Trending image not found' 
      });
    }

    res.status(200).json({
      success: true,
      data: image,
    });
  } catch (error) {
    console.error('Error fetching trending image:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to fetch trending image',
      error: error.message 
    });
  }
};

// @desc    Create trending image
// @route   POST /api/trending-images
// @access  Private/Admin
const createTrendingImage = async (req, res) => {
  try {
    const { title, prompt, imageUrl, category, order } = req.body;

    if (!title || !prompt || !imageUrl) {
      return res.status(400).json({ 
        success: false,
        message: 'Please provide title, prompt and image' 
      });
    }

    // Upload image to Firebase if it's base64
    let finalImageUrl = imageUrl;
    if (imageUrl.startsWith('data:image')) {
      console.log('Uploading image to Firebase...');
      finalImageUrl = await uploadBase64ToFirebase(imageUrl, 'trending');
    }

    const image = await TrendingImage.create({
      title,
      prompt,
      imageUrl: finalImageUrl,
      category,
      order: order || 0,
    });

    res.status(201).json({
      success: true,
      data: image,
    });
  } catch (error) {
    console.error('Error creating trending image:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to create trending image',
      error: error.message 
    });
  }
};

// @desc    Update trending image
// @route   PUT /api/trending-images/:id
// @access  Private/Admin
const updateTrendingImage = async (req, res) => {
  try {
    const image = await TrendingImage.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ 
        success: false,
        message: 'Trending image not found' 
      });
    }

    const { title, prompt, imageUrl, category, order, isActive } = req.body;

    // Update image if new one provided
    let finalImageUrl = image.imageUrl;
    if (imageUrl && imageUrl !== image.imageUrl) {
      if (imageUrl.startsWith('data:image')) {
        console.log('Uploading new image to Firebase...');
        // Delete old image
        if (image.imageUrl && image.imageUrl.includes('storage.googleapis.com')) {
          await deleteFromFirebase(image.imageUrl);
        }
        finalImageUrl = await uploadBase64ToFirebase(imageUrl, 'trending');
      } else {
        finalImageUrl = imageUrl;
      }
    }

    image.title = title || image.title;
    image.prompt = prompt || image.prompt;
    image.imageUrl = finalImageUrl;
    image.category = category || image.category;
    image.order = order !== undefined ? order : image.order;
    image.isActive = isActive !== undefined ? isActive : image.isActive;

    await image.save();

    res.status(200).json({
      success: true,
      data: image,
    });
  } catch (error) {
    console.error('Error updating trending image:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to update trending image',
      error: error.message 
    });
  }
};

// @desc    Delete trending image
// @route   DELETE /api/trending-images/:id
// @access  Private/Admin
const deleteTrendingImage = async (req, res) => {
  try {
    const image = await TrendingImage.findById(req.params.id);

    if (!image) {
      return res.status(404).json({ 
        success: false,
        message: 'Trending image not found' 
      });
    }

    // Delete image from Firebase
    if (image.imageUrl && image.imageUrl.includes('storage.googleapis.com')) {
      await deleteFromFirebase(image.imageUrl);
    }

    await image.deleteOne();

    res.status(200).json({
      success: true,
      message: 'Trending image deleted successfully',
    });
  } catch (error) {
    console.error('Error deleting trending image:', error);
    res.status(500).json({ 
      success: false,
      message: 'Failed to delete trending image',
      error: error.message 
    });
  }
};

// @desc    Get trending stats
// @route   GET /api/trending-images/stats
// @access  Public
const getTrendingStats = async (req, res) => {
  try {
    // Thống kê 7 ngày qua
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    // Lấy dữ liệu tạo ảnh theo ngày (7 ngày qua)
    const dailyStats = await Scene.aggregate([
      {
        $match: {
          createdAt: { $gte: sevenDaysAgo },
          status: 'completed',
          imageType: 'trending',
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);

    // Điền vào các ngày thiếu với giá trị 0
    const filledDailyStats = [];
    const dayNames = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'];
    for (let i = 6; i >= 0; i--) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const dateStr = date.toISOString().split('T')[0];
      const dayName = dayNames[date.getDay() === 0 ? 6 : date.getDay() - 1];
      const found = dailyStats.find((stat) => stat._id === dateStr);
      filledDailyStats.push({
        day: dayName,
        count: found ? found.count : 0,
      });
    }

    // Thống kê theo style (top 6 trending images được dùng nhiều nhất)
    const styleStats = await Scene.aggregate([
      { 
        $match: { 
          status: 'completed',
          imageType: 'trending',
        } 
      },
      {
        $group: {
          _id: '$style',
          count: { $sum: 1 },
        },
      },
      { $sort: { count: -1 } },
      { $limit: 6 },
    ]);

    // Thống kê theo danh mục
    const categoryStats = await TrendingImage.aggregate([
      { $match: { isActive: true } },
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
        },
      },
    ]);

    const categoryStatsObj = {};
    categoryStats.forEach((cat) => {
      categoryStatsObj[cat._id] = cat.count;
    });

    // Lấy các tác phẩm nổi bật tuần qua
    const weeklyHighlights = await Scene.find({
      status: 'completed',
      imageType: 'trending',
      createdAt: { $gte: sevenDaysAgo },
      isFavorite: true,
    })
      .populate('user', 'username fullName')
      .sort({ createdAt: -1 })
      .limit(3);

    res.json({
      success: true,
      data: {
        dailyStats: filledDailyStats.map((s) => s.count),
        dailyLabels: filledDailyStats.map((s) => s.day),
        styleStats: styleStats.map((s) => ({
          name: s._id,
          count: s.count,
        })),
        categoryStats: categoryStatsObj,
        weeklyHighlights: weeklyHighlights.map((h) => ({
          id: h._id,
          userName: h.user?.fullName || h.user?.username || 'Anonymous',
          prompt: h.prompt,
          style: h.style,
          createdAt: h.createdAt,
          imageUrl: h.imageUrl,
        })),
      },
    });
  } catch (error) {
    console.error('Error getting trending stats:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get trending stats',
      error: error.message,
    });
  }
};

// @desc    Get popular trending images
// @route   GET /api/trending-images/popular
// @access  Public
const getPopularTrending = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 6;

    // Lấy trending images và tính toán lượt tạo
    const trends = await TrendingImage.find({ isActive: true })
      .sort({ order: 1, createdAt: -1 })
      .limit(limit);

    // Đếm số lần tạo cho mỗi trending
    const trendsWithStats = await Promise.all(
      trends.map(async (trend) => {
        const usageCount = await Scene.countDocuments({
          style: trend.category,
          status: 'completed',
          imageType: 'trending',
        });

        return {
          _id: trend._id,
          title: trend.title,
          prompt: trend.prompt,
          imageUrl: trend.imageUrl,
          category: trend.category,
          usageCount,
          order: trend.order,
        };
      })
    );

    // Sắp xếp theo usageCount
    trendsWithStats.sort((a, b) => b.usageCount - a.usageCount);

    res.json({
      success: true,
      count: trendsWithStats.length,
      data: trendsWithStats,
    });
  } catch (error) {
    console.error('Error getting popular trending:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to get popular trending',
      error: error.message,
    });
  }
};

module.exports = {
  getTrendingImages,
  getAllTrendingImages,
  getTrendingImage,
  createTrendingImage,
  updateTrendingImage,
  deleteTrendingImage,
  generateTrendingImage,
  getTrendingStats,
  getPopularTrending,
};
