import { places } from "../data/places.mjs";

const showHere = document.querySelector("#allplaces");

function displayItems(items) {
    items.forEach(x => {
        const thecard = document.createElement('section');
        thecard.className = "discover-card";

        const thetitle = document.createElement('h2');
        thetitle.textContent = x.name;

        const thefigure = document.createElement('figure');
        const thephoto = document.createElement('img');
        thephoto.src = `images/${x.photo_url}`;
        thephoto.alt = x.name;
        thephoto.loading = "lazy"; 
        thephoto.width = 300;
        thephoto.height = 200;
        thefigure.appendChild(thephoto);

        const theaddress = document.createElement('address');
        theaddress.textContent = x.address;

        const thedesc = document.createElement('p');
        thedesc.innerHTML = `${x.description} <br><br> <span class="emphasis-cost">Cost: ${x.cost}</span>`;

        const thelearn = document.createElement('button');
        thelearn.textContent = "Learn More";

        thecard.appendChild(thetitle);
        thecard.appendChild(thefigure);
        thecard.appendChild(theaddress);
        thecard.appendChild(thedesc);
        thecard.appendChild(thelearn);

        showHere.appendChild(thecard);
    });
}

displayItems(places);