document.querySelector('#btnRegistrar').addEventListener('click', validar);

function validar(evento){
    evento.preventDefault();
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(nombre == ""){
        alert("Ingrese un Nombre");
        evento.preventDefault();
    }
    if(apellido == ""){
        alert("Ingrese un apellido");
        evento.preventDefault();
    }
    if(email == ""){
        alert("Ingrese un Correo");
        evento.preventDefault();
    }
    if(password == ""){
        alert("Ingrese una contraseña");
        evento.preventDefault();
    }
}