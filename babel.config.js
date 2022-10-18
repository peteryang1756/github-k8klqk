module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
};
plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
      },
    ],
  ],
};
