var getusername = prompt("any text");

console.log(getusername);

document.getElementById("username").innerText = getusername;

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })