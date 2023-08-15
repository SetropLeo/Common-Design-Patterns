import Duck from "../Duck";

import MuteQuack from "../behavior/quack/MuteQuack";
import FlyNoWay from "../behavior/fly/FlyNoWay";

class DecoyDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new MuteQuack());
  }

  display(): void {
    console.log("I'm a decoy duck");
  }
}

export default DecoyDuck;
