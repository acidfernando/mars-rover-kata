import { describe, expect, it } from "vitest"
import { MarsRover } from "./MarsRover.js"

describe(MarsRover, () => {
  it("is created in 0:0:N", () => {
    const marsRover = new MarsRover()

    const position = marsRover.execute("")
    expect(position).toBe("0:0:N")
  })

  it("moves it North", () => {
    const marsRover = new MarsRover()

    const position = marsRover.execute("M")
    expect(position).toBe("0:1:N")
  })

  it("turns Left", () => {
    const marsRover = new MarsRover()

    const position = marsRover.execute("L")
    expect(position).toBe("0:0:W")
  })

  it("turns Right", () => {
    const marsRover = new MarsRover()

    const position = marsRover.execute("R")
    expect(position).toBe("0:0:E")
  })

  it("moves forward twice", () => {
    const marsRover = new MarsRover()

    const position = marsRover.execute("MM")
    expect(position).toBe("0:2:N")
  })

  it("rotates right and moves forward", () => {
    const marsRover = new MarsRover()

    const position = marsRover.execute("RM")
    expect(position).toBe("1:0:E")
  })

  it("rotates right and moves forward rotates right and moves forward again", () => {
    const marsRover = new MarsRover()

    const position = marsRover.execute("RMLM")
    expect(position).toBe("1:1:N")
  })

  it("rotates left and move forward (gets out of grid)", () => {
    const marsRover = new MarsRover()

    const position = marsRover.execute("LM")
    expect(position).toBe("9:0:W")
  })

})
