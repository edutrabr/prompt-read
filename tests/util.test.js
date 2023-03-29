import { strtoarray, strtonum } from "../util"

describe("util", () => {
    describe("strtoarray", () => {
        it("should convert string to array of strings", () => {
            expect(strtoarray("banana")).toEqual(["banana"])
        })

        it("should convert string to array of number", () => {
            expect(strtoarray("1234", "Number")).toEqual([1234])
        })
    })

    describe("strtonum", () => {
        it('should convert string to number', () => {
            expect(strtonum('1234')).toEqual(1234)
        })
    })
})