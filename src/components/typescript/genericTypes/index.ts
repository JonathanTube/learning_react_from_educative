(() => {
    console.group('Understanding the generic type syntax')
    let scores: Array<number>
    scores = [1, 2, 3]
    console.log('scores=', scores)

    type Coordinate = [number, number, number]
    let myCoordinate = [1, 2, 3]
    console.log('myCoordinate=', myCoordinate)

    let coordinateArray: Array<Coordinate | string>
    coordinateArray = [[1, 2, 3], [11, 22, 33], 'hello']
    console.log('coordinate array=', coordinateArray)

    // The below code cannot run without browser enviroment.
    // const response: Promise<Response> = fetch("https://swapi.dev/api/");
    // response.then(res => console.log(res.ok));

    type Action = {
        type: "fetchedName"
        data: string
    }

    // If add this, There's no need to add readonly keywords for every property.
    type ImmutableAction = Readonly<Action>
    let myImmutableAction: ImmutableAction = {
        type: 'fetchedName',
        data: 'hello'
    }
    // myImmutableAction.data = 'world'
    console.log('myImmutableAction=', myImmutableAction)


    type Contact = {
        name: "Bob",
        email: "bob@someemail.com"
    }
    let contact1: Contact = {
        name: "Bob",
        email: "bob@someemail.com"
    }

    let contact2: Partial<Contact> = {
        // we can assign nothing here, because the "Partial"
        // or we can assign one property
        name: 'Bob'
    }

    type Result = {
        firstName: string
        surname: string
        score: number
    }
    type ResultRecord = Record<string, Result>

    let resultRecord0: ResultRecord = {
        "first": {
            firstName: 'firstName',
            surname: 'surname',
            score: 11
        }
    }
    console.log(resultRecord0)
    console.groupEnd()



    console.group('Creating a generic function')
    // this concept is as same as java
    function firstOrNull<ItemType>(array: Array<ItemType>): ItemType | null {
        return array.length == 0 ? null : array[0]
    }
    console.log(firstOrNull([1, 2, 3]))
    console.log(firstOrNull(['one', 'two', 'tree']))

    console.log('Generic arrow functions')
    // if typescript is used with React, there have to be a comma at then end of the generic types.
    const nameAgeArrayFunc = <Type1, Type2,>(type1: Type1, type2: Type2): string => {
        return type1 + ' is ' + type2
    }
    console.log(nameAgeArrayFunc('Jonathan', 40))
    console.groupEnd()




    console.group('Creating generic interfaces')
    interface Form<T> {
        value: T
    }
    interface Contract {
        name: string
        email: string
    }
    const contractForm: Form<Contract> = {
        value: {
            name: 'Jonathan',
            email: 'Jonathan@god.com'
        }
    }
    console.groupEnd()



    console.group('Creating generic type alias')
    type FormType<T> = {
        values: T;
    }

    const contactForm: FormType<Contact> = {
        values: {
            name: "Bob",
            email: "bob@someemail.com"
        }
    };
    console.groupEnd()





    console.group('Creating generic classes')
    class List<ItemType>{
        private items: ItemType[] = [] // must be initialized as []
        add = (item: ItemType): void => {
            this.items.push(item)
        }
        // 'public' is optional
        public getItems = (): ItemType[] => {
            return this.items
        }
    }
    let myList = new List<string>()
    // myList.add(1) // error
    myList.add('hello')
    // console.log(myList.item) // error
    console.log(myList.getItems())


    console.groupEnd()
})()