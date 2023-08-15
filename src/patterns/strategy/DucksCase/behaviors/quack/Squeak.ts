import { QuackBehavior } from "../../interfaces/QuackBehavior";

class Squeak implements QuackBehavior {
  quack(): void {
    console.log("Squeak");
  }
}

export default Squeak;
