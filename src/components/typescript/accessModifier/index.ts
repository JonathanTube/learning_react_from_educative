import FirstClass from "./FirstClass"
;(() => {
  let firstClass: FirstClass = new FirstClass("Jonathan", 40, true)
  console.log(firstClass.name)
  // console.log(firstClass.marriaged) // It can not be accessed outside the class

  // console.log(firstClass.age) // It raises an error since the age property access modifier is private
  // console.log(firstClass.getAge()) // raise an error.

  class SecondClass extends FirstClass {
    isMarriaged = () => {
      return this.marriaged // It can only be accessed by its derived class !!!!!
    }
  }

  let secondClass: SecondClass = new SecondClass("Tom", 20, false)
  console.log(secondClass.name)
  console.log(secondClass.isMarriaged())
})()
