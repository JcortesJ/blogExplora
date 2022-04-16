const ini = "Inirida";
const cay = "Cayenne";
const mad = "Madagascar";
let textoReemplazar = document.getElementById("ciudad");

function irIzquierda() {

    if (textoReemplazar.innerText == ini) {
        document.body.style.backgroundImage = "url('https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/GuayanaFrancesa_Cayenne_500px_113052179_Ronan%20LIETAR_500px.JPG?itok=fbjhdqsu')";
        textoReemplazar.innerHTML = cay;




    } else if (textoReemplazar.innerText == cay) {
        document.body.style.backgroundImage = "url('https://viajes.nationalgeographic.com.es/medio/2021/07/29/baobabs_dc88eef4_1254x836.jpg')";
        textoReemplazar.innerHTML = mad;

    } else if (textoReemplazar.innerText == mad) {
        document.body.style.backgroundImage = "url('https://www.purosviajes.com/wp-content/uploads/2021/03/mavecure.jpg')";
        textoReemplazar.innerHTML = ini;
    } else {
        alert("?");
    }


}

function irDerecha() {
    if (textoReemplazar.innerText == ini) {
        document.getElementById("imagenFondo").style.backgroundImage = "url('https://viajes.nationalgeographic.com.es/medio/2021/07/29/baobabs_dc88eef4_1254x836.jpg')";
        textoReemplazar.innerHTML = mad;
    } else if (textoReemplazar.innerText == mad) {
        document.getElementById("imagenFondo").style.backgroundImage = "url('https://lonelyplanetes.cdnstatics2.com/sites/default/files/styles/max_1300x1300/public/fotos/GuayanaFrancesa_Cayenne_500px_113052179_Ronan%20LIETAR_500px.JPG?itok=fbjhdqsu')";
        textoReemplazar.innerHTML = cay;
    } else if (textoReemplazar.innerText == cay) {
        document.getElementById("imagenFondo").style.backgroundImage = "url('https://www.purosviajes.com/wp-content/uploads/2021/03/mavecure.jpg')";
        textoReemplazar.innerHTML = ini;
    } else {
        alert("?");
    }
}