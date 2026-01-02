const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

export interface LoginData {
  email: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  fullName: string;
  phone: string;
}

export interface AuthResponse {
  _id: string;
  username: string;
  email: string;
  fullName?: string;
  phone?: string;
  address?: string;
  dateOfBirth?: string;
  role: string;
  token: string;
}

// Helper function to parse JSON response safely
const parseJSONResponse = async (response: Response) => {
  const contentType = response.headers.get('content-type');
  if (contentType && contentType.includes('application/json')) {
    return await response.json();
  } else {
    const text = await response.text();
    throw new Error(`Server returned non-JSON response: ${text.substring(0, 100)}`);
  }
};

export const authApi = {
  async login(data: LoginData): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await parseJSONResponse(response);

      if (!response.ok) {
        throw new Error(result.message || 'Login failed');
      }

      return result;
    } catch (error: any) {
      if (error.message.includes('non-JSON')) {
        throw new Error('Không thể kết nối đến server. Vui lòng kiểm tra server có đang chạy không.');
      }
      throw error;
    }
  },

  async register(data: RegisterData): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await parseJSONResponse(response);

      if (!response.ok) {
        throw new Error(result.message || 'Registration failed');
      }

      return result;
    } catch (error: any) {
      if (error.message.includes('non-JSON')) {
        throw new Error('Không thể kết nối đến server. Vui lòng kiểm tra server có đang chạy không.');
      }
      throw error;
    }
  },

  async getMe(token: string): Promise<AuthResponse> {
    try {
      const response = await fetch(`${API_URL}/auth/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await parseJSONResponse(response);

      if (!response.ok) {
        throw new Error(result.message || 'Failed to get user data');
      }

      return result;
    } catch (error: any) {
      if (error.message.includes('non-JSON')) {
        throw new Error('Không thể kết nối đến server. Vui lòng kiểm tra server có đang chạy không.');
      }
      throw error;
    }
  },
};

export const setAuthToken = (token: string) => {
  localStorage.setItem('token', token);
};

export const getAuthToken = (): string | null => {
  return localStorage.getItem('token');
};

export const removeAuthToken = () => {
  localStorage.removeItem('token');
};

export const setUserData = (user: AuthResponse) => {
  localStorage.setItem('user', JSON.stringify(user));
};

export const getUserData = (): AuthResponse | null => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const removeUserData = () => {
  localStorage.removeItem('user');
};

export const logout = () => {
  removeAuthToken();
  removeUserData();
};

// Image Generation API
export interface GenerateSceneData {
  prompt: string;
  style: string;
  baseImage?: string; // Optional base64 image for editing
}

export interface SceneResponse {
  success: boolean;
  data: {
    _id: string;
    user: string;
    prompt: string;
    style: string;
    imageUrl: string;
    status: string;
    isFavorite: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export const imageApi = {
  async generateScene(data: GenerateSceneData): Promise<SceneResponse> {
    const token = getAuthToken();
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${API_URL}/images/generate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to generate scene');
    }

    return response.json();
  },

  // Edit image with base image and edit prompt
  async editImage(data: { baseImage?: string; baseImageUrl?: string; originalPrompt: string; editPrompt: string; style?: string }): Promise<SceneResponse> {
    const token = getAuthToken();
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    try {
      const response = await fetch(`${API_URL}/images/edit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      const result = await parseJSONResponse(response);

      if (!response.ok) {
        const error: any = new Error(result.message || 'Failed to edit image');
        error.response = { data: result };
        throw error;
      }

      return result;
    } catch (error: any) {
      if (error.message && error.message.includes('non-JSON')) {
        throw new Error('Không thể kết nối đến server. Vui lòng kiểm tra server có đang chạy không.');
      }
      throw error;
    }
  },

  // All image generation types use the same endpoint
  async changeOutfit(data: GenerateSceneData): Promise<SceneResponse> {
    return this.generateScene(data);
  },

  async changeHairstyle(data: GenerateSceneData): Promise<SceneResponse> {
    return this.generateScene(data);
  },

  async generateGraduation(data: { personImage: string; outfitImage: string; schoolId: string }): Promise<SceneResponse> {
    const token = getAuthToken();
    if (!token) throw new Error('No authentication token found');

    const response = await fetch(`${API_URL}/graduation`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to generate graduation photo');
    }
    return response.json();
  },

  async enhanceImage(data: { baseImage: string; prompt?: string; enhanceLevel?: string }): Promise<SceneResponse> {
    const token = getAuthToken();
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${API_URL}/enhance`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to enhance image');
    }

    return response.json();
  },

  async removeBackground(data: { baseImage: string }): Promise<SceneResponse> {
    const token = getAuthToken();
    if (!token) throw new Error('No authentication token found');

    const response = await fetch(`${API_URL}/remove-bg`, {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
        Authorization: `Bearer ${token}` 
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to remove background');
    }
    return response.json();
  },

  async getTrending(): Promise<{ success: boolean; count: number; data: any[] }> {
    const response = await fetch(`${API_URL}/images/trending`);

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to fetch trending');
    }
    return response.json();
  },

  async getUserScenes(): Promise<{ success: boolean; count: number; data: any[] }> {
    const token = getAuthToken();
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${API_URL}/images/scenes`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch scenes');
    }

    return response.json();
  },

  async deleteScene(id: string): Promise<{ success: boolean; message: string }> {
    const token = getAuthToken();
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${API_URL}/images/scenes/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete scene');
    }

    return response.json();
  },

  async toggleFavorite(id: string): Promise<SceneResponse> {
    const token = getAuthToken();
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${API_URL}/images/scenes/${id}/favorite`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to toggle favorite');
    }

    return response.json();
  },
};


// Hairstyle Prompt API
export const hairstylePromptApi = {
  async getAll(): Promise<{ success: boolean; count: number; data: any[] }> {
    const response = await fetch(`${API_URL}/prompts/hairstyle`);

    if (!response.ok) {
      throw new Error('Failed to fetch hairstyle prompts');
    }

    return response.json();
  },

  async getById(id: string): Promise<{ success: boolean; data: any }> {
    const response = await fetch(`${API_URL}/prompts/hairstyle/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch hairstyle prompt');
    }

    return response.json();
  },

  async create(data: { name: string; prompt: string; thumbnail?: string; isActive: boolean }): Promise<{ success: boolean; data: any }> {
    const token = getAuthToken();
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${API_URL}/prompts/hairstyle`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create prompt');
    }

    return response.json();
  },

  async update(id: string, data: { name: string; prompt: string; thumbnail?: string; isActive: boolean }): Promise<{ success: boolean; data: any }> {
    const token = getAuthToken();
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${API_URL}/prompts/hairstyle/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to update prompt');
    }

    return response.json();
  },

  async delete(id: string): Promise<{ success: boolean; message: string }> {
    const token = getAuthToken();
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${API_URL}/prompts/hairstyle/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete prompt');
    }

    return response.json();
  },

  async toggle(id: string): Promise<{ success: boolean; data: any }> {
    const token = getAuthToken();
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${API_URL}/prompts/hairstyle/${id}/toggle`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to toggle prompt');
    }

    return response.json();
  },
};


// School API
export const schoolApi = {
  async getAll(): Promise<{ success: boolean; count: number; data: any[] }> {
    const response = await fetch(`${API_URL}/schools`);

    if (!response.ok) {
      throw new Error('Failed to fetch schools');
    }

    return response.json();
  },

  async getById(id: string): Promise<{ success: boolean; data: any }> {
    const response = await fetch(`${API_URL}/schools/${id}`);

    if (!response.ok) {
      throw new Error('Failed to fetch school');
    }

    return response.json();
  },

  async create(data: { name: string; shortName?: string; logo?: string; gownColor?: string; isActive: boolean }): Promise<{ success: boolean; data: any }> {
    const token = getAuthToken();
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${API_URL}/schools`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to create school');
    }

    return response.json();
  },

  async update(id: string, data: any): Promise<{ success: boolean; data: any }> {
    const token = getAuthToken();
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${API_URL}/schools/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to update school');
    }

    return response.json();
  },

  async delete(id: string): Promise<{ success: boolean; message: string }> {
    const token = getAuthToken();
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${API_URL}/schools/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete school');
    }

    return response.json();
  },

  async toggle(id: string): Promise<{ success: boolean; data: any }> {
    const token = getAuthToken();
    
    if (!token) {
      throw new Error('No authentication token found');
    }

    const response = await fetch(`${API_URL}/schools/${id}/toggle`, {
      method: 'PUT',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to toggle school');
    }

    return response.json();
  },
};
