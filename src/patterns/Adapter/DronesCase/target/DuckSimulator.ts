import Duck from "../../DucksCase/target/Duck";
import SuperDrone from "../adaptee/SuperDrone";
import DroneAdapter from "../adapter/DroneAdapter";

class DuckSimulator {
  static start(): void {
    // Test Drone
    const drone = new SuperDrone();
    const droneAdapter = new DroneAdapter(drone);
    this.testDuck(droneAdapter);
  }

  static testDuck(duck: Duck): void {
    duck.quack();
    duck.fly();
  }
}

export default DuckSimulator;

DuckSimulator.start();
