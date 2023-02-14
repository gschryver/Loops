// chapter 5. loops 
/* chapter vocabulary
1. loop - loops are used to perform repeated tasks based on a condition
2. iteration - iteration occurs when we want to execute code once for each
item in a collection, usually elements in an array or properties of an object
3. increment - the increment operator (++) or (--) adds one to its operand and returns
the value before or after the increment, depending on where the operator is 
placed. 

// increment/decrement operators AFTER an operand 
the value will be returned before the operand is increased or decreased
e.g. let a = 1
    console.log(a++); // 1
    console.log(a); // 2 

// increment/decrement operators BEFORE an operand
the variable will increment before returning. the operation executes immediately
and allows us to instantly log out and see resulting values 
e.g. let a = 1 
    console.log(++a); // 2 
*/ 

// exercise 1. student names
const cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale", "Sydney"]

// for loop
for (let i = 0; i < cohortOneStudents.length; i++) {
    console.log(cohortOneStudents[i]);
}

// exercise 2. 
// step 1. create an array of 5 of your interests

const gabbyInterests = ["Literature", "Photography", "Art", "Nature", "True Crime"]

//  step 2. loop through your interests and console log phrase 

for (let i = 0; i < gabbyInterests.length; i++) {
    console.log("One of my interests is " + gabbyInterests[i] + ".");
}


// exercise 3. 
for (let i = 0; i < gabbyInterests.length; ++i) { 
    if ("Literature" === gabbyInterests[i]) {
        console.log("My absolute favorite interest is " + gabbyInterests[i] + ".");
    }
    else {
        console.log("One of my favorite interests is " + gabbyInterests[i] + ".");
    }
}

// buggered 
// for (let i = 0; i < gabbyInterests.length; ++i) {
//     if (i === 0) {
//         console.log("My absolute favorite interest is " + gabbyInterests[i] + ".");
//     }
//     else if (i !== 0) {
//         console.log("One of my favorite interests is " + gabbyInterests[i] + ".");
//     }
// }