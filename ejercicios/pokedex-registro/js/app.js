let pokemones = [];

//Codigo para ejecutar hasta que la pagina se termina de cargar
window.onload=function(){
    document.querySelector("#pokedex").addEventListener("submit",getFormData);
}

function getFormData(evt){
    evt.preventDefault();
    let p_nombre = document.querySelector("#nombre").value;
    let p_tipo = document.querySelector("#tipo").value;
    let p_numero = document.querySelector("#numero").value;
    let p_altura = document.querySelector("#altura").value;
    let p_peso = document.querySelector("#peso").value;
    let p_foto = document.querySelector("#foto").value;

    let pokemon = {
        nombre: p_nombre,
        tipo: p_tipo,
        numero: p_numero,
        altura: p_altura,
        peso: p_peso,
        foto:p_foto
    };

    pokemones.push(pokemon);
    //Reset del formulario
    document.querySelector("#pokedex").reset();
    listPokemones(); 
    //console.log(pokemones);
}

function listPokemones(){
    document.getElementById("listado").innerHTML="";

    for(var i=0;i<pokemones.length;i++){
        let div = document.createElement("div");
        div.classList.add("column","is-3");

        let card = document.createElement("div");
        card.classList.add("card", "is-relative");

        let cardImage =  document.createElement("div");
        cardImage.classList.add("card-image");

        let figure = document.createElement("figure");
        figure.classList.add("image","is-square","has-background-light");
        //figure.innerHTML='<img src="'+pokemones[i].foto+'">';
    
        let img = document.createElement("img");
        img.setAttribute("src", pokemones[i].foto);  //img.src = 
        figure.append(img);

        cardImage.append(figure);

        let cardContent= document.createElement("div");
        cardContent.classList.add("card-content","p-3");
        
        let hTitle= document.createElement("h2");
        hTitle.classList.add("is-size-4", "has-text-weight-bold");
        hTitle.innerText=pokemones[i].nombre;

        cardContent.append(hTitle);

        var colorClass= "";
        switch(pokemones[i].tipo){
             case "Agua":{
                colorClass="is-link";
                break;
             }
             case "Fuego":{
                colorClass="is-danger";
                break;
             }
             case "Planta":{
                colorClass="is-success";
                break;
            }
        }

        let tSpan =  document.createElement("span");
        tSpan.classList.add("tag", colorClass);
        tSpan.innerText=pokemones[i].tipo;

        cardContent.append(tSpan);

        let p1 = document.createElement("p");
        p1.innerHTML="<b>No. "+pokemones[i].numero+"</b>";
        cardContent.append(p1);

        let p2 = document.createElement("p");
        p2.innerHTML="<b>Altura:</b> "+pokemones[i].altura;
        cardContent.append(p2);

        let p3 = document.createElement("p");
        p3.innerHTML="<b>Peso:</b> "+pokemones[i].peso;
        cardContent.append(p3);

        card.append(cardImage);
        card.append(cardContent);

        div.append(card);

        document.getElementById("listado").append(div);
    }

}