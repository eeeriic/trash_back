const readItems = require("../prep/filter");

// just to check if filter.js is doing its job

(async () => {
    const { primes, prime_sets, weapons, weapon_sets, companions, companion_sets, arcanes } = await readItems();
    console.log("primes: ", primes.length)
    console.log("set: ", prime_sets.length)
    console.log("weapon: ", weapons.length)
    console.log("set: ", weapon_sets.length)
    console.log("companion: ", companions.length)
    console.log("set: ", companion_sets.length)
    console.log("arcanes: ", arcanes.length)
})();
