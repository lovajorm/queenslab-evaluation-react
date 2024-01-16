import { describe, it, expect } from "vitest";
import { removeIdenticalLetters, maximumOddSum } from "./index";

describe("algorithms", () => {
  it("removeIdenticalLetters returns correct string", () => {
    expect(removeIdenticalLetters("ffdttttyy")).toBe("ffdtttyy");
  });

  it("maximumOddSum returns correct number", () => {
    expect(maximumOddSum([19, 2, 42, 18])).toBe(61);
  });
});
