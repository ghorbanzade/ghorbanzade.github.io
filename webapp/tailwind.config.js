module.exports = (isProd) => ({
  prefix: '',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  },
  purge: {
    enabled: isProd,
    content: ['./src/**/*.html', './src/**/*.ts']
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: []
});
