import { Pizza } from "./Components/Abstract/Pizza";
import { ThickCrust } from "./Components/Concrete/ThickCrust";
import { Cheese } from "./Decorators/Concrete/Cheese";
import { Olives } from "./Decorators/Concrete/Olives";
import { Peppers } from "./Decorators/Concrete/Peppers";

export class PizzaStore {
  static start(): void {
    let pizza: Pizza = new ThickCrust();
    pizza = new Peppers(pizza);
    pizza = new Olives(pizza);
    pizza = new Cheese(pizza);
    console.log(pizza.getDescription() + " $" + pizza.cost());
  }
}

PizzaStore.start();
