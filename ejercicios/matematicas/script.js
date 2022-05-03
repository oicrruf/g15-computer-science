function espar(n){
    if(n % 2==0){
        return true;
    }
    else{
        return false;
    }
}

function esprimo(p){
    if(p==1){
        return false;
    }
    for(var j=2; j<p; j++){
        console.log(j+" % "+p);
        if(p % j == 0){
            return false;
        }
    }
    return true;
}

function recorrer(){
    var n = document.getElementById("numero").value;
    if(n=='' || parseInt(n)>100){
        alert("Ingresa un valor menor a 100!!")
    }else{
        document.getElementById("resultado").innerHTML="";
        for(var i=1;i<=parseInt(n);i++){
            if(esprimo(i)){
                document.getElementById("resultado").innerHTML+="<p class='mb-2 text-danger'>"+i+"</p>";
            }else{
                document.getElementById("resultado").innerHTML+="<p class='mb-2 text-primary'>"+i+"</p>";
            }
        }
    }
}


function factorial(){
    //var n, i, resultado;
    if(document.getElementById("numero").value==''){
        alert("Ingresa algo!!")
    }else{
        var n = parseInt(document.getElementById("numero").value);
        var i = n;
        var resultado=1;

        for(;i>1;i--){
            resultado= resultado * i;
        }

        document.getElementById("resultado").innerHTML = '<p>El factorial de '+ n + ' es igual a ' + resultado + '</p>';
        
        return resultado;
    }  
}