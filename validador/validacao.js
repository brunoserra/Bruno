function enviar() {

    var nome = document.getElementById('nome');
    var sobrenome = document.getElementById('sobrenome');
    varrg = document.getElementsByTagName('rg');
    //esta parte valida o nome
    if (nome.value == "" ||
        nome.value.length < 3) {
        alert('Digite seu Nome');
        nome.focus;
        return;

    }
    // esta valida o sobrenome
    if (sobrenome.value == "" || sobrenome.value.length < 4) {
        alert("Digite seu Sobrenome");
        sobrenome.focus();
        return;
    }
    if (rg.value == "" ||
        rg.value.length < 7) {
        alert("Digite os sete numeros do sue RG");
        rg.focus();
        return;


    }
    if (cpf.value == "" ||
        cpf.value.length < 11 || cpf.value.length > 11 || cpf.value == "00000000000" || cpf.value == "11111111111" || cpf.value == "22222222222" || cpf.value == "33333333333" || cpf.value == "44444444444" || cpf.value == "55555555555" || cpf.value == "66666666666" || cpf.value == "77777777777" || cpf.value == "88888888888" || cpf.value == "99999999999" || cpf.value == "12345678910") {
        alert("Por Favor digite um CPF Válido ");
        cpf.focus();
        return;

    }


    // mensagem final se tudo preenchido ok
    alert('Formulário enviado , Boa Sorte');
    return;

}