const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { /* настройки переменных LESS, если необходимо */ },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
