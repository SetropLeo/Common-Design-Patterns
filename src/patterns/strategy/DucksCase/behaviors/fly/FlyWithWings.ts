import { FlyBehavior } from "../../interfaces/FlyBehavior";

class FlyWithWings implements FlyBehavior {
  fly(): void {
    console.log("I'm flying!!");
  }
}

export default FlyWithWings;
