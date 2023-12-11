// const myObject = {
//     js: 'javascript',
//     cpp: 'C++',
//     rb: 'ruby',
//     swift: 'swift by apple'
// }

// for(const key in myObject){
    // console.log(`${key} :- ${myObject[key]}`);
// }


// const programming = ["js", "rb", "py", "java", "cpp"]

// for (const key in programming){
//     console.log(programming[key]);
// }


// programming.forEach( function (val) {
//     console.log(val);
// })


// programming.forEach( (item) => {
//     console.log(item);
// })


// function printMe(item) {
//     console.log(item);
// }

// programming.forEach(printMe);


// programming.forEach((item, index, arr) => {
//     console.log(item, index, arr);
// })


const arr = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    }
]

arr.forEach( (item) => {
    console.log(item.languageFileName);
})