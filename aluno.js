let aluno = {
    nome: '',
    QuantidadeFaltas:0,
    notas:[],
    faltas: function () {
        return this.QuantidadeFaltas ++;
    },
    mediaNotas: function () {
        media = (this.notas.forEach((notas)=> soma += notas))/this.notas.length;
        return media;
    },
}



function Aluno(nome ,QuantidadeFaltas,...notas) {
    this.nome = nome;
    this.QuantidadeFaltas = QuantidadeFaltas;
    this.notas = notas;
    this.faltas = function () {
        return this.QuantidadeFaltas += 1;
    };
    this.mediaNotas = function () {
        let soma = 0;
        this.notas.forEach((notas) => soma += notas)
        media = soma /this.notas.length
        return media;
    };
};

module.exports = Aluno;