const {defineConfig} = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,
    rules: [
        {
            test: /.s[a|c]ss$/,
            loader: 'style!css!sass'
        }
    ]
});
