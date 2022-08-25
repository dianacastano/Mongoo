require("./base-de-datos")
const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema (
    {
        teacher_first_name: String,
        teacher_last_name: String,
        
    }
)

const MarksSchema = new mongoose.Schema (
    {
        date: Date,
        mark: Number,
        student_first_name: String,
        student_last_name: String,
        group_name: String,
        subject_name: String,
        teachers: [TeacherSchema]

    }
)

let  MarksModel = mongoose.model ("MarkArbol", MarksSchema, "marktArbol");

let alumno1 = new MarksModel(
    {
        date: new Date ("2022,06,11"),
        mark: 7,
        student_first_name: "Carolina",
        student_last_name: "Giraldo",
        group_name: "Bootcamp verano",
        subject_name: "Maquetacion",
        teachers: [{
            teacher_first_name: "Jose",
            teacher_last_name: "Herrera"
        }]
    }
)

let alumno2 = new MarksModel(
    {
        date: new Date ("2021,10,11"),
        mark: 10,
        student_first_name: "Jimena",
        student_last_name: "Castro",
        group_name: "Bootcamp invierno",
        subject_name: "NodeJs",
        teachers: [{
            teacher_first_name: "Dani",
            teacher_last_name: "Vera"
        }]
    }
)

let alumno3 = new MarksModel(
    {
        date: new Date ("2022,06,11"),
        mark: 8,
        student_first_name: "Jose Luis",
        student_last_name: "Mesa",
        group_name: "Bootcamp verano",
        subject_name: "Javascript",
        teachers: [{
            teacher_first_name: "Carmen",
            teacher_last_name: "Martin"
        }]
    }
)

let alumno4 = new MarksModel(
    {
        date: new Date ("2021,10,11"),
        mark: 5,
        student_first_name: "Gonzalo",
        student_last_name: "Gonzales",
        group_name: "Bootcamp Invierno",
        subject_name: "Typescript",
        teachers: [{
            teacher_first_name: "Jose",
            teacher_last_name: "Herrera"
        }]
    }
)

let alumno5 = new MarksModel(
    {
        date: new Date ("2022,06,11"),
        mark: 6,
        student_first_name: "Rosa Elena",
        student_last_name: "Castaño",
        group_name: "Bootcamp verano",
        subject_name: "Mongoo",
        teachers: [{
            teacher_first_name: "Dani",
            teacher_last_name: "Vera"
        }]
    }
)

let alumno6 = new MarksModel(
    {
        date: new Date ("2021,10,11"),
        mark: 7,
        student_first_name: "Julio",
        student_last_name: "Jaramillo",
        group_name: "Bootcamp Invierno",
        subject_name: "Sql",
        teachers: [{
            teacher_first_name: "Carmen",
            teacher_last_name: "Martin"
        }]
    }
)

let alumno7 = new MarksModel(
    {
        date: new Date ("2022,06,11"),
        mark: 8,
        student_first_name: "Diana",
        student_last_name: "Giraldo",
        group_name: "Bootcamp verano",
        subject_name: "Angular",
        teachers: [{
            teacher_first_name: "Jose",
            teacher_last_name: "Herrera"
        }]
    }
)

let alumno8 = new MarksModel(
    {
        date: new Date ("2021,10,11"),
        mark: 10,
        student_first_name: "Paola",
        student_last_name: "Guerra",
        group_name: "Bootcamp invierno",
        subject_name: "Git",
        teachers: [{
            teacher_first_name: "Dani",
            teacher_last_name: "Vera"
        }]
    }
)

let alumno9 = new MarksModel(
    {
        date: new Date ("2022,06,11"),
        mark: 5,
        student_first_name: "Angela",
        student_last_name: "Meneses",
        group_name: "Bootcamp verano",
        subject_name: "Javascript",
        teachers: [{
            teacher_first_name: "Carmen",
            teacher_last_name: "Martin"
        }]
    }
)

let alumno10 = new MarksModel(
    {
        date: new Date ("2021,10,11"),
        mark: 6,
        student_first_name: "Marko",
        student_last_name: "Perez",
        group_name: "Bootcamp invierno",
        subject_name: "Maquetacion",
        teachers: [{
            teacher_first_name: "Dani",
            teacher_last_name: "Vera"
        }]
    }
)


// Crear una colección en MongoDB con este esquema y añadirle mínimo 10 documentos
// combinando todos los casos posibles usando mongoose.

alumno1.save()
.then((data)=>{
    console.log("alumno 1 guardado");
    return (alumno2.save());
})
.then((data)=>{
    console.log("alumno 2 guardado");
    return (alumno3.save());
})
.then((data)=>{
    console.log("alumno 3 guardado");
    return (alumno4.save());
})
.then((data)=>{
    console.log("alumno 4 guardado");
    return (alumno5.save());
})
.then((data)=>{
    console.log("alumno 5 guardado");
    return (alumno6.save());
})
.then((data)=>{
    console.log("alumno 6 guardado");
    return (alumno7.save());
})
.then((data)=>{
    console.log("alumno 7 guardado");
    return (alumno8.save());
})
.then((data)=>{
    console.log("alumno 8 guardado");
    return (alumno9.save());
})
.then((data)=>{
    console.log("alumno 9 guardado");
    return (alumno10.save());
})
.then((data)=>{
    console.log("alumno 10 guardado");
})
    
.catch((err)=>
{
    console.log(err + "Fallo en Guardado");
})

// Calcular la nota media de los alumnos de una asignatura concreta.
MarksModel.aggregate([{$group: {"_id": null, "Nota Media": {"$avg": "$mark"}}}])
.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})

// Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos.
MarksModel.aggregate([{$count: "Numero de Alumnos"}])
.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})

// Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos.

MarksModel.aggregate([{$project: {"Nombre del Estudiante": "$student_first_name", "Apellido": "$student_last_name",
                        _id: 0}
            }])
.then((result) =>
{
    console.log(result);
})
.catch((error) =>
{
    console.log(error);
})

// Listar el nombre y los apellidos de todos los profesores incluyendo repetidos.

MarksModel.aggregate([{$project : {'_id' : 0,}},
                    {$unwind : '$teachers'}
])
.then( (result) => {
    console.log('Nombre y Apellido de los Profesores', result)
})
.catch((error) =>
{
    console.log(error);
})

// Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto.

MarksModel.aggregate([{$group :{'_id' : {'Grupo': '$group_name'},'Cantidad' : {'$sum' : 1}}},
                        {$sort : {'Grupo' : -1}}
])
.then( (result) => {
    console.log('Alumnos Ordenados en Orden Inverso', result)
})
.catch((error) =>
{
    console.log(error);
})

// Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5.

MarksModel.aggregate([[{$group : {'_id' : '$subject_name','nota_media' : {$avg : '$mark'}}},
                        {$match :{'nota_media' : { $gt : 5}}},
                        {$sort :{'nota_media': -1}},
                        {$limit : 5}]
])
.then( (result) => {
    console.log('Top 5 de las Asignaturas > 5', result)
})
.catch((error) =>
{
    console.log(error);
})

// Calcular el numero de profesores que hay por cada asignatura incluyendo repetidos.

MarksModel.aggregate([{$unwind: '$teachers'},
                    {$group : {'_id' : ['$teachers.teacher_first_name', '$subject_name' ],'num_veces' : {$sum : 1}}}
])
.then( (result) => {
    console.log('Num de Profesor x Asignatura', result)
})
.catch((error) =>
{
    console.log(error);
})

// Obtén el nombre, apellido y la nota de los alumnos que tengan una nota mayor de 8 o la nota
// tenga fecha del año pasado o anterior.

MarksModel.aggregate([{$match: {$or: [{'mark' : {'$gt' : 8} },
                        {'date': {'$lt' : new Date('2022,08,01')}}]}}
])
.then( (result) => {
    console.log("Nota mayor a 8 o Nota del Año Pasado", result)
})
.catch((error) =>
{
    console.log(error);
})


// Obtén la media de las notas que se han dado en el último año por asignatura.

MarksModel.aggregate([{$match: {date: {'$gt' : new Date('2022,06,11')}}},
                        {$group: {'_id': [{'$avg': '$mark'},'$subject_name']}}
])
.then( (result) => {
    console.log("Nota media del Ultimo Año", result)
})
.catch((error) =>
{
    console.log(error);
})

// Obtén la media aritmética de las notas que se han dado en el último año por nombre de alumno.

MarksModel.aggregate([{$match: {date: {'$gt' : new Date("2022,08,11")}}},
                    {$group: {'_id': {'alumno': '$student_first_name','media': {'$avg' : '$mark'}}}},
])
.then( (result) => {
    console.log('Media de ultimo Año Por Alumno', result)
})
.catch((error) =>
{
    console.log(error);
})

// Obtén los nombres de los alumnos y la cantidad total de asignaturas por alumno cuyo profesor
// sea uno que elijáis.


MarksModel.aggregate([{$unwind: '$teachers'},
                    {$match:{"teachers.teacher_first_name": 'Dani'}},
                    {$group: {  
                    '_id': {'Alumno': '$student_first_name','Asignatura': '$subject_name',
                            'Profesor': '$teachers.teacher_first_name'}}}
])
.then( (result) => {
    console.log('Asignaturas por Alumno Profesor Dani', result)
})
.catch((error) =>
{
    console.log(error);
})


