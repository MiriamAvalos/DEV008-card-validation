const validator = {

  isValid: function(creditCardNumber) {
    //Convertir el string  a un arreglo con split
    //Inicio teoria de luhun
    if (creditCardNumber==='')
    { return 'sin datos'
    } else{

      const tarjetaArray = creditCardNumber.split('');

      //dar reversa al numero

      tarjetaArray.reverse();


      //aplicar ciclo for para seleccionar numeros pares

      let suma = 0;
      for (let i = 0; i < tarjetaArray.length; i += 1) {

        //multiplica los numeros que estan en las posiciones impares 
        if (i % 2 !== 0) {

          tarjetaArray[i] = tarjetaArray[i] * 2
          //Verificar que el numero sea mayor a 9
          if (tarjetaArray[i] > 9) {
          //restar 9 a numeros de dos digitos
            tarjetaArray[i] = tarjetaArray[i] - 9

          }

        }
        else {
          tarjetaArray[i] = parseInt(tarjetaArray[i]);
        }
      
        suma = suma + (tarjetaArray[i]);
      }
    
      //SUMA
      //creo una variable y hago un ciclo for para recorrer todo el array e ir sumando los valores obtenidos
      //dividir entre 10
      return suma % 10 === 0 
    //compara si el resuduo es igual a 0 y retorna un true o un false
    }

  },  //llamo a la funcion creditCardNumber
  maskify: function(creditCardNumber) { 
    return (creditCardNumber.slice(0,-4).replace(/./g, "#") + creditCardNumber.slice(-4));
    
     
    
  },
    
};


export default validator;