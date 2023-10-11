;(() => {
  console.group("Using the Array generic type#")
  let arr: Array<string> = [] // this is how to define a arr with type annotation
  // arr[1, '2'] // error
  arr.push("1")
  // arr.push(0)// error
  console.log(arr)

  // another way to use it
  let arr2: string[] = []
  arr2 = ["three"]
  arr2.unshift("two")
  console.log(arr2)
  console.groupEnd()

  console.group("Strongly-typing rest parameters")
  function logScores(firstName: string, ...scores: Array<number>) {
    console.log(firstName, scores)
  }
  logScores("Ben", 50, 75, 85)
  // logScores("Jack", 50, 75, '0') // error
  console.groupEnd()

  console.group("Creating a strongly-typed tuple")
  let tupleInJs = ["Jonathan", 40]
  console.log(tupleInJs) // this is an array type in js actually
  let tupleInTs: [string, number]
  tupleInTs = ["Jonathan", 1] // this is ok, all of the types are matched.
  console.log(tupleInTs)
  // tupleInTs = [1, 2]// error. because of the strongly-typed checking
  let tupleWithRest: [string, ...number[]] // also ...Array<number>
  tupleWithRest = ["Jonathan", 1, 2, 3]
  console.log(tupleWithRest)
  console.groupEnd()

  console.group("Creating a strongly-typed object")
  const tomScore = {
    name: "Tom", // this will be inferenced to string
    score: 70, // this will be inferenced to number
  }
  console.log(tomScore)
  // tomScore.weigh = 10 // raise an error with not exist.

  const jackScore: { name: string; score: number } = {
    // what a strange strongly-typed.
    name: "jack",
    score: 100,
  }
  console.log(jackScore)
  console.groupEnd()

  console.group("Creating type aliases")
  type Score = {
    name: string
    score: number
    sayHello?: () => void // so the type aliases can also define custom function.
  }
  let score0: Score = { name: "Person0", score: 0 }
  console.log("score0", score0)
  let score1: Score = {
    name: "Person1",
    score: 1,
    sayHello: () => {
      console.log("hello world")
    },
  }
  console.log("score1", score1)
  console.groupEnd()

  console.group("Creating interfaces")
  interface ButtonProps {
    text: string
    readonly married: boolean
    age?: number // '?' represents optional
    score: readonly number[]
    onClick: (who: string) => void //three keypoints: function name, parameters, return type
  }
  const buyButton: ButtonProps = {
    text: "Buy",
    married: true,
    age: 0, // optional because of the '?'
    score: [1, 2, 3],
    onClick(who: string) {
      console.log(`${who} will buy it`)
    },
  }

  buyButton.onClick("Jonathan")
  // buyButton.married = false // raise an error because of 'readonly'
  // buyButton.score.push(3) // error because the array elements is readonly
  console.groupEnd()

  console.group("Extending interfaces")
  interface colorfulButtonProps extends ButtonProps {
    color: string
  }
  const myColorfulButton: colorfulButtonProps = {
    color: "red",
    text: "red button",
    married: false,
    score: [1, 2, 3],
    onClick: function (who: string): void {
      console.log(`${who} will buy the red one`)
    },
  }
  myColorfulButton.onClick("Tom")
  console.groupEnd()

  console.group("Creating union types")
  console.log("Understanding a union type")
  type A_or_B_or_C = string | number | boolean
  let myUnionType0: A_or_B_or_C = "hello"
  console.log(myUnionType0)
  let myUnionType1: A_or_B_or_C = 11
  console.log(myUnionType1)
  let myUnionType2: A_or_B_or_C = false
  console.log(myUnionType2)

  console.log("String literal union types") // It sounds like Enum but it's called:narrower typed strings
  type FruitType = "Apple" | "Banana"
  // let myFruit: FruitType = 'pea'// raise error, not match
  let myFruit: FruitType = "Apple" // ok, match
  console.log(myFruit)
  console.groupEnd()

  console.group("Creating intersection types")
  type Name = {
    firstName: string
    lastName: string
  }
  type PhoneNumber = {
    landline: string
    mobile: string
  }

  type Email = {
    emailAddress: string
  }
  type NewIntersectionType = Name & PhoneNumber & Email
  let myIntersectionType: NewIntersectionType = {
    firstName: "Fred",
    lastName: "Smith",
    landline: "0116 4238978",
    mobile: "079543 4355435",
    emailAddress: "123@qq.com",
  }
  console.log(myIntersectionType)
  console.log("Intersection of common members")
  type BaseElement = {
    name: string
    kind: "text" | "number" | "email"
  }
  type TextInput = {
    kind: "text"
  }
  type Field = TextInput & BaseElement

  const age: Field = {
    name: "Age",
    kind: "text",
    // kind: "number" // because the intersaction result is 'text'
  }
  console.log(age)
  type A = {
    doIt: (a: string) => void
  }
  type B = {
    doIt: (a: string, b: string) => void
  }
  type A_and_B = B & A

  // does this raise a type error?
  const ab_v1: A_and_B = {
    doIt: (a: string) => {},
  }
  console.log(ab_v1)

  // does this raise a type error?
  const ab_v2: A_and_B = {
    // doIt: (a: string, b: string) => { } // this will raise an error
    doIt: (a: string) => {
      console.log("do somthing")
    },
  }
  console.log(ab_v2)
  console.groupEnd()
})()
