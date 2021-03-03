var botaoAdd = document.querySelector("#buscar-paciente");

botaoAdd.addEventListener("click", function(){

    var api = "https://api-pacientes.herokuapp.com/pacientes";
    var xhr = new XMLHttpRequest();    
    xhr.open("GET", api);
    
    xhr.addEventListener("load", function(res) {

       var erroAjax = document.querySelector("#erro-ajax");

       if(xhr.status == 200)
       {
        erroAjax.classList.add("invisivel");

        //console.log(xhr.responseText);
        var res = xhr.responseText;
        var pacientes = JSON.parse(res);

        pacientes.forEach(element => {
            adicionaPaciente(element);         
        });
       } else {

           erroAjax.classList.remove("invisivel");
       }


    });
    xhr.send();
});