function sayHello() {
    var name = window.txtName.value;
    document.getElementById('lbl').innerHTML="Hello "+name;
}
function sayHello2(name , textbox) {
    window.lbl.innerHTML="Hello "+ name;
    textbox.value = "Done!"  ;
}
function showInfo(id,name,addresse) {
    var id =prompt ('votre id');
    var name = prompt('votre name');
    var addresse = prompt ('votre adresse');
    window.lbl.innerHTML= 'votr id est' +' '+id+'<br>'+' votre name est'+' '+name+'<br>'+'votre adresse est'+' '+addresse;
    window.lbl.style.color = 'red';
}


// page mousse ou seure


function big(img) {
  img.style.height = 250;
  img.style.width = 250;
  
}
function small(img) {
  img.style.height = 90;
  img.style.width = 90;
}
function o1(img) {
  img.style.opactity = 0.5;
}
function o2(img) {
  img.style.opactity = 1;
}

function getXY(e) {
  var x = e.clientX;
  var y = e.clientY;
  window.lbl.innerHtml = "X : " + x + " ; Y : " + y ;
}
