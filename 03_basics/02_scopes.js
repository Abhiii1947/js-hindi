let a = 300

if(true){
    let a = 10
    const b = 20
    var c = 30

    console.log("Inner: ", a); // a = 10
}

console.log(a);  // a = 300