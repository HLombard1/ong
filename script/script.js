document.getElementById("formAdocao").addEventListener("submit", function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let telefone = document.getElementById("telefone").value;
    let cpf = document.getElementById("cpf").value;
    let idade = document.getElementById("idade").value;
    let cidade = document.getElementById("cidade").value;
    let moradia = document.getElementById("moradia").value;
    let quintal = document.querySelector('input[name="quintal"]:checked');
    let pet = document.querySelector('input[name="pet"]:checked');
    let h = document.getElementById("h").value;
    let motivo = document.getElementById("adoção").value;

    if (nome.length < 3) return alert("nome invalido");
    if (!email.includes ("@")) return alert("email invalido")
    if (telefone.length < 8) return alert("telefone invalido");
    if (cpf.length <9) return alert("cpf invalido");
    if (idade < 18) return alert("idade insuficiente");
    if (!moradia) return alert("O tipo de moradia não esta selecionado");
    if (!quintal ) return alert("O tipo de quintal não esta  selecionado");
    if (motivo.length < 10) return alert("motio invalido");
    




    document.getElementById("resultado").innerHTML = "cadastro realizado com sucesso!<br>" + "Nome: " + nome;
});