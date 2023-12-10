//Immediately Invoked Function Expressions (IIFE)


(function chai() {
    //named IIFE  //here function name is exist
    console.log(`DB CONNECTED`);
})();

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("abhishek");
