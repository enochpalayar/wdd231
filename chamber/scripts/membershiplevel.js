const mlModal = document.querySelector('#mlModal');
const closeModal = document.querySelector('#closeModal');
const mltitle = document.querySelector('#mltitle');
const mldetails = document.querySelector('#mldetails');

const membershipBenefits = {
    'np': {
        name: "Community Advocate (Non-Profit)",
        price: "Free for Registered NGOs",
        perks: ["Logo on 'Community Partners' page", "Access to Chamber networking mixer", "Quarterly advocacy newsletter"]
    },
    'bronze': {
        name: "Business Starter (Bronze)",
        price: "₱1,200 / Year",
        perks: ["Standard Directory listing", "Chamber window decal", "Invitation to Ribbon Cutting events"]
    },
    'silver': {
        name: "Growth Partner (Silver)",
        price: "₱3,500 / Year",
        perks: ["Enhanced Directory listing with photos", "2 Social Media spotlights per year", "Member-to-Member discount program"]
    },
    'gold': {
        name: "Executive Leader (Gold)",
        price: "₱7,500 / Year",
        perks: ["Homepage 'Featured Member' spotlight", "VIP table at Annual Business Awards", "Speaking opportunities at workshops", "Unlimited job postings"]
    }
};

function showBenefits(level) {
    const data = membershipBenefits[level];
    mltitle.innerHTML = data.name;
    mldetails.innerHTML = `
        <p>Investment: <strong>${data.price}</strong></p>
        <hr>
        <ul>
            ${data.perks.map(perk => `<li>${perk}</li>`).join('')}
        </ul>
    `;
    mlModal.showModal();
}

document.querySelector('#mlBtn1').addEventListener('click', () => showBenefits('np'));
document.querySelector('#mlBtn2').addEventListener('click', () => showBenefits('bronze'));
document.querySelector('#mlBtn3').addEventListener('click', () => showBenefits('silver'));
document.querySelector('#mlBtn4').addEventListener('click', () => showBenefits('gold'));

closeModal.addEventListener('click', () => mlModal.close());

const hiddenDate = document.querySelector('#today');
if (hiddenDate) {
    hiddenDate.value = new Date().toISOString();
}