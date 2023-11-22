// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(typeof myDate); // object

// let myCreatedDate = new Date(2023, 9, 30)
// console.log(myCreatedDate.toDateString());  //Mon Oct 30 2023
// let myCreatedDate = new Date("10-30-2023")  //Mon Oct 30 2023
// console.log(myCreatedDate.toDateString());

let newDate = new Date()
// console.log(newDate); //2023-10-30T08:14:02.761Z
// console.log(newDate.getMonth()); //9 (months start from 0(january) to 11(december))
// console.log(newDate.getDay()); //1

newDate.roLocaleString('default', {
    weekday: "long",
})