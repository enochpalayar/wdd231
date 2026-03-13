const url = "data/members.json";
const membersContainer = document.querySelector("#members");
const btnGrid = document.querySelector("#btnGrid");
const btnList = document.querySelector("#btnList");

async function getMembers() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayMembers(data.companies);
    } catch (error) {
        console.error("Error fetching member data:", error);
    }
}

const displayMembers = (members) => {
    membersContainer.innerHTML = "";

    members.forEach((member) => {
        let section = document.createElement("section");
        
        let logo = document.createElement("img");
        let name = document.createElement("h3");
        let address = document.createElement("p");
        let phone = document.createElement("p");
        let website = document.createElement("a");
        let level = document.createElement("p"); 
        name.textContent = member.name;
        address.textContent = member.address;
        phone.textContent = member.phone_number;
        
        website.textContent = "Website"; 
        website.setAttribute("href", member.website);
        website.setAttribute("target", "_blank");

        logo.setAttribute("src", `images/${member.imageurl}`);
        logo.setAttribute("alt", `${member.name} logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "200");
        logo.setAttribute("height", "150");
        

        level.className = "membership-level";
        level.textContent = `Level – ${member.level}`;

        section.appendChild(logo);
        section.appendChild(name);
        section.appendChild(address);
        section.appendChild(phone);
        section.appendChild(website);
        section.appendChild(level);

        membersContainer.appendChild(section);
    });
}

btnGrid.addEventListener("click", () => {
    membersContainer.className = "grid";
    btnGrid.classList.add("active");
    btnList.classList.remove("active");
});

btnList.addEventListener("click", () => {
    membersContainer.className = "list";
    btnList.classList.add("active");
    btnGrid.classList.remove("active");
});

getMembers();

