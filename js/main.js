
function addContent() {

    var lista = document.getElementById("order_title");
    username = document.getElementById("username").value;
    age = document.getElementById("age").value;
    order = document.getElementById("order").value;

    if (document.getElementsByClassName("tumbleweed").item(0) && checkForm()) {
        deleteTumbleweed()
    }

    if (checkForm()) {
        lista.insertAdjacentHTML('afterend', "<h2 class='user'> -Username: " + username + "</h2>" +
        "<h2 class='user'> -Age: " + age + "</h2>" + "<h2 class='user'> -Order: " + order + "</h2><br>");
    }
}

function checkForm() {
    if (username != '' && age != '' && order != '') {
        return true;
    }
}

function deleteTumbleweed() {
    var element = document.getElementsByClassName("tumbleweed").item(0);
    element.remove();
}