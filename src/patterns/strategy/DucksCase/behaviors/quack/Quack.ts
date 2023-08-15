import { QuackBehavior } from "../../interfaces/QuackBehavior";

class Quack implements QuackBehavior {
  quack(): void {
    console.log("Quack");
  }
}

export default Quack;
