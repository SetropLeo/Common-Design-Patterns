import Drone from "./Drone";

class SuperDrone implements Drone {
  public beep(): void {
    console.log("beep beep beep");
  }

  public spin_rotors(): void {
    console.log("rotors are spinning");
  }

  public take_off(): void {
    console.log("taking off");
  }
}

export default SuperDrone;
