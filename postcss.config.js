const cssnano = require('cssnano');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');

module.exports = {
    plugins: [
        cssnano({
            preset: 'default',
        }),
        postcssPresetEnv({ stage: 1 }),
        postcssImport
    ],
};