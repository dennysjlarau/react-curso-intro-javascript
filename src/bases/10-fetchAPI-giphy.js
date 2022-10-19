// Fetch API

const apiKeyGiphy = 'ERf0sJZDuQCBh8TOPlWYTYutQGf5aFnL';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKeyGiphy}`);
peticion
    .then(res => res.json())
        .then(({data}) => {
            const {url} = data.images.original;
            const img = document.createElement('img');
            img.src = url;
            document.body.append(img);
        })
    .catch(console.error);