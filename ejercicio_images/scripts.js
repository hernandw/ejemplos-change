const imagen = document.getElementById("imagen");

const audioPlayer = document.getElementById("audioPlayer");

document.getElementById("animal").addEventListener("change", (event) => {
    const animalSelected = event.target.value;
    if (animalSelected === "Aguila") {
        imagen.src = "./assets/images/Aguila.jpg";
        audioPlayer.src = "./assets/sounds/Chillido.mp3";
    } else if (animalSelected === "Lobo") {
        imagen.src = "./assets/images/Lobo.jpg";
        audioPlayer.src = "./assets/sounds/Aullido.mp3";
    } else if (animalSelected === "Oso") {
        imagen.src = "./assets/images/Oso.jpg";
        audioPlayer.src = "./assets/sounds/Gruñido.mp3";
    } else if (animalSelected === "Serpiente") {
        imagen.src = "./assets/images/Serpiente.jpg";
        audioPlayer.src = "./assets/sounds/Siseo.mp3";
    } else if (animalSelected === "Leon") {
        imagen.src = "./assets/images/Leon.jpg";
        audioPlayer.src = "./assets/sounds/Rugido.mp3";
    }
})