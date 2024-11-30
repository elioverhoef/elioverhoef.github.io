const logger = {
  getLogger: (name) => ({
    info: (...args) => console.log(`[${name}]`, ...args),
    error: (...args) => console.error(`[${name}]`, ...args),
    warn: (...args) => console.warn(`[${name}]`, ...args),
  })
};

export default logger; 