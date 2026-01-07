async function main() {
    const res = await fetch(
    `https://api.warframe.market/v2/orders/item/wyrm_prime_blueprint/top`
    );
    const json = await res.json()
    console.log(json)
    const sell = json.data.sell
}

main()