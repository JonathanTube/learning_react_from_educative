(function () {
    console.group('Using the Array generic type#');
    var arr = []; // this is how to define a arr with type annotation
    // arr[1, '2'] // error
    arr.push('1');
    // arr.push(0)// error
    console.log(arr);
    // another way to use it
    var arr2 = [];
    arr2 = ['three'];
    arr2.unshift('two');
    console.log(arr2);
    console.groupEnd();
    console.group('Strongly-typing rest parameters');
    function logScores(firstName) {
        var scores = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            scores[_i - 1] = arguments[_i];
        }
        console.log(firstName, scores);
    }
    logScores("Ben", 50, 75, 85);
    // logScores("Jack", 50, 75, '0') // error
    console.groupEnd();
    console.group('Creating a strongly-typed tuple');
    var tupleInJs = ['Jonathan', 40];
    console.log(tupleInJs); // this is an array type in js actually
    var tupleInTs;
    tupleInTs = ['Jonathan', 1]; // this is ok, all of the types are matched.
    // tupleInTs = [1, 2]// error. because of the strongly-typed checking
    var tupleWithRest; // also ...Array<number>
    tupleWithRest = ['Jonathan', 1, 2, 3];
    console.groupEnd();
    console.group('Creating a strongly-typed object');
    var tomScore = {
        name: "Tom",
        score: 70 // this will be inferenced to number
    };
    // tomScore.weigh = 10 // raise an error with not exist.
    var jackScore = {
        name: 'jack',
        score: 100
    };
    console.groupEnd();
    console.group('Creating type aliases');
    var score0 = { name: 'Person0', score: 0 };
    console.log('score0', score0);
    var score1 = {
        name: 'Person1',
        score: 1,
        sayHello: function () {
            console.log('hello world');
        }
    };
    console.log('score1', score1);
    console.groupEnd();
    console.group('Creating interfaces');
    var buyButton = {
        text: 'Buy',
        married: true,
        age: 0,
        score: [1, 2, 3],
        onClick: function (who) {
            console.log("".concat(who, " will buy it"));
        }
    };
    buyButton.onClick('Jonathan');
    // buyButton.married = false // raise an error because of 'readonly'
    // buyButton.score.push(3) // error because the array elements is readonly
    console.groupEnd();
    console.group('Extending interfaces');
    var myColorfulButton = {
        color: "red",
        text: "red button",
        married: false,
        score: [1, 2, 3],
        onClick: function (who) {
            console.log("".concat(who, " will buy the red one"));
        }
    };
    myColorfulButton.onClick("Tom");
    console.groupEnd();
    console.group('Creating union types');
    console.log('Understanding a union type');
    var myUnionType0 = 'hello';
    console.log(myUnionType0);
    var myUnionType1 = 11;
    console.log(myUnionType1);
    var myUnionType2 = false;
    console.log(myUnionType2);
    console.log('String literal union types'); // It sounds like Enum but it's called:narrower typed strings
    // let myFruit: FruitType = 'pea'// raise error, not match
    var myFruit = 'Apple'; // ok, match
    console.log(myFruit);
    console.groupEnd();
    console.group('Creating intersection types');
    var myIntersectionType = {
        firstName: "Fred",
        lastName: "Smith",
        landline: "0116 4238978",
        mobile: "079543 4355435",
        emailAddress: '123@qq.com'
    };
    console.log(myIntersectionType);
    console.log('Intersection of common members');
    var age = {
        name: "Age",
        kind: 'text'
        // kind: "number" // because the intersaction result is 'text'
    };
    // does this raise a type error?
    var ab_v1 = {
        doIt: function (a) { }
    };
    // does this raise a type error?
    var ab_v2 = {
        // doIt: (a: string, b: string) => { } // this will raise an error
        doIt: function (a) {
            console.log('do somthing');
        }
    };
    console.groupEnd();
})();
