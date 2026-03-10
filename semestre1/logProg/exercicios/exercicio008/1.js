const prompt = require ("prompt-sync")();

console.log("=== Cadastro de Heróis === \n 1. Cadastrar um Herói\n 2. Lista de Heróis\n 3. Cadastrar Missões\n 4. Lista de Missões\n 5. Selecionar um herói para uma missão\n 6. Sair");
let herois = [];
let missoes = [];

while(true){

let opção = parseInt(prompt("Digite o número da opção desejada: "));


// 1. Cadastro de Heróis

switch(opção){
    
    case 1:{ 

    let nome = prompt("Digite o nome do Herói: ");

    let força = parseInt(prompt("Digite a força do herói (De 0 à 100): "));
    
    if(força < 0 || força > 100){
        console.log("Força do Herói inválida, lembrando que é de 0 à 100");
        break;
    }
    
    let energia = parseInt(prompt("Digite a energia do herói (De 0 à 100): "));
    
    if(energia < 0 || energia > 100){
        console.log("Energia do Herói inválida, lembrando que é de 0 à 100");
        break;
    }
    
    let inteligencia = parseInt(prompt("Digite a inteligencia do herói (De 0 à 100): "));
    
    if(inteligencia < 0 || inteligencia > 100){
        console.log("Inteligencia do Herói inválida, lembrando que é de 0 à 100");
        break;
    }
    
    let voar = prompt("O herói pode voar? (1) Sim (2) Não: ");
    if(voar == 1){
        voar = true;
    }else if(voar == 2){
        voar = false;
    }else{
        console.log("Resposta Inválida, digite 1 para sim ou 2 para não");
        break;
    }

    let heroi = {
        nome: nome,
        força: força,
        energia: energia,
        inteligencia: inteligencia,
        voar: voar
    }
    
    herois.push(heroi);
    console.log("\nHerói Cadastrado com Sucesso! \n");
    console.log(`Nome: ${heroi.nome} || Força: ${heroi.força} || Energia: ${heroi.energia} || Inteligência: ${heroi.inteligencia} || Voar: ${heroi.voar}`);
   
 } break;

case 2:{
    console.log("Heróis Cadastrados no Sistema: ");

    if(herois.length == 0){
        console.log("Nenhum herói cadastrado!");
    } else {
        herois.forEach((herois, index) => {
            console.log(`\nHerói ${index + 1}`);
            console.log(`Nome: ${herois.nome}`);
            console.log(`Força: ${herois.força}`);
            console.log(`Energia: ${herois.energia}`);
            console.log(`Inteligência: ${herois.inteligencia}`);
            console.log(`Voar: ${herois.voar}`);
        });
    } 
 } break;

case 3:{
    let nome = prompt("Digite o nome da missão: ");

    let local = prompt("Digite o local da missão: ");

    let dificuldade = parseInt(prompt("Digite uma dificuldade pra missão de 1 à 5: "));

    if(dificuldade < 1 || dificuldade > 5){
        console.log("\nDificuldade Inválida (1 à 5)\n");
        break;
    } 

    let forçaMinima = parseInt(prompt("Digite a força mínima que um herói precisa ter para a missão: "));

    if(forçaMinima < 0 || forçaMinima > 100){
        console.log("\nForça mínima inválida, lembrando que é de 0 à 100\n");
        break;
    }

    let energiaMinima = parseInt(prompt("Digite a energia mínima que um herói precisa ter para a missão: "));

    if(energiaMinima < 0 || energiaMinima > 100){
        console.log("\nEnergia mínima inválida, lembrando que é de 0 à 100\n");
        break;
    }

   let inteligenciaMinima = parseInt(prompt("Digite a inteligência mínima que um herói precisa ter para a missão: "));

   if(inteligenciaMinima < 0 || inteligenciaMinima > 100){
       console.log("\nInteligência mínima inválida, lembrando que é de 0 à 100\n");
       break;
   }

    let voarPrecisa = prompt("O herói precisa voar? (1) Sim (2) Não: ");
    if(voarPrecisa == 1){
        voarPrecisa = true;
    }else if(voarPrecisa == 2){
        voarPrecisa = false;
    }else{
        console.log("\nResposta Inválida, digite 1 para sim ou 2 para não\n");
        break;
    }

    let descrição = prompt("Faça uma breve descrição da missão: ");

    let missao ={
        nome: nome,
        local: local,
        dificuldade: dificuldade,
        energiaMinima: energiaMinima,
        forçaMinima: forçaMinima,
        inteligenciaMinima: inteligenciaMinima,
        voarPrecisa: voarPrecisa,
        descrição: descrição
    }

    missoes.push(missao);
    console.log("\nMissão Cadastrada com Sucesso!\n");
    console.log(`Nome: ${missao.nome} || Local: ${missao.local} || Dificuldade: ${missao.dificuldade} || Energia Mínima: ${missao.energiaMinima} || Força Mínima: ${missao.forçaMinima} || Inteligência Mínima: ${missao.inteligenciaMinima} || Precisa Voar: ${missao.voarPrecisa} || Descrição: ${missao.descrição}`);
 } break;

case 4: {
    console.log("\nMissões Cadastradas no Sistema: \n");

    if(missoes.length == 0){
        console.log("\nNão há missões cadastradas no sistema.\n");
    } else{
        missoes.forEach((missoes, index) => {
            console.log(`Missão ${index + 1}`);
            console.log(`Nome: ${missoes.nome}`);
            console.log(`Local: ${missoes.local}`);
            console.log(`Dificuldade: ${missoes.dificuldade}`);
            console.log(`Energia Mínima: ${missoes.energiaMinima}`);
            console.log(`Força Mínima: ${missoes.forçaMinima}`);
            console.log(`Inteligência Mínima: ${missoes.inteligenciaMinima}`);
            console.log(`Precisa Voar: ${missoes.voarPrecisa}`);
            console.log(`Descrição: ${missoes.descrição}`);
        } )
    }
 } break;

case 5: {
    if(herois.length === 0 || missoes.length === 0){
        console.log("\nVocê precisa ter pelo menos 1 herói e 1 missão cadastrados!\n");
        break;
    }

    console.log("\nHeróis Disponíveis\n");
    herois.forEach((heroi, index) => {
        console.log(`${index + 1}. ${heroi.nome}`);
    });

    let escolhaHeroi = parseInt(prompt("Digite o número do seu herói: "));

    if(escolhaHeroi < 1 || escolhaHeroi > herois.length){
        console.log("Herói inválido!");
        break;
    }

    console.log("\nMissões Disponíveis\n")
    missoes.forEach((missao, index) =>{
        console.log(`${index + 1}. ${missao.nome}`);
    });

    let escolhaMissao = parseInt(prompt("Digite o número da missão que deseja selecionar: "));

    if(escolhaMissao === 0 || escolhaMissao > missoes.length){
        console.log("Missão Inválida!");
        break
    }

    let heroi = herois[escolhaHeroi -1]
    let missao = missoes[escolhaMissao -1]

    function missaoLiberada(heroi, missao){
        return(
            heroi.força >= missao.forçaMinima &&
            heroi.energia >= missao.energiaMinima &&
            heroi.inteligencia >= missao.inteligenciaMinima &&
            (!missao.voarPrecisa || heroi.voar)
        );
    }

    if(missaoLiberada(heroi, missao)){
        console.log(`\n ${heroi.nome} fez seu dever de casa na missão ${missao.nome}, ótima escolha!\n`)
    } else{
        console.log(`\n ${heroi.nome} não pode realizar a missao ${missao.nome}!\n`)
    }
 } break;

case 6:
    console.log("Saindo do sistema...");
    process.exit();

default: console.log("Opção Inválida");
}
} 
