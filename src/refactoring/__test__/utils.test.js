const { _forEach, _map, _filter, _reduce } = require("../Kay/utils");

describe("forEach", () => {
  const mockCallBack = jest.fn();

  it("empty callback", () => {
    expect(() => _forEach([1, 2, 3])).toThrowError(
      "Callback function is required"
    );
  });

  it("empty array", () => {
    _forEach([], mockCallBack);
    expect(mockCallBack).not.toHaveBeenCalled();
  });

  it("non-empty array", () => {
    _forEach([1, 2, 3], mockCallBack);
    expect(mockCallBack).toHaveBeenCalledTimes(3);
  });
});

describe("map", () => {
  const mockCallBack = jest.fn((item) => item * 2);

  it("empty callback", () => {
    expect(() => _map([1, 2, 3])).toThrowError("Callback function is required");
  });

  it("empty array", () => {
    const result = _map([], mockCallBack);
    expect(result).toEqual([]);
  });

  it("non-empty array", () => {
    const result = _map([1, 2, 3], mockCallBack);
    expect(result).toEqual([2, 4, 6]);
    expect(mockCallBack).toHaveBeenCalledTimes(3);
  });
});

describe("filter", () => {
  it("empty callback", () => {
    expect(() => _filter([1, 2, 3])).toThrowError(
      "Callback function is required"
    );
  });

  it("empty array", () => {
    const mockCallBack = jest.fn((item) => item % 2);
    const result = _filter([], mockCallBack);
    expect(result).toEqual([]);
    expect(mockCallBack).not.toHaveBeenCalled();
  });

  it("non-empty array", () => {
    const mockCallBack = jest.fn((item) => item % 2);
    const result = _filter([1, 2, 3, 4, 5], mockCallBack);
    expect(result).toEqual([1, 3, 5]);
    expect(mockCallBack).toHaveBeenCalledTimes(5);
  });
});

describe("reduce", () => {
  it("empty callback", () => {
    expect(() => _reduce([1, 2, 3])).toThrowError(
      "Callback function is required"
    );
  });

  it("empty array", () => {
    const mockCallBack = jest.fn((acc, cur) => acc + cur);
    const result = _reduce([], mockCallBack, 0);
    expect(result).toBe(0);
    expect(mockCallBack).not.toHaveBeenCalled();
  });

  it("non-empty array", () => {
    const mockCallBack = jest.fn((acc, cur) => acc + cur);
    const result = _reduce([1, 2, 3], mockCallBack, 0);
    expect(result).toBe(6);
    expect(mockCallBack).toHaveBeenCalledTimes(3);
  });
});
