function deleteTumbleweed() {
    var element = document.getElementsByClassName("tumbleweed").item(0);
    element.remove();
}

function addContent() {
    if (document.getElementsByClassName("tumbleweed").item(0) && checkForm()) {
        deleteTumbleweed()
    }

    var lista = document.getElementById("order_title");
    var username = document.getElementById("username").value;
    var age = document.getElementById("age").value;
    var order = document.getElementById("order").value;

    if (checkForm()) {
        lista.insertAdjacentHTML('afterend', "<h2 class='user'> -Username: " + username + "</h2>" +
        "<h2 class='user'> -Age: " + age + "</h2>" + "<h2 class='user'> -Order: " + order + "</h2><br>");
    }
}

function checkForm() {
    if (username != "" && age != "" && order != "") {
        return true;
    }
}

