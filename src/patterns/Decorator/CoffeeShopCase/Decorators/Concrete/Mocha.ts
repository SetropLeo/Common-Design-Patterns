import { Beverage } from "../../Components/Abstract/Beverage";
import { CondimentDecorator } from "../Abstract/Condiment";

export class Mocha extends CondimentDecorator {
  private beverage: Beverage;

  constructor(beverage: Beverage) {
    super();
    this.beverage = beverage;
  }

  public getDescription(): string {
    return this.beverage.getDescription() + ", Mocha";
  }

  public cost(): number {
    return this.beverage.cost() + 0.2;
  }
}
