function volverInicio() {
    window.open('./index.html', '_self');
}

function mostrarLemures() {
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
    espacio_dialogo.style.top = "20%";
    espacio_dialogo.style.left = "18%";


    //verificamos si esta visible o no nuestra pantalla de dialogo
    if (espacio_dialogo.style.display == "none") {
        espacio_dialogo.style.display = "block";
    } else {
        //en caso de estarlo, la ocultamos
        espacio_dialogo.style.display = "none";
    }

    //declaramos y ponemos datos
    const titulo = "Parc des Lémures";
    const texto = " Si vous préférez une destination plus naturelle, le parc des lémuriens est l'endroit idéal. Il compte plus de neuf espèces de lémuriens, dont la plupart ont été sauvés et sont en passe d'être rendus à la nature. Vous pourrez profiter d'une visite guidée et rencontrer des caméléons, des tortues, des iguanes et d'autres animaux intéressants. ";
    const rutaImagen = "./mapaMad/mico1.jpg";

    espacio_titulo.innerHTML = titulo;
    espacio_texto.innerHTML = texto;
    espacio_imagen1.src = rutaImagen;

}

function mostrarCafe() {
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
    espacio_dialogo.style.top = "8%";
    espacio_dialogo.style.left = "60%";

    //verificamos si esta visible o no nuestra pantalla de dialogo
    if (espacio_dialogo.style.display == "none") {
        espacio_dialogo.style.display = "block";
    } else {
        //en caso de estarlo, la ocultamos
        espacio_dialogo.style.display = "none";
    }

    //declaramos y ponemos datos
    const titulo = "Cafe de la Gare";
    const texto = "Bien qu'aujourd'hui la ville n'utilise plus le train comme moyen de transport, la gare est toujours en pleine activité. Elle est devenue l'un des cafés les plus renommés, remarqué par les habitants et les touristes pour sa délicieuse nourriture, son élégant décor rétro et une curiosité, ses salles de bain qui se trouvent à l'intérieur d'un ancien wagon de train.";
    const rutaImagen = "./mapaMad/cafe.jpg";
    espacio_titulo.innerHTML = titulo;
    espacio_texto.innerHTML = texto;
    espacio_imagen1.src = rutaImagen;
}

function mostrarPalacio() {
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

    //Movemos el dialogo un poco para la izquierda y arriba
    espacio_dialogo.style.left = "25%";
    espacio_dialogo.style.top = "25%";

    //declaramos y ponemos datos
    const titulo = " Le palais de la Reine.";
    const texto = " Le palais est situé au sommet de la colline Analamanga, qui est la plus haute de la ville. Vous pouvez prendre le bus ou faire le trajet en voiture privée, mais le moyen le plus économique et le plus rapide est de prendre un taxi qui met environ 22 minutes pour parcourir les 20,5 km qui séparent l'aéroport.";
    const rutaImagen = "./mapaMad/palacio.jpeg";
    const rutaImagen2 = "./mapaMad/palacio2.jpeg";
    espacio_titulo.innerHTML = titulo;
    espacio_texto.innerHTML = texto;
    espacio_imagen1.src = rutaImagen;
    espacio_imagen2.src = rutaImagen2;

    //verificamos si esta visible o no nuestra pantalla de dialogo
    if (espacio_dialogo.style.display == "none") {
        espacio_dialogo.style.display = "block";
    } else {
        //en caso de estarlo, la ocultamos
        espacio_dialogo.style.display = "none";
    }


}

function mostrarAero() {
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
    espacio_dialogo.style.top = "8%";
    espacio_dialogo.style.left = "8%";

    //verificamos si esta visible o no nuestra pantalla de dialogo
    if (espacio_dialogo.style.display == "none") {
        espacio_dialogo.style.display = "block";
    } else {
        //en caso de estarlo, la ocultamos
        espacio_dialogo.style.display = "none";
    }

    //declaramos y ponemos datos
    const titulo = "Aéroport";
    const texto = " ";
    const rutaImagen = "./mapaMad/aeropuerto.jpg";
    espacio_titulo.innerHTML = titulo;
    espacio_texto.innerHTML = texto;
    espacio_imagen1.src = rutaImagen;
}