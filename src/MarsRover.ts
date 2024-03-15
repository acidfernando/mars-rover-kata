export class MarsRover {
  private facingDirection: string = "N"
  private xPosition: number = 0
  private yPosition: number = 0

  constructor() {}

  private moveLeft() {
    if (this.xPosition === 0) {
      this.xPosition = 9
      return
    }

    this.xPosition -= 1
  }

  public execute(command: string): string {
    command.split("").forEach((instruction) => {
      switch (instruction) {
        case "M":
          if (this.facingDirection == "N") this.yPosition++
          else if (this.facingDirection == "E") this.xPosition++
          else if (this.facingDirection == "S") this.yPosition--
          else if (this.facingDirection == "W") this.moveLeft()
          break
        case "L":
          if (this.facingDirection == "N") this.facingDirection = "W"
          else if (this.facingDirection == "E") this.facingDirection = "N"
          else if (this.facingDirection == "S") this.facingDirection = "E"
          else if (this.facingDirection == "W") this.facingDirection = "S"
          break
        case "R":
          if (this.facingDirection == "N") this.facingDirection = "E"
          else if (this.facingDirection == "E") this.facingDirection = "S"
          else if (this.facingDirection == "S") this.facingDirection = "W"
          else if (this.facingDirection == "W") this.facingDirection = "N"
          break
      }
    })

    return `${this.xPosition}:${this.yPosition}:${this.facingDirection}`
  }
}
