import Duck from "../Duck";

import FlyWithWings from "../behavior/fly/FlyWithWings";
import Quack from "../behavior/quack/Quack";

class RedHeadDuck extends Duck {
  constructor() {
    super(new FlyWithWings(), new Quack());
  }

  display(): void {
    console.log("I'm a real Red Headed duck");
  }
}

export default RedHeadDuck;
