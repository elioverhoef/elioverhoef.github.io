const urlUtils = {
  getBaseUrl: () => '',

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