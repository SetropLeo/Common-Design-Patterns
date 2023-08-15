import Quack from "./Quack";

class MuteQuack implements Quack {
  quack(): void {
    console.log("<< Silence >>");
  }
}

export default MuteQuack;
