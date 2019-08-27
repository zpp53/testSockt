module.exports = app => {
  const { router, controller, io } = app;
  router.get('/', controller.home.index);
  router.get('/server-config', controller.home.serverConfig);
  io.of('/').route('request', io.controller.nsp.index);
};