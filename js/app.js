import data from "./data.js";
import dom from "./dom.js"

const lugares = dom.$('#lugares')

const datos = await data.getData()

datos.forEach(element => {
    const card = dom.nCards(element);

    lugares.appendChild(card);
});

