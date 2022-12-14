const Aluno = require ('./aluno')

const Gustavo = new Aluno("Gustavo Florencio", 1 , 10 ,8 ,6);
const camila = new Aluno("Camila Andrade", 5 , 10 ,10 ,10);
const maria = new Aluno("Maria Camargo", 1 , 4 ,0 ,5);
const nicolas = new Aluno("Nicolas Camargo", 1 , 10 ,3 ,6);
const kelly = new Aluno("Kelly florencio", 1 , 8 ,5 ,4);
const adenise = new Aluno("Adenise Andrade", 1 , 10 ,4 ,10);
const xcao = new Aluno("Francisco silva", 1 , 9 ,8 ,8);
const jorge = new Aluno("jorge coutinho", 1 , 8 ,10 ,10);
const douglas = new Aluno("douglas silva", 1 , 10 ,8 ,10);
const heber = new Aluno("Heber Florencio", 8 , 10 ,10 ,10);

const listaEstudantes = [
    Gustavo,
    camila,
    maria,
    nicolas,
    kelly,
    adenise,
    xcao,
    jorge,
    douglas,
    heber,
];

module.exports = listaEstudantes;


