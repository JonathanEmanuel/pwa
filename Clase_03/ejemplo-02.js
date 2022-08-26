let objetoConstructor = new Object();
let objetoLiteral = {
    propiedad: 'propiedad_1'
};

objetoConstructor.modelo = 'A10';
objetoConstructor.marca = 'Samsung';

objetoConstructor.iniciar = function(){
    console.log('Inciando Samsung');
}



console.log(objetoConstructor);
console.log(objetoLiteral);

let celular = {
    marca: 'LG',
    modelo: 'K7',
    iniciar: function(){
        document.write('Iniciando ' + this.marca);
    }
}

celular.iniciar();

let materia = [];
materia['nombre'] = 'Aplicaciones Web Progresivas';
materia['Profesor titular'] = 'Jonathan';
materia.Cuatrimestre = 4;

for (let clave in materia) {
    console.log( materia[clave]);
}

