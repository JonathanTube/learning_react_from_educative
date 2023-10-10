// if the console cannot execute tsc command: 1. open terminal with power user 2. execute scripts: set-ExecutionPolicy RemoteSigned
// compile ts file to js file: tsc filename
// watching file changes: tsc --watch filename
// assign the output folder: tsc --outDir ./js_output
(function () {
    console.group('js basic type');
    var v0 = Symbol(1); // js new type
    var v00 = null;
    console.log(typeof v00); // here will be the object type, it's a bug in js
    console.groupEnd();
    //=====> typescript types
    var v1 = 'test';
    // v1 = 1 // error
    var v2 = 1;
    var v3 = false;
    console.group('ts func');
    // normal function
    function func1(name) {
        return "hello ".concat(name);
    }
    console.log(func1('Jonathan'));
    // arrow function
    var func2 = function (name) {
        return "hello ".concat(name);
    };
    console.log(func2('Eric'));
    // optional function params, the optional param must be the last one
    var func3 = function (name, age) {
        return "hello ".concat(name, ", your age is ").concat(age || 'unknown');
    };
    console.log(func3('Zhang'));
    console.log(func3('Zhang', 100));
    console.groupEnd();
    console.group('Understanding type inference');
    var param0 = 1; // TypeScript has inferred the type to be number.
    // TypeScript infers the type of a string constant to the value of the constant rather than the wider string type.
    var param1 = 'Bob'; // No - the type is "Bob"!
    var birthday = new Date(2023, 10, 9); // TypeScript has inferred the type to be Date. Date is not a type in JavaScript; so, this is a TypeScript specific type.
    var first = "Bob";
    var last = "Smith";
    var fullName = first; // when assignment occurs, typescript will infer the type of the variable
    fullName += " ";
    fullName += last;
    console.log(fullName); // Bob Smith
    console.groupEnd();
    console.group('any type in ts');
    var something;
    something = "Bob";
    something = 33;
    something = false;
    something = new Date(2019, 0, 22);
    console.log(something);
    console.groupEnd();
    console.group('void type in ts');
    var func5 = function () {
        console.log('void');
    };
    func5();
    var whatCanIHold;
    whatCanIHold = undefined;
    // whatCanIHold = null // it can only be undefined or null if the strictNullChecks compiler option is off.
    // whatCanIHold = "something"
    console.groupEnd();
    console.group('Using the never type');
    var keepLogging = function (message) {
        while (true) {
            console.log(message);
        }
    };
    console.groupEnd();
    console.group('Using the unknown type');
    var param2 = 1; // why unknow type exists? if use any there is no type checking, so we need a special type
    console.log(typeof param2); // a bit confusing!
    console.groupEnd();
    console.group('Using type assertions');
    function getAge(id) {
        // return 'hello' // the final result is NaN
        return 30;
    }
    function calcDiscount(age) {
        return age / 100;
    }
    // const discount1 = calcDiscount(<number>getAge(1)) // has an error in react project
    var discount1 = calcDiscount(getAge(1)); // use this to solve this problem. This is the syntax that is generally used in React apps.
    console.log(discount1);
    console.groupEnd;
})();
