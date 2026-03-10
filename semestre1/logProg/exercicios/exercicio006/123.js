const prompt = require ('prompt-sync')();

let contatos = [];

while (true){
    console.log("\n=== LISTA TELEFÔNICA ===");
    console.log("Digite um número de 1 à 6");
    
   console.log("Escolha uma das opções abaixo: \n 1. Adicionar contato➕\n 2. Editar contato📝 \n 3. Buscar contato🔍\n 4. Remover contato🗑️\n 5. Listar contatos📜\n 6. Sair ❌\n")

   let opcao = parseInt(prompt("Digite um número de 1 à 6: "));

    if (opcao === 6) {
        console.log("Encerrando o programa...");
        break;
    } else if(opcao < 1 || opcao > 6){
        console.log("\nOpção inválida! Tente novamente.");
    }
switch(opcao){

    case 1:{    
    console.log("\n1. Adicionar contato➕\n");
    
    let nome = prompt("Digite o nome do contato: ");
    let numero = prompt("Digite o numero do contato: ");

    contatos.push({nome, numero});

    console.log("\nContato adicionado!\n");
    } break;

    case 2:{
        console.log("\nEditar contato 📝");
        if (contatos.length === 0) {
            console.log("Não há contatos para editar.");
            break;
        }

        let nomeBusca = prompt("Digite o nome do contato que deseja editar: ").trim();
        let contatoEncontrado = contatos.find(contato => contato.nome.toLowerCase() === nomeBusca.toLowerCase());

        if (!contatoEncontrado) {
            console.log("Contato não encontrado! Tente novamente.");
        } else {
            console.log(`Contato encontrado: Nome: ${contatoEncontrado.nome} | Número: ${contatoEncontrado.numero}`);
            let opcaoEdicao = prompt("Deseja editar o (1) Nome ou (2) Número? Digite 1 ou 2: ").trim();

            if (opcaoEdicao === "1") {
                let novoNome = prompt("Digite o novo nome: ").trim();
                if (!novoNome) {
                    console.log("Nome inválido! Tente novamente.");
                } else {
                    contatoEncontrado.nome = novoNome;
                    console.log("Nome editado com sucesso!");
                }
            } else if (opcaoEdicao === "2") {
                let novoNumero = prompt("Digite o novo número: ").trim();
                if (!novoNumero) {
                    console.log("Número inválido! Tente novamente.");
                } else {
                    contatoEncontrado.numero = novoNumero;
                    console.log("Número editado com sucesso!");
                }
            } else {
                console.log("Opção inválida! Tente novamente.");
            }
        }
    } break;

    case 3:{
            console.log("\nBuscar contato🔍\n");

            if(contatos.length === 0){
                console.log("Não há contatos adicionados");
            } else{
                let nomeContato = prompt("Digite o nome do contato que deseja encontrar: ");
                let encontrado = contatos.filter(contatos => contatos.nome.toLowerCase().includes(nomeContato.toLowerCase()))
                if(encontrado.length === 0){
                    console.log("Contato não encontrado");
                } else{
                    console.log("\nContatos Encontrados: ");
                    encontrado.forEach(e =>{ console.log(`Nome: ${e.nome} | Número: ${e.numero}`)})
                }
            
            }

           
       
    } break;

    case 4:{
        console.log("\nRemover contato🗑\n");
        
        if(contatos.length === 0){
            console.log("Não há contatos na lista.");
            break;
        }
        
        
        let nome = prompt("Digite o nome do contato que deseja excluir: ").toLowerCase(); //ira pedir ao usuario o nome do contato que ele queira excluir
        let indice = contatos.findIndex(contato => contato.nome.toLowerCase() === nome); // com o findIndex ele ira procurar o contato na lista de contatos e retornar o indice do contato que o usuario deseja excluir

        if(indice !== -1){ // se o indice for diferente de -1, quer dizer que o contato foi encontrado
            contatos.splice(indice, 1); // vai excluir o contato digitado
            console.log("Contato excluído com sucesso!");
        }else{
            console.log("Contato não encontrado!"); // caso o indice seja igual a -1, quer dizer que o contato não foi encontrado
        }
 
    } break;

    case 5:{
        console.log("\nListar contatos📜\n");

        if(contatos.length === 0){
            console.log("Lista de contatos vazia.");
        }
        contatos.forEach(contato => {
            console.log(`Nome: ${contato.nome} | Número: ${contato.numero}`);
        })
    } break;
    default: console.log("Opção inválida");
   }
}