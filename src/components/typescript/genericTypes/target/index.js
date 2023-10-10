(function () {
    console.group('Understanding the generic type syntax');
    var scores;
    scores = [1, 2, 3];
    console.log('scores=', scores);
    var myCoordinate = [1, 2, 3];
    console.log('myCoordinate=', myCoordinate);
    var coordinateArray;
    coordinateArray = [[1, 2, 3], [11, 22, 33], 'hello'];
    console.log('coordinate array=', coordinateArray);
    var myImmutableAction = {
        type: 'fetchedName',
        data: 'hello'
    };
    // myImmutableAction.data = 'world'
    console.log('myImmutableAction=', myImmutableAction);
    var contact1 = {
        name: "Bob",
        email: "bob@someemail.com"
    };
    var contact2 = {
        // we can assign nothing here, because the "Partial"
        // or we can assign one property
        name: 'Bob'
    };
    var resultRecord0 = {
        "first": {
            firstName: 'firstName',
            surname: 'surname',
            score: 11
        }
    };
    console.log(resultRecord0);
    console.groupEnd();
    console.group('Creating a generic function');
    // this concept is as same as java
    function firstOrNull(array) {
        return array.length == 0 ? null : array[0];
    }
    console.log(firstOrNull([1, 2, 3]));
    console.log(firstOrNull(['one', 'two', 'tree']));
    console.log('Generic arrow functions');
    // if typescript is used with React, there have to be a comma at then end of the generic types.
    var nameAgeArrayFunc = function (type1, type2) {
        return type1 + ' is ' + type2;
    };
    console.log(nameAgeArrayFunc('Jonathan', 40));
    console.groupEnd();
    console.group('Creating generic interfaces');
    var contractForm = {
        value: {
            name: 'Jonathan',
            email: 'Jonathan@god.com'
        }
    };
    console.groupEnd();
    console.group('Creating generic type alias');
    var contactForm = {
        values: {
            name: "Bob",
            email: "bob@someemail.com"
        }
    };
    console.groupEnd();
    console.group('Creating generic classes');
    var List = /** @class */ (function () {
        function List() {
            var _this = this;
            this.items = []; // must be initialized as []
            this.add = function (item) {
                _this.items.push(item);
            };
            // 'public' is optional
            this.getItems = function () {
                return _this.items;
            };
        }
        return List;
    }());
    var myList = new List();
    // myList.add(1) // error
    myList.add('hello');
    // console.log(myList.item) // error
    console.log(myList.getItems());
    console.groupEnd();
})();
