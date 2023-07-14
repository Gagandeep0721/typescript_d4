import { v4 as uuidv4 } from "uuid"
let myUuid = uuidv4()
console.log(myUuid);


class Item {
  private id: string
  private name: string
  private price: number
  private description: string

  constructor(name: string, 
            price: number, 
            description: string) {
    this.id = uuidv4()
    this.name = name
    this.price = price
    this.description = description
  }
   public getId(): string {
    return this.id
  }

  public getName(): string {
    return this.name
  }
  public setName(value: string) {
    this.name = value
  }

  public getPrice(): number {
    return this.price
  }
  public setPrice(value: number) {
    this.price = value
  }

  public getDescription(): string {
    return this.description
  }
  public setDescription(value: string) {
    this.description = value
  }
}

export default Item