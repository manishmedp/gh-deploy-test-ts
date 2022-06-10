import express from "express";
import cors from "cors";
import morgan from "morgan";

const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.urlencoded({ extended: true }));
server.use(cors({ origin: "*" }));
server.use(morgan("combined"));

server.get("/", (req: express.Request, res: express.Response) => {
  res.send("Hello");
});

server.listen(PORT, () => console.log("starting on ", PORT));
