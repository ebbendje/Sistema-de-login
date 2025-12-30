const criar = document.getElementById("createform")

function validarNomes(pnome) {

    for (let i = 0; i < pnome.length; i++) {
        if (pnome[i] === " ") {
            alert("O primeiro nome não pode conter espaços!");
            return false;
        }
    }

    return true;
}

function validarSenha(passe, confirmarPasse) {
    
    if (passe.length < 8) {
        alert("A senha deve ter pelo menos 8 caracteres!");
        return false;
    }
    if (passe !== confirmarPasse) {
        alert("As senhas não coincidem!");
        return false;
    }

    return true;
}

criar.addEventListener("submit", (e) => {
    e.preventDefault();

    const pnome = document.getElementById("Pnome").value;
    const unome = document.getElementById("Unome").value;
    const nome = "${pnome} ${unome}";
    const nacionalidade = document.getElementById("Nacionalidade").value;
    const numero = document.getElementById("Number").value;
    const user = document.getElementById("Username").value.toLowerCase();
    const email = document.getElementById("Email").value;
    const passe = document.getElementById("Senha").value;
    const confirmarPasse = document.getElementById("Confirmar_senha").value;

    const nomesValidos = validarNomes(pnome);
    const senhaValida = validarSenha(passe, confirmarPasse);

    if (nomesValidos && emailValido && senhaValida && camposValidos)
        criar.submit();
    
});

