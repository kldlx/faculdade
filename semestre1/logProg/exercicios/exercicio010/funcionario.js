export default class funcionario{ //Criamos uma classe funcionario para exportar ela pro app.js
    constructor(nome, cargo, salario){ //Criamos os atributos do funcionário (nome, cargo, salario)
        this.nome = nome; //Atributo do objeto Funcionario
        this.cargo = cargo.toLowerCase(); //Atributo do objeto Funcionario.toLowerCase, pra não haver diferenciação entre maiusculas e minúsculas
        this.salario = salario; //Atributo do objeto Funcionario
    }
    calculoAumento(){ //Função pra calcular o aumento do saláro de acordo com o seu respectivo cargo
        let porcentagem = 0; //Variável porcentagem, pra dizer que ela se inicia no zero e aumenta conforme o cargo

        if (this.cargo === 'gerente'){ //Gerente - Aumento de 15% no salário
            porcentagem = 15;
        } else if(this.cargo === 'supervisor'){ //Supervisor - Aumento de 10% no salário
            porcentagem = 10;
        } else if(this.cargo === 'operador'){ //Operador - Aumento de 5% no salário
            porcentagem = 5;
        } else{
            porcentagem = 0 //Restante dos cargos - Aumento de 0% no salário
        }

        const aumento = this.salario * (porcentagem / 100) // Constante de aumento de salário, salario definido no objeto funcionario * (porcentagem do cargo/100)
        const novoSalario = this.salario + aumento; // O novo salário vai ser definido pelo salario antigo, mais o valor do aumento

        return novoSalario.toFixed(2); // Retorna-se o valor da variável Novo Salário.toFixed(2)
    }
}