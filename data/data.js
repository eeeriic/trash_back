const download = require("../prep/download");
const filter = require("../prep/filter");

async function data() {
    await download();   // waits until finished
    await filter();     // runs only after download completes
}

data();
