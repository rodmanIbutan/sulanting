module.exports = {
	publicPath: './',
	publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
	assetsDir: 'static',
	outputDir: "sulanting",
	indexPath: 'index.html',
	lintOnSave: false,
	parallel: false,
}
