console.log("Let's get this party started!");
const form = document.querySelector('form');
const input = document.querySelector('#input-search');
const div = document.querySelector('#divv');
const removebtn = document.querySelector('#remove-g')

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let value = input.value;
    console.log(value)
    searchGiphy(value);
    form.reset();
});

async function searchGiphy(value) {
    let key = 'aAbEmZxkCTBwcxyGZOvYXJiYUeywRXXq';
    let q = value;
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${q}`;
    const result = await axios.get(url);
    console.log(result)
    let imgURL = result.data.data[Math.floor(Math.random() * 50)].images.downsized.url;
    appendImg(imgURL);
}

function appendImg(imgURL) {
    const img = document.createElement('img');
    img.src = imgURL;
    div.append(img);
}
function removeAllGifs() {
    const allImg = document.querySelectorAll('img');
    console.log(allImg)
    // for (let image of allImg) {
    //     console.log(image)
    //     image.remove();
    // }
}
removebtn.addEventListener('click', removeAllGifs());
