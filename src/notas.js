//Criando Objeto
function Aluno(nome, nota){
    this.nome = nome;
    this.nota = nota;
}

//Criando array de Objetos
let alunos = [
    new Aluno("Pedro", 7),
    new Aluno("Lara", 9),
    new Aluno("João", 4),
    new Aluno("Ana", 10),
    new Aluno('Lucas', 6),
    new Aluno('Karla', 10),
    new Aluno("Lais", 5.5),
    new Aluno("Livia", 7.9),
    new Aluno("Bruna", 5),
    new Aluno("Paula", 6.5),
    new Aluno('Thais', 6),
    new Aluno('Julia', 9.5)
];

//Arrow function que retorna alunos com nota maior ou igual a 6
const alunosAprovados = nome => nome.nota >= 6;

//Filtrando alunos que foram aprovados
const alunoAprovado = alunos.filter(alunosAprovados)

//Exibindo alunos aprovados e suas notas
alunoAprovado.forEach(function(aluno){
    console.log("Nome: "+ aluno.nome + ", Nota: "+ aluno.nota);
})

// Exibindo nome dos alunos aprovados
const nomeDosAlunos = alunoAprovado.reduce(function(acumulador, itemAtual){
    acumulador += `${itemAtual.nome} `;
    return acumulador
}, '')
console.log(nomeDosAlunos)