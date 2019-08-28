$(document).ready(function() {
// Get the modal
var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("send");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var resultR = document.getElementById("resultR"); 
var valeur1 = document.getElementById("value1");
var valeur2 = document.getElementById("value2");

var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var sexe = document.getElementById("select-sexe");
var email = document.getElementById("email");

var nomR = document.getElementById("nomR");
var prenomR = document.getElementById("prenomR");
var sexeR = document.getElementById("sexeR");
var emailR = document.getElementById("emailR");

var calculR = document.getElementById("calculR");

var op = document.getElementById("select-op");
var opR = document.getElementById("opR");

function add() {
   if(op.value=="add"){
     if(verify()){
      resultR.innerHTML= parseInt(valeur1.value) + parseInt(valeur2.value);
      calculR.innerHTML = valeur1.value + " + "+valeur2.value;
      modal.style.display = "block";
     } 
   }
}

function sub() {
  if(op.value=="sub"){
    if(verify()){
      resultR.innerHTML= parseInt(valeur1.value) - parseInt(valeur2.value);
      calculR.innerHTML = valeur1.value + " - "+valeur2.value;
      modal.style.display = "block";
     } 
  }
}

function div() {
  if(op.value=="div"){
    if(verify()){
      if(parseInt(valeur2.value) > 0){
        resultR.innerHTML= parseInt(valeur1.value) / parseInt(valeur2.value);
        calculR.innerHTML = valeur1.value + " / "+valeur2.value;
        modal.style.display = "block";
      }else{
        alert("La valeur du dénominateur (valeur 2) doit être supérieure à 0.");
      }
      
     } 
  }
}

function mup() {
  if(op.value=="mup"){
    if(verify()){
      resultR.innerHTML= parseInt(valeur1.value) * parseInt(valeur2.value);
      calculR.innerHTML = valeur1.value + " * "+valeur2.value;
      modal.style.display = "block";
     } 
  }
}

function verify(){
  var ok = false;
  if(valeur1!=null && valeur1.value!=""){
    ok = true;
    $("#value1").removeClass("invalid").addClass("valid");
  }else{
    $("#value1").removeClass("valid").addClass("invalid");
    ok = false;
  } 

  if(valeur2!=null && valeur2.value!=""){
    ok = true;
    $("#value2").removeClass("invalid").addClass("valid");
  }else{
    $("#value2").removeClass("valid").addClass("invalid");
    ok = false;
  } 
  return ok;
}

function verifyForm(){
  var ok = false;
  if(nom!=null && nom.value!=""){
    ok = true;
    $("#nom").removeClass("invalid").addClass("valid");
  }else{
    $("#nom").removeClass("valid").addClass("invalid");
    ok = false;
  } 

  if(prenom!=null && prenom.value!=""){
    ok = true;
    $("#prenom").removeClass("invalid").addClass("valid");
  }else{
    $("#prenom").removeClass("valid").addClass("invalid");
    ok = false;
  } 

  if(email!=null && email.value!=""){
    ok = true;
    $("#email").removeClass("invalid").addClass("valid");
  }else{
    $("#email").removeClass("valid").addClass("invalid");
    ok = false;
  } 

  return ok;
}

// When the user clicks the button, open the modal 
btn.onclick = function() {
  if(verifyForm()){
    nomR.innerHTML = nom.value;
    prenomR.innerHTML = prenom.value;
    emailR.innerHTML = email.value;
    sexeR.innerHTML = sexe.value;
    
    if(op.value=="add"){
      opR.innerHTML = "Addition";
      add();
    }else if(op.value=="sub"){
      opR.innerHTML = "Soustraction";
      sub();
    }else if(op.value=="div"){
      opR.innerHTML = "Division";
      div();
    }else{
      opR.innerHTML = "Multiplication";
      mup();
    }
  }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

});