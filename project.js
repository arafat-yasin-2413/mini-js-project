let students = [
    {id: 101, name: "Rahim", age: 20, department: "CSE"},
    {id: 101, name: "Rahim", age: 20, department: "CSE"},

]

// console.log(students);

function addStudent(name, age, department) {
    let newId = students.length > 0 ? students[students.length - 1].id + 1 : 101;

    let newStudent = {
        id: newId,
        name: name,
        age: age,
        department: department,
    };

    students.push(newStudent);
    
}

addStudent("Fahim",24,"EEE");

console.log(students);