const urlUtils = {
  getBaseUrl: () => {
    const isDev = process.env.NODE_ENV === 'development';
    return isDev ? '' : (process.env.PUBLIC_URL || '');
  },

  getContentUrl: (type, filename) => {
    const baseUrl = urlUtils.getBaseUrl();
    return `${baseUrl}/${type}/${filename}`.replace(/\/+/g, '/');
  },

  getIndexUrl: (type) => {
    const baseUrl = urlUtils.getBaseUrl();
    return `${baseUrl}/${type}/index.json`.replace(/\/+/g, '/');
  }
};

export default urlUtils; 