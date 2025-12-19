const fs = require("fs/promises")
const prep = require("./prep.js")
const getPrice = require("./getPrice")

async function price() {
    const sluggage = await prep()
    for (const [cat, slugs] of Object.entries(sluggage)) {
        const prices = {}

        for (const slug of slugs) {
            try {
                const plat = await getPrice(slug)
                prices[slug] = plat
            } catch(err) {
                console.log(err)
                prices[slug] = null
            }
        }

        await fs.writeFile(
            `./pricesData/${cat}.json`,
            JSON.stringify(prices, null, 2)
        )
    }
}

price()