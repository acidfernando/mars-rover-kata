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

  it("should create a rover and should be able to turn Right", () => {
    const marsRover = new MarsRover()

    const position = marsRover.execute("R")
    expect(position).toBe("0:0:E")
  })

  it("should create a rover and should be able to move forward twice", () => {
    const marsRover = new MarsRover()

    const position = marsRover.execute("MM")
    expect(position).toBe("0:2:N")
  })

  it("rotates right and moves forward", () => {
    const marsRover = new MarsRover()

    const position = marsRover.execute("RM")
    expect(position).toBe("1:0:E")
  })
})
