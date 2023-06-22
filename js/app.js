import data from '../data/pokedb.json' assert { type: 'json' };

const container = document.getElementById('cards_shop');

data.cards.forEach((result, idx) => {

    // Construct card content
    const content = `
    <div class="card">
        <div class="card_header" id="heading-${idx}">
            <p><b>${result.name}</b></p>
            <button class="simple__btn heart__btn"><i class="fa-regular fa-heart fa-xl"></i></button>
        </div>
        <figure>
            <img src="${result.cardImage}" alt="dog">
        </figure>
        <div class="card_footer">
            <p><b>Power level: ${result.powerLevel}</b></p>
            <button class="blue__btn">Buy</button>
        </div>
    </div>
    `;
    // Append newyly created card element to the container
    container.innerHTML += content;

})