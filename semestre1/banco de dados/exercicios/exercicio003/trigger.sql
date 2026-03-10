CREATE DATABASE functionTrigger; /* Criando DATABASE functionTrigger */
USE functionTrigger;/* Usando functionTrigger */

CREATE TABLE produtos( /* Criando a tabela Produtos */
id_produto INT PRIMARY KEY AUTO_INCREMENT, /* Inserindo atributos da tabela produtos (id, nome, preço e estoque) */
nome VARCHAR(100) NOT NULL, 
preco DECIMAL(10,2) NOT NULL, 
estoque INT NOT NULL 
);

INSERT INTO produtos(nome, preco, estoque) VALUES /* Inserindo dados na tabela produto */
('Coca-Cola', 6.00, 10), 
('Água', 3.00, 20),
('Minoxidil', 40.00, 5);

SELECT COUNT(*) FROM produtos; /* Contando o número de linhas(produtos) que foram cadastrados na tabela produtos */
SELECT AVG(preco) FROM produtos; /* Realizando a média do preço dos produtos */
SELECT SUM(estoque) FROM produtos; /* Somando quantos produtos estão disponíveis no estoque */
SELECT MAX(preco) FROM produtos; /* Vendo qual o maior preço que existe na tabela produtos */
SELECT MIN(preco) FROM produtos; /* Vendo qual o menor preço existente na tabela produtos */
SELECT AVG(preco) FROM produtos WHERE nome = 'Coca-Cola'; /* Realizando a média do preço de um produto específico */


CREATE TABLE log_produto( /* Criando a tabela log_produto */
mensagem VARCHAR (255), /* Mensagem que será exibida após um novo produto ser cadastrado na tabela produtos */
data_log DATETIME /* Armazena data e hora que o produto foi inserido na tabela produtos */
); 

DELIMITER $$ /* Delimita um bloco de código, $$ troca o ; por um breve período pro MySQL não se confundir achando que após um ; pode encerrar o código */

CREATE TRIGGER trigger_log_produto /* Criando o gatilho log_produto */
AFTER INSERT ON produtos /* Aqui diz que depois que um dado for inserido na tabela produtos, o código rodará */
FOR EACH ROW /* Para cada linha afetada, o código será executado*/
BEGIN /* Diz que é o início de vários comandos que precisam ser executados juntos pra um bom funcionamento do código */ 
INSERT INTO log_produto(mensagem, data_log) VALUES( /* Inserindo a mensagem e o data_log na tabela log_produto */
    CONCAT('Produto "', NEW.nome, '" adicionado no sistema.'), /* Concat junta 2 ou mais pedaços de texto em uma única frase, NEW.nome, busca o nome do produto que foi inserido na tabela produtos */
    NOW() /* Marca o DATETIME, data e horas exatas */
);
END$$ /* Diz que é o final do bloco de código */

DELIMITER ; /* Faz o código voltar a rodar normalmente, quando um produto for inserido, ele irá rodar todo bloco de código de novo */

INSERT INTO produtos (nome, preco, estoque) VALUES /* Fazendo teste, inserindo um novo produto na tabela produtos */
('Água com gás', 10.00, 50); 

SELECT * FROM log_produto; /* Selecionando a tabela log produto, onde aparecerá a mensagem, o nome do novo produto e a data e hora exatas que ele foi inserido na tabela produtos */


