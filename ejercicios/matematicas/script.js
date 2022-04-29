function espar(n){
    if(n % 2==0){
        return true;
    }
    else{
        return false;
    }
}

function recorrer(){
    for(var i=1;i<=100;i++){
        if(espar(i))
            document.getElementById("resultado").innerHTML+="<p style='color:red'>"+i+"</p>";
        else
            document.getElementById("resultado").innerHTML+="<p style='color:blue;'>"+i+"</p>";

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