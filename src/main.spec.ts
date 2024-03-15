import { describe, it, expect } from "vitest"
import { MarsRover } from "./main.js"

describe(MarsRover, () => {
  it("should create a rover and move it", () => {
    const marsRover = new MarsRover()

    const position = marsRover.execute("MRM")
    expect(position).toBe("1:1:E")
  })

  it("should create a rover and move it", () => {
    const marsRover = new MarsRover()

    const position = marsRover.execute("MLM")
    expect(position).toBe("9:1:W")
  })
})
