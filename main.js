//1. create an array of 5 person objects, the objhects should contain first name last name, age and job properties, jobb should be a boolean.
//------------------------------------------------------------------------------------------------------------------------------------------------
const PersonArray = [
    {
        FirstName: "Ola", 
        Surname: "Nordmann",
        Age: 12,
        job: false,
    },
    {
        FirstName: "Anders", 
        Surname: "Kvamme",
        Age: 30,
        job: false,
    },
    {
        FirstName: "Jens", 
        Surname: "Stoltenberg",
        Age: 90,
        job: true,
    },
    {
        FirstName: "Todd", 
        Surname: "Howard",
        Age: 69,
        job: true,
    }
];
//2. print First and last name of the first person in the array. using dot notation on firstname and bracket notation last name
//------------------------------------------------------------------------------------------------------------------------------------------------

console.log(PersonArray[0].FirstName + " " + [PersonArray[0].Surname]);



//3. That was tiresome.. just so much typing. Lets write a method to that we never need to that again..
//create a method in every person object that returns first and last name, call it fullName. This can be done manually for each one or with a loop.
//Print fullName of the second person in the array by calling the method.
//------------------------------------------------------------------------------------------------------------------------------------------------
// const fullName = PersonArray.Firstname + PersonArray.Surname;
// console.log(fullName[1]);
for (let i = 0; i < PersonArray.length ; i++) {
    PersonArray[i].fullName = function () {
      return this.FirstName + " " + this.Surname;
    };
  }
  
  console.log(PersonArray[2].fullName());


//4. Its the third person's birthday! And their job status changed. Update their age and job status using dot notation.
//------------------------------------------------------------------------------------------------------------------------------------------------

// PersonArray[2].Age = 91;
// PersonArray[2].Job = false;
// console.table(PersonArray[2]);


//5. Person three is throwing a giant party! create a function called fotballPubben(). The function should check if the person is over 18, print "party time" if they are and "too young" if they are not. It should also print the name of the person.
// use a loop to call the function for every person in the array.
//------------------------------------------------------------------------------------------------------------------------------------------------

// function fotballPubben(person) {
//     if (person.Age>=18){
//         console.log(person.FirstName + " Party time!")
//     }
//      else {
//         console.log(person.FirstName + " Too young.");
//          }
//     }
// PersonArray.forEach((person)=>{
//     fotballPubben(person)
// })



//6. It's time for school! Create a function called university. It should take in an person object as well as type of degree (bachelors or masters) as arguments.
// The function should update age and add two properties called "degree" and "student loan". The value of age, degree and student loan should change depending on what degree
//was passed into the function. Send one person to uni and print the result.
//------------------------------------------------------------------------------------------------------------------------------------------------



function university (person, b){
    if(Array.isArray(person))
        console.log("No person provided")
    if(b !== "bachelors" && b !== "masters")
        console.log(`${b} is not a valid degree`)
    if (b === "bachelors") {
        person.Age += 2
        person.degree = "bachelors"
        person.studentLoan = 10000
    }
    else if (b === "masters") {
        person.Age += 4
        person.degree = "masters"
        person.studentLoan = 20000
    }
    // else {
    //     console.warn(`${b} is not a valid degree`)
    // }

    }


university(PersonArray[2], "bachelors")
university(PersonArray[3], "masters")
university(PersonArray[1], "asd")
university(PersonArray[0], "bachelors")
console.table(PersonArray);

// 7. API TIME!
// Read the documentation of this dog API: https://dog.ceo/dog-api/documentation/
// Fetch 4 dogs of the same breed or sub-breed and display them in the DOM
//feel free to change the ID of the images and/or add css.
//------------------------------------------------------------------------------------------------------------------------------------------------

//BONUS!!
//create a way for you to change the breed of the dogs displayed on your page
//------------------------------------------------------------------------------------------------------------------------------------------------

class Person{

    constructor(firstname, Surname,age,job){
        this.firstname = firstname
        this.Surname = Surname
        this.age = age
        this.job = job
    }
    get fullName(){
        return this.firstname + " " + this.Surname
    }
}

const per = new Person("per","nordmann", 22, false)

console.table(per)
console.table(per.fullName)