const urlUtils = {
  getContentUrl: (type, filename) => {
    return `/${type}/${filename}`.replace(/\/+/g, '/');
  },

  getIndexUrl: (type) => {
    return `/${type}/index.json`.replace(/\/+/g, '/');
  }
};

export default urlUtils; 