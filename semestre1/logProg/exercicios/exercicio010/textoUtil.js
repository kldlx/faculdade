export function cont(frase){ //Criando a função cont pra realizar a contagem de letras e palavras
    let palavras = frase.split(" "); //Criamos a variável palavras, para realizar o calculo do numero de palavras, o comando .split retira os espaços e transforma a frase em um array
    console.log(`A quantidade de palavras que a frase "${frase}" possui, são ${palavras.length} palavras `); //Aqui realizamos a saída no console, onde mostrará a frase digitada pelo usuário e o número de palavras que a mesma possui, já que a frase foi transformada em um array pelo comando .split apenas utilizamos o .lenght pra saber quantos itens possuem no array

    let letrasSemEspaco = frase.replace(/\s+/g, "").length; //Criamos uma variável para contar as letras que tem na frase, usamos o .replace que na verdade se chama expressão regular, basicamente é uma sequência de caracteres que auxiliam o programa a contar apenas as letras ou símbolos da frase, sem espaços ou espaços duplos
    console.log(`A quantidade de letras que a frase "${frase}" possui, são ${letrasSemEspaco} letras `) //Saída no console, mostra a frase, e quantas letras ela possui
}