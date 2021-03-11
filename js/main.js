

/* Función encargada de añadir contenido extraido del formulario al codigo HTML. */
function addContent() {

    /* Recojemos elementos mediante sus id's */

    lista = document.getElementById("order_title");
    username = document.getElementById("username").value;
    age = document.getElementById("age").value;
    order = document.getElementById("order").value;

    /* Comprobamos que existe el elemento "tumbleweed" y validamos el formulario, si es asi ejecutamos la funcion deleteTumbleweed() */
    if (document.getElementsByClassName("tumbleweed").item(0) && checkForm()) {
        deleteTumbleweed();
    }

    /* Condicional evaluando la validacion del formulario, si se valida,
    añade el contenido al elemento recogido anteriormente en la variable "lista",
    y lo introduce al codigo HTML con insertAdjancentHTML()  */
    if (checkForm()) {
        lista.insertAdjacentHTML('afterend', "<h2 class='user'> -Username: " + username + "</h2>" +
        "<h2 class='user'> -Age: " + age + "</h2>" + "<h2 class='user'> -Order: " + order + "</h2><br>");
    }
}

/* Funcion encargada de comprobar que el contenido del formulario no es nulo. */
function checkForm() {
    if (username != '' && age != '' && order != '') {
        return true;
    }
}

/* Funcion encargada de eliminar el elemento "tumbleweed". */
function deleteTumbleweed() {
    var element = document.getElementsByClassName("tumbleweed").item(0);
    element.remove();
}