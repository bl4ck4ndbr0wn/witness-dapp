import "dotenv/config";
import express from "express";
import cors from "cors";
import demux from "./services/demux";
import io from "./utils/io";

let app = express();

app.use(cors());

// app.use("/witness", witnessRoutes);

const port = process.env.PORT;

const server = app.listen(process.env.PORT, () =>
  console.info(`Witness.io dapp listening on port ${process.env.PORT}!`)
);

io.connect(server);

demux.watch();
