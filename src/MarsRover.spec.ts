import { describe, it, expect } from "vitest"
import { MarsRover } from "./MarsRover.js"

describe(MarsRover, () => {
  it("should create a rover and move it", () => {
    const marsRover = new MarsRover()

    const position = marsRover.execute("")
    expect(position).toBe("0:0:N")
  })

  it("should create a rover and move it", () => {
    const marsRover = new MarsRover()

    const position = marsRover.execute("M")
    expect(position).toBe("0:1:N")
  })
})
