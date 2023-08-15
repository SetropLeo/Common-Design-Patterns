import { ShareStrategy } from "./interfaces/ShareStrategy";

abstract class PhoneCameraApp {
  abstract edit(): void;
  ShareStrategy: ShareStrategy;

  constructor(shareStrategy: ShareStrategy) {
    this.ShareStrategy = shareStrategy;
  }

  public share(): void {
    this.ShareStrategy.share();
  }

  public setShareStrategy(shareStrategy: ShareStrategy): void {
    this.ShareStrategy = shareStrategy;
  }

  public take(): void {
    console.log("Taking a photo");
  }

  public save(): void {
    console.log("Saving a photo");
  }
}

export default PhoneCameraApp;
