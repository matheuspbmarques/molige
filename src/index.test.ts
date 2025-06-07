import main from ".";
import { ObjectStructure } from "../out/types/index.type";

describe("main function", () => {
  const messageObjectStructure: ObjectStructure = {
    _id: {
      type: "mongo-object-id",
    },
    chatId: {
      type: "mongo-object-id",
    },
    message: {
      type: "string",
      value: "Some message from someone",
    },
    from: {
      type: "random",
      value: ["bot", "client"],
    },
    createAt: {
      type: "string",
      value: new Date().toISOString(),
    },
    updateAt: {
      type: "string",
      value: new Date().toISOString(),
    },
  };

  it("should return array length equal to 10", () => {
    const result = main(messageObjectStructure, 10);

    expect(result.length).toBe(10);
  });

  it("should return object keys from array to be equal that object structure", () => {
    const objectStructureKeys = Object.keys(messageObjectStructure);
    const result = main(messageObjectStructure, 1)[0];
    const resultKeys = Object.keys(result);

    objectStructureKeys.forEach((objectStructureKey) => {
      expect(resultKeys).toContain(objectStructureKey);
    });
  });
});
