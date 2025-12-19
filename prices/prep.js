const fs = require("fs/promises");

async function prep() {
    // read the categories.json file
    const raw = await fs.readFile("./data/categories.json", "utf-8");
    const data = JSON.parse(raw);

    // get only the names of the items and separate by key inside the slugs obj
    const slugs = {
        primes: data.primes.map(i => i.slug),
        prime_sets: data.prime_sets.map(i => i.slug),
        weapons: data.weapons.map(i => i.slug),
        weapon_sets: data.weapon_sets.map(i => i.slug),
        companions: data.companions.map(i => i.slug),
        companion_sets: data.companion_sets.map(i => i.slug),
        arcanes: data.arcanes.map(i => i.slug),
    };

    return slugs
}

module.exports = prep;
