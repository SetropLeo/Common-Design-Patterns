import { Pizza } from "../../Components/Abstract/Pizza";
import { CondimentDecorator } from "../Abstract/Condiment";

export class Peppers extends CondimentDecorator {
  constructor(pizza: Pizza) {
    super();
    this.pizza = pizza;
  }

  public getDescription(): string {
    return this.pizza.getDescription() + ", Peppers";
  }

  public cost(): number {
    return this.pizza.cost() + 0.75;
  }
}
