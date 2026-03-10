export default class aluno{ //Criando uma classe aluno para realizar os calculos e com o export, pra mandarmos ela pro app.js
    constructor (nome, n1, n2){ //Constructor é como uma fábrica, que monta um objeto com os valores que eu passar, nesse caso valor de nome, nota1 e nota 2
        this.nome = nome; //this. serve pra dizer que é um atributo do objeto, nome é um atributo de aluno, assim como n1 e n2
        this.n1 = n1;
        this.n2 = n2;
    }

    media(){ 
        return (this.n1 + this.n2) / 2
    } //Função pra calcular a média, retornando a soma dos atributos das notas 1 e 2 e dividindo por 2 realizando a média

    aprovado(){
        const media = this.media();
        if(media >= 6){
            return 'Aluno Aprovado!'
        } else{
            return 'Aluno Reprovado!'
        } 
        //Função pra ver se o aluno foi aprovado, criamos um atributo média, e utilizamos o if e else para retornar se o aluno foi aprovado ou reprovado, se a média for maior que 6 é aprovado, se não, ele é reprovado
    }
    
}