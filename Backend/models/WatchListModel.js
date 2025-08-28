const mongoose = require("mongoose");
const { WatchListSchema } = require("../schemas/WatchListScema");

const WatchListModel = new mongoose.model("watchlist", WatchListSchema);

module.exports = { WatchListModel };
