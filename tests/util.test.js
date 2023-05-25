import { strtotype, strtoarray } from "../util";

describe("util", () => {
  describe("strtotype", () => {
    it("should convert string to dynamic type", () => {
      expect(strtotype("foobar")).toEqual("foobar");
    });

    it("should convert string to dynamic type", () => {
      expect(strtotype("123")).toEqual(123);
    });

    it("should convert string to dynamic type", () => {
      expect(strtotype("foobar", "auto")).toEqual("foobar");
    });

    it("should convert string to dynamic type", () => {
      expect(strtotype("123", "auto")).toEqual(123);
    });

    it("should convert string to string", () => {
      expect(strtotype("foobar", "string")).toEqual("foobar");
    });

    it("should convert string to string", () => {
      expect(strtotype("123", "string")).toEqual("123");
    });

    it("should convert string to number", () => {
      expect(strtotype("foobar", "number")).toEqual(NaN);
    });

    it("should convert string to number", () => {
      expect(strtotype("123", "number")).toEqual(123);
    });
  });

  describe("strtoarray", () => {
    it("should convert string to array of dynamic types", () => {
      expect(strtoarray("foo;bar;123", undefined, ";")).toEqual([
        "foo",
        "bar",
        123,
      ]);
    });

    it("should convert string to array of dynamic types", () => {
      expect(strtoarray("foo;bar;123", "auto", ";")).toEqual([
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
