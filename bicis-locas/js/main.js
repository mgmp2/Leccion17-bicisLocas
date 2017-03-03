function validateForm(){

  var nom   = document.getElementById("name");
  var ap    = document.getElementById("lastname");
  var email = document.getElementById("input-email");
  var pas   = document.getElementById("input-password");


  var expRegName  = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/g;
  var expRegLast  = /[^a-z-123456789]+([a-z]{2,12})+\s([^a-z-123456789]+([a-z]{2,8}))/g;
  var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if(!expRegName.test(nom.value)){
    alert("Escribir correctamente \nCampo nombre: empezando por Mayúscula");
  }

  else if(!expRegLast.test(ap.value)){
    alert("Escribir correctamente \nCampo apellido: Sus dos apellidos empezando por Maýucula");
  }
  else if(!expRegEmail.test(email.value)){

    alert("Escribir correctament \nCampo email de manera correcta");
  }

}
