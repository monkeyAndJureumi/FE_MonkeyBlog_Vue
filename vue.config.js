module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
			@import "@/style/main.scss";
                `
            }
        }
    }
};
