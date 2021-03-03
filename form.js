var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", (event) => {
    //Remove o comportamento padrão de um botão ou qualquer outro no html
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    var paciente = ObtemPacienteForm(form);

    var erro = validaPacienteForm(paciente);
    var msgErro = document.querySelector("#message-erro");
    msgErro.innerHTML = "";

    if (erro.length <= 0) {
        adicionaPaciente(paciente);
    }
    else {

        msgErro.innerHTML = "";

        for (i = 0; i < erro.length; i++) {
            var li = document.createElement("li");
            li.textContent = erro[i];
            msgErro.appendChild(li);
        }
        //msgErro.textContent = erro;
        return;
    }

    form.reset();
});

function adicionaPaciente(paciente) {
    var trPaciente = montaTrPaciente(paciente);
    var tabelaPacientes = document.querySelector("#tabela-pacientes");
    tabelaPacientes.appendChild(trPaciente);
}

function montaTrPaciente(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTdPaciente(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTdPaciente(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTdPaciente(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTdPaciente(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTdPaciente(paciente.imc, "info-imc"));

    return pacienteTr;
}

function ObtemPacienteForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value),
    };

    return paciente;
}

function montaTdPaciente(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    return td;
}


function validaPacienteForm(paciente) {
    var erros = [];

    if (paciente.nome.length == 0)
        erros.push("O nome não pode ser em branco");
    if (!validaPeso(paciente.peso))
        erros.push("Peso Inválido");
    if (!validaAltura(paciente.altura))
        erros.push("Altura Inválido");
    return erros;
}
