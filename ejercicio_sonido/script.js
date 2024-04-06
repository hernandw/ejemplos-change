//Ruta de carpeta de audios
const carpetaAudios = "./sounds/";
console.log(carpetaAudios);
//Elemento de audio
const audioPlayer = document.getElementById("audioPlayer");



//Array de archivos de audios
const audios = [
  "Chillido.jpg",
  "Aullido.mp3",
  "Gruñido.mp3",
  "Rugido.mp3",
  "Siseo.mp3",
];

//Función para cargar y reproducir el archivo de audio
const reproducirAudio = (audios) => {
  const rutaAudio = carpetaAudios + audios;
  console.log(rutaAudio);
  audioPlayer.src = rutaAudio;
  console.log(audioPlayer.src);
  audioPlayer.play();
};

document.getElementById("animal").addEventListener("change", (event) => {
  const animalSelected = event.target.value;
  console.log(animalSelected);
  if (animalSelected === "Aguila") {
    reproducirAudio(audios[0]);
  } else if (animalSelected === "Lobo") {
    reproducirAudio(audios[1]);
  } else if (animalSelected === "Oso") {
    reproducirAudio(audios[2]);
  } else if (animalSelected === "Leon") {
    reproducirAudio(audios[3]);
  } else if (animalSelected === "Serpiente") {
    reproducirAudio(audios[4]);
  }
});
