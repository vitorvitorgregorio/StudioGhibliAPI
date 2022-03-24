const app = document.getElementById('root')
const logo = document.createElement('img')
logo.src = 'totoro.gif'
const container = document.createElement('div')
container.setAttribute('class', 'container')
app.appendChild(logo)
app.appendChild(container)





// API
fetch('https://ghibliapi.herokuapp.com/films')
    .then(response => response.json())
    .then(data => {
    data.forEach(movie => {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const img = document.createElement('img')
        img.setAttribute('class', 'img-card')
        img.src = movie.image;

        const h1 = document.createElement('h1');
        h1.textContent = movie.title;

        const h4 = document.createElement('h4');
        h4.textContent = "Original Title : " + movie.original_title;

        const p = document.createElement('p');
        movie.description = movie.description.substring(0, 600); // Limitamos para 300 chars
        p.textContent = `${movie.description}...`; // Concatenamos com reticências

        const h5 = document.createElement('h5');
        h5.textContent = 'Release Date : ' + movie.release_date;

        // Damos Append dos cartões para o elemento contêiner
        container.appendChild(card);

        //elementos dentro do card
        card.appendChild(img)
        card.appendChild(h1);
        card.appendChild(h4);
        card.appendChild(h5);
        card.appendChild(p);
    })
    
});