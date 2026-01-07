const fs = require("fs/promises")
const getPriceArcane = require("../prices/getPriceArcane.js")

async function price() {
    const prices = {}
    for (const [cat, slugs] of Object.entries(sluggage.arcanes)) {
        
        try {
            const plat = await getPriceArcane(slugs)
            prices[slugs] = plat
        } catch(err) {
            console.log(err)
            console.log(slugs)
            prices[slugs] = null
        }
    }
    
    await fs.writeFile(
        `./pricesData/arcanes.json`, // hardcoded but what can i do
        JSON.stringify(prices, null, 2)
    )
}

price()