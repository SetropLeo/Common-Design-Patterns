import { Pizza } from "../../Components/Abstract/Pizza";
import { CondimentDecorator } from "../Abstract/Condiment";

export class Cheese extends CondimentDecorator {
  constructor(pizza: Pizza) {
    super();
    this.pizza = pizza;
  }

  public getDescription(): string {
    return this.pizza.getDescription() + ", Cheese";
  }

  public cost(): number {
    return this.pizza.cost() + 1.25;
  }
}
