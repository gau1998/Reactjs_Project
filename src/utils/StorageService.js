class StorageService {
  getAuthToken() {
    return window.localStorage.getItem('authToken');
  }
  setAuthToken(token) {
    return window.localStorage.setItem('authToken', token);
  }
}
export const storageService = new StorageService();
