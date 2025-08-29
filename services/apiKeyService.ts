
const LOCAL_API_KEY_STORAGE_KEY = 'scriptgen_gemini_api_key';

class ApiKeyService {
    async getApiKey(): Promise<string | null> {
        return localStorage.getItem(LOCAL_API_KEY_STORAGE_KEY);
    }

    async saveApiKey(key: string): Promise<void> {
        localStorage.setItem(LOCAL_API_KEY_STORAGE_KEY, key);
    }
    
    async clearApiKey(): Promise<void> {
        localStorage.removeItem(LOCAL_API_KEY_STORAGE_KEY);
    }
}

export const apiKeyService = new ApiKeyService();