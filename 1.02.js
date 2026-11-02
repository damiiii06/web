let students = [
    { id: 1, name: "Ademi", grade: 95 },
    { id: 2, name: "Mira", grade: 78 },
    { id: 3, name: "Amina", grade: 88 },
];

// 1. Вывод информации о студентах
for (let i = 0; i < students.length; i++) {
    let student = students[i];

    console.log("Name:", student.name);
    console.log("Letters:", student.name.length);
    console.log("Grade:", student.grade);
}

// 2. Подсчет среднего балла
let total = 0;

for (let i = 0; i < students.length; i++) {
    total += students[i].grade;
}

let average = total / students.length;

console.log("Average grade:", average);

// 3. Поиск самой высокой и самой низкой оценки
let highest = students[0];
let lowest = students[0];

for (let i = 1; i < students.length; i++) {
    if (students[i].grade > highest.grade) {
        highest = students[i];
    }

    if (students[i].grade < lowest.grade) {
        lowest = students[i];
    }
}

console.log("Highest grade:", highest.name, highest.grade);
console.log("Lowest grade:", lowest.name, lowest.grade);

// 4. Поиск студента с самым длинным именем
let longestName = students[0];

for (let i = 1; i < students.length; i++) {
    if (students[i].name.length > longestName.name.length) {
        longestName = students[i];
    }
}

console.log("Longest name:", longestName.name);
console.log("Number of letters:", longestName.name.length);
