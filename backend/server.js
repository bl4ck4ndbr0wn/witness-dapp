require("dotenv").config();
const app = require("express")();
const cors = require("cors");
const demux = require("./demux");
const io = require("./utils/io");
const witnessRoutes = require("./api/witness/witness.route");

app.use(cors());

app.use("/witness", witnessRoutes);

const port = process.env.PORT;

const server = app.listen(port, () =>
  console.info(`Witness Dapp listening on port ${process.env.PORT}!`)
);

io.connect(server);

demux.watch();
