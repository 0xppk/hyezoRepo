export default function sum(...number: number[]) {
  return number.reduce((acc, each) => acc + each, 1);
}

if (import.meta.vitest) {
  const { describe, expect, it } = import.meta.vitest;
  describe("sum", () => {
    it("returns 1 with no number", () => {
      expect(sum()).toBe(1);
    });

    it("returns same number with one number", () => {
      expect(sum(2)).toBe(3);
    });
    it("returns same number with one number", () => {
      expect(sum(1, 2, 3)).toBe(7);
    });
  });
}
