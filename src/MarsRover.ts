export class MarsRover {
  constructor() {}

  public execute(command: string): string {
    if (command === "M") return "0:1:N"
    if (command === "L") return "0:0:W"
    if (command === "R") return "0:0:E"
    return "0:0:N"
  }
}
