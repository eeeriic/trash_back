const fs = require("fs/promises")

async function main() {
    const raw = await fs.readFile("./data/categories.json", "utf-8");
    const data = JSON.parse(raw);
    const arcanes_r5 = data.arcanes
        .filter(i => i.maxRank === 5)
        .map(i => i.slug);

    console.log(arcanes_r5);
}

main()