import {
  ObjectStructure,
  ObjectStructureBoolean,
  ObjectStructureNumber,
} from "../out/types/index.type";
import { ObjectId } from "mongodb";

type ObjectMock = Record<string, any>;

function main(
  objectStructure: ObjectStructure,
  length: number,
): Array<ObjectMock> {
  const objectMockList: Array<ObjectMock> = [];

  let count = 0;

  while (count++ < length) {
    const newObjectMock = objectGenerator(objectStructure);

    objectMockList.push(newObjectMock);
  }

  return objectMockList;
}

function objectGenerator(objectStructure: ObjectStructure) {
  const object: ObjectMock = {};
  const objectStructureKeys = Object.keys(objectStructure);

  for (const objectStructureKey of objectStructureKeys) {
    const objectStructureItem = objectStructure[objectStructureKey];
    const { type } = objectStructureItem;

    let value: any;

    switch (type) {
      case "mongo-object-id": {
        value = mongoObjectIdGenerator();
        break;
      }
      case "string": {
        value = objectStructureItem.value;
        break;
      }
      case "float":
      case "int": {
        const { min, max } = objectStructureItem;
        value = numberGenerator(type, min, max);
        break;
      }
      case "boolean": {
        value = booleanGenerator(objectStructureItem.value);
        break;
      }
      case "object": {
        value = objectGenerator(objectStructureItem.value);
        break;
      }
      case "random": {
        value = randomGenerator(objectStructureItem.value);
        break;
      }

      default:
        throw new Error(
          `Object structure from ${objectStructureKey} type is invalid`,
        );
    }

    object[objectStructureKey] = value;
  }

  return object;
}

function mongoObjectIdGenerator(): string {
  return new ObjectId().toString();
}

function numberGenerator(
  type: ObjectStructureNumber["type"],
  min: number,
  max: number,
): number {
  if (type === "int") {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
      throw new Error('For type "int", min and max must be integers.');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if (type === "float") {
    return Math.random() * (max - min) + min;
  }

  throw new Error('Invalid type. Must be "int" or "float".');
}

function booleanGenerator(value: ObjectStructureBoolean["value"]) {
  if (value === "true") return true;
  if (value === "false") return false;
  return Math.random() < 0.5;
}

function randomGenerator(value: Array<any>) {
  const { length } = value;

  const indexSelected = Math.floor(Math.random() * length);

  const itemSelected = value[indexSelected];

  return itemSelected;
}

export default main;
