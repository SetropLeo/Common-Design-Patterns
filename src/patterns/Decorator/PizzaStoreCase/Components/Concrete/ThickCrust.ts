import { Pizza } from "../Abstract/Pizza";

export class ThickCrust extends Pizza {
  constructor() {
    super();
    this.description = "Thick Crust";
  }

  public cost(): number {
    return 2;
  }
}
