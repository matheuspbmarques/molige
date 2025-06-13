import molige from ".";

describe("string", () => {
  const value = "Value String";
  const result = molige<string>({ type: "string", value }, 10);

  it("length should be 10", () => {
    expect(result).toHaveLength(10);
  });

  it("every array item should be string type", () => {
    result.forEach((item) => {
      expect(typeof item).toBe("string");
    });
  });

  it('every array item should have "Value String" value', () => {
    result.forEach((item) => {
      expect(item).toBe(value);
    });
  });
});

describe("number", () => {
  describe("Int", () => {
    const result = molige<number>(
      { type: "number", value: "int", min: 1, max: 100 },
      10,
    );

    it("length should be 10", () => {
      expect(result).toHaveLength(10);
    });

    it("every array item should be number type", () => {
      result.forEach((item) => {
        expect(typeof item).toBe("number");
      });
    });

    it("every array item should be less or equal than 100", () => {
      result.forEach((item) => {
        expect(item).toBeLessThanOrEqual(100);
      });
    });

    it("every array item should be greater or equal than 1", () => {
      result.forEach((item) => {
        expect(item).toBeGreaterThanOrEqual(1);
      });
    });

    it("should throw error message if min or max dont is integer value", () => {
      expect(() =>
        molige<number>({ type: "number", value: "int", min: 1.1, max: 10 }, 10),
      ).toThrow('For type "int", min and max must be integers.');

      expect(() =>
        molige<number>({ type: "number", value: "int", min: 1, max: 9.9 }, 10),
      ).toThrow('For type "int", min and max must be integers.');

      expect(() =>
        molige<number>(
          { type: "number", value: "int", min: 1.1, max: 9.9 },
          10,
        ),
      ).toThrow('For type "int", min and max must be integers.');
    });
  });

  describe("Float", () => {
    const result = molige<number>(
      { type: "number", value: "float", min: 1.5, max: 85.5 },
      10,
    );

    it("length should be 10", () => {
      expect(result).toHaveLength(10);
    });

    it("every array item should be number type", () => {
      result.forEach((item) => {
        expect(typeof item).toBe("number");
      });
    });

    it("every array item should be less or equal than 85.5", () => {
      result.forEach((item) => {
        expect(item).toBeLessThanOrEqual(85.5);
      });
    });

    it("every array item should be greater or equal than 1.5", () => {
      result.forEach((item) => {
        expect(item).toBeGreaterThanOrEqual(1.5);
      });
    });

    it("should throw error message if min or max dont is integer value", () => {
      expect(() =>
        molige<number>({ type: "number", value: "int", min: 1.1, max: 10 }, 10),
      ).toThrow('For type "int", min and max must be integers.');

      expect(() =>
        molige<number>({ type: "number", value: "int", min: 1, max: 9.9 }, 10),
      ).toThrow('For type "int", min and max must be integers.');

      expect(() =>
        molige<number>(
          { type: "number", value: "int", min: 1.1, max: 9.9 },
          10,
        ),
      ).toThrow('For type "int", min and max must be integers.');
    });
  });
});

describe("boolean", () => {
  describe("Random", () => {
    const mockList = molige<boolean>({ type: "boolean", value: "random" }, 10);

    it("length should be 10", () => {
      expect(mockList).toHaveLength(10);
    });

    it("every mock item should be boolean", () => {
      mockList.forEach((mockItem: boolean) => {
        expect(typeof mockItem).toBe("boolean");
      });
    });
  });

  describe("True", () => {
    const mockList = molige<boolean>({ type: "boolean", value: "true" }, 10);

    it("length should be 10", () => {
      expect(mockList).toHaveLength(10);
    });

    it("every mock item should be true", () => {
      mockList.forEach((mockItem: boolean) => {
        expect(mockItem).toBeTruthy();
      });
    });
  });

  describe("False", () => {
    const mockList = molige<boolean>({ type: "boolean", value: "false" }, 10);

    it("length should be 10", () => {
      expect(mockList).toHaveLength(10);
    });

    it("every mock item should be false", () => {
      mockList.forEach((mockItem: boolean) => {
        expect(mockItem).toBeFalsy();
      });
    });
  });
});

describe("object", () => {
  type Mock = {
    string: string;
    stringArray: Array<string>;
    numberInt: number;
    numberIntArray: Array<number>;
    numberFloat: number;
    numberFloatArray: Array<number>;
    booleanRandom: boolean;
    booleanRandomArray: Array<true>;
    booleanTrue: boolean;
    booleanTrueArray: Array<true>;
    booleanFalse: boolean;
    booleanFalseArray: Array<true>;
    object: {
      string: string;
      stringArray: Array<string>;
      numberInt: number;
      numberIntArray: Array<number>;
      numberFloat: number;
      numberFloatArray: Array<number>;
      booleanRandom: boolean;
      booleanRandomArray: Array<true>;
      booleanTrue: boolean;
      booleanTrueArray: Array<true>;
      booleanFalse: boolean;
      booleanFalseArray: Array<true>;
      object: {
        string: string;
        stringArray: Array<string>;
        numberInt: number;
        numberIntArray: Array<number>;
        numberFloat: number;
        numberFloatArray: Array<number>;
        booleanRandom: boolean;
        booleanRandomArray: Array<true>;
        booleanTrue: boolean;
        booleanTrueArray: Array<true>;
        booleanFalse: boolean;
        booleanFalseArray: Array<true>;
      };
      objectArray: Array<{
        string: string;
        stringArray: Array<string>;
        numberInt: number;
        numberIntArray: Array<number>;
        numberFloat: number;
        numberFloatArray: Array<number>;
        booleanRandom: boolean;
        booleanRandomArray: Array<true>;
        booleanTrue: boolean;
        booleanTrueArray: Array<true>;
        booleanFalse: boolean;
        booleanFalseArray: Array<true>;
        object: {
          string: string;
          stringArray: Array<string>;
          numberInt: number;
          numberIntArray: Array<number>;
          numberFloat: number;
          numberFloatArray: Array<number>;
          booleanRandom: boolean;
          booleanRandomArray: Array<true>;
          booleanTrue: boolean;
          booleanTrueArray: Array<true>;
          booleanFalse: boolean;
          booleanFalseArray: Array<true>;
        };
      }>;
    };
    objectArray: Array<{
      string: string;
      stringArray: Array<string>;
      numberInt: number;
      numberIntArray: Array<number>;
      numberFloat: number;
      numberFloatArray: Array<number>;
      booleanRandom: boolean;
      booleanRandomArray: Array<true>;
      booleanTrue: boolean;
      booleanTrueArray: Array<true>;
      booleanFalse: boolean;
      booleanFalseArray: Array<true>;
      object: {
        string: string;
        stringArray: Array<string>;
        numberInt: number;
        numberIntArray: Array<number>;
        numberFloat: number;
        numberFloatArray: Array<number>;
        booleanRandom: boolean;
        booleanRandomArray: Array<true>;
        booleanTrue: boolean;
        booleanTrueArray: Array<true>;
        booleanFalse: boolean;
        booleanFalseArray: Array<true>;
      };
      objectArray: Array<{
        string: string;
        stringArray: Array<string>;
        numberInt: number;
        numberIntArray: Array<number>;
        numberFloat: number;
        numberFloatArray: Array<number>;
        booleanRandom: boolean;
        booleanRandomArray: Array<true>;
        booleanTrue: boolean;
        booleanTrueArray: Array<true>;
        booleanFalse: boolean;
        booleanFalseArray: Array<true>;
        object: {
          string: string;
          stringArray: Array<string>;
          numberInt: number;
          numberIntArray: Array<number>;
          numberFloat: number;
          numberFloatArray: Array<number>;
          booleanRandom: boolean;
          booleanRandomArray: Array<true>;
          booleanTrue: boolean;
          booleanTrueArray: Array<true>;
          booleanFalse: boolean;
          booleanFalseArray: Array<true>;
        };
      }>;
    }>;
  };

  const typeKeys = [
    "string",
    "numberInt",
    "numberFloat",
    "booleanRandom",
    "booleanTrue",
    "booleanFalse",
    "object",
  ];
  const typeArrayKeys = [
    "stringArray",
    "numberIntArray",
    "numberFloatArray",
    "booleanRandomArray",
    "booleanTrueArray",
    "booleanFalseArray",
    "objectArray",
  ];
  const allTypeKeys = [...typeKeys, ...typeArrayKeys];
  const mockList = molige<Mock>(
    {
      type: "object",
      value: {
        string: { type: "string", value: "String Value" },
        stringArray: {
          type: "array",
          value: { type: "string", value: "String Arrat Value" },
          length: 5,
        },
        numberInt: { type: "number", value: "int", min: 1, max: 100 },
        numberIntArray: {
          type: "array",
          value: { type: "number", value: "int", min: 1, max: 100 },
          length: 5,
        },
        numberFloat: { type: "number", value: "float", min: 1, max: 100 },
        numberFloatArray: {
          type: "array",
          value: { type: "number", value: "float", min: 1, max: 100 },
          length: 5,
        },
        booleanRandom: { type: "boolean", value: "random" },
        booleanRandomArray: {
          type: "array",
          value: { type: "boolean", value: "random" },
          length: 5,
        },
        booleanTrue: { type: "boolean", value: "true" },
        booleanTrueArray: {
          type: "array",
          value: { type: "boolean", value: "true" },
          length: 5,
        },
        booleanFalse: { type: "boolean", value: "false" },
        booleanFalseArray: {
          type: "array",
          value: { type: "boolean", value: "false" },
          length: 5,
        },
        object: {
          type: "object",
          value: {
            string: { type: "string", value: "String Value" },
            stringArray: {
              type: "array",
              value: { type: "string", value: "String Arrat Value" },
              length: 5,
            },
            numberInt: { type: "number", value: "int", min: 1, max: 100 },
            numberIntArray: {
              type: "array",
              value: { type: "number", value: "int", min: 1, max: 100 },
              length: 5,
            },
            numberFloat: { type: "number", value: "float", min: 1, max: 100 },
            numberFloatArray: {
              type: "array",
              value: { type: "number", value: "float", min: 1, max: 100 },
              length: 5,
            },
            booleanRandom: { type: "boolean", value: "random" },
            booleanRandomArray: {
              type: "array",
              value: { type: "boolean", value: "random" },
              length: 5,
            },
            booleanTrue: { type: "boolean", value: "true" },
            booleanTrueArray: {
              type: "array",
              value: { type: "boolean", value: "true" },
              length: 5,
            },
            booleanFalse: { type: "boolean", value: "false" },
            booleanFalseArray: {
              type: "array",
              value: { type: "boolean", value: "false" },
              length: 5,
            },
            object: {
              type: "object",
              value: {
                string: { type: "string", value: "String Value" },
                stringArray: {
                  type: "array",
                  value: { type: "string", value: "String Arrat Value" },
                  length: 5,
                },
                numberInt: { type: "number", value: "int", min: 1, max: 100 },
                numberIntArray: {
                  type: "array",
                  value: { type: "number", value: "int", min: 1, max: 100 },
                  length: 5,
                },
                numberFloat: {
                  type: "number",
                  value: "float",
                  min: 1,
                  max: 100,
                },
                numberFloatArray: {
                  type: "array",
                  value: { type: "number", value: "float", min: 1, max: 100 },
                  length: 5,
                },
                booleanRandom: { type: "boolean", value: "random" },
                booleanRandomArray: {
                  type: "array",
                  value: { type: "boolean", value: "random" },
                  length: 5,
                },
                booleanTrue: { type: "boolean", value: "true" },
                booleanTrueArray: {
                  type: "array",
                  value: { type: "boolean", value: "true" },
                  length: 5,
                },
                booleanFalse: { type: "boolean", value: "false" },
                booleanFalseArray: {
                  type: "array",
                  value: { type: "boolean", value: "false" },
                  length: 5,
                },
              },
            },
            objectArray: {
              type: "array",
              value: {
                type: "object",
                value: {
                  string: { type: "string", value: "String Value" },
                  stringArray: {
                    type: "array",
                    value: { type: "string", value: "String Arrat Value" },
                    length: 5,
                  },
                  numberInt: { type: "number", value: "int", min: 1, max: 100 },
                  numberIntArray: {
                    type: "array",
                    value: { type: "number", value: "int", min: 1, max: 100 },
                    length: 5,
                  },
                  numberFloat: {
                    type: "number",
                    value: "float",
                    min: 1,
                    max: 100,
                  },
                  numberFloatArray: {
                    type: "array",
                    value: { type: "number", value: "float", min: 1, max: 100 },
                    length: 5,
                  },
                  booleanRandom: { type: "boolean", value: "random" },
                  booleanRandomArray: {
                    type: "array",
                    value: { type: "boolean", value: "random" },
                    length: 5,
                  },
                  booleanTrue: { type: "boolean", value: "true" },
                  booleanTrueArray: {
                    type: "array",
                    value: { type: "boolean", value: "true" },
                    length: 5,
                  },
                  booleanFalse: { type: "boolean", value: "false" },
                  booleanFalseArray: {
                    type: "array",
                    value: { type: "boolean", value: "false" },
                    length: 5,
                  },
                  object: {
                    type: "object",
                    value: {
                      string: { type: "string", value: "String Value" },
                      stringArray: {
                        type: "array",
                        value: { type: "string", value: "String Arrat Value" },
                        length: 5,
                      },
                      numberInt: {
                        type: "number",
                        value: "int",
                        min: 1,
                        max: 100,
                      },
                      numberIntArray: {
                        type: "array",
                        value: {
                          type: "number",
                          value: "int",
                          min: 1,
                          max: 100,
                        },
                        length: 5,
                      },
                      numberFloat: {
                        type: "number",
                        value: "float",
                        min: 1,
                        max: 100,
                      },
                      numberFloatArray: {
                        type: "array",
                        value: {
                          type: "number",
                          value: "float",
                          min: 1,
                          max: 100,
                        },
                        length: 5,
                      },
                      booleanRandom: { type: "boolean", value: "random" },
                      booleanRandomArray: {
                        type: "array",
                        value: { type: "boolean", value: "random" },
                        length: 5,
                      },
                      booleanTrue: { type: "boolean", value: "true" },
                      booleanTrueArray: {
                        type: "array",
                        value: { type: "boolean", value: "true" },
                        length: 5,
                      },
                      booleanFalse: { type: "boolean", value: "false" },
                      booleanFalseArray: {
                        type: "array",
                        value: { type: "boolean", value: "false" },
                        length: 5,
                      },
                    },
                  },
                },
              },
              length: 10,
            },
          },
        },
        objectArray: {
          type: "array",
          value: {
            type: "object",
            value: {
              string: { type: "string", value: "String Value" },
              stringArray: {
                type: "array",
                value: { type: "string", value: "String Arrat Value" },
                length: 5,
              },
              numberInt: { type: "number", value: "int", min: 1, max: 100 },
              numberIntArray: {
                type: "array",
                value: { type: "number", value: "int", min: 1, max: 100 },
                length: 5,
              },
              numberFloat: {
                type: "number",
                value: "float",
                min: 1,
                max: 100,
              },
              numberFloatArray: {
                type: "array",
                value: { type: "number", value: "float", min: 1, max: 100 },
                length: 5,
              },
              booleanRandom: { type: "boolean", value: "random" },
              booleanRandomArray: {
                type: "array",
                value: { type: "boolean", value: "random" },
                length: 5,
              },
              booleanTrue: { type: "boolean", value: "true" },
              booleanTrueArray: {
                type: "array",
                value: { type: "boolean", value: "true" },
                length: 5,
              },
              booleanFalse: { type: "boolean", value: "false" },
              booleanFalseArray: {
                type: "array",
                value: { type: "boolean", value: "false" },
                length: 5,
              },
              object: {
                type: "object",
                value: {
                  string: { type: "string", value: "String Value" },
                  stringArray: {
                    type: "array",
                    value: { type: "string", value: "String Arrat Value" },
                    length: 5,
                  },
                  numberInt: {
                    type: "number",
                    value: "int",
                    min: 1,
                    max: 100,
                  },
                  numberIntArray: {
                    type: "array",
                    value: {
                      type: "number",
                      value: "int",
                      min: 1,
                      max: 100,
                    },
                    length: 5,
                  },
                  numberFloat: {
                    type: "number",
                    value: "float",
                    min: 1,
                    max: 100,
                  },
                  numberFloatArray: {
                    type: "array",
                    value: {
                      type: "number",
                      value: "float",
                      min: 1,
                      max: 100,
                    },
                    length: 5,
                  },
                  booleanRandom: { type: "boolean", value: "random" },
                  booleanRandomArray: {
                    type: "array",
                    value: { type: "boolean", value: "random" },
                    length: 5,
                  },
                  booleanTrue: { type: "boolean", value: "true" },
                  booleanTrueArray: {
                    type: "array",
                    value: { type: "boolean", value: "true" },
                    length: 5,
                  },
                  booleanFalse: { type: "boolean", value: "false" },
                  booleanFalseArray: {
                    type: "array",
                    value: { type: "boolean", value: "false" },
                    length: 5,
                  },
                },
              },
              objectArray: {
                type: "array",
                value: {
                  type: "object",
                  value: {
                    string: { type: "string", value: "String Value" },
                    stringArray: {
                      type: "array",
                      value: { type: "string", value: "String Arrat Value" },
                      length: 5,
                    },
                    numberInt: {
                      type: "number",
                      value: "int",
                      min: 1,
                      max: 100,
                    },
                    numberIntArray: {
                      type: "array",
                      value: { type: "number", value: "int", min: 1, max: 100 },
                      length: 5,
                    },
                    numberFloat: {
                      type: "number",
                      value: "float",
                      min: 1,
                      max: 100,
                    },
                    numberFloatArray: {
                      type: "array",
                      value: {
                        type: "number",
                        value: "float",
                        min: 1,
                        max: 100,
                      },
                      length: 5,
                    },
                    booleanRandom: { type: "boolean", value: "random" },
                    booleanRandomArray: {
                      type: "array",
                      value: { type: "boolean", value: "random" },
                      length: 5,
                    },
                    booleanTrue: { type: "boolean", value: "true" },
                    booleanTrueArray: {
                      type: "array",
                      value: { type: "boolean", value: "true" },
                      length: 5,
                    },
                    booleanFalse: { type: "boolean", value: "false" },
                    booleanFalseArray: {
                      type: "array",
                      value: { type: "boolean", value: "false" },
                      length: 5,
                    },
                    object: {
                      type: "object",
                      value: {
                        string: { type: "string", value: "String Value" },
                        stringArray: {
                          type: "array",
                          value: {
                            type: "string",
                            value: "String Arrat Value",
                          },
                          length: 5,
                        },
                        numberInt: {
                          type: "number",
                          value: "int",
                          min: 1,
                          max: 100,
                        },
                        numberIntArray: {
                          type: "array",
                          value: {
                            type: "number",
                            value: "int",
                            min: 1,
                            max: 100,
                          },
                          length: 5,
                        },
                        numberFloat: {
                          type: "number",
                          value: "float",
                          min: 1,
                          max: 100,
                        },
                        numberFloatArray: {
                          type: "array",
                          value: {
                            type: "number",
                            value: "float",
                            min: 1,
                            max: 100,
                          },
                          length: 5,
                        },
                        booleanRandom: { type: "boolean", value: "random" },
                        booleanRandomArray: {
                          type: "array",
                          value: { type: "boolean", value: "random" },
                          length: 5,
                        },
                        booleanTrue: { type: "boolean", value: "true" },
                        booleanTrueArray: {
                          type: "array",
                          value: { type: "boolean", value: "true" },
                          length: 5,
                        },
                        booleanFalse: { type: "boolean", value: "false" },
                        booleanFalseArray: {
                          type: "array",
                          value: { type: "boolean", value: "false" },
                          length: 5,
                        },
                      },
                    },
                  },
                },
                length: 10,
              },
            },
          },
          length: 10,
        },
      },
    },
    10,
  );

  it("length should be 10", () => {
    expect(mockList).toHaveLength(10);
  });

  it("every mock item should be object type", () => {
    mockList.forEach((mockItem) => {
      expect(typeof mockItem).toBe("object");
    });
  });

  it("every object keys in every mock item should have type keys", () => {
    mockList.forEach((mockItem) => {
      const mockListKeys = Object.keys(mockItem);

      allTypeKeys.forEach((typeKey) => {
        expect(mockListKeys.includes(typeKey)).toBeTruthy();
      });
    });
  });

  it("every object keys of array type in every mock item should be array", () => {
    mockList.forEach((mockItem) => {
      typeArrayKeys.forEach((typeArrayKey) => {
        // @ts-ignore
        expect(Array.isArray(mockItem[typeArrayKey])).toBeTruthy();
      });
    });
  });

  describe("string", () => {
    it("should be string type", () => {
      mockList.forEach((mockItem) => {
        expect(typeof mockItem["string"]).toBe("string");
      });
    });
  });

  describe("string array", () => {
    it("every item should be string type", () => {
      mockList.forEach((mockItem) => {
        mockItem["stringArray"].forEach((stringItem) => {
          expect(typeof stringItem).toBe("string");
        });
      });
    });

    it("length should be 5", () => {
      mockList.forEach((mockItem) => {
        expect(mockItem["stringArray"]).toHaveLength(5);
      });
    });
  });

  describe("int number", () => {
    it("should be number type", () => {
      mockList.forEach((mockItem) => {
        expect(typeof mockItem["numberInt"]).toBe("number");
      });
    });

    it("should be integer number", () => {
      mockList.forEach((mockItem) => {
        expect(Number.isInteger(mockItem["numberInt"])).toBeTruthy();
      });
    });
  });

  describe("int number array", () => {
    it("every item should be number type", () => {
      mockList.forEach((mockItem) => {
        mockItem["numberIntArray"].forEach((numberItem) => {
          expect(typeof numberItem).toBe("number");
        });
      });
    });

    it("every item should be integer number", () => {
      mockList.forEach((mockItem) => {
        mockItem["numberIntArray"].forEach((numberItem) => {
          expect(Number.isInteger(numberItem)).toBeTruthy();
        });
      });
    });

    it("length should be 5", () => {
      mockList.forEach((mockItem) => {
        expect(mockItem["numberIntArray"]).toHaveLength(5);
      });
    });
  });

  describe("float number", () => {
    it("should be number type", () => {
      mockList.forEach((mockItem) => {
        expect(typeof mockItem["numberFloat"]).toBe("number");
      });
    });
  });

  describe("float number array", () => {
    it("every item should be number type", () => {
      mockList.forEach((mockItem) => {
        mockItem["numberFloatArray"].forEach((numberItem) => {
          expect(typeof numberItem).toBe("number");
        });
      });
    });

    it("length should be 5", () => {
      mockList.forEach((mockItem) => {
        expect(mockItem["numberFloatArray"]).toHaveLength(5);
      });
    });
  });

  describe("random boolean", () => {
    it("should be boolean type", () => {
      mockList.forEach((mockItem) => {
        expect(typeof mockItem["booleanRandom"]).toBe("boolean");
      });
    });
  });

  describe("random boolean array", () => {
    it("every item should be booelan", () => {
      mockList.forEach((mockItem) => {
        mockItem["booleanRandomArray"].forEach((booleanItem) => {
          expect(typeof booleanItem).toBe("boolean");
        });
      });
    });

    it("length should be 5", () => {
      mockList.forEach((mockItem) => {
        expect(mockItem["booleanRandomArray"]).toHaveLength(5);
      });
    });
  });

  describe("true boolean", () => {
    it("should be true", () => {
      mockList.forEach((mockItem) => {
        expect(typeof mockItem["booleanTrue"]).toBeTruthy();
      });
    });
  });

  describe("true boolean array", () => {
    it("every item should be true boolean", () => {
      mockList.forEach((mockItem) => {
        mockItem["booleanTrueArray"].forEach((booleanItem) => {
          expect(booleanItem).toBeTruthy();
        });
      });
    });

    it("length should be 5", () => {
      mockList.forEach((mockItem) => {
        expect(mockItem["booleanTrueArray"]).toHaveLength(5);
      });
    });
  });

  describe("false boolean", () => {
    it("should be false", () => {
      mockList.forEach((mockItem) => {
        expect(mockItem["booleanFalse"]).toBeFalsy();
      });
    });
  });

  describe("false boolean array", () => {
    it("every item should be true boolean", () => {
      mockList.forEach((mockItem) => {
        mockItem["booleanFalseArray"].forEach((booleanItem) => {
          expect(booleanItem).toBeFalsy();
        });
      });
    });

    it("length should be 5", () => {
      mockList.forEach((mockItem) => {
        expect(mockItem["booleanFalseArray"]).toHaveLength(5);
      });
    });
  });
});
