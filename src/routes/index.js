/**
 * Author: Mayur
 */

import connection from './v1/connection';
import whiteboard from './v1/whiteboard';

const defineRoute = (application, versionTag, controllers) => {
  const versionPath = versionTag ? `/${versionTag}/` : `/`;
  for (const controller in controllers) {
    const path = versionPath + controller;
    console.log('Routes: ', path);
    application.use(path, controllers[controller]);
  }
};

module.exports = (app) => {
  defineRoute(app, 'v1', {
    connection,
    whiteboard,
  });
};
