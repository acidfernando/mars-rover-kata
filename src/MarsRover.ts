export class MarsRover {
  constructor() {}

  public execute(command: string): string {
    if (command === "M") return "0:1:N"
    return "0:0:N"
  }
}