function setFocus(id) {
    let texto = document.getElementById(id);
    texto.classList.add('seleccion');
}

function escribiendoLetras(id,e) {
    let texto = document.getElementById(id);
    texto.classList.add('escribiendo');
    let tecla = (document.all) ? e.keyCode : e.which;
    console.log(tecla);
    if (tecla == 8) {
        return true;
    }
    let patron = /[A-Za-z ]/;
    let tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
}

function escribiendo(id,e) {
    let texto = document.getElementById(id);
    texto.classList.add('escribiendo');
}

function fueraFoco(id) {
    let texto = document.getElementById(id);
    if (texto.value == 0){
        texto.classList.add('vacio');
    }
    else
    {
        texto.classList.add('lleno');
    }
}

function enviarFormulario(){
    console.log("Enviar");
}