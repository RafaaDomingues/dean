const img = document.querySelectorAll('img');//seleciona todas as imgs
let trocando = false;


function mudarImagens() {
     if (trocando === false) {
        for (let d = 1; d < img.length; d++) {
            img[d].src = `d${d + 8}.jpg`
        }
        trocando = true;
    } else {
        for (let d = 1; d < img.length; d++) {
            img[d].src = `d${d + 1}.jpg`
        }
        trocando=false;
    }


}
   

