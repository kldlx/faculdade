CREATE DATABASE sistemaVendas; /* Comando utilizado para criar um sistema de vendas de bebidas */
USE sistemaVendas; /* Comando para utilizar o sistema de vendas de bebidas */

CREATE TABLE produtos( /* Criando a tabela produtos, onde serão armazenados dados sobre os produtos */

id_produto INT AUTO_INCREMENT PRIMARY KEY, /* Criando o id_produto, pois cada produto terá seu próprio id, utilizamos o AUTO_INCREMENT pra quando um novo produto for adicionado no banco, ele completar seu id automaticamente */
nome VARCHAR (100) NOT NULL, /* Nome do produto com limite de 100 caracteres, utilizamos o NOT NULL pra deixar claro que não pode ser vazio */
preço DECIMAL (10, 2) NOT NULL, /* Preço do produto em decimais, ou seja, numeros com ou sem vírgulas, utilizamos o NOT NULL pra deixar claro que não pode ser vazio */
estoque INT NOT NULL /* Estoque do produto, quantidade disponível, alguns produtos tem diferenciação entre unidade, kilograma, grama, mas neste banco utilizaremos apenas números inteiros, pois usamos unidades de produtos, utilizamos o NOT NULL pra deixar claro que não pode ser vazio */
);

CREATE TABLE vendas( /* Aqui estamos criando a tabela de vendas, onde serão armazenados os dados sobre vendas aos clientes */

id_venda INT AUTO_INCREMENT PRIMARY KEY, /* Criamos o id_venda, pois cada venda tem seu próprio id, e utilizamos também o AUTO_INCREMENT pra quando uma nova venda for adicionado ao banco, ele completar seu id automaticamente  */
id_produto INT, /* Aqui colocamos o id produto para se relacionar como uma chave estrangeira com o id_venda, cada id_produto terá um id_venda */
quantidade INT NOT NULL, /* Quantidade de produtos que forma vendidos em número inteiro, e o campo não pode estar vazio */
dataVenda DATE, /* Data que a venda foi realizada, a data necessitas estar na seguinte ordem: ano - mes - dia */
FOREIGN KEY (id_produto) REFERENCES Produtos(id_produto) /* Este comando aponta que o campo id_produto na tabela de vendas é uma chave estrangeira, faz refêrencia a outra tabela, e o REFERENCES, indica pra qual campo da outra tabela está se referindo, no caso id_produto da tabela produtos */
);

INSERT INTO produtos (nome, preço, estoque) VALUES /* Aqui estamos adicionando dados a tabela produtos(nome, preço, estoque) */
('Coca Cola', 12.00, 100), /* Nome, Preço, Estoque, VALORES FICTICIOS! */
('Red Bull', 13.00, 50), /* Nome, Preço, Estoque, VALORES FICTICIOS! */
('Pinga 51', 15.00, 200), /* Nome, Preço, Estoque, VALORES FICTICIOS! */
('Guaraná Jesus', 8.00, 10);

INSERT INTO vendas (id_produto, quantidade, dataVenda) VALUES /* Aqui estamos adicionando dados a tabela vendas(id_produto, quantidade, dataVenda) */
(1, 2,'2025-05-18'), /* id_produto, quantidade, data da venda, VALORES FICTÍCIOS! */
(2, 3, '2025-05-26'), /* id_produto, quantidade, data da venda, VALORES FICTÍCIOS! */
(3, 10, '2025-05-28'), /* id_produto, quantidade, data da venda, VALORES FICTÍCIOS! */
(1, 2, '2025-05-31'),
(2, 4, '2025-06-02');

SELECT vendas.id_venda, produtos.nome, produtos.preço, vendas.quantidade, vendas.dataVenda /* Aqui selecionamos os atributos desejados de determinadas tabelas */
FROM vendas /* De onde esses atributos virão */
INNER JOIN produtos ON vendas.id_produto = produtos.id_produto; /* O comando INNER JOIN serve basicamente para unir duas tabelas, aqui estamos unindo os id_produto das duas tabelas, e ele só irá mostrar o produto na tabela, se o mesmo tiver sido vendido, se não ele não mostrará */

SELECT produtos.nome, produtos.preço, vendas.quantidade, vendas.dataVenda /* Aqui selecionamos os atributos que queremos que apareçam juntos das duas tabelas */
FROM produtos /* Da tabela produtos */
LEFT JOIN vendas ON produtos.id_produto = vendas.id_produto; /* O comando LEFT JOIN é um pouco diferente do INNER JOIN, ele serve basicamente pra mesma coisa, porém, o LEFT JOIN mostra todos os produtos em uma tabela, mesmo os que ainda não tiveram uma venda realizada, substituindo o valor de quantidade e dataVenda por NULL */

SELECT produtos.nome, SUM(vendas.quantidade) AS totalVendido /* Selecionamos a tabela produtos e o atributo nome, SUM para somar as quantidades na tabela vendas, e AS para indicar o nome da saída nessa tabela */
FROM vendas /* Da tabela vendas */
INNER JOIN produtos ON vendas.id_produto = produtos.id_produto /* INNER JOIN para unir os id_produto das duas tabelas */
GROUP BY produtos.nome; /* O group by serve basicamente pra agruparmos dados de uma coluna e escolher uma função pra realizarmos com eles como somar(sum), contar(count), média(avg), mínimo(min), máximo(max) */

SELECT produtos.nome, SUM(vendas.quantidade) AS totalVendido 
FROM vendas 
INNER JOIN produtos ON vendas.id_produto = produtos.id_produto 
GROUP BY produtos.nome 
HAVING totalVendido > 2; /* A mesma coisa da tabela de cima, porém utilizamos o having pra mostrar apena produtos que tiveram mais de 2 vendas */

UPDATE produtos /* UPDATE serve pra atualizar os dados de uma tabela */
SET preço = 14.00 /* Aqui estamos mudando o preço pra 14.00 */
WHERE nome = 'Coca Cola'; /* Onde estiver com o nome Coca Cola, agora terá o preço de 14.00 */

DELETE FROM produtos /* DELETE serve pra deletar os dados de uma tabela */
WHERE nome = 'Guaraná Jesus'; /* Onde estiver com o nome 'Guaraná Jesus' na tabela produtos, ele vai ser deletado */

SELECT * FROM produtos;
SELECT * FROM vendas;


