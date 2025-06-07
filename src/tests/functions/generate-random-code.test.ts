import generateRandomCode from "../../functions/generate-random-code";

describe("generateRandomCode", () => {
  it("should generate a code with length 10", () => {
    const code = generateRandomCode();
    expect(code).toHaveLength(10);
  });

  it("should generate a code containing only base62 characters", () => {
    const code = generateRandomCode();
    expect(code).toMatch(/^[0-9a-zA-Z]+$/);
  });

  it("should generate unique codes across multiple calls", () => {
    const codes = new Set<string>();
    const tries = 1000;
    for (let i = 0; i < tries; i++) {
      const code = generateRandomCode();
      expect(codes.has(code)).toBe(false);
      codes.add(code);
    }
  });
});
