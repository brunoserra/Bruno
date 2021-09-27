function enviar() {

    var nome = document.getElementById('nome');
    var sobrenome = document.getElementById('sobrenome');
    var rg = document.getElementById('rg');
    var cpf = document.getElementById('cpf');
    var ld = document.getElementById('ld');
    var cep = document.getElementById('cep');
    var tel = document.getElementById('tel');
    var cel = document.getElementById('cel');
    var email = document.getElementById('email');
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
    //valida rg 
    if (rg.value == "" ||
        rg.value.length < 7) {
        alert("Digite os sete numeros do sue RG");
        rg.focus();
        return;


    }
    //valida se o campo cpf possui 11 digitos
    if (cpf.value == "" ||
        cpf.value.length < 11 || cpf.value.length > 11 || cpf.value == "00000000000" || cpf.value == "11111111111" || cpf.value == "22222222222" || cpf.value == "33333333333" || cpf.value == "44444444444" || cpf.value == "55555555555" || cpf.value == "66666666666" || cpf.value == "77777777777" || cpf.value == "88888888888" || cpf.value == "99999999999" || cpf.value == "12345678910") {
        alert("Por Favor digite um CPF Válido ");
        cpf.focus();
        return;

    }
    //valida endereço d
    if (ld.value == "" || ld.value.length < 6) {
        alert("Digite corretamente seu endereço");
        ld.focus();
        return;

    }
    if (numero.value == "" || numero.value.length < 1) {
        alert('Digite o número da sua casa ou Apartamento');
        numero.focus();
        return;
    }
    if (cep.value == "" || cep.value.length > 8 || cep.value.length < 8) {
        alert("Digite o CEP com 8 mumeros");
        cep.focus();
        return;

    }
    if (bairro.value == "" || bairro.value.length < 3) {
        alert('Por favor digite seu Bairro');
        bairro.focus();
        return;

    }
    if (cidade.value == "" || cidade.value.length < 3) {
        alert('Digite o Nome da sua cidade ');
        cidade.focus();
        return;
    }
    if (ddd.valeu == "" || ddd.value.length < 3 || ddd.value.length > 3) {
        alert("digite corretamente o DDD como Ex: 011");
        ddd.focus();
        return;
    }
    if (tel.valeu == "" || tel.value.length > 8 || tel.value.length < 8) {
        alert("Digite seu telefone fixo com 8 digitos");
        tel.focus();
        return;

    }
    if (cel.valeu == "" || cel.value.length > 8 || cel.value.length < 8) {
        alert("Digite seu telefone fixo com 8 digitos");
        tel.focus();
        return;
    }
    if (email.value == "") {
        alert("Por favor digite um email valido");
        email.focus();
        return;

    }




    // mensagem final se tudo preenchido ok
    alert('Formulário enviado , Boa Sorte');
    return;

}