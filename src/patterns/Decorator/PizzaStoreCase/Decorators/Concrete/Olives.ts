import { Pizza } from "../../Components/Abstract/Pizza";
import { CondimentDecorator } from "../Abstract/Condiment";

export class Olives extends CondimentDecorator {
  constructor(pizza: Pizza) {
    super();
    this.pizza = pizza;
  }

  public getDescription(): string {
    return this.pizza.getDescription() + ", Olives";
  }

  public cost(): number {
    return this.pizza.cost() + 0.5;
  }
}
