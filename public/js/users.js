
// Obtengo el boton || https://www.w3schools.com/jsref/met_document_getelementbyid.asp
const getUsersBtn = document.getElementById('users-fetch')
// Le asigno un event listener para cuando se le haga click!. || https://www.w3schools.com/jsref/met_document_addeventlistener.asp
getUsersBtn.addEventListener('click', (btn, event) => {
    fetch('/api/usuarios')
    .then(response => {
        console.log(response)
        return response.json()
    })
    .then(users => {
        let usersContainer = document.getElementById('users-container')
        users.forEach(user => {
            let userCard = usercard.content.cloneNode(true)
            userCard.querySelector('img').src = user.imagen
            userCard.querySelector('img').alt = user.nick
            let title = userCard.querySelector('h5').innerHTML = user.nick
            userCard.querySelector('.card-text').innerHTML = user.descripcion

            usersContainer.append(userCard)
        });
    })
    .catch(err => console.error(err))
})