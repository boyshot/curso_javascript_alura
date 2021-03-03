var titulo = document.querySelector(".titulo");

titulo.addEventListener("click", () => {
  console.log("Olá eu fui clicado!");
});

//console.log(titulo.textContent);

titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");
//console.log(pacientes);

for (var i = 0; i < pacientes.length; i++) {
  CalculaIMCValidaPaciente(pacientes[i])
}

function CalculaIMCValidaPaciente(paciente) {
  if (ValidaPaciente(paciente)) {
    paciente.querySelector(".info-imc").textContent = calculaIMC(
      paciente.querySelector(".info-peso").textContent,
      paciente.querySelector(".info-altura").textContent);
  } else {
    paciente.classList.add("paciente-invalido");
  }
}

function ValidaPaciente(paciente) {

  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;
  var imcPaciente = paciente.querySelector(".info-imc");

  var pesoEhValido = validaPeso(peso);
  var alturaEhValido = validaAltura(altura);

  if (!pesoEhValido) {
    //console.log("Peso inválido! Valor Digitado: [" + peso + "]");
    imcPaciente.textContent = "Peso inválido";
    pesoEhValido = false;
  }

  if (!alturaEhValido) {
    //console.log("Altura inválida! Valor Digitado: [" + altura + "]");
    alturaEhValido = false;
    imcPaciente.textContent = "Altura inválido";
  }

  return pesoEhValido && alturaEhValido;
}

function calculaIMC(peso, altura) {

  var imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function validaPeso(peso) {
  return peso >= 0 && peso < 1000;
}

function validaAltura(altura) {
  return altura > 0 && altura < 3.00;
}