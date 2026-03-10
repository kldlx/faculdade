export function dobrar(a){ //Export Function Dobrar, pois iremos exportar a função pro app.js
    return a * 2 // Retorna o valor indicado * 2, ou seja, seu dobro
}

export function quadrado(a){ //Export Function Quadrado, pois iremos exportar a função pro app.js
    return a * a //Retorna o número multiplicado por ele mesmo 
}

export function parImpar(a){ //Export Function ParImpar, pois iremos exportar a função pro app.js
  if(a % 2 === 0){
    return 'PAR'
  } else{
    return 'ÍMPAR'
  } // Se o número for par, retorna par, se nn retorna impar
}