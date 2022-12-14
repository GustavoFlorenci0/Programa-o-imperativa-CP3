const Aluno = require("./aluno");
const listaEstudantes = require('./estudante');
const filtroNome = require('./filtro');

let curso = {
    nome: '',
    NotaAprovacao: 0,
    faltaMaxima: 0,
    listaEstudantes: listaEstudantes,
    adicionarAluno: function(Nome, qtdFalta, ... notas) {
        const lucas = new Aluno(Nome, qtdFalta, notas)
    },


};

function Curso (nome, notaAprovacao, faltaMaxima) {
    this.nome = nome;
    this.notaAprovacao = notaAprovacao;
    this.faltaMaxima = faltaMaxima;
    this.listaEstudantes = listaEstudantes;
    this.curso = function(nome, QuantidadeFaltas, ...notas) {
        let novoNome = '';
        novoNome = new Aluno(nome, QuantidadeFaltas, notas)
        this.listaEstudantes.push(novoNome) 
    };
    this.aprovacao = function(nome) {
        const filtro = filtroNome(this.listaEstudantes, nome);
        if (filtro.mediaNotas() >= this.notaAprovacao && filtro.QuantidadeFaltas < this.faltaMaxima) {
            return ` Hauser lendario`;
        } else if (filtro.QuantidadeFaltas === this.faltaMaxima && filtro.mediaNotas() > (this.notaAprovacao)*1.1) {
            return ` Hauser aprovado `;
        } else if (filtro.QuantidadeFaltas > this.faltaMaxima) {
            return ` Estourou por falta limite de ${this.faltaMaxima} excedido`;
        } else if (filtro.mediaNotas() < this.notaAprovacao) {
            return ` Estourou por baixo desempenho nas provas nota minima era ${this.notaAprovacao} `;
        } else 
            return ` ${nome} valor nao reconhecido `;
    }
    this.passaram = function () {  
        let final = [];
        const array = this.listaEstudantes
        for (let i = 0; i < array.length; i++) {            
            let resultado = this.aprovacao(array[i].nome);
            final.push(` o Aluno ${array[i].nome} está ${ resultado } `)
        };
            return final
        };
    
};

const mecanica = new Curso( 'manutencao', 6 , 5);

console.log(mecanica.aprovacao("Gustavo Florencio"));
console.log(mecanica.aprovacao("Maria Camargo"));
console.log(mecanica.aprovacao("Camila Andrade"));
console.log(mecanica.aprovacao("Heber Florencio"));


const passaram = mecanica.passaram();
console.log(passaram);