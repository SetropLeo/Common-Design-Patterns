import { ShareStrategy } from "../../interfaces/ShareStrategy";

class SocialSharing implements ShareStrategy {
  public share(): void {
    console.log("Sharing via Social Sharing");
  }
}

export default SocialSharing;
