import { FlyBehavior } from "./interfaces/FlyBehavior";
import { QuackBehavior } from "./interfaces/QuackBehavior";

abstract class Duck {
  abstract display(): void;
  FlyBehavior: FlyBehavior;
  QuackBehavior: QuackBehavior;

  constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
    this.FlyBehavior = flyBehavior;
    this.QuackBehavior = quackBehavior;
  }

  public performFly(): void {
    this.FlyBehavior.fly();
  }

  public performQuack(): void {
    this.QuackBehavior.quack();
  }

  public swim(): void {
    console.log("All ducks float!");
  }
}

export default Duck;
