let students = [
    { name: "Ademi", grade: 80 },
    { name: "Aida", grade: 75 },
    { name: "Diana", grade: 90 },
    { name: "Anna", grade: 65 }
];

let updatedStudents = students.map(student => {
    return {
        name: student.name,
        grade: student.grade + 5
    };
});

console.log("Original students:");
console.log(students);

console.log("Updated students:");
console.log(updatedStudents);