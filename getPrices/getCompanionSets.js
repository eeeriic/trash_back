const fs = require("fs/promises")
const prep = require("../prices/prep.js")
const getPrice = require("../prices/getPrice.js")

async function price() {
    const sluggage = await prep()
    const prices = {}
    for (const [cat, slugs] of Object.entries(sluggage.companion_sets)) {
        
        try {
            const plat = await getPrice(slugs)
            prices[slugs] = plat
        } catch(err) {
            console.log(err)
            prices[slugs] = null
        }
    }
    
    await fs.writeFile(
        `./pricesData/companion_sets.json`, // hardcoded but what can i do
        JSON.stringify(prices, null, 2)
    )
}

price()