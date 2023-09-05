export abstract class Pizza {
  description: string = "Unknown Pizza";

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}
