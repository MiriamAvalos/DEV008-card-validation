import validator from './validator.js';


const formulario = document.getElementById("form")

formulario.addEventListener("submit", function (e) {

  e.preventDefault();

  const card = (document.getElementById("numeroTarjeta")).value
  //cree una variable para almacenar la validacion del algoritmo
  const respuestaValida = validator.isValid(card);
  
  
  // creo una condicion y llamo a la variable y al id del parrafo para insertar el mensaje de valido o invalido 
  if (respuestaValida ===true) {
    document.getElementById("mensajev").innerHTML = "Tarjeta válida" + "<p></p>" + "Gracias por su donación :)"; //inner inserta un elemento,mensaje al html
    
  } else if(respuestaValida==='sin datos'){
    document.getElementById("mensajev").innerHTML = 'Ingrese su número de tarjeta'

  }
  else {
    document.getElementById("mensajev").innerHTML = "Tarjeta inválida"
    
  }
  //mostrar la mascara en el input
  document.getElementById("numeroTarjeta").value = validator.maskify(card);



})






export default validator;