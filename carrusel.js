let array=["img/CarruselPagPrin/Pedro Rodríguez de la VegaCarrusel.jpg","img/CarruselPagPrin/Juan Pablo MontoyaCarrusel.jpg","img/CarruselPagPrin/Juan Manuel FangioCarrusel.jpg","img/CarruselPagPrin/Ayton SennaCarrusel.jpg","img/CarruselPagPrin/Nelson PiquetCarrusel.jpg","img/CarruselPagPrin/Emerson FittippaldiCarrusel.jpg","img/CarruselPagPrin/Pastor MaldonadoCarrusel.jpg","img/CarruselPagPrin/Sergio ‘Checo’ PérezCarrusel.jpg"];
    let im = document.getElementById("imgCarrusel");
    let cont = 0;

    function anterior(){
        if(cont===0){
            cont = array.length -1;
        }else{
            cont--;
        }
        im.src = array[cont];
    }

    function siguiente(){
        if(cont===array.length -1){
            cont =0;
        }else{
            cont++;
        }
        im.src = array[cont];
    }

let array2=["img1/f1-juan-manuel-fangio-feature-2015-juan-manuel-fangio (1).jpg","img1/Reutemann_1981.jpg","img1/onofre-marimon-maserati-250f-grand-prix-of-france-reims-gueux-04-july-1954.webp","img1/KVLC3YOQW5FUTESHHAPTC5DOA4.webp"];
let im2 = document.getElementById("imgCarrusel");
let cont2 = 0;

    function anterior2(){
        if(cont2===0){
            cont2 = array2.length -1;
        }else{
            cont2--;
        }
        im2.src = array2[cont2];
    }

    function siguiente2(){
        if(cont2===array2.length -1){
            cont2 =0;
        }else{
            cont2++;
        }
        im2.src = array2[cont2];
    }