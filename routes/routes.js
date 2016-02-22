

var appRouter = function(app) {

	app.get("/api/whoami", function(req, res) {

		var ipaddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
		//console.log(ipaddress);

		var language = req.acceptsLanguages()[0];
		//console.log(language);


		var rgx = /\(([^)]+)\)/;
		var useragent = req.headers['user-agent'];
		var match = useragent.match(rgx);
		var os = match && match[1];
		//console.log(os);

		res.json({"ipaddress":ipaddress, "language":language, "software":os});
	});
}

module.exports = appRouter;
