import Duck from "../Duck";
import FlyNoWay from "../behaviors/fly/FlyNoWay";
import Squeak from "../behaviors/quack/Squeak";

class RubberDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new Squeak());
  }

  display(): void {
    console.log("I'm a rubber duckie");
  }
}

export default RubberDuck;
