import { Beverage } from "./Components/Abstract/Beverage";
import { DarkRoast } from "./Components/Concrete/DarkRoast";
import { Mocha } from "./Decorators/Concrete/Mocha";
import { Whip } from "./Decorators/Concrete/Whip";

export class StarbuzzCoffee {
  static start(): void {
    let beverage: Beverage = new DarkRoast();
    beverage = new Mocha(beverage);
    beverage = new Mocha(beverage);
    beverage = new Whip(beverage);
    console.log(beverage.getDescription() + " $" + beverage.cost());
  }
}

StarbuzzCoffee.start();
