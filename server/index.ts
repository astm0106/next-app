import express, { Request, Response } from "express";
import next from "next";
 
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;
 
app.prepare().then(() => {
	const server = express();

	server.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
	  });

	server.all("*", (req: Request, res: Response) => {
		return handle(req, res);
	});
	server.listen(port, (err?: any) => {
		if (err) throw err;
		console.log(
                      `> Ready on localhost:${port} - env ${process.env.NODE_ENV}`
                );
	});
});