const productos = [{
    nombre: "Seleccione una opcion",
    precio: 0.0,
}, {
    nombre: "iPhone 13 Pro Max",
    precio: 756.98,
}, {
    nombre: "Samsung Galaxy S22 Ultra 5G",
    precio: 900.98,
}, {
    nombre: "Samsung Galaxy Z Fold3",
    precio: 1254.09,
}, {
    nombre: "Huawei P50 Pro",
    precio: 650.78,
}, {
    nombre: "Huawei Mate X2",
    precio: 870.87,
}, {
    nombre: "OnePlus 10 Pro",
    precio: 710.90,
}];


function loadItems(){
    //Añadir valores a Productos
    let options = document.getElementsByTagName("option");
    for (let i = 0; i < productos.length; i++) {
        options[i].value = `${productos[i].precio}`;
    }
}

function addBudget() {
    //TOTAL PRICE
    let totalPrice = document.getElementById("totalPrice");
    let gastoFinal = 0.0;
    let preciosCkecked = 0.0;
    //Recoger items seleccionados
    let inputs = document.getElementsByClassName("check")
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].checked == true) {
            // console.log(inputs[i].value)
            preciosCkecked += parseFloat(inputs[i].value);
        }
    }
    //Producto seleccionado
    let valorSelected = document.getElementById("dropDownList").value;
    //Plazo seleccionado
    let vecesSelected = document.getElementById("cuotaMeses").value;

    //console.log(valorSelected);
    //console.log(preciosCkecked);
    
    //Opciones seleccionadas o sin valor
    if(valorSelected != 0.0 || valorSelected == 0.0){
        gastoFinal = valorSelected;
        totalPrice.value = `${gastoFinal} €`;
    }
    //Extras seleccionados
    if(preciosCkecked != 0.0){
        gastoFinal = preciosCkecked;
        totalPrice.value = `${gastoFinal} €`;
    }
    //Opciones seleccionadas y extras seleccionados
    if(valorSelected != 0.0 && preciosCkecked != 0.0){
        gastoFinal = round(parseFloat(valorSelected) + parseFloat(preciosCkecked));
        totalPrice.value = `${gastoFinal} €`;
    }
    //Opcion seleccionado y plazo
    if(vecesSelected != "" && valorSelected != 0.0 ){
        gastoFinal = round(((parseFloat(valorSelected) + preciosCkecked) / vecesSelected));
        totalPrice.value = `${gastoFinal} €`;
    }
    //Todo con valor
    if(vecesSelected != "" && valorSelected != 0.0 && preciosCkecked != 0.0){
        gastoFinal = round(((parseFloat(valorSelected) + preciosCkecked) / vecesSelected));
        totalPrice.value = `${gastoFinal} €`;
    }   

}

function main() {
    //crearProductos();
    //createAttributs();
    //validarName();
   //displayResult()
}

main()

function validarName() {
    var letras = /^[A-Z a-z]+$/i; //[A-Z(espacio)a-z] -> Agrego espacio tambien como válido
    //console.log(letras.test(formulario.nombre.value))
    //console.log(formulario.nombre.value == "")
    let name = document.getElementById("nombre");
    //console.log(name.value.length < 15) 
    if (name.value == "" || !(letras.test(name.value)) || !(name.value.length <= 15)) {
        return false;
    } else return true;
}

function validarSurname() {
    var letras = /^[A-Z a-z]+$/i; //[A-Z(espacio)a-z] -> Agrego espacio tambien como válido
    let surname = document.getElementById("apellidos");
    if (surname.value == "" || !(letras.test(surname.value)) || !(surname.value.length <= 40)) {
        return false;
    } else return true;
}

function validarTelf() {
    let telf = document.getElementById("telf");
    if (telf.value == "" || !(telf.value.length <= 9)) {
        return false;
    } else{
        return true;
    } 
}

function validarMail() {
    let email = /^(.+\@.+\..+)$/;
    let mail = document.getElementById("mail");
    if (mail.value == "" || !(email.test(mail.value))) {
        return false;
    } else{
        return true;
    } 
}



function validateData(formulario) {
    let message = "";
    let isNameGood = validarName()
    let isSurnameGood = validarSurname()
    let isTelfGood = validarTelf();
    let isMailGood = validarMail();
    let valido = "s";
    let terminos = document.getElementById("terminos");       

    if (!isNameGood) {
        valido = "n";
        message =  message + "Nombre: Solo letras y un máximo de 15 carácteres \n"
        //alert(message);
        //formulario.nombre.focus();
    }     
    if (!isSurnameGood) {
        valido = "n";
        message = message + "Apellidos: Solo letras y un máximo de 40 carácteres \n"
        //alert(message);
        //formulario.apellidos.focus();
    }
    if(!isTelfGood){
        valido = "n";
        message = message + "Teléfono: Longitud máxima de 9 dígitos\n"    
    }
    if(!isMailGood){
        valido = "n";
        message = message + "Email: Deberá cumplir con los estándares\n"    
    }
    
    //console.log(formulario.terminos.checked)    
    if (formulario.terminos.checked == false) {
        valido = "n";
    } 
    
    if (valido == "s") {
        formulario.submit();
    } else {
        if(formulario.terminos.checked == false){
            alert("Debes aceptar los términos de alta");
            formulario.terminos.checked = true;
        }else if(!isNameGood){
            formulario.nombre.focus();
        }else if(!isSurnameGood){
            formulario.apellidos.focus();
        }else if(!isTelfGood){
            formulario.telf.focus();
        }else if(!isMailGood){
            formulario.mail.focus();
        }
        alert(message)
    }       
}


function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}

function valideKey(evt) {
    // code is the decimal ASCII representation of the pressed key.
    var code = (evt.which) ? evt.which : evt.keyCode;
    if (code == 8) { // backspace.
        return true;
    } else if (code >= 48 && code <= 57) { // is a number.
        return true;
    } else { // other keys.
        return false;
    }
}

