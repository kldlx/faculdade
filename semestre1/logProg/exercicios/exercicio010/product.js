export default class produto{ //Criando a classe produto
    constructor(nome, preço){ //Definindo os atributos nome e preço
        this.nome = nome, 
        this.preço = preço
    }

    desconto(d){ //Criando a função desconto
        let desconto = this.preço * (d / 100); //O desconto vai ser o valor do atributo preço * (d = valor do desconto em % / 100)
        let preçoDesconto = this.preço - desconto; // preçoDesconto é o preço do produto - a porcentagem que foi gerada na variável desconto
        return preçoDesconto; //Retorna o preço com desconto
    }
}


