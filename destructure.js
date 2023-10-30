// const employees = {
//     engineers: {
//         one: {
//             id: 1,
//             name: "John Doe",
//             occupation: "Back-end Engineer"
//         },
//         two: {
//             id: 2,
//             name: "Jane Doe",
//             occupation: "Front-end Engineer",
//             phone: [1314667984, 134566]

//         },


//     }
// };

//const { engineers: { two: { id, phone: [a, b] } } } = employees


// Nested Object Destructuring in JavaScript
const person = {
    name: "Muzahid", age: 48,
    address: {
        permanent: { flatNo: 23, city: "New york" },
        temporary: { flatNo: 34, city: "Dhaka" }
    },
    phone: [987654345, 879846527]
}

const { naame, age, address: { permanent: { flatNo, city }, temporary } } = person;
console.log(temporary);



// person.name
// person.age
// const { name: userName, age,
//     address: { permanent: { city: homeTown }, temporary }, phone } = person
// console.log(homeTown)
// console.log(userName)
// const [mobileNumber, telephone] = phone
// console.log(mobileNumber)
// console.log(b);