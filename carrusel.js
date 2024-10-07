let array2=["img/CarruselPagPrin/Pedro Rodríguez de la VegaCarrusel.jpg","img/CarruselPagPrin/Juan Pablo MontoyaCarrusel.jpg","img/CarruselPagPrin/Juan Manuel FangioCarrusel.jpg","img/CarruselPagPrin/Ayton SennaCarrusel.jpg","img/CarruselPagPrin/Nelson PiquetCarrusel.jpg","img/CarruselPagPrin/Emerson FittippaldiCarrusel.jpg","img/CarruselPagPrin/Pastor MaldonadoCarrusel.jpg","img/CarruselPagPrin/Sergio ‘Checo’ PérezCarrusel.jpg"];
    let im2 = document.getElementById("imgCarrusel");
    let cont2 = 0;

    function anterior(){
        if(cont2===0){
            cont2 = array2.length -1;
        }else{
            cont2--;
        }
        im2.src = array2[cont2];
    }

    function siguiente(){
        if(cont2===array2.length -1){
            cont2 =0;
        }else{
            cont2++;
        }
        im2.src = array2[cont2];
    }