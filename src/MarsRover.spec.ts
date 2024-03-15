import { describe, expect, it } from "vitest"
import { MarsRover } from "./MarsRover.js"

describe(MarsRover, () => {
  it("should create a Mars Rover in 0:0:N", () => {
    const marsRover = new MarsRover()

    const position = marsRover.execute("")
    expect(position).toBe("0:0:N")
  })

  it("should create a rover and move it North", () => {
    const marsRover = new MarsRover()

    const position = marsRover.execute("M")
    expect(position).toBe("0:1:N")
  })

  it("should create a rover and should be able to turn Left", () => {
    const marsRover = new MarsRover()

    const position = marsRover.execute("L")
    expect(position).toBe("0:0:W")
  })
})
