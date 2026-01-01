"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import DashboardLayout from "../../components/dashboard/DashboardLayout";
import { imageApi } from "@/lib/api";

export default function EditImagePage() {
  const router = useRouter();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  
  const [originalImage, setOriginalImage] = useState<string>("");
  const [originalPrompt, setOriginalPrompt] = useState<string>("");
  const [selectedStyle, setSelectedStyle] = useState<string>("realistic");
  const [sceneId, setSceneId] = useState<string>("");
  const [editPrompt, setEditPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [editedImage, setEditedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasCanvasDrawing, setHasCanvasDrawing] = useState(false);
  
  // Drawing/editing tools state
  const [selectedTool, setSelectedTool] = useState<string>("select");
  const [brushSize, setBrushSize] = useState(10);
  const [brushColor, setBrushColor] = useState("#ff0000");
  
  // Text tool state
  const [showTextInput, setShowTextInput] = useState(false);
  const [textInput, setTextInput] = useState("");
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
  const [fontSize, setFontSize] = useState(24);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const [isDraggingModal, setIsDraggingModal] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [modalSize, setModalSize] = useState({ width: 300, height: 120 });
  const [isResizing, setIsResizing] = useState(false);
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0 });
  const [isDrawingTextBox, setIsDrawingTextBox] = useState(false);
  const [textBoxStart, setTextBoxStart] = useState({ x: 0, y: 0 });
  const [textBoxEnd, setTextBoxEnd] = useState({ x: 0, y: 0 });

  const tools = [
    { id: "select", label: "Chọn", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { id: "draw", label: "Vẽ", icon: "M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" },
    { id: "erase", label: "Xóa", icon: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" },
    { id: "text", label: "Text", icon: "M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" },
    { id: "shape", label: "Hình", icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" },
    { id: "remove", label: "Xóa đối tượng", icon: "M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" },
    { id: "add", label: "Thêm đối tượng", icon: "M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" },
  ];

  useEffect(() => {
    // Get data from localStorage
    const dataStr = localStorage.getItem('editImageData');
    
    if (!dataStr) {
      // No data, redirect back
      router.push('/dashboard/create-scene');
      return;
    }

    try {
      const data = JSON.parse(dataStr);
      setOriginalImage(data.imageUrl || "");
      setOriginalPrompt(data.prompt || "");
      setSceneId(data.sceneId || "");
      setSelectedStyle(data.style || "realistic");
    } catch (err) {
      console.error('Error parsing edit data:', err);
      router.push('/dashboard/create-scene');
    }
  }, [router]);

  // Setup canvas when image loads
  useEffect(() => {
    if (!canvasRef.current || !imageRef.current) return;
    
    const canvas = canvasRef.current;
    const image = imageRef.current;
    
    // Set canvas size to match image
    canvas.width = image.width;
    canvas.height = image.height;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
    }
  }, [originalImage, editedImage]);

  const startDrawing = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    
    // Handle text tool - start drawing text box
    if (selectedTool === 'text') {
      setIsDrawingTextBox(true);
      setTextBoxStart({ x, y });
      setTextBoxEnd({ x, y });
      return;
    }
    
    // Handle draw tool
    if (selectedTool !== 'draw') return;
    
    setIsDrawing(true);
    setHasCanvasDrawing(true); // Set immediately when starting to draw
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.beginPath();
      ctx.moveTo(x, y);
    }
  };

  const draw = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;
    
    // Update text box size while dragging
    if (isDrawingTextBox) {
      setTextBoxEnd({ x, y });
      return;
    }
    
    // Handle drawing
    if (!isDrawing || selectedTool !== 'draw') return;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.strokeStyle = brushColor;
      ctx.lineWidth = brushSize;
      ctx.lineTo(x, y);
      ctx.stroke();
      setHasCanvasDrawing(true);
    }
  };

  const stopDrawing = () => {
    // Finish text box drawing
    if (isDrawingTextBox) {
      setIsDrawingTextBox(false);
      
      // Calculate text box dimensions
      const width = Math.abs(textBoxEnd.x - textBoxStart.x);
      const height = Math.abs(textBoxEnd.y - textBoxStart.y);
      
      // Only show modal if box is big enough
      if (width > 20 && height > 20) {
        const canvas = canvasRef.current;
        if (canvas) {
          const rect = canvas.getBoundingClientRect();
          const scaleX = rect.width / canvas.width;
          const scaleY = rect.height / canvas.height;
          
          setModalPosition({
            x: Math.min(textBoxStart.x, textBoxEnd.x) * scaleX,
            y: Math.min(textBoxStart.y, textBoxEnd.y) * scaleY
          });
          setModalSize({
            width: width * scaleX,
            height: height * scaleY
          });
          setTextPosition({
            x: Math.min(textBoxStart.x, textBoxEnd.x),
            y: Math.min(textBoxStart.y, textBoxEnd.y) + fontSize
          });
          setShowTextInput(true);
        }
      }
      return;
    }
    
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setHasCanvasDrawing(false);
    }
  };

  const addTextToCanvas = () => {
    if (!textInput.trim()) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.font = `${fontSize}px Arial`;
      ctx.fillStyle = brushColor;
      ctx.fillText(textInput, textPosition.x, textPosition.y);
      setHasCanvasDrawing(true);
    }
    
    // Reset text input
    setTextInput("");
    setShowTextInput(false);
  };

  const startDraggingModal = (e: React.MouseEvent) => {
    setIsDraggingModal(true);
    setDragOffset({
      x: e.clientX - modalPosition.x,
      y: e.clientY - modalPosition.y
    });
  };

  const dragModal = (e: React.MouseEvent) => {
    if (!isDraggingModal) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const rect = canvas.getBoundingClientRect();
    setModalPosition({
      x: e.clientX - rect.left - dragOffset.x,
      y: e.clientY - rect.top - dragOffset.y
    });
  };

  const stopDraggingModal = () => {
    setIsDraggingModal(false);
  };

  const startResizing = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsResizing(true);
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: modalSize.width,
      height: modalSize.height
    });
  };

  const resizeModal = (e: React.MouseEvent) => {
    if (!isResizing) return;
    
    const deltaX = e.clientX - resizeStart.x;
    const deltaY = e.clientY - resizeStart.y;
    
    setModalSize({
      width: Math.max(250, resizeStart.width + deltaX),
      height: Math.max(100, resizeStart.height + deltaY)
    });
  };

  const stopResizing = () => {
    setIsResizing(false);
  };

  const handleApplyEdit = async () => {
    console.log('handleApplyEdit called', { 
      hasCanvasDrawing, 
      editPrompt: editPrompt.trim(),
      hasPrompt: !!editPrompt.trim()
    });
    
    // Allow if there's either a prompt or canvas drawing
    if (!editPrompt.trim() && !hasCanvasDrawing) {
      console.log('Blocked: no prompt and no drawing');
      return;
    }

    setIsGenerating(true);
    setError(null);

    try {
      let mergedImageBase64 = null;
      
      // Merge canvas drawing with original image if there are drawings
      const canvas = canvasRef.current;
      const image = imageRef.current;
      
      console.log('Canvas and image refs:', { canvas: !!canvas, image: !!image, hasCanvasDrawing });
      
      if (canvas && image && hasCanvasDrawing) {
        // Create a temporary canvas to merge image + drawings
        const tempCanvas = document.createElement('canvas');
        tempCanvas.width = canvas.width;
        tempCanvas.height = canvas.height;
        const tempCtx = tempCanvas.getContext('2d');
        
        if (tempCtx) {
          // Draw original image
          tempCtx.drawImage(image, 0, 0, canvas.width, canvas.height);
          
          // Draw canvas overlay (drawings/text)
          tempCtx.drawImage(canvas, 0, 0);
          
          // Convert to base64
          mergedImageBase64 = tempCanvas.toDataURL('image/png');
          
          console.log('Merged image created, length:', mergedImageBase64.length);
          
          // Clear canvas after merging
          clearCanvas();
        }
      }

      // If only drawing without prompt, just show the merged image
      if (!editPrompt.trim() && mergedImageBase64) {
        console.log('Only drawing, showing merged image');
        setOriginalImage(mergedImageBase64);
        setIsGenerating(false);
        return;
      }

      // Generate new image with AI
      if (editPrompt.trim()) {
        console.log('Generating with AI...');
        
        // Combine original prompt with edit instructions
        const combinedPrompt = `${originalPrompt}. ${editPrompt}`;

        const requestData: any = {
          prompt: combinedPrompt,
          style: selectedStyle,
        };

        // If we have merged image, send it as base image for editing
        if (mergedImageBase64) {
          requestData.baseImage = mergedImageBase64;
          console.log('Sending base image for editing');
        }

        console.log('Request data:', { ...requestData, baseImage: requestData.baseImage ? 'present' : 'none' });

        const response = await imageApi.generateScene(requestData);

        console.log('Response:', response);

        if (response.success) {
          setEditedImage(response.data.imageUrl);
          setEditPrompt("");
          setHasCanvasDrawing(false);
        }
      }
    } catch (err: any) {
      console.error('Error in handleApplyEdit:', err);
      setError(err.message || "Có lỗi xảy ra khi chỉnh sửa ảnh");
    } finally {
      setIsGenerating(false);
    }
  };

  const handleDownload = (imageUrl: string) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = `edited-${Date.now()}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBackToCreate = () => {
    router.push("/dashboard/create-scene");
  };

  return (
    <DashboardLayout>
      <div className="h-full">
        {/* Header */}
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-slate-900">
              Chỉnh sửa ảnh
            </h2>
            <p className="mt-1 text-sm text-slate-600">
              Mô tả những thay đổi bạn muốn áp dụng
            </p>
          </div>
          <button
            onClick={handleBackToCreate}
            className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Quay lại
          </button>
        </div>

        <div className="flex gap-6">
          {/* Left: Image Display with Toolbar */}
          <div className="flex-1">
            <div className="mb-3">
              <h3 className="text-sm font-medium text-slate-700">
                {editedImage ? "Ảnh đã chỉnh sửa" : "Ảnh gốc"}
              </h3>
            </div>

            {/* Editing Toolbar */}
            <div className="mb-3 rounded-lg border border-slate-200 bg-white px-3 py-2">
              <div className="flex items-center gap-1.5">
                {/* Tool Buttons */}
                {tools.map((tool) => (
                  <button
                    key={tool.id}
                    onClick={() => setSelectedTool(tool.id)}
                    className={`rounded-lg p-1.5 transition-colors ${
                      selectedTool === tool.id
                        ? "bg-amber-100 text-amber-900"
                        : "text-slate-600 hover:bg-slate-100"
                    }`}
                    title={tool.label}
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d={tool.icon} />
                    </svg>
                  </button>
                ))}

                <div className="mx-1 h-5 w-px bg-slate-300"></div>

                {/* Color Picker */}
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-slate-600">Màu</span>
                  <div className="relative">
                    <input
                      type="color"
                      value={brushColor}
                      onChange={(e) => setBrushColor(e.target.value)}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                    />
                    <div 
                      className="h-6 w-6 rounded-full border-2 border-slate-300 cursor-pointer"
                      style={{ backgroundColor: brushColor }}
                    />
                  </div>
                </div>

                {/* Brush Size */}
                <div className="flex items-center gap-1.5">
                  <span className="text-xs text-slate-600">
                    {selectedTool === 'text' ? 'Font' : 'Kích thước'}
                  </span>
                  <input
                    type="range"
                    min={selectedTool === 'text' ? "12" : "1"}
                    max={selectedTool === 'text' ? "72" : "50"}
                    value={selectedTool === 'text' ? fontSize : brushSize}
                    onChange={(e) => {
                      if (selectedTool === 'text') {
                        setFontSize(Number(e.target.value));
                      } else {
                        setBrushSize(Number(e.target.value));
                      }
                    }}
                    className="w-20"
                  />
                  <span className="text-xs text-slate-600 w-7">
                    {selectedTool === 'text' ? `${fontSize}px` : `${brushSize}px`}
                  </span>
                </div>

                <div className="mx-1 h-5 w-px bg-slate-300"></div>

                {/* Undo/Redo */}
                <button
                  className="rounded-lg p-1.5 text-slate-600 transition-colors hover:bg-slate-100"
                  title="Hoàn tác"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                  </svg>
                </button>
                <button
                  className="rounded-lg p-1.5 text-slate-600 transition-colors hover:bg-slate-100"
                  title="Làm lại"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 10h-10a8 8 0 00-8 8v2m18-10l-6 6m6-6l-6-6" />
                  </svg>
                </button>

                <div className="mx-1 h-5 w-px bg-slate-300"></div>

                {/* Additional Actions */}
                <button
                  className="rounded-lg p-1.5 text-slate-600 transition-colors hover:bg-slate-100"
                  title="Lưu"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                  </svg>
                </button>
                <button
                  className="rounded-lg p-1.5 text-slate-600 transition-colors hover:bg-slate-100"
                  title="Xuất"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                  </svg>
                </button>
                <button
                  className="rounded-lg p-1.5 text-slate-600 transition-colors hover:bg-slate-100"
                  title="Chia sẻ"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>

                <div className="mx-1 h-5 w-px bg-slate-300"></div>

                {/* Clear All */}
                <button
                  onClick={clearCanvas}
                  className="rounded-lg p-1.5 text-red-600 transition-colors hover:bg-red-50"
                  title="Xóa tất cả"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Image Canvas */}
            <div className="rounded-lg border-2 border-slate-200 bg-slate-50 p-4">
              {isGenerating ? (
                <div className="flex h-[400px] items-center justify-center">
                  <div className="text-center">
                    <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-slate-300 border-t-slate-900"></div>
                    <p className="mt-4 text-sm text-slate-600">
                      Đang chỉnh sửa ảnh...
                    </p>
                  </div>
                </div>
              ) : (editedImage || originalImage) ? (
                <div className="relative w-full">
                  <img
                    ref={imageRef}
                    src={editedImage || originalImage}
                    alt="Image"
                    className="w-full rounded-lg block"
                    onLoad={() => {
                      // Update canvas size when image loads
                      if (canvasRef.current && imageRef.current) {
                        const img = imageRef.current;
                        canvasRef.current.width = img.naturalWidth;
                        canvasRef.current.height = img.naturalHeight;
                      }
                    }}
                  />
                  {/* Canvas overlay for drawing - must cover entire image */}
                  <canvas
                    ref={canvasRef}
                    onMouseDown={startDrawing}
                    onMouseMove={(e) => {
                      draw(e);
                      if (!isDrawingTextBox) {
                        dragModal(e);
                        resizeModal(e);
                      }
                    }}
                    onMouseUp={() => {
                      stopDrawing();
                      stopDraggingModal();
                      stopResizing();
                    }}
                    onMouseLeave={() => {
                      stopDrawing();
                      stopDraggingModal();
                      stopResizing();
                    }}
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    style={{ 
                      cursor: selectedTool === 'draw' ? 'crosshair' : selectedTool === 'text' ? 'text' : 'default',
                      pointerEvents: selectedTool !== 'select' ? 'auto' : 'none'
                    }}
                  />
                  
                  {/* Text Box Preview while dragging */}
                  {isDrawingTextBox && (
                    <div
                      className="absolute border-2 border-dashed border-slate-900 bg-slate-100/30 pointer-events-none"
                      style={{
                        left: `${Math.min(textBoxStart.x, textBoxEnd.x) * (imageRef.current?.getBoundingClientRect().width || 1) / (canvasRef.current?.width || 1)}px`,
                        top: `${Math.min(textBoxStart.y, textBoxEnd.y) * (imageRef.current?.getBoundingClientRect().height || 1) / (canvasRef.current?.height || 1)}px`,
                        width: `${Math.abs(textBoxEnd.x - textBoxStart.x) * (imageRef.current?.getBoundingClientRect().width || 1) / (canvasRef.current?.width || 1)}px`,
                        height: `${Math.abs(textBoxEnd.y - textBoxStart.y) * (imageRef.current?.getBoundingClientRect().height || 1) / (canvasRef.current?.height || 1)}px`,
                      }}
                    />
                  )}
                  
                  {/* Text Input Modal - Simple & Basic */}
                  {showTextInput && (
                    <div 
                      className="absolute z-10 bg-white border border-slate-400 shadow-sm"
                      style={{
                        left: `${modalPosition.x}px`,
                        top: `${modalPosition.y}px`,
                        width: `${modalSize.width}px`,
                        height: `${modalSize.height}px`,
                      }}
                    >
                      <textarea
                        value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            if (textInput.trim()) {
                              addTextToCanvas();
                            } else {
                              setShowTextInput(false);
                            }
                          }
                          if (e.key === 'Escape') {
                            setShowTextInput(false);
                            setTextInput("");
                          }
                        }}
                        onBlur={() => {
                          if (textInput.trim()) {
                            addTextToCanvas();
                          } else {
                            setShowTextInput(false);
                          }
                        }}
                        placeholder=""
                        autoFocus
                        className="w-full h-full p-1 text-sm resize-none border-none outline-none"
                        style={{
                          fontSize: `${fontSize}px`,
                          color: brushColor,
                          fontFamily: 'Arial, sans-serif'
                        }}
                      />
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex h-[400px] items-center justify-center">
                  <p className="text-sm text-slate-600">Đang tải ảnh...</p>
                </div>
              )}
            </div>
            
            {/* Action buttons below image */}
            {(editedImage || originalImage) && !isGenerating && (
              <div className="mt-4 flex justify-center gap-3">
                <button
                  onClick={() => handleDownload(editedImage || originalImage)}
                  className="flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-slate-50"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                    />
                  </svg>
                  Tải xuống
                </button>
                
                {editedImage && (
                  <button
                    onClick={() => {
                      setOriginalImage(editedImage);
                      setEditedImage(null);
                      setEditPrompt("");
                    }}
                    className="flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-800"
                  >
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    Chấp nhận
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Right: Edit Controls */}
          <div className="w-96 flex-shrink-0 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Prompt gốc
              </label>
              <div className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-2.5">
                <p className="text-sm text-slate-600">{originalPrompt}</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Mô tả chỉnh sửa
              </label>
              <textarea
                value={editPrompt}
                onChange={(e) => setEditPrompt(e.target.value)}
                placeholder="Ví dụ: Thêm mặt trời lặn, đổi màu trời thành tím, thêm người đi bộ..."
                rows={8}
                maxLength={300}
                className="block w-full rounded-lg border border-slate-300 px-3 py-2.5 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              />
              <p className="mt-2 text-xs text-slate-500">
                {editPrompt.length}/300 ký tự
              </p>
            </div>

            {error && (
              <div className="rounded-lg bg-red-50 border border-red-200 px-3 py-2">
                <p className="text-sm text-red-600">{error}</p>
              </div>
            )}

            <button
              onClick={handleApplyEdit}
              disabled={(!editPrompt.trim() && !hasCanvasDrawing) || isGenerating}
              className="w-full rounded-lg bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-50"
              title={`Debug: hasCanvasDrawing=${hasCanvasDrawing}, editPrompt="${editPrompt}"`}
            >
              {isGenerating ? "Đang xử lý..." : "Áp dụng chỉnh sửa"}
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
