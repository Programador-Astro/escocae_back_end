const { checkout } = require("../login");

class ValidationsCreateUser {
    constructor(nome,sobrenome, email, empresa, senha) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.empresa = empresa;
        this.senha = senha;
        this.validar();
    }
    validar(){
        this.validarNome();
        this.validarSobrenome();
        this.validarEmail();
        this.validarEmpresa();
        this.validarSenha();
    }
    validarNome() {
        if (!this.nome) {
            throw new Error('Nome é obrigatório');
        }
    }
    validarSobrenome(){
        if (!this.sobrenome) {
            throw new Error('Sobrenome é obrigatório');
        }
    }
    validarEmail() {
        if (!this.email) {
            throw new Error('Email é obrigatório');
        }
        if (!this.email.includes('@')) {
            throw new Error('Email inválido');
        }
    }
    validarEmpresa(){
        if(!this.empresa){
            throw new Error("Empresa é obrigatória.")
        }
    }
    validarSenha(){
        let checkPassword = true;
        if(!this.senha.length > 8){
            checkPassword = false;
        }
        if(!/[0-9]/.test(this.senha) || !/[a-zA-Z]/.test(this.senha)){
            checkPassword = false;
        }
        if(!checkPassword) {
            throw new Error("Password inválido.");   
        }
    }
}
module.exports =  ValidationsCreateUser;
 