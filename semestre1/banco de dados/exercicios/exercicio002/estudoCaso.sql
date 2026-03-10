CREATE DATABASE biblioteca; /* Criando o banco de dados biblioteca */
USE biblioteca; /* Usando o banco de dados */

CREATE TABLE alunos( /* Criando a tabela alunos para armazenar atributos de alunos */
    id_aluno INT PRIMARY KEY AUTO_INCREMENT, /* id_aluno inteiro, chave primária, e utilizando a auto incrementação */
    nome VARCHAR(100) NOT NULL, /* Nome com limite de 100 caracteres e não pode estar vazio */
    curso VARCHAR(100) NOT NULL, /* Curso com limite de 100 caracteres, e não pode estar vazio */
    email VARCHAR(100), /* Email com limite de 100 caracteres, e pode ou não estar vazio, porque nem todos os usuários possuem email */
    telefone VARCHAR(20) /* Telefone com formato de varchar, pois podem existir () ou + pro DDD ou Código do país, e pode ou não estar vazio, porque nem todos os usuários possuem telefone */
);

CREATE TABLE funcionarios( /* Criando a tabela funcionarios */
    id_funcionario INT PRIMARY KEY AUTO_INCREMENT, /* id_funcionario, de número inteiro, chave primária e auto incremento */
    nome VARCHAR(100) NOT NULL, /* Nome com limite de 100 caracteres e não pode estar vazio */
    cargo VARCHAR(100) NOT NULL, /* Cargo com limite de 100 caracteres e não pode estar vazio */
    email VARCHAR(100) /* Email com limite de 100 caracteres, e pode ou não estar vazio, porque nem todos os usuários possuem email */
);

CREATE TABLE livros( /* Criando a tabela livros */
    id_livro INT PRIMARY KEY AUTO_INCREMENT, /* id_funcionario, de número inteiro, chave primária e auto incremento */
    titulo VARCHAR(100) NOT NULL, /* Título com limite de 100 caracteres e não pode estar vazio, pois um livro necessita de um título */
    autor VARCHAR(100) NOT NULL, /* Autor com limite de 100 caracteres e não pode estar vazio, pois um livro necessita de um autor */
    editora VARCHAR(100), /* Editora com limite de 100 caracteres e pode estar vazio, pois um livro não necessita obrigatoriamente de uma editora */
    ano INT, /* Ano com formato inteiro, pode ser que o ano da publicação de tal livro seja desconhecido, então não colocamos o NOT NULL */
    status varchar(20) /* Status com limite de 20 caracteres, informa se o livro esta disponível, ou indiponível */
);

CREATE TABLE aluguel( /* Criando a tabela aluguel */
    id_aluguel INT PRIMARY KEY AUTO_INCREMENT, /* id_aluguel, de número inteiro, chave primária e auto incremento */
    id_aluno INT, /* id_aluno como chave estrangeira */
    id_funcionario INT, /* id_funcionario como chave estrangeira */
    id_livro INT, /* id_livro como chave estrangeira */
    dataAluguel DATE NOT NULL, /* Data do aluguel em formato DATE e como NOT NULL, pois, se o livro foi alugado, ele teve uma data de aluguel  */
    dataDevolucao DATE, /* Data de devolução em formato DATE e sem o NOT NULL, pois, ele pode não ter sido devolvido ainda */
    FOREIGN KEY (id_aluno) REFERENCES alunos(id_aluno), /* Indica que o id_aluno que está sendo declarado nesta tabela, vem da outra tabela chamada alunos(id_aluno) */
    FOREIGN KEY (id_funcionario) REFERENCES funcionarios(id_funcionario), /* Indica que o id_funcionario que está sendo declarado nesta tabela, vem da outra tabela chamada funcionarios(id_funcionario) */
    FOREIGN KEY (id_livro) REFERENCES livros(id_livro) /* Indica que o id_livro que esta sendo declarado nesta tabela, vem da outra tabela chamada livros(id_livro) */
);

INSERT INTO alunos(nome, curso, email, telefone) VALUES /* Inserindo atributos na tabela */
('Ana Silva', 'Engenharia', 'anasilva@gmail.com', '99999-1111'), /* Nome, Curso, Email, Telefone */
('Carlos Souza', 'Direito', 'carlossouza@gmail.com', '99999-2222'), /* Nome, Curso, Email, Telefone */
('Mariana Oliveira', 'Psicologia', 'marioliveira@gmail.com', '99999-3333'), /* Nome, Curso, Email, Telefone */
('Derick Souto', 'Administração', 'dericksouto@gmail.com', '99999-4444'), /* Nome, Curso, Email, Telefone */
('Pedro Henrique', 'Arquitetura', 'phhenrique@gmail.com', '99999-5555'), /* Nome, Curso, Email, Telefone */
('Kauã Lima', 'ADS', 'kauaolima@gmail.com', '99999-6666'); /* Nome, Curso, Email, Telefone */

INSERT INTO funcionarios(nome, cargo, email) VALUES /* Inserindo atributos na tabela */
('Lucas Carlos', 'Atendente', 'lucascarlos@gmail.com'), /* Nome, Cargo, Email */ 
('Miguel Lucas', 'Gerente', 'miguellucas@gmail.com'), /* Nome, Cargo, Email */ 
('Fernanda Hellen', 'Atendente', 'fernandahellen@gmail.com'), /* Nome, Cargo, Email */ 
('Arthur Fernandes', 'Atendente', 'arthurfernandes@gmail.com'), /* Nome, Cargo, Email */
('Juliana Barbosa', 'Supervisor', 'allanabarbosa@gmail.com'); /* Nome, Cargo, Email */

INSERT INTO livros(titulo, autor, editora, ano, status) VALUES /* Inserindo atributos na tabela */
('Diário de um banana', 'Jeff Kinney', 'VR Editora', 2007, 'Disponível'), /* Título, autor, editora, ano, status */
('Lógica de Programação', 'Gustavo Guanabara', 'Estudo Fácil', 2018, 'Disponível'), /* Título, autor, editora, ano, status */
('Star Wars - Sith', 'Raquel Novaes', 'Bertrand Brasil', 2014, 'Disponível'), /* Título, autor, editora, ano, status */
('Ayrton Senna', 'Christopher Hilton', 'Global Editora', 2009, 'Disponível'), /* Título, autor, editora, ano, status */
('O menino do pijama listrado', 'Jonh Boyne', 'Seguinte', 2007, 'Disponível'); /* Título, autor, editora, ano, status */

INSERT INTO aluguel(id_aluno, id_funcionario, id_livro, dataAluguel, dataDevolucao) VALUES /* Inserindo atributos na tabela */
(1, 1, 1, '2025-01-23', '2025-01-31'), /* id_aluno, id_funcionario, id_livro, dataAluguel, dataDevolucao */
(2, 2, 2, '2025-02-06', '2025-02-28'), /* id_aluno, id_funcionario, id_livro, dataAluguel, dataDevolucao */
(3, 3, 3, '2025-03-24', '2025-04-10'), /* id_aluno, id_funcionario, id_livro, dataAluguel, dataDevolucao */
(1, 4, 4, '2025-04-29', NULL), /* id_aluno, id_funcionario, id_livro, dataAluguel, dataDevolucao */
(4, 1, 5, '2025-05-26', NULL); /* id_aluno, id_funcionario, id_livro, dataAluguel, dataDevolucao */

SELECT alunos.nome, COUNT(aluguel.id_aluguel) AS total_alugueis /* Seleciona a tabela alunos e o atributo nome, para fazer a contagem do total de alugueis */
FROM aluguel /* Diz que vem da tabela aluguel */
INNER JOIN alunos ON aluguel.id_aluno = alunos.id_aluno /* Junta as duas tabelas aluguel e alunos, e diz que o id_aluno da tabela aluguel é o mesmo da tabela alunos */
WHERE alunos.nome = 'Ana Silva' /* Faz a contagem de alugueis onde o atributo nome da tabela alunos for 'Ana Silva' */
GROUP BY alunos.nome; /* Agrupa o resultado pelo nome */

SELECT AVG(aluguelPorAluno) AS mediaAluguel /* Calcula a média de alugueis por ano */
FROM( 
    SELECT COUNT(*) AS aluguelPorAluno /* Seleciona todos os alugueis da tabela aluguel, e diz que a saída tem o nome de aluguelPorAluno */
    FROM aluguel /* Diz que vem da tabela aluguel */
    GROUP BY id_aluno /* Agrupa o resultado pelos ids_aluno */
) AS subconsulta; /* Saída com o nome subConsulta */

SELECT livros.titulo, COUNT(aluguel.id_aluguel) AS totalAlugados /* Seleciona o atributo título da tabela livros e faz a contagem do total de livros alugados */
FROM aluguel /* Diz que vem da tabela aluguel */
INNER JOIN livros ON aluguel.id_livro = livros.id_livro /* Junta as duas tabelas aluguel e livros, e diz que o livro da tabela aluguel é o mesmo da tabela livros */
GROUP BY livros.titulo /* Agrupa o resultado pelo título */
ORDER BY totalAlugados DESC /* Deixa o resultado em ordem decrescente */