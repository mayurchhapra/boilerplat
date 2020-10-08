// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
require('@babel/register')({
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        corejs: 3, // or 2,
        targets: {
          firefox: '64', // or whatever target to choose .
        },
      },
    ],
  ],
});

// Import the rest of our application.
module.exports = require('./src/bin/www');
