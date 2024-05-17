#! /usr/bin/env node
import inquirer from "inquirer";
const Marks = await inquirer.prompt([
    { message: "enter the English marks ",
        type: "number",
        name: "English",
    },
    {
        message: "enter the Urdu marks",
        type: "number",
        name: "Urdu",
    },
    {
        message: "enter the Math marks",
        type: "number",
        name: "Math",
    },
    {
        message: "enter the islamiat marks",
        type: "number",
        name: "Islamiat",
    },
    {
        message: "enter the Computer marks",
        type: "number",
        name: "Computer",
    },
]);
let obtainmarks = (Marks.English + Marks.Urdu + Marks.Math + Marks.Islamiat +
    Marks.Computer);
console.log(`Obtain Marks are ${obtainmarks}`);
let totalmarks = 500;
console.log(`Total Marks are ${totalmarks}`);
let percentage = obtainmarks / totalmarks * 100;
console.log(`Your Percentage ${percentage}`);
// grade
if (percentage >= 80 && percentage <= 100) {
    console.log(`Your Grade is "A+" `);
}
else if (percentage >= 70 && percentage <= 79) {
    console.log(`Your Grade is "A"`);
}
else if (percentage >= 60 && percentage <= 69) {
    console.log(`Your Grade is "B"`);
}
else if (percentage >= 50 && percentage <= 59) {
    console.log(`Your Grade is "C"`);
}
else if (percentage >= 40 && percentage <= 49) {
    console.log(`Your Grade is "D"`);
}
else if (percentage >= 33 && percentage <= 39) {
    console.log(`Your Grade is "E"`);
}
else if (percentage <= 33) {
    console.log(`Your are "fail"`);
}
else {
    'finish';
}
if (Marks.English < 33) {
    console.log('you are failed');
}
else if (Marks.Urdu < 33) {
    console.log('you are failed');
}
else if (Marks.Math < 33) {
    console.log(`you are failed`);
}
else if (Marks.Islamiat < 33) {
    console.log("you are failed");
}
else if (Marks.computer < 33) {
    console.log("you are failed");
}
else
    ('finish');
if (Marks.English > 100) {
    console.log('No Result found');
}
else if (Marks.Urdu > 100) {
    console.log('No Result found');
}
else if (Marks.Math > 100) {
    console.log(`No Result found`);
}
else if (Marks.Islamiat > 100) {
    console.log("No Result found");
}
else if (Marks.computer > 100) {
    console.log("No Result found");
}
else
    ('finish');
