Package.describe({
  name: "contains plugin",
  summary: "contains a plugin",
  version: "1.1.0"
});

Package._transitional_registerBuildPlugin({
  name: "myPlugin",
  use: [],
  sources: [
    'plugin/plugin.js'
  ],
});
