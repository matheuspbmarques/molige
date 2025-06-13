import {
  ArrayStructure,
  BooleanStructure,
  NumberStructure,
  ObjectStructure,
  StringStructure,
  ValueStructure,
} from "./index.type";

type Structure<ValueType> =
  | StringStructure
  | NumberStructure
  | BooleanStructure
  | ObjectStructure<ValueType>
  | ArrayStructure<ValueType>;
type MoligeReturn<ValueType> =
  ValueType extends Array<any> ? ValueType : Array<ValueType>;

function molige<ValueType>(
  valueStructure: ValueStructure<ValueType>,
  length: number,
): MoligeReturn<ValueType> {
  // @ts-ignore
  const mockList: MoligeReturn<ValueType> = [];

  let count: number = 0;

  while (count++ < length) {
    mockList.push(
      generateByValueType<ValueType>(valueStructure as Structure<ValueType>),
    );
  }

  return mockList;
}

function generateByValueType<ValueType>(
  valueStructure: Structure<ValueType>,
): ValueType {
  const { type } = valueStructure;

  switch (type) {
    case "string":
      return valueStructure.value as ValueType;

    case "number":
      return numberGenerator(valueStructure as NumberStructure) as ValueType;

    case "boolean":
      return booleanGenerator(valueStructure as BooleanStructure) as ValueType;

    case "object":
      return objectGenerator<ValueType>(
        valueStructure as ObjectStructure<ValueType>,
      );

    case "array":
      return arrayGenerator(valueStructure) as ValueType;

    default:
      throw new Error(`valueStructure type is invalid`);
  }
}

type ObjectGeneratorReturn<ValueType> = Record<keyof ValueType, any>;
function objectGenerator<ValueType>({
  value,
}: ObjectStructure<ValueType>): ObjectGeneratorReturn<ValueType> {
  // @ts-ignore
  const objectMock: ObjectGeneratorReturn<ValueType> = {};
  // @ts-ignore
  const valueKeys: Array<keyof ValueType> = Object.keys(value);

  for (const valueKey of valueKeys) {
    objectMock[valueKey] = generateByValueType(
      // @ts-ignore
      value[valueKey],
    );
  }

  return objectMock;
}

function numberGenerator({ value, min, max }: NumberStructure): number {
  if (value === "int") {
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
      throw new Error('For type "int", min and max must be integers.');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  if (value === "float") {
    return Math.random() * (max - min) + min;
  }

  throw new Error('Invalid type. Must be "int" or "float".');
}

function booleanGenerator({ value }: BooleanStructure): boolean {
  if (value === "random") {
    return Math.floor(Math.random() * 1) === 1;
  }

  return value === "true";
}

function arrayGenerator<ValueType>({
  value,
  length,
}: ArrayStructure<ValueType>): Array<ValueType> {
  const arrayMock: Array<ValueType> = [];

  let count: number = 0;

  while (count++ < length) {
    arrayMock.push(generateByValueType(value as Structure<ValueType>));
  }

  return arrayMock;
}

export default molige;
