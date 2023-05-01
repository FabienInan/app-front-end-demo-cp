module.exports = function override(config) {
  config.optimization.runtimeChunk = true;
  config.optimization.splitChunks = {
    maxSize: 5000000
  };
  return config;
};