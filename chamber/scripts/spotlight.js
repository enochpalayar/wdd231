const spotlightContainer = document.querySelector('#spotlight');
const path = "data/members.json";

async function getSpotlights() {
    try {
        const response = await fetch(path);
        const data = await response.json();
        const vipMembers = data.companies.filter(member => member.level > 1);  
        displaySpotlights(vipMembers);
    } catch (error) {
        console.error(error);
    }
}

const displaySpotlights = (members) => {
    spotlightContainer.innerHTML = ""; 
    const shuffled = members.sort(() => 0.5 - Math.random()).slice(0, 3);

    shuffled.forEach(member => {
        const section = document.createElement('section');
        section.className = "spotlight-card";

        const title = document.createElement('h3');
        title.textContent = member.name;

        const bodyDiv = document.createElement('div');
        bodyDiv.className = "card-body";

        const logo = document.createElement('img');
        logo.setAttribute('src', `images/${member.imageurl}`);
        logo.setAttribute('alt', `${member.name} Logo`);
        logo.setAttribute('loading', 'lazy');

        const infoDiv = document.createElement('div');
        infoDiv.className = "card-info";

        const addr = document.createElement('p');
        addr.innerHTML = `<strong>ADDRESS:</strong> ${member.address}`;
        
        const phone = document.createElement('p');
        phone.innerHTML = `<strong>PHONE:</strong> ${member.phone_number}`;

        const urlP = document.createElement('p');
        urlP.innerHTML = `<strong>URL:</strong> `;
        
        const link = document.createElement('a');
        link.textContent = "Visit Website";
        link.setAttribute('href', member.website);
        link.setAttribute('target', '_blank');
        
        urlP.appendChild(link);

        infoDiv.appendChild(addr);
        infoDiv.appendChild(phone);
        infoDiv.appendChild(urlP);
        
        bodyDiv.appendChild(logo);
        bodyDiv.appendChild(infoDiv);
        
        section.appendChild(title);
        section.appendChild(bodyDiv);
        
        spotlightContainer.appendChild(section);
    });
}

getSpotlights();