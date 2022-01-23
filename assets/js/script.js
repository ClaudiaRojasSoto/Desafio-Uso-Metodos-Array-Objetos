
// Arreglo 1
let radiologia = [
    {
        hora: "11:00",
        especialista: "IGNACIO SCHULZ",
        paciente: "FRANCISCA ROJAS",
        rut: "9878782-1",
        prevision: "FONASA",
    },
    {
        hora: "11:30",
        especialista: "FEDERICO SUBERCASEAUX",
        paciente: "PAMELA ESTRADA",
        rut: "15345241-3",
        prevision: "ISAPRE",
    },
    {
        hora: "15:00",
        especialista: "FERNANDO WURTHZ",
        paciente: "ARMANDO LUNA",
        rut: "16445345-9",
        prevision: "ISAPRE",
    },
    {
        hora: "15:30",
        especialista: "ANA MARIA GODOY",
        paciente: "MANUEL GODOY",
        rut: "17666419-0",
        prevision: "FONASA",
    },
    {
        hora: "16:00",
        especialista: "PATRICIA SUAZO",
        paciente: "RAMON ULLOA",
        rut: "14989389-K",
        prevision: "FONASA",
    },
];

console.log(radiologia);

// Arreglo 2
let traumatologia = [
    {
        hora: "8:00",
        especialista: "MARIA PAZ ALTUZARRA",
        paciente: "PAULA SANCHEZ",
        rut: "15554774-5",
        prevision: "FONASA",
    },
    {
        hora: "10:00",
        especialista: "RAUL ARAYA",
        paciente: "ANGÉLICA NAVAS",
        rut: "15444147-9",
        prevision: "ISAPRE",
    },
    {
        hora: "10:30",
        especialista: "MARIA ARRIAGADA",
        paciente: "ANA KLAPP",
        rut: "17879423-9",
        prevision: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "ALEJANDRO BADILLA",
        paciente: "FELIPE MARDONES",
        rut: "1547423-6",
        prevision: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "CECILIA BUDNIK",
        paciente: "DIEGO MARRE",
        rut: "16554741-K",
        prevision: "FONASA",
    },
    {
        hora: "12:00",
        especialista: "ARTURO CAVAGNARO",
        paciente: "CECILIA MENDEZ",
        rut: "9747535-8",
        prevision: "ISAPRE",
    },
    {
        hora: "12:30",
        especialista: "ANDRES KANACRI",
        paciente: "MARCIAL SUAZO",
        rut: "11254785-5",
        prevision: "ISAPRE",
    },
]

console.log(traumatologia);

// Arreglo 3
let dental = [
    {
        hora: "08:30",
        especialista: "IANDREA ZUÑIGA",
        paciente: "MARCELA RETAMAL",
        rut: "11123425-6",
        prevision: "ISAPRE",
    },
    {
        hora: "11:00",
        especialista: "MARIA PIA ZAÑARTU",
        paciente: "ANGEL MUÑOZ",
        rut: "9878789-2",
        prevision: "ISAPRE",
    },
    {
        hora: "11:30",
        especialista: "SCARLETT WITTING",
        paciente: "MARIO KAST",
        rut: "7998789-5",
        prevision: "FONASA",
    },
    {
        hora: "13:00",
        especialista: "FRANCISCO VON TEUBER",
        paciente: "KARIN FERNANDEZ",
        rut: "18887662-K",
        prevision: "FONASA",
    },
    {
        hora: "13:30",
        especialista: "EDUARDO VIÑUELA",
        paciente: "HUGO SANCHEZ",
        rut: "17665461-4",
        prevision: "FONASA",
    },
    {
        hora: "14:00",
        especialista: "RAQUEL VILLASECA",
        paciente: "ANA SEPULVEDA",
        rut: "14441281-0",
        prevision: "ISAPRE",
    },
];

console.log(radiologia);


// PUNTO 1

traumatologia.push({
    hora: "09:00",
    especialista: "RENÉ POBLETE",
    paciente: "ANA GELLONA",
    rut: "13123329-7",
    prevision: "ISAPRE",
});
traumatologia.push({
    hora: "09:30",
    especialista: "MARIA SOLAR",
    paciente: "RAMIRO ANDRADE",
    rut: "12221451-K",
    prevision: "FONASA",
});
traumatologia.push({
    hora: "10:00",
    especialista: "RAUL LOYOLA",
    paciente: "CARMEN ISLA",
    rut: "10112348-3",
    prevision: "ISAPRE",
});
traumatologia.push({
    hora: "10:30",
    especialista: "ANTONIO LARENAS",
    paciente: "PABLO LOAYZA",
    rut: "13453234-1",
    prevision: "ISAPRE",
});
traumatologia.push({
    hora: "12:00",
    especialista: "MATIAS ARAVENA",
    paciente: "SUSANA POBLETE",
    rut: "14345656-6",
    prevision: "FONASA",
});
console.log(traumatologia);



/* PUNTO 2 */
// ELIMINO EL PRIMER ELEMENTO
radiologia.shift();
// ELIMINO EL ÚLTIMO ELEMENTO
radiologia.pop();
console.log(radiologia);

/* PUNTO 3 */
for (var i = 0; i < dental.length; i++) {
    var dentalvalores = Object.values(dental[i]);
    document.write(`<p>${dentalvalores.join(' - ')}`);

}

/* PUNTO 4 */
let listadoCompleto = radiologia.concat(traumatologia,dental);
document.write("<br>");
document.write("<h2>Pacientes atendidos en el centro medico:</h2>");
document.write("<br>");
document.write("<br>");
for (let i = 0; i < listadoCompleto.length; i++) {;
    document.write(listadoCompleto[i].paciente);
    document.write("<br>");
}

/* PUNTO 5 */
document.write("<br>");
document.write("<h2>Consultas Dental, pacientes de ISAPRE:</h2>");
let filtroDental = dental.filter((obj) => {
    return obj.prevision == 'ISAPRE';
});

for (let i = 0; i < filtroDental.length; i++) {
    document.write(`${filtroDental[i].paciente} - ${filtroDental[i].prevision}`);
    document.write("<br>");
}

/* PUNTO 6 */
document.write("<br>");
document.write("<h2>Consultas Traumatologia, pacientes de FONASA:</h2>");

let filtroTraumatologia = traumatologia.filter((obj)=>{
    return obj.prevision == 'FONASA';
})

for (let i = 0; i < filtroTraumatologia.length; i++) {
    document.write(`${filtroTraumatologia[i].paciente} - ${filtroTraumatologia[i].prevision}`);
    document.write("<br>");
}