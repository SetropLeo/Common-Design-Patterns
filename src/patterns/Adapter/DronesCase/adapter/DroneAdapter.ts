import Duck from "../../DucksCase/target/Duck";
import Drone from "../adaptee/Drone";

class DroneAdapter implements Duck {
  public drone: Drone;

  constructor(drone: Drone) {
    this.drone = drone;
  }

  public quack(): void {
    this.drone.beep();
  }

  public fly(): void {
    this.drone.spin_rotors();
    this.drone.take_off();
  }
}

export default DroneAdapter;
