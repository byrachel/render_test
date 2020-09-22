const proxy = require("http-proxy-middleware");
module.exports = function (app) {
	app.use(proxy("/api", { secure: false, target: "http://31.169.42.218:5001" }));
	app.use(
		proxy("/storages", { secure: false, target: "http://31.169.42.218:5001" })
	);
	app.use(
		proxy("/socket", {
			secure: false,
			ws: true,
			target: "http://31.169.42.218:5001"
		})
	);
};
