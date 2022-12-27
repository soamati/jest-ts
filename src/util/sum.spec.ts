import { sum } from "./sum";

describe("sum two numbers", () => {
  it("should return 2", () => {
    const result = sum(1, 1);
    expect(result).toBe(2);
  });
});
