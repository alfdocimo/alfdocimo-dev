module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/tools/assetsTransformer.js",
    "\\.(css|less)$": "<rootDir>/tools/assetsTransformer.js",
  },
  testPathIgnorePatterns: ["<rootDir>/cypress/integration"],
  setupFiles: ["raf/polyfill"],
  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(react-router-transition)/)",
  ],
};
