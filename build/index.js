"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const server = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
server.use(express_1.default.urlencoded({ extended: true }));
server.use((0, cors_1.default)({ origin: "*" }));
server.use((0, morgan_1.default)("combined"));
server.get("/", (req, res) => {
    res.send("Hello");
});
server.listen(PORT, () => console.log("starting on ", PORT));
