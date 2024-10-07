let array2=["img1/f1-juan-manuel-fangio-feature-2015-juan-manuel-fangio (1).jpg","img1/Reutemann_1981.jpg","img1/onofre-marimon-maserati-250f-grand-prix-of-france-reims-gueux-04-july-1954.webp","img1/KVLC3YOQW5FUTESHHAPTC5DOA4.webp"];
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