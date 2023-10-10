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
})();
