const fs = require("fs/promises")
const prep = require("../prices/prep.js")
const getPrice = require("../prices/getPrice.js")

async function price() {
    const sluggage = await prep()
    const prices = {}
    for (const [cat, slugs] of Object.entries(sluggage.warframe_parts)) {
        
        try {
            const plat = await getPrice(slugs)
            prices[slugs] = plat
        } catch(err) {
            console.log(err)
            prices[slugs] = null
        }
    }
    
    await fs.writeFile(
        `./pricesData/warframe_parts.json`, // hardcoded but what can i do
        JSON.stringify(prices, null, 2)
    )
}

price()