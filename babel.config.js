module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
};
  plugins: [
    // require('path').resolve(__dirname, '../../docusaurus-search-local'),
    require.resolve('@cmfcmf/docusaurus-search-local')
  ]
};
