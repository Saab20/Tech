console.log("hola bienvenido");


let f = document.getElementById("formularioingreso");

f.addEventListener("submit", function(e){

    e.preventDefault();

    let valor = sessionStorage.getItem("valorInput"); 

    let correo = document.getElementById("Correo");
    let pass = document.getElementById("pass");
    let warnings="5555"
    let regexcorreo= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let regexpass= /^[A-Za-z]\w{7,14}*(\w+{%!@})$/

    if (regexcorreo.test(correo.value)){
       
    }
    else{
        alert("Verifica el correo ingresado");
        console.log(valor);
        return;
        
    }

    if (regexpass.test(pass.value)){
        alert("bienvenido");
       f.submit();
    }
    else{
        
        warnings += ` introduca algo <br> `
        alert("Verifique la contraseña");
        console.log(valor);
        return;
        
    }





});