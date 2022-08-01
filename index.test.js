const { ReturnTextInArray, ReturnArrayAsString, ReturnKeyInObjectAsArrayOfString, MutableObject } = require(".")


describe("ReturnStringInArray", () => {
    it("should be of type array", () => {
        const value = "My name is Stanley"
        expect(Array.isArray(ReturnTextInArray(value))).toBeTruthy();
    })
    it("should have expected length", () => {
        const value = "My name is Stanley"
        expect(ReturnTextInArray(value).length).toBe(4);
    })
})

describe("ReturnArrayAsString", () => {
    it("should be of type string", () => {
        const value = ["My", "Name", "is", "John"]
        expect(typeof ReturnArrayAsString(value) === "string").toBeTruthy();
    })
    it("must include -", () => {
        const value = ["My", "Name", "is", "John"]
        expect(ReturnArrayAsString(value) === "My-Name-is-John").toBeTruthy();
    })

})

describe("ReturnKeyInObjectAsArrayOfString", () => {
    it("should be of type array", () => {
        const value = { "dob": "", "age": "", "name": "" };
        expect(Array.isArray(ReturnKeyInObjectAsArrayOfString(value))).toBeTruthy();
    })
    it("must include pre key", () => {
        const value = { "dob": "", "age": "", "name": "" }
        ReturnKeyInObjectAsArrayOfString(value).forEach((value) => {
            expect(value.includes("key-")).toBeTruthy();
        })

    })
})


describe("MutableObject", () => {
    it("return same obj", () => {
        const value = { "dob": "", "age": "", "name": "c" };
        expect(MutableObject(value)).toHaveProperty('name', 'age', 'dob')
    })
    it("must return same object", () => {
        const value = { "dob": "", "age": "" };
        console.log(MutableObject(value))
        expect(MutableObject(value)["name"]).toBeFalsy()
    })
})