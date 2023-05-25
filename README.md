# Tarjeta de crédito válida

## Contenido

* [1. Introducción](#1-Introducción)
* [2. Sobre la Aplicación](#2-SobrelaAplicación)
* [3. Test](#3-Test)


***
![imagen](https://raw.githubusercontent.com/Mirisaurio/DEV008-card-validation/main/thumb.png)


# 1. Introducción

"Apoya a tu Artista Local" consiste en una aplicación web donde se pueden realizar donativos mediante pago con tarjeta a Artistas locales, la idea es promover y apoyar financieramente a este gremio que usualmente  atraviesa por dificultades economicas al no contar con un imgreso fijo, el objetivo es apoyarles en la realización de proyectos personales o simplemente para sobrevivir a la vida cotidiana.

## 2. Sobre la Aplicación

La aplicación es sencilla e intuitiva, el usuario unicamente debe llenar el formulario y presionar el botón de 'donar' para que se ejecute la transacción, fue creada con HTML,CSS y JavaScript.
Cuenta con una lista desplegable para seleccionar en teoria al artista a quien se desea apoyar.
Después cuenta con un formulario para el ingreso de datos donde se valida que el campo de número de tarjeta no se encuentre vacio, ademas algunos input solo admiten números. 

 El numero de tarjeta pasa por un proceso de validación de acuerdo al algoritmo de Luhn, para ello utilizamos la función isValid(creditCardNumber), si los campos estan vaciós retorna 'sin datos' donde se muestra un mensaje en pantalla solicitando al usuario el ingreso de número de tarjeta, una vez llenado el campo si el número es valido retorna true mostrando un mensaje al usuario de 'tarjeta válida' ademas es acompañado por el enmascaramiento de los números de la tarjeta que se reliza con la función Maskify la cual devuelve una cadena de texto en la que se intercambian todos los dígitos por el caracter # excepto los últimos cuatro, si el número es invalido retorna false donde le mostrara un mensaje al usuario de 'tarjeta invalida'.
 
## 3. Test

Se realizaron pruebas unitarias con un resultado de 100% en statements,branch, functions y lines.
