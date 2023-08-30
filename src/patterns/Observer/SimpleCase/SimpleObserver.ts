import { SimpleSubject } from "./SimpleSubject";
import { Observer } from "./interfaces/Observer";

export class SimpleObserver implements Observer {
  private value: number;
  private Subject: SimpleSubject = new SimpleSubject();

  constructor() {
    this.Subject.registerObserver(this);
  }

  public update(value: number): void {
    this.value = value;
    this.display();
  }

  public display() {
    console.log(`Value: ${this.value}`);
  }

  public unsubscribe(): void {
    this.Subject.removeObserver(this);
  }
}
