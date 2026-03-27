const urlParams = new URLSearchParams(window.location.search);
const resultsElement = document.querySelector('#results');
const formattedDate = new Date(urlParams.get('timestamp')).toLocaleString();

resultsElement.innerHTML = `
    <h3>Application Summary</h3>
    <hr>
    <p><strong>Full Name:</strong> ${urlParams.get('first')} ${urlParams.get('last')}</p>
    <p><strong>Professional Title:</strong> ${urlParams.get('title')}</p>
    <p><strong>Email Address:</strong> ${urlParams.get('email')}</p>
    <p><strong>Contact Number:</strong> ${urlParams.get('phone')}</p>
    <p><strong>Organization:</strong> ${urlParams.get('organization')}</p>
    <p><strong>Business Description:</strong> ${urlParams.get('description')}</p>
    <p><strong>Membership Tier:</strong> <span class="badge">${urlParams.get('level').toUpperCase()}</span></p>
    <p><strong>Submitted On:</strong> ${formattedDate}</p>
    
    <div class="confirmation-footer">
        <p>Our executive team will review your ${urlParams.get('level').toUpperCase()} membership application. Please allow 2-3 business days for a response.</p>
    </div>
`;