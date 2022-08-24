require("./bbdd")
const mongoose = require("mongoose");

const teacherSchema = new mongoose.Schema (
    {
        firstName: String,
        lastName: String,
        groups: [String]
    }
)

const subjectsSchema = new mongoose.Schema (
    {
        title: String,
        teachers: [teacherSchema]
    }
)

const marksSchema = new mongoose.Schema (
    {
        date: Date,
        mark: Number,
        subject: subjectsSchema
    }
)

const studentSchema = new mongoose.Schema (
    {
        firstName: String,
        lastName: String,
        marks: [marksSchema]
    }
)

let  StudentModel = mongoose.model ("StudentArbol", studentSchema, "studentArbol");


let alumno1 = new StudentModel(
    {
        firstName: "Camilo",
        lastName: "Gutierrez",
        marks: [{
            date: new Date ("2022,06,11"),
            mark: 10,
            subject: {
                title: "Maquetacion",
                teachers: [{
                    firstName: "Jose",
                    lastName: "Herrera",
                    groups: ["Bootcamp Verano", "Bootcamp invierno"]
                }
                ]
            }
        }]
    }
)

let alumno2 = new StudentModel(
    {
        firstName: "Jose Luis",
        lastName: "Duran",
        marks: [{
            date: new Date ("2021,03,15"),
            mark: 7,
            subject: {
                title: "Mongoo",
                teachers: [{
                    firstName: "Dani",
                    lastName: "Vera",
                    groups: ["Bootcamp Verano", "Bootcamp Invierno"]
                }
                ]
            }
        }]
    }
)

let alumno3 = new StudentModel(
    {
        firstName: "Telma",
        lastName: "Rey",
        marks: [{
            date: new Date ("2020,02,25"),
            mark: 5,
            subject: {
                title: "NodeJs",
                teachers: [{
                    firstName: "Carmen",
                    lastName: "Martin",
                    groups: ["Bootcamp Verano", "Bootcamp invierno"]
                }
            ]
        }
    }]
    }
)

let alumno4 = new StudentModel(
    {
        firstName: "Maria",
        lastName: "Pedraza",
        marks: [{
            date: new Date ("2022,06,11"),
            mark: 8,
            subject: {
            title: "Javascript",
            teachers: [{
                firstName: "Jose",
                lastName: "Herrera",
                groups: ["Bootcamp Verano", "Bootcamp invierno"]
            }
        ]
    }
    }]
    }
)

// alumno1.save()
// .then((data)=>{
//     console.log("alumno 1 guardado");
//     return (alumno2.save());
// })
// .then((data)=>{
//     console.log("alumno 2 guardado");
//     return (alumno3.save());
// })
// .then((data)=>{
//     console.log("alumno 3 guardado");
//     return (alumno4.save());
// })
// .then((data)=>{
//     console.log("alumno 4 guardado");
// })
// .catch((err)=>
// {
//     console.log(err + "Fallo en Guardado");
// })

// Obtener Notas:
// Dado un usuario obtener todas sus Notas

// StudentModel.find({firstName:"Maria"})
// .then(function(item){
//     let notas = item[0].marks
//     for (let i = 0; i < notas.length; i++) {
//         console.log("Notas de Maria : "+notas[i].mark)
//     }
// })
// .catch(function(){
//     console.log("Error al Recibir notas");
// })

// Todos las asignaturas de un alumno.

// StudentModel.find({firstName:"Camilo"})
// .then(function(items){
//     let asignatura = items[0].marks
//     for (let i = 0; i < asignatura.length; i++) {
//         console.log("Asignaturas de Camilo : " + asignatura[i].subject.title)
//     }
// })
// .catch(function(err){
//     console.log("Error" + err);
// })

// Todos los profesores de un alumno.

// StudentModel.find({firstName:"Telma"})
// .then(function(items){
//     let asignatura = items[0].marks
//     for (let i = 0; i < asignatura.length; i++) {
//         console.log("Profesores de Telma : " + asignatura[i].subject.teachers)
//     }
// })
// .catch(function(err){
//     console.log("Error" + err);
// })






