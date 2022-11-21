

function validarEmail() {
  console.log("Ingreso a validar email");
  var email = document.getElementById("correo").value;
  console.log(email); // let res = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  // return res.test(email);

  if (email.length == 0) {
    document.getElementById("mensaje").innerHTML = "EL email no puede estar vacío"; //console.log("Debe ingresar algun caracter")
  } else if (email.indexOf("@") == -1) {
    document.getElementById("mensaje").innerHTML = "El email debe contener @"; //console.log("El email debe tener un @")
  //} else if (email.indexOf("codoACodo.gob.ar") == -1) {
  //  document.getElementById("mensaje").innerHTML = "Debe ser del dominio codoACodo.gob.ar";
  } else {
    document.getElementById("mensaje").innerHTML = "El email es correcto";
    document.getElementById("mensaje").className = "bg-info rounded my-3 px-3 text-center";
  } // const res = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  // return res.test(String(email).toLowerCase());
}

let ticket=200
var total = 0
//categoria=document.getElementById("categoria").value;

//function calcularTicket(categoria) {
//  switch (categoria) {
//    case categoria=="1":
//      porcentaje=80;
//      result= ticket*porcentaje/100
//      console.log(result)
//      //console.log(`Total a pagar: $ ${result} `)
//      //document.getElementById("msjPago").innerHTML = `Total a pagar: $ ${result} `
//      cantidad = document.getElementById("cantidad").value;
//      total=result*cantidad;
//      document.getElementById("msjPago").innerHTML = `Total a pagar: $ ${total} `;
//      break;
//
//    case categoria=="2":
//      porcentaje=50;
//      result= ticket*porcentaje/100
//      console.log(result)
//      //console.log(`Total a pagar: $ ${result} `)
//      //document.getElementById("msjPago").innerHTML = `Total a pagar: $ ${result} `
//      cantidad = document.getElementById("cantidad").value;
//      total=result*cantidad;
//      document.getElementById("msjPago").innerHTML = `Total a pagar: $ ${total} `;
//      break;
//
//    case categoria=="3":
//      porcentaje=15;
//      result= ticket*porcentaje/100
//      console.log(result)
//      //console.log(`Total a pagar: $ ${result} `)
//      //document.getElementById("msjPago").innerHTML = `Total a pagar: $ ${result} `
//      cantidad = document.getElementById("cantidad").value;
//      total=result*cantidad;
//      document.getElementById("msjPago").innerHTML = `Total a pagar: $ ${total} `;
//      console.log(total)
//      break;
//    
//    }
  //ticket = result;
  //return ticket; // return ticket * categoria;
  //cantidad = document.getElementById("cantidad").value;
  //total=result*cantidad;
  //document.getElementById("msjPago").innerHTML = `Total a pagar: $ ${total} `;
//      return total


  //switch (categoria) {
  //  case "Estudiante":
  //    porcentaje = 80;
  //    break;
  //  case "Trainee":
  //    porcentaje = 50;
  //    break;
  //  case "Junior":
  //    porcentaje = 15;
  //    break;
  //  default:
  //    break;
  //}
  //ticket += ticket * porcentaje / 100;
  //return ticket; // return ticket * categoria;

function calcularTicket() {
  categoria=document.getElementById("categoria").value;
  if (categoria==1) {
    porcentaje=80;
    descuento=ticket*porcentaje/100;
    result = ticket-descuento;
    console.log(result);
    //console.log(`Total a pagar: $ ${result} `)
    //document.getElementById("msjPago").innerHTML = `Total a pagar: $ ${result} `
    cantidad = document.getElementById("cantidad").value;
    total=result*cantidad;
    document.getElementById("msjPago").innerHTML = `Total a pagar: $ ${total} `;
 
  } else if (categoria==2) {
    porcentaje=50;
    descuento=ticket*porcentaje/100;
    result = ticket-descuento;
    console.log(result);
    //console.log(`Total a pagar: $ ${result} `)
    //document.getElementById("msjPago").innerHTML = `Total a pagar: $ ${result} `
    cantidad = document.getElementById("cantidad").value;
    total=result*cantidad;
    document.getElementById("msjPago").innerHTML = `Total a pagar: $ ${total} `;
  
  } else  {
    porcentaje=15;
    descuento= ticket*porcentaje/100;
    result = ticket - descuento;
    console.log(result);
    //console.log(`Total a pagar: $ ${result} `)
    //document.getElementById("msjPago").innerHTML = `Total a pagar: $ ${result} `
    cantidad = document.getElementById("cantidad").value;
    total=result*cantidad;
    document.getElementById("msjPago").innerHTML = `Total a pagar: $ ${total} `;
    //console.log(total);
  return total
  }
  document.getElementById("msjPago").value = `Total a pagar: $ ${total}`;
  document.getElementById("msjPago").onclick = "borrar();";

}


  //ticket = result;
  //return ticket; // return ticket * categoria;
  //cantidad = document.getElementById("cantidad").value;
  //total=result*cantidad;
  //document.getElementById("msjPago").innerHTML = `Total a pagar: $ ${total} `;
//      return total


function raizCuadrada(x) {
    console.log(x)
    if (x < 0) {
        document.getElementById("msjRaiz").innerHTML = `Raiz cuadrada de valores negativos no existe `
        document.getElementById("msjRaiz").className = "bg-danger rounded my-2 px-1 text-center"
    } else {
        let result = Math.sqrt(x)
        console.log(`Raiz cuadrada de ${x}=${result} `)
        document.getElementById("msjRaiz").innerHTML = `Raiz cuadrada de ${x} = ${result} `
    }
}

function generarTicket(calcularTicket) {
  console.log("Total a pagar: $ ".concat(ticket));
}

//console.log("Sueldo de empleado Cat A= ".concat(sueldoA));
//console.log("Sueldo de empleado Cat B= ".concat(sueldoB));
//console.log("Sueldo de empleado Cat C= ".concat(sueldoC)); // funcion flecha

function borrar() { 
  document.getElementById("msjPago").value = "";
  document.getElementById("msjPago").onclick = "borrar();";
  //document.getElementsByClassName("pago")[0].value = "";
  //document.getElementsByTagName("textarea")[0].value = "";
}