let students = [
  {
    name: "Amna",
    gender: "f",
    dob: new Date("02-04-1990"),
    address: {
      ilaqa: "Gulistan-e-Johar",
      city: "Karachi",
      country: "Pakistan",
      postalCode: 47114
    },
    phoneNo: "0331-2324243",
    admissionTestScore: 56,
    hasInternet: true,
    hasComputer: false,
    hasJob: true,
    hasSchoolBefore: false
  },
  {
    name: "Hadia",
    gender: "f",
    dob: new Date("05-15-1984"),
    address: {
      ilaqa: "Lyari",
      city: "Karachi",
      country: "Pakistan",
      postalCode: 75660
    },
    phoneNo: "0345-3452953",
    admissionTestScore: 48,
    hasInternet: false,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: true
  },
  {
    name: "Ahmed",
    gender: "m",
    dob: new Date("06-27-2002"),
    address: {
      ilaqa: "University Road",
      city: "Quetta",
      country: "Pakistan",
      postalCode: 82215
    },
    phoneNo: "0333-0124325",
    admissionTestScore: 33,
    hasInternet: true,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: false
  },
  {
    name: "Fariha",
    gender: "f",
    dob: new Date("09-13-1998"),
    address: {
      ilaqa: "University Road",
      city: "Karachi",
      country: "Pakistan",
      postalCode: 82215
    },
    phoneNo: "0331-9432532",
    admissionTestScore: 33,
    hasInternet: true,
    hasComputer: false,
    hasJob: false,
    hasSchoolBefore: false
  },
  {
    name: "Abdullah",
    gender: "m",
    dob: new Date("01-24-1972"),
    address: {
      ilaqa: "Bazar Colony",
      city: "Lahore",
      country: "Pakistan",
      postalCode: 32212
    },
    phoneNo: "0345-9912121",
    admissionTestScore: 33,
    hasInternet: false,
    hasComputer: false,
    hasJob: true,
    hasSchoolBefore: true
  }
];

console.log("all students:");

for (let i = 0; i < students.length; i++) {
  console.log(`Name: ${students[i].name}`);
  console.log(`Gender: ${students[i].gender === "f" ? "Female" : "male"}`);
  console.log(`City: ${students[i].address.city}`);
  console.log(`Score: ${students[i].admissionTestScore} marks`);
  console.log("");
}

console.log("Female students only");
students.forEach(s => {
  if (s.gender === "f") {
    console.log(s.name);
  }
});
console.log("");

console.log("Male students only");

students.forEach(s => {
  if (s.gender === "m") {
    console.log(s.name);
  }
});
console.log("");

console.log("Passing marks are 50");

students.forEach(s => {
  if (s.admissionTestScore >= 50) {
    console.log(`${s.name}'s marks: ${s.admissionTestScore}`);
  }
});
console.log("");

console.log("Eligible only if has internet and from karachi");

students.forEach(s => {
  if (s.hasInternet && s.address.city === "Karachi") {
    console.log(s.name);
  }
});

console.log("");

console.log("Group A - student no job.. Group B - student have job or student");
const groupA = [];
const groupB = [];

students.forEach(s => {
  if (s.hasJob || s.hasSchoolBefore) {
    groupB.push(s.name);
  } else groupA.push(s.name);
});
console.log("Group A: ", groupA.join(", "));
console.log("Group B: ", groupB.join(", "));
console.log("");

console.log("Ages");

function getAge(dob) {
    const now = new Date();
    const yearDiff = now.getFullYear() - dob.getFullYear() - 1;
    const monthDiff = now.getMonth() - dob.getMonth();
    const dayDiff = now.getDate() - dob.getDate();
  
    let age = yearDiff;
    if (monthDiff > 0) {
      age++;
    } else if (monthDiff === 0) {
      if (dayDiff > 0) age++;
    }
    return age;
}

for (let i = 0; i < students.length; i++) {
  let age = getAge(students[i].dob);
  console.log(`${students[i].name}'s age is ${age} years`);
}

console.log("");

console.log("Students with Ufone");

students.forEach(s => {
  if (
    s.phoneNo.startsWith("0330") ||
    s.phoneNo.startsWith("0331") ||
    s.phoneNo.startsWith("0332") ||
    s.phoneNo.startsWith("0333") ||
    s.phoneNo.startsWith("0334") ||
    s.phoneNo.startsWith("0335") ||
    s.phoneNo.startsWith("0336") ||
    s.phoneNo.startsWith("0337")
  ) {
    console.log(`${s.name} - phone: ${s.phoneNo}`);
  }
});

console.log("");

students.forEach(s => {
  console.log(`${s.name}'s address:`);
  console.log(`${s.address.ilaqa} in ${s.address.city}, ${s.address.country}`);
  console.log("");
});

console.log("oldest student");

let oldest = students[0];

students.forEach(s => {
    if ( getAge(s.dob) > getAge(oldest.dob)) {
        oldest = s;
    }
});
console.log(oldest.name);