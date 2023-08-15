import PhoneCameraApp from "../PhoneCameraApp";
import SocialSharing from "../actions/share/SocialSharing";

class CameraAppPluss extends PhoneCameraApp {
  constructor() {
    super(new SocialSharing());
  }

  public edit(): void {
    console.log("Plus editing features");
  }
}

export default CameraAppPluss;
