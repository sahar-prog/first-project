export class Elixer {
  constructor(
    public name: string,
    public effect: string,
    public sideEffects: string,
    public caracteristics: string,
    public time: string,
    public dificulty: unknown,
  ) {
    this.name = name;
    this.effect = effect;
    this.sideEffects = sideEffects;
    this.caracteristics = caracteristics;
    this.time = time;
    this.dificulty = dificulty;
  }
}
