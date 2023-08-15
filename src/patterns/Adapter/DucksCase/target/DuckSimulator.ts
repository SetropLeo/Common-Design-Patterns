import Duck from "./Duck";
import MallardDuck from "./MallardDuck";
import Turkey from "../adaptee/Turkey";
import TurkeyAdapter from "../adapter/TurkeyAdapter";

class DuckSimulator {
  static start(): void {
    // Test Mallard Duck
    const duck: Duck = new MallardDuck();
    this.testDuck(duck);

    // Test Turkey
    const turkey: Turkey = new Turkey();
    const turkeyAdapter = new TurkeyAdapter(turkey);
    this.testDuck(turkeyAdapter);
  }

  static testDuck(duck: Duck): void {
    duck.quack();
    duck.fly();
  }
}

export default DuckSimulator;
