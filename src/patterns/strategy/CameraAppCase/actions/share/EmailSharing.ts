import { ShareStrategy } from "../../interfaces/ShareStrategy";

class EmailSharing implements ShareStrategy {
  public share(): void {
    console.log("Sharing via Email");
  }
}

export default EmailSharing;
