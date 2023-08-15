import Duck from "../Duck";

import FlyWithWings from "../behaviors/fly/FlyWithWings";
import Quack from "../behaviors/quack/Quack";

class MallardDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }

  display(): void {
    console.log("I'm a real Mallard duck");
  }
}

export default MallardDuck;
