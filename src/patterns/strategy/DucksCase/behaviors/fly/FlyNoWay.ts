import { FlyBehavior } from "../../interfaces/FlyBehavior";

class FlyNoWay implements FlyBehavior {
  fly(): void {
    console.log("I can't fly");
  }
}

export default FlyNoWay;
