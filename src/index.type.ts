export type ValueStructure<ValueType> =
  ValueType extends Array<infer ArrayValueType>
    ? ArrayStructure<ArrayValueType>
    : ValueType extends object
      ? ObjectStructure<ValueType>
      : ValueType extends string
        ? StringStructure
        : ValueType extends number | bigint
          ? NumberStructure
          : ValueType extends boolean
            ? BooleanStructure
            : ValueType;
export type ArrayStructure<T> = {
  type: "array";
  value: T extends Array<infer ArrayValueType>
    ? ArrayStructure<ArrayValueType>
    : ValueStructure<T>;
  length: number;
};
export type ObjectStructure<T> = {
  type: "object";
  value: {
    [K in keyof T]: ValueStructure<T[K]>;
  };
};
export type StringStructure = {
  type: "string";
  value: string;
};
export type NumberStructure = {
  type: "number";
  value: "int" | "float";
  min: number;
  max: number;
};
export type BooleanStructure = {
  type: "boolean";
  value: "random" | "true" | "false";
};
