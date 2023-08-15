import PhoneCameraApp from "../PhoneCameraApp";
import TxtSharing from "../actions/share/TxtSharing";

class BasicCameraApp extends PhoneCameraApp {
  constructor() {
    super(new TxtSharing());
  }

  public edit(): void {
    console.log("Basic editing features");
  }
}

export default BasicCameraApp;
