import { Beverage } from "../Abstract/Beverage";

export class HouseBlend extends Beverage {
  constructor() {
    super();
    this.description = "House Blend Coffee";
  }

  public cost(): number {
    return 0.89;
  }
}
