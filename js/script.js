$(document).ready(function(){
    
    $(".guardar").click(function(){
        const titulo = $(".titulo").val();
        const descripcion = $(".descripcion").val();

        // Elemento que es la nueva nota dentro de una lista
        const nuevaNota = $("<li class='tarea'></li>");
    
        nuevaNota.append(`<h3 class="titulo_tarea">${titulo}</h3>`);
        nuevaNota.append(`<p class="descrip_tarea">${descripcion}</p>`);
        nuevaNota.append(`<div class="botones">
            <div class="borrar"></div>
            <div class="check"></div>
            </div>`);
        

        // Agregar a la lista pero las siguientes aparacen arriba
        $("#lista_tareas").prepend(nuevaNota);

        // Limpiar los campos de la nota
        $(".titulo").val("");
        $(".descripcion").val("");
    });

    $("#lista_tareas").on("click",".borrar",function(){
        $(this).closest(".tarea").remove();
    });

    $("#lista_tareas").on("click",".check",function(){
        $(this,".check").toggleClass("completado");
        if($(".check").hasClass("completado")){

        }
    });


    $(".modo").click(function(){
        $("html").toggleClass("cambio");
        /*if($("html").hasClass("cambio")){
            $(".oscuro").removeClass("oscuro").addClass("modo_claro");
            $(".modo").text("Modo claro");        
        }
        else{
            $(".oscuro").toggleClass("oscuro");
            $(".modo").text("Modo oscuro"); 
        }*/
        
    });

    


})