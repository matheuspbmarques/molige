export type ObjectStructure<T> = {
  [K in keyof T]:
    | ObjectStructureMongoObjectId
    | ObjectStructureString
    | ObjectStructureNumber
    | ObjectStructureBoolean
    | ObjectStructureObject<T[K]>
    | ObjectStructureRandom;
};
export type ObjectStructureMongoObjectId = {
  type: "mongo-object-id";
};
export type ObjectStructureString = {
  type: "string";
  value: string;
};
export type ObjectStructureNumber = {
  type: "int" | "float";
  min: number;
  max: number;
};
export type ObjectStructureBoolean = {
  type: "boolean";
  value: "random" | "true" | "false";
};
export type ObjectStructureObject<T> = {
  type: "object";
  value: ObjectStructure<T>;
};
export type ObjectStructureRandom = {
  type: "random";
  value: Array<any>;
};
