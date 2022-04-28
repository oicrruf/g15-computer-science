var total_borregos=100;
var libreta=0;

function contar(){
    document.getElementById("corral").innerHTML="";
    for(var libreta=1; libreta<=total_borregos ; libreta++){
    
       //document.getElementById("corral").innerHTML+="<p>Entro un borrego"+ libreta +"</p>"
        document.getElementById("corral").innerHTML+='<div class="alert alert-success">Entro un borrego'+ libreta +'</div>';
        if(libreta % 5 == 0){
            document.getElementById("corral").innerHTML+='<div class="alert alert-danger">Tomar un descanso</div>';
        }
    }
}