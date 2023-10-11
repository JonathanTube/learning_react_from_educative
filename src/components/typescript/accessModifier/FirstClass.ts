export default class FirstClass {
  constructor(name: string, age: number, marriaged: boolean) {
    this.name = name
    this.age = age
    this.marriaged = marriaged
  }
  public name: string // It can be accessed anywhere
  private age: number // It can only be accessed by itself.
  protected marriaged: boolean
}
