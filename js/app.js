import data from '../data/pokedb.json' assert { type: 'json' };

const tabsContainer = document.querySelector(".tabs");
var types = ['All'];

data.cards.forEach((result) => {
    for (let i=0; i<result.type.length;i++) {
        if(!types.includes(result.type[i])) {
            types.push(result.type[i]);
        }
    }
});

types.forEach(element => {
  if (element == 'All') {
    const tabsContent = `
        <li class="active" data-tabs="${element}">${element}</li>
    `;
    tabsContainer.innerHTML += tabsContent;
  } else {
    const tabsContent = `
        <li data-tabs="${element}">${element}</li>
    `;
    tabsContainer.innerHTML += tabsContent;
  }
});

const container = document.getElementById('cards_shop');

data.cards.forEach((result, idx) => {

    var pokeTypes = '';
    result.type.forEach(typeName => {
        pokeTypes += (pokeTypes != '' ? ' ' : '') + typeName;
    });
    
    const content = `
    <div class="card ${pokeTypes}">
        <div class="card_header" id="heading-${idx}">
            <p><b>${result.name}</b></p>
            <button class="heart__btn"><i class="fa-regular fa-heart fa-xl"></i></button>
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
    container.innerHTML += content;

});

var tabs = document.querySelectorAll(".tabs li");
var all = document.querySelectorAll(".card");

tabs.forEach((tab)=>{
  tab.addEventListener("click", ()=>{
    tabs.forEach((tab)=>{
      tab.classList.remove("active");
    })
    tab.classList.add("active");
    var tabval = tab.getAttribute("data-tabs");

    if (tabval == "All") {
      all.forEach((item)=>{
        item.style.display = "block";
      })
    } else {
      all.forEach((item)=>{
        item.style.display = "none";
      });
    }
    
    var typeCards = document.querySelectorAll("."+tabval);

    typeCards.forEach((card) => {
      card.style.display = "block";
    });
  })
});
