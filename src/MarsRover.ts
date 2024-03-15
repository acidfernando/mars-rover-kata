export class MarsRover {
  constructor() {}

  public execute(command: string): string {
    const lookingRight = command.includes("R") ? true : false
    if (command.includes("M")) {
      return lookingRight ? `${command.length - 1}:0:E` : `0:${command.length}:N`
    }

    if (command === "L") return "0:0:W"
    if (command === "R") return "0:0:E"

    return "0:0:N"
  }
}
