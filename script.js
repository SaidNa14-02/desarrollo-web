const ticketCont = document.getElementById('ticketcontainer');
const infoSubmit = document.querySelector('form');
const avatarImg = document.getElementById('avatarImage');
const fNameInput = document.getElementById('fullName');
const emailInput = document.getElementById('emailAddress');
const ghInput = document.getElementById('githubUsername');

infoSubmit.addEventListener('submit', function(content) {
    content.preventDefault();

    const formInfo = {
        avatar: avatarImg.files[0],
        fname: fNameInput.value,
        email: emailInput.value,
        github: ghInput.value,
    }
    console.log('formInfo', formInfo)
})

