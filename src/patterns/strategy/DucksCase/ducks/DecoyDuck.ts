import Duck from "../Duck";

import MuteQuack from "../behaviors/quack/MuteQuack";
import FlyNoWay from "../behaviors/fly/FlyNoWay";

class DecoyDuck extends Duck {
  constructor() {
    super(new FlyNoWay(), new MuteQuack());
  }

  display(): void {
    console.log("I'm a decoy duck");
  }
}

export default DecoyDuck;
