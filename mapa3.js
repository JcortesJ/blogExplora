function volverInicio() {
    window.open('./index.html', '_self');
}

function mostrarPueblo() {
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

    //declaramos y ponemos datos
    const titulo = "Norino et Kamuyeneh";
    const texto = "Dans ces villages, il y a une population des peuples amérindiens. Vous pouvez apprendre avec lui sur les artisans et sur la culture des guyanaises.Vous pouvez apprendre différentes techniques comment la poterie, la vannerie et la peinture.";
    const rutaImagen = "./mapaCay/pueblo.png";

    espacio_titulo.innerHTML = titulo;
    espacio_texto.innerHTML = texto;
    espacio_imagen1.src = rutaImagen;

}

function mostrarMuseo() {
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

    //declaramos y ponemos datos
    const titulo = "Musées de la Ville";
    const texto = "Notre recommandation est le musée des cultures guyanaises. Il y a une grande collection d'objets ethnographiques des ethnies guyanaises et du temps de colonie.";
    const rutaImagen = "./mapaCay/museo.png";
    espacio_titulo.innerHTML = titulo;
    espacio_texto.innerHTML = texto;
    espacio_imagen1.src = rutaImagen;
}

function mostrarPlaya() {
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


    //declaramos y ponemos datos
    const titulo = "Remire-Montjoly";
    const texto = "Est une commune française de Cayenne et il y a plus d'hôtels dans cette lieu. Dans Remire-Montjoly il y a beaucoup de tortues et vous pouvez observer plus d'espèces. Il y a un lieu qui s' appelle Fort Diamant qui était une forteresse de guerre. Vous pouvez faire une visite historique et détendue en même temps.";
    const rutaImagen = "./mapaCay/playa.jpeg";

    espacio_titulo.innerHTML = titulo;
    espacio_texto.innerHTML = texto;
    espacio_imagen1.src = rutaImagen;

    //verificamos si esta visible o no nuestra pantalla de dialogo
    if (espacio_dialogo.style.display == "none") {
        espacio_dialogo.style.display = "block";
    } else {
        //en caso de estarlo, la ocultamos
        espacio_dialogo.style.display = "none";
    }


}