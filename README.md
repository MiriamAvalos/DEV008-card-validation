# Tarjeta de crédito válida


***

# Introducción

"Apoya a tu Artista Local" consiste en una aplicación web donde se pueden realizar donativos mediante pago con tarjeta a Artistas locales, la idea es promover y apoyar financieramente a este gremio que usualmente atraviesa por dificultades económicas al no contar con un ingreso fijo.
El objetivo es apoyarles en la realización de proyectos personales o simplemente para sobrevivir a la vida cotidiana mientras se sumergen en la creación de obra.


![imagen de aplicación](https://raw.githubusercontent.com/Mirisaurio/DEV008-card-validation/feature/proyecto/web1.png)

## Sobre la Aplicación

La aplicación es sencilla e intuitiva, el usuario únicamente debe llenar el formulario y presionar el botón de 'donar' para que se ejecute la transacción.
 La pantalla cuenta con una lista desplegable para seleccionar el artista a quien se desea apoyar. Después cuenta con un formulario para el ingreso de datos donde se valida que el campo de número de tarjeta no se encuentre vacío, además algunos input sólo admiten números y se despliega un mensaje solicitando que se llenen con los campos requeridos.
El número de tarjeta pasa por un proceso de validación de acuerdo al algoritmo de Luhn, para ello utilizamos la función isValid(creditCardNumber) . Si los campos están vacíos retorna 'sin datos' donde se muestra un mensaje en pantalla solicitando al usuario el ingreso de número de tarjeta, una vez llenado el campo si el número es válido retorna true mostrando un mensaje al usuario de 'tarjeta válida' . Si el número es invalido retorna false donde le mostrará un mensaje al usuario de 'tarjeta inválida'. El input de número de tarjeta está acompañado por el enmascaramiento de los números que se realiza con la función Maskify la cual devuelve una cadena de texto en la que se intercambian todos los dígitos por el carácter # excepto los últimos cuatro.

 
## Test

Se realizaron pruebas unitarias con un resultado de 100% en statements,branch, functions y lines.

![imagen de test](https://raw.githubusercontent.com/Mirisaurio/DEV008-card-validation/feature/proyecto/test.png)