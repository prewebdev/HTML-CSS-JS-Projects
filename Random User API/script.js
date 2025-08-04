const content = document.querySelector('.content');

function getDataApi(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => {
        const res = [...data.results];
        createCardHtml(res[0])
    })
}

function createCardHtml(data) {
    const {picture, name, email, gender, phone, location, dob, registered} = data;
    let html = `
    <div class="card">
    <div class="card_head">
    <img src="${picture.large}" alt="profile" />
    <h3>${name.title + " " + name.first+ " " + name.last}</h3>
    </div>
    <div class="card_body">
    <p>City :${location.city}</p>
    <p>Email :${email}</p>
    <p>${gender}</p>
    <p>${dob.age}</p>
    <p>${phone}</p>
    </div>
    <div class="card_date">
    <p>${registered.date.slice(0, 10)}</p>
    </div>
    </div>
    `
    content.insertAdjacentHTML('beforeend', html)
}

getDataApi("https://randomuser.me/api/")