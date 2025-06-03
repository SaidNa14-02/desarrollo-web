const form = document.querySelector('form');
const avatar = document.getElementById('avatarImage');
const fullName = document.getElementById('fullName');
const email = document.getElementById('emailAddress');
const github = document.getElementById('githubUsername');
const ticketContainer = document.getElementById('ticketcontainer');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Crear número de ticket
    let ticketNumber = Math.floor(Math.random() * 9999) + 1;
    ticketNumber = String(ticketNumber).padStart(4, '0');
    
    document.querySelector('.formContainer').classList.add('hidden');

    const ticket = document.createElement('div');
    ticket.classList.add('ticket');

    const ticketContent = document.createElement('div');
    ticketContent.classList.add('ticket-content');
    
    ticketContent.innerHTML = `
        <div class="conf-info">
            <img src="assets/images/logo-mark.svg" alt="Coding Conf Logo" class="conf-logo">
            <div class="conf-details">
                <span>Jan 31, 2025 / Austin, TX</span>
            </div>
            <span class="ticket-number">#${ticketNumber}</span>
        </div>
        <div class="attendee-info">
            <div class="avatar-container">
                <img src="" alt="Profile" id="avatarImg">
            </div>
            <div class="attendee-details">
                <h2 class="attendee-name">${fullName.value}</h2>
                <div class="github-info">
                    <img src="assets/images/icon-github.svg" alt="GitHub icon">
                    <span>@${github.value}</span>
                </div>
            </div>
        </div>
    `;
    
    ticket.appendChild(ticketContent);

    const successTitle = ticketContainer.querySelector('.success-title');
    const successMessage = ticketContainer.querySelector('.success-message');
    
    successTitle.innerHTML = `Congrats, ${fullName.value}! Your ticket is ready`;
    successMessage.innerHTML = `We've emailed your ticket to ${email.value} and will send updates in the run up to the event`;
    
    const ticketWrapper = ticketContainer.querySelector('.ticket-wrapper');
    ticketWrapper.appendChild(ticket);
    
    const avatarImg = document.getElementById('avatarImg');
    avatarImg.src = URL.createObjectURL(avatar.files[0]);
    

    ticketContainer.classList.remove('hidden');
    ticketContainer.classList.add('visible');
});
