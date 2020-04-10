module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
        modules: "commonjs",
      },
    ],
    "@babel/preset-react",
  ],
  plugins: [
    "@babel/plugin-transform-runtime",
    "@babel/plugin-proposal-class-properties",
    "@babel/plugin-transform-react-constant-elements",
    "transform-react-remove-prop-types",
    "@babel/plugin-transform-modules-commonjs",
  ],
};
