function volverInicio() {
    window.open('./index.html', '_self');
}

function mostrarMontanias() {
    let espacio_dialogo = document.getElementById("dialogo");
    //Traemos los IDS necesarios para el punto
    let espacio_titulo = document.getElementById("titulo_informacion");
    let espacio_texto = document.getElementById("cuerpo_informacion");
    let espacio_imagen1 = document.getElementById("imagen_mostrar1");
    let espacio_imagen2 = document.getElementById("imagen_mostrar2");
    let espacio_video = document.getElementById("video_mostrar");
    //con esto nos aseguramos de tener los espacios de las imagenes limpios:
    espacio_imagen1.src = " ";
    espacio_imagen2.src = " ";
    //y con esto de que no se vea el video:
    espacio_video.style.display = "none";

    //Movemos el dialogo un poco para arriba
    espacio_dialogo.style.top = "25%";

    //verificamos si esta visible o no nuestra pantalla de dialogo
    if (espacio_dialogo.style.display == "none") {
        espacio_dialogo.style.display = "block";
    } else {
        //en caso de estarlo, la ocultamos
        espacio_dialogo.style.display = "none";
    }

    //declaramos y ponemos datos
    const titulo = "Montagnes du Naquén";
    const texto = " Aller aux montagnes du Naquén, ancien lieu submergé, avec une grande histoire, son principal attrait sont les eaux thermales où se font traitements. Les cascades sont un lieu d' activités extrêmes  (Plongée de la falaise)";
    const rutaImagen = "./mapaInirida/Naquen.jpg";
    espacio_titulo.innerHTML = titulo;
    espacio_texto.innerHTML = texto;
    espacio_imagen1.src = rutaImagen;
}

function mostrarMavicure() {
    let espacio_dialogo = document.getElementById("dialogo");
    //Traemos los IDS necesarios para el punto
    let espacio_titulo = document.getElementById("titulo_informacion");
    let espacio_texto = document.getElementById("cuerpo_informacion");
    let espacio_imagen1 = document.getElementById("imagen_mostrar1");
    let espacio_imagen2 = document.getElementById("imagen_mostrar2");
    let espacio_video = document.getElementById("video_mostrar");
    //con esto nos aseguramos de tener los espacios de las imagenes limpios:
    espacio_imagen1.src = " ";
    espacio_imagen2.src = " ";
    //y con esto de que no se vea el video:
    espacio_video.style.display = "none";
    //movemos un poco para arriba el espacio
    espacio_dialogo.style.top = "10%";

    //verificamos si esta visible o no nuestra pantalla de dialogo
    if (espacio_dialogo.style.display == "none") {
        espacio_dialogo.style.display = "block";
    } else {
        //en caso de estarlo, la ocultamos
        espacio_dialogo.style.display = "none";
    }

    //declaramos y ponemos datos
    const titulo = "Collines de Mavicure";
    const texto = "Monter sur les collines de Mavicure et faire du camping au sommet dans la nuit, voir la transition de la nuit tombée à la nuit, et voir le ciel étoilé alors que le guide raconte histoires ancestrales, les fera rappeler comme la vie est belle et éphémère.";
    const rutaImagen = "./mapaInirida/mavicure1.jpeg";
    const rutaImagen2 = "./mapaInirida/mavicure2.jpeg";
    espacio_titulo.innerHTML = titulo;
    espacio_texto.innerHTML = texto;
    espacio_imagen1.src = rutaImagen;
    espacio_imagen2.src = rutaImagen2;
}

function mostrarInirida() {
    let espacio_dialogo = document.getElementById("dialogo");
    //Traemos los IDS necesarios para el punto
    let espacio_titulo = document.getElementById("titulo_informacion");
    let espacio_texto = document.getElementById("cuerpo_informacion");
    let espacio_imagen1 = document.getElementById("imagen_mostrar1");
    let espacio_imagen2 = document.getElementById("imagen_mostrar2");
    let espacio_video = document.getElementById("video_mostrar");
    //con esto nos aseguramos de tener los espacios de las imagenes limpios:
    espacio_imagen1.src = " ";
    espacio_imagen2.src = " ";
    //y con esto de que no se vea el video:
    espacio_video.style.display = "none";

    //verificamos si esta visible o no nuestra pantalla de dialogo
    if (espacio_dialogo.style.display == "none") {
        espacio_dialogo.style.display = "block";
    } else {
        //en caso de estarlo, la ocultamos
        espacio_dialogo.style.display = "none";
    }
    //cuadramos el dialogo mas
    espacio_dialogo.style.left = "60%";
    espacio_dialogo.style.top = "0%";

    //declaramos y ponemos datos
    const titulo = "Princesse Inirida";
    const texto = "Au lieu, vous arrivez en moto taxi ou en tuk tuk. Cohabiter avec les indigènes, apprendre de leur culture , costumes, outils, rituels (Communauté indigene). Aller au musée ethnologique vivant et finaliser dans la princesse inirida (un lieu d’hommenage à la femme indigène). Vous pouvez rester dans une maloca ou camper dans la zone , écouter des histoires mystiques des indigènes , C'est excellent. dans notre minibus.";
    const rutaImagen = "./mapaInirida/princesa1.png";
    const rutaImagen2 = "./mapaInirida/princesa2.png";
    espacio_titulo.innerHTML = titulo;
    espacio_texto.innerHTML = texto;
    espacio_imagen1.src = rutaImagen;
    espacio_imagen2.src = rutaImagen2;
}

function mostrarCoco() {
    let espacio_dialogo = document.getElementById("dialogo");
    //Traemos los IDS necesarios para el punto
    let espacio_titulo = document.getElementById("titulo_informacion");
    let espacio_texto = document.getElementById("cuerpo_informacion");
    let espacio_imagen1 = document.getElementById("imagen_mostrar1");
    let espacio_imagen2 = document.getElementById("imagen_mostrar2");
    let espacio_video = document.getElementById("video_mostrar");
    //con esto nos aseguramos de tener los espacios de las imagenes limpios:
    espacio_imagen1.src = " ";
    espacio_imagen2.src = " ";
    //y con esto de que no se vea el video:
    espacio_video.style.display = "none";

    //verificamos si esta visible o no nuestra pantalla de dialogo
    if (espacio_dialogo.style.display == "none") {
        espacio_dialogo.style.display = "block";
    } else {
        //en caso de estarlo, la ocultamos
        espacio_dialogo.style.display = "none";
    }
    //movemos el dialogo
    espacio_dialogo.style.left = "8%";
    espacio_dialogo.style.top = "25%";

    //declaramos y ponemos datos
    const titulo = "El Coco";
    const texto = "Visiter “El coco” un lieu préhistorique où vous trouverez responses du passé pour le présent, en plus d' expérimenter une sensation de connexion avec votre ancêtre";
    const rutaImagen = "./mapaInirida/coco.jpeg";
    espacio_titulo.innerHTML = titulo;
    espacio_texto.innerHTML = texto;
    espacio_imagen1.src = rutaImagen;


}