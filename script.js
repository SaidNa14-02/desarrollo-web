document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('ticket-form');
    const ticketSection = document.getElementById('ticket-section');
    const displayName = document.getElementById('display-name');
    const displayEmail = document.getElementById('display-email');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe y recargue la página

        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;

        displayName.textContent = fullName;
        displayEmail.textContent = email;

        ticketSection.style.display = 'block'; // Muestra la sección del ticket
    });
});