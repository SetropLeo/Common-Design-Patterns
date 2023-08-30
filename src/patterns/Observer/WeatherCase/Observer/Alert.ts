import { WeatherStation } from "../Subject/WeatherStation";
import { Observer } from "../interfaces/Observer";
import { Subject } from "../interfaces/Subject";

export class Alert implements Observer {
  private temperature: number;
  private windSpeed: number;
  private pressure: number;
  private subject: Subject = new WeatherStation();

  constructor() {
    this.subject.registerObserver(this);
  }

  public update(
    temperature: number,
    windSpeed: number,
    pressure: number
  ): void {
    this.temperature = temperature;
    this.windSpeed = windSpeed;
    this.pressure = pressure;
    this.alert();
  }

  private alert() {
    console.log(
      `Temperature: ${this.temperature}, WindSpeed: ${this.windSpeed}, Pressure: ${this.pressure}`
    );
  }
}
