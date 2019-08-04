for (let i = 1; i < 10; i++) {
    console.log(i);
}

console.log("");

console.log("+++++++++++");

console.log("");

for (let i = 2; i < 10; i++) {
    console.log("Table of " + i);
    for (let j = 1 ; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`)
    }
    console.log("");
}

console.log("");

let students = [
    {
        name: "Amna",
        hobbies: ["eating", "cooking"]
    },
    {
        name: "Daniyal",
        hobbies: ["arts", "shopping"]
    },
    {
        name: "Fahad",
        hobbies: ["coding", "cooking"]
    },
    {
        name: "Hajra",
        hobbies: ["sleep", "reading"]
    }
];

for (let i = 0 ; i < students.length; i++) {
    console.log("Hobbies of " + students[i].name);
    for (let j = 0; j < students[i].hobbies.length; j++) {
        console.log(`${j + 1}. ${students[i].hobbies[j]}`)
    }
    console.log(" ");
}

console.log("");

for (let i = 1; i <= 9; i++) {
    let line = "";
    for (let j = 1 ; j < i ; j++) {
        line += "  ";
    }
    line += i;
    console.log(line);
}

console.log("");

for (let i = 1; i <= 9; i++) {
    let line = "";
    for (let j = 0 ; j < i ; j++) {
        line += "*";
    }
    line += " " + i;
    console.log(line);
}

console.log("");

for (let i = 1; i <= 9; i++) {
    let line = "";
    for (let j = 0 ; j < i ; j++) {
        line += ".";
    }
    line += " " + i + " ";
    for (let j = 10 ; j > i ; j--) {
        line += "~";
    }
    console.log(line);
}


console.log("");

for (let i = 0 ; i < 9 ; i++) {
    let line = "";
    for (let j = 9; j > i; j--) {
        line += " "
    }
    line += "🌼";
    console.log(line);
}

console.log("");


for (let i = 1; i <=9 ; i++) {
    let line = "";
    for (let j = 1; j <=i ; j++) {
        line += j + " ";
    }
    console.log(line);
}

console.log("");


for (let i = 9; i >=1 ; i--) {
    let line = "";
    for (let j = 1; j <=i ; j++) {
        line += j + " ";
    }
    console.log(line);
}