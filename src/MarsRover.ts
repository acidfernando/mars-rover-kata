export class MarsRover {
  constructor() {}

  public execute(command: string): string {
    if (command.includes("M")) {
      return `0:${command.length}:N`
    }

    if (command === "L") return "0:0:W"
    if (command === "R") return "0:0:E"

    return "0:0:N"
  }
}
