'use strict';
module.exports = appInfo  => {
  const config = exports = {};
  config.keys = appInfo.name + '_1548510789616_3824';

  exports.io = {
    init: { },
    namespace: {
      '/': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
      '/example': {
        connectionMiddleware: [],
        packetMiddleware: [],
      },
    },
  };
  return config;
}
