// Async Await
const getImagen = async() => {
    try {
        const apiKeyGiphy = 'ERf0sJZDuQCBh8TOPlWYTYutQGf5aFnL';
        const respuesta = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKeyGiphy}`);
        const {data} = await respuesta.json();
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        console.error(error);
    }
}
getImagen();