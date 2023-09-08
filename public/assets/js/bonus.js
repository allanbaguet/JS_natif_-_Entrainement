const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

const wallIt = (event) => {
    // Déclenchement uniquement quand on est en bottom
    let documentHeight = document.body.scrollHeight;
    let currentScroll = window.scrollY + window.innerHeight;
    let starter = 200;
    if (currentScroll + starter > documentHeight) {
        wall.innerHTML += '<img src="https://picsum.photos/300/200?random=' + getRandomInt(1, 200000) + '">';
    }
}

// Initialisation du mur avec 10 images
for (let i = 0; i < 10; i++) {
    wallIt()
}

// Ajout d'un écouteur d'évènement au scroll
document.addEventListener('scroll', wallIt);
