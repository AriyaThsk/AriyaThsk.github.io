function display() {
    var inputName2 = document.getElementById("name2");
    var inputPassword2 = document.getElementById("pass2");

    inputName2.innerHTML = "Username : " + localStorage.getItem("sName");
    inputPassword2.innerHTML = "Password : " + localStorage.getItem("sPass");
}
