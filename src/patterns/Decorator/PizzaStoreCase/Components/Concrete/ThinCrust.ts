import { Pizza } from "../Abstract/Pizza";

export class ThinCrust extends Pizza {
  constructor() {
    super();
    this.description = "Thin Crust";
  }

  public cost(): number {
    return 1;
  }
}
