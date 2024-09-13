const personas = [
    { nombre: "Carlos", edad: 21 },
    { nombre: "Ana", edad: 22 },
    { nombre: "Juan", edad: 35 },
    { nombre: "Willson", edad: 40 }
];


function personasAArregloDeCadenas(personas) {
    const personasConEdad = [];
    personas.forEach(persona => {
        const personaConcatenada = `${persona.nombre} tiene ${persona.edad} años`;
        personasConEdad.push(personaConcatenada);
    });
    return personasConEdad;
}

console.log(personasAArregloDeCadenas(personas));
