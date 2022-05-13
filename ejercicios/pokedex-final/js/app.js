let pokemones = []; //donde estan todos los pokemones
let pokemones2 = [] //donde estan todos lo pokemones - los filtros perduren
//Vamos a ejecutar esto, apenas cargue la pagina
window.onload = function(){

    fetch("https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json")
    .then(response => response.json())
    .then(data => {
        pokemones=data;
        pokemones2=pokemones;
        listPokemones(pokemones)
    });

    getFavoritos();

    document.getElementById("delete").addEventListener("click", function(){
        document.querySelector("#popup").classList.toggle("is-active");
    });

    document.getElementById("reset").addEventListener("click",getFullList);

    document.getElementById("favoritos").addEventListener("click", function(){
        document.getElementById("mis-favoritos").classList.toggle("is-hidden");
        /*var resultados= JSON.parse(sessionStorage.getItem("favoritos"))
        listPokemones(resultados);*/
    })

    document.getElementById("pokemon_type").addEventListener("change", function(evt){
        var tipo_buscado = evt.target.value;
        //console.log(tipo_buscado);

        if(tipo_buscado==""){
            listPokemones(pokemones2);
        }else{
             pokemones2 = pokemones2.filter((pokemon) => pokemon.type.includes(tipo_buscado))
            listPokemones(pokemones2);
        }
    });

    document.querySelector("#buscar").addEventListener("keyup",function(evt){
        if(evt.target.value.length>=3){
            /*
            let resultados=[];
            for(var i=0; i<pokemones.length;i++){
                if(pokemones[i].name.toLowerCase().includes(evt.target.value.toLowerCase())){
                    resultados.push(pokemones[i]);
                }
            }*/
            pokemones2 = pokemones2.filter((pokemon) => 
                    pokemon.name.toLowerCase().includes(evt.target.value.toLowerCase())
            )

            /*
            pokemones.filter(function(pokemon){
                return pokemon.name.toLowerCase().includes(evt.target.value.toLowerCase();
            })*/

            listPokemones(pokemones2);
        }

    });

    document.querySelector("#ascendente").addEventListener("click",function(){
        pokemones2.sort((a,b)=> a.name > b.name ? 1 : -1);
        listPokemones(pokemones2);
    });

    document.querySelector("#descendente").addEventListener("click",function(){
        //pokemones.reverse()
        //pokemones.sort((a,b)=> a.name > b.name ? 1 : -1).reverse();
        pokemones2.sort((a,b)=> a.name > b.name ? -1 : 1);
        listPokemones(pokemones2);
    });


    /*
    fetch("https://raw.githubusercontent.com/oicrruf/g15-computer-science/develop/ejercicios/pokedex-registro/json/pokemon.json")
    .then(function(response){
        return response.json();
    }).then(function(data){
        console.log(data);
    });*/
};


function getFullList()
{
    pokemones2=pokemones;
    listPokemones(pokemones2);
}

function getFavoritos(){
    document.querySelector("#listado-favoritos").innerHTML='';
    var listadoFavoritos = JSON.parse(sessionStorage.getItem("favoritos"));
    for(var i=0;i<listadoFavoritos.length;i++){
        document.querySelector("#listado-favoritos").innerHTML+="<div class='has-text-centered'>"+listadoFavoritos[i].name+"</div>"
    }
}

/*Funcion que dibuja un array de pokemones*/
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

        card.addEventListener("click", abrirPopup)

        var buttonFav = document.createElement("button");
        buttonFav.dataset.id=pokemones[i].id;
        buttonFav.classList.add("button","is-warning", "is-fav");
        buttonFav.innerHTML="<span class='icon'><i class='fa fa-star'> </span>"
        buttonFav.addEventListener("click", function(evt){
            //evt.preventDefault();
            evt.stopPropagation();
            var id = parseInt(evt.currentTarget.dataset.id);
            console.log(evt.currentTarget.dataset.id);
            
            var resultados = pokemones.filter((pokemon) =>
                pokemon.id === id
            );

            var listadoFavoritos = JSON.parse(sessionStorage.getItem("favoritos"));
            
            if(listadoFavoritos == null){
                sessionStorage.setItem("favoritos",JSON.stringify(resultados));
            }else{
                listadoFavoritos.push(resultados[0]);
                sessionStorage.setItem("favoritos",JSON.stringify(listadoFavoritos));
            }
            getFavoritos();
            console.log(listadoFavoritos);

        });
        
        card.append(buttonFav);

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

/*Funcion que dibuja un array de pokemones*/
function abrirPopup(evt){
    /*Usamos currentTarget porque */
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