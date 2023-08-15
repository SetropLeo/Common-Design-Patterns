import { ShareStrategy } from "../../interfaces/ShareStrategy";

class TxtSharing implements ShareStrategy {
  public share(): void {
    console.log("Sharing via TXT");
  }
}

export default TxtSharing;
