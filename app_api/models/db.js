const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const mongoDB = "mongodb+srv://jasonkitamirike:S9pMc2XtReILOQwg@cluster0.tk0ud.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
}

require('./lodges');