let pokemones = [];

fetch("https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json")
.then(response => response.json())
.then(data => {
    listPokemones(data)
});


/*
fetch("https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json")
.then(function(response){
    return response.json();
}).then(function(data){
    console.log(data);
});*/


function listPokemones(pokemones){
    document.getElementById("listado").innerHTML="";

    for(var i=0;i<pokemones.length;i++){
        let div = document.createElement("div");
        div.classList.add("column","is-3");

        let card = document.createElement("div");
        card.classList.add("card", "is-relative");
        card.dataset.name=pokemones[i].name;
        card.dataset.id=pokemones[i].id;
        card.dataset.weight=pokemones[i].weight;
        card.dataset.height = pokemones[i].height;
        card.dataset.ThumbnailImage = pokemones[i].ThumbnailImage;
        card.dataset.number = pokemones[i].number;

        card.addEventListener("click", gritoBatalla)

        let cardImage =  document.createElement("div");
        cardImage.classList.add("card-image");

        let figure = document.createElement("figure");
        figure.classList.add("image","is-square","has-background-light");
        //figure.innerHTML='<img src="'+pokemones[i].foto+'">';
    
        let img = document.createElement("img");
        img.setAttribute("src", pokemones[i].ThumbnailImage);  //img.src = 
        figure.append(img);

        cardImage.append(figure);

        let cardContent= document.createElement("div");
        cardContent.classList.add("card-content","px-3","py-4");
        
        let hTitle= document.createElement("h2");
        hTitle.classList.add("is-size-4", "has-text-weight-bold");
        hTitle.innerText=pokemones[i].name;

        cardContent.append(hTitle);

        let tipoArreglo=pokemones[i].type;//Arreglo
        card.dataset.type= pokemones[i].type;


        for(var j = 0 ; j<tipoArreglo.length;j++){
            let tSpan =  document.createElement("span");
            tSpan.classList.add("tag", "mr-1");
            tSpan.innerText=tipoArreglo[j];
            var micolor= getColor(tipoArreglo[j])
            tSpan.classList.add(micolor);
            cardContent.append(tSpan);
        }
  
        let p1 = document.createElement("p");
        p1.classList.add("pkemn-number");
        p1.innerHTML="<b>No. "+pokemones[i].number+"</b>";
        cardContent.append(p1);

        /*Para fines graficos quitamos esta parte */ 
        /*
        let p2 = document.createElement("p");
        p2.innerHTML="<b>Altura:</b> "+pokemones[i].height;
        cardContent.append(p2);

        let p3 = document.createElement("p");
        p3.innerHTML="<b>Peso:</b> "+pokemones[i].weight;
        cardContent.append(p3);*/

        card.append(cardImage);
        card.append(cardContent);

        div.append(card);

        document.getElementById("listado").append(div);
    }

}

function gritoBatalla(evt){
    //console.log(evt.target);
    //console.log(evt.currentTarget);
    //alert(evt.currentTarget.dataset.name);

    var info = evt.currentTarget.dataset
  
    document.querySelector("#pokemon-tags").innerHTML='';

    var tipoArreglo = info.type.split(",");
    for(var j = 0 ; j<tipoArreglo.length;j++){
        let tSpan =  document.createElement("span");
        tSpan.classList.add("tag", "mr-1");
        tSpan.innerText=tipoArreglo[j];
       //aqui va la funcion
        var micolor= getColor(tipoArreglo[j])
        
        tSpan.classList.add(micolor);

        document.querySelector("#pokemon-tags").append(tSpan);
    }

    document.querySelector("#pokemon-name").innerHTML= info.name;
    document.querySelector("#pokemon-thumb").src= info.ThumbnailImage;
    document.querySelector("#pokemon-number").innerHTML= info.number;
    document.querySelector("#pokemon-height").innerHTML= info.height;
    document.querySelector("#pokemon-weight").innerHTML= info.weight;

    //document.querySelector("#popup").classList.add("is-active");
    //document.querySelector("#popup").style.display='block';
    document.querySelector("#popup").classList.toggle("is-active");
}

getColor("water");

function getColor(tipo){
    var colorClass;
    switch(tipo){
        case "grass":{
           colorClass="grass";
           break;
        }
        case "poison":{
           colorClass="poison";
           break;
        }
        case "fire":{
           colorClass="fire";
           break;
       }
       case "water":{
            colorClass="water";
            break;
        }
        case "psychic":{
            colorClass="psychic";
            break;
        }
        case "dark":{
            colorClass="dark";
            break;
        }
        case "bug":{
            colorClass="bug";
            break;
        }
        case "dragon":{
            colorClass="dragon";
            break;
        }
        case "electric":{
            colorClass="electric";
            break;
        }
        case "flying":{
            colorClass="flying";
            break;
        }
        case "ghost":{
            colorClass="ghost";
            break;
        }
        case "ground":{
            colorClass="ground";
            break;
        }
        case "ice":{
            colorClass="ice";
            break;
        }
        case "rock":{
            colorClass="rock";
            break;
        }
        case "steel":{
            colorClass="steel";
            break;
        }
        case "fairy":{
            colorClass="fairy";
            break;
        }
        default:{
            colorClass="normal";
        }
    }
    return colorClass;
}



window.onload = function(){
    document.getElementById("delete").addEventListener("click", function(){
        document.querySelector("#popup").classList.toggle("is-active");
    });
}