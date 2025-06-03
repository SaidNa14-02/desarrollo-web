const form = document.querySelector('form');
const avatar = document.getElementById('avatarImage');
const fullName = document.getElementById('fullName');
const email = document.getElementById('emailAddress');
const github = document.getElementById('githubUsername');
const ticketContainer = document.getElementById('ticketcontainer');

// Manejar envío del formulario
form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Crear número de ticket
    let ticketNumber = Math.floor(Math.random() * 9999) + 1;
    ticketNumber = String(ticketNumber).padStart(4, '0');
    
    // Ocultar formulario
    document.querySelector('.formContainer').classList.add('hidden');
    
    // Crear contenedor del ticket
    const ticket = document.createElement('div');
    ticket.classList.add('ticket');

    // Crear contenedor del contenido
    const ticketContent = document.createElement('div');
    ticketContent.classList.add('ticket-content');
    
    // Añadir contenido del ticket
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
    
    // Añadir el contenido al ticket
    ticket.appendChild(ticketContent);
    
    // Añadir mensaje de éxito
    const successTitle = ticketContainer.querySelector('.success-title');
    const successMessage = ticketContainer.querySelector('.success-message');
    
    successTitle.innerHTML = `Congrats, ${fullName.value}! Your ticket is ready`;
    successMessage.innerHTML = `We've emailed your ticket to ${email.value} and will send updates in the run up to the event`;
    
    // Añadir ticket al wrapper
    const ticketWrapper = ticketContainer.querySelector('.ticket-wrapper');
    ticketWrapper.appendChild(ticket);
    
    // Mostrar imagen del avatar
    const avatarImg = document.getElementById('avatarImg');
    const reader = new FileReader();
    reader.onload = function(imagecontent) {
        avatarImg.src = imagecontent.target.result;
    };
    reader.readAsDataURL(avatar.files[0]);
    
    // Mostrar contenedor del ticket
    ticketContainer.classList.remove('hidden');
    ticketContainer.classList.add('visible');
});
