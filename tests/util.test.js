import { strtoarray } from "../util";

describe("util", () => {
  describe("strtoarray", () => {
    it("should convert string to array of dynamic types", () => {
      expect(strtoarray("foo;bar;123", undefined, ";")).toEqual([
        "foo",
        "bar",
        123,
      ]);
    });

    it("should convert string to array of string types", () => {
      expect(strtoarray("foo;bar;123", "string", ";")).toEqual([
        "foo",
        "bar",
        "123",
      ]);
    });

    it("should convert string to array of number types", () => {
      expect(strtoarray("foo;bar;123", "number", ";")).toEqual([NaN, NaN, 123]);
    });
  });
});
