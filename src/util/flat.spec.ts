import { flat } from "./flat";

const original = {
  foo: "one",
  bar: 2,
  baz: {
    foo: 4,
    bar: {
      foo: 0,
      bar: null,
    },
    baz: {
      foo: 1,
      bar: 6,
      jef: {
        abc: 10,
      },
    },
  },
};

describe("flat", () => {
  it("should return flat object", () => {
    const result = flat(original);
    expect(result).toEqual({
      foo: "one",
      bar: 2,
      "baz.foo": 4,
      "baz.bar.foo": 0,
      "baz.bar.bar": null,
      "baz.baz.foo": 1,
      "baz.baz.bar": 6,
      "baz.baz.jef.abc": 10,
    });
  });
});
