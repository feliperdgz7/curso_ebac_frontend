
//Classe Pessoa
function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
}

//Método para imprimir informações da pessoa
Pessoa.prototype.printInfo = function(){
    console.log(`Nome: ${this.nome}, Idade: ${this.idade} anos`);
};

// Classe Estudante: Herdeira de Pessoa
function Estudante(nome, idade, curso){
    Pessoa.call(this, nome, idade);
    this.curso = curso;
}

//Método para imprimir informações do estudante
Estudante.prototype = Object.create(Pessoa.prototype);
Estudante.prototype.constructor = Estudante;

Estudante.prototype.printInfo = function(){
    Pessoa.prototype.printInfo.call(this);
    console.log(`Curso: ${this.curso}`);
};
// Classe Estagiario: Herdeira de Pessoa
function Estagiario(nome, idade, salario){
    Pessoa.call(this, nome, idade);
    this.salario = salario;
}
//Método para imprimir informações do estagiario
Estagiario.prototype = Object.create(Pessoa.prototype);
Estagiario.prototype.constructor = Estagiario;

Estagiario.prototype.printInfo = function(){
    Pessoa.prototype.printInfo.call(this);
    console.log(`Salario: R$${this.salario}`);
};


//Instâncias de objeto
const pessoa1 = new Pessoa('Pedro', 15);
const estudante1 = new Estudante('Ana', 23, 'Ciência da Computação');
const estagiario1 = new Estagiario('Karla', 19, 1700);
const pessoa2 = new Pessoa('Igor', 9);
const estagiario2 = new Estagiario('Pietro', 21, 1700);

pessoa1.printInfo();
pessoa2.printInfo();
estudante1.printInfo();
estagiario1.printInfo();
estagiario2.printInfo();
