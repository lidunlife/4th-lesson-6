let cards = document.getElementById('cards')

let url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then((response) => response.json())
    .then((res) => getData(res))
    .catch((error) => console.log(error));

function getData(data) {
    for (const iterator of data) {
        let card = document.createElement("div");
        let h3 = document.createElement("h3");
        let username = document.createElement("p");
        let street = document.createElement("p");
        let email = document.createElement('p')


        h3.innerHTML = "Name: " + iterator?.name;
        username.innerHTML ="Username: " + iterator?.username;
        street.innerHTML = "Address: " + iterator?.address.street;
        email.innerHTML = "Email: " + iterator?.email;
        card.classList.add('card')
        card.appendChild(h3)
        card.appendChild(username)
        card.appendChild(street)
        card.appendChild(email)

        cards.appendChild(card)
    }
}