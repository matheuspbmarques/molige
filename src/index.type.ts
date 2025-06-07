export interface ObjectStructure {
  [key: string]:
    | ObjectStructureMongoObjectId
    | ObjectStructureString
    | ObjectStructureNumber
    | ObjectStructureBoolean
    | ObjectStructureObject
    | ObjectStructureRandom;
}
export interface ObjectStructureMongoObjectId {
  type: "mongo-object-id";
}
export interface ObjectStructureString {
  type: "string";
  value: string;
}
export interface ObjectStructureNumber {
  type: "int" | "float";
  min: number;
  max: number;
}
export interface ObjectStructureBoolean {
  type: "boolean";
  value: "random" | "true" | "false";
}
export interface ObjectStructureObject {
  type: "object";
  value: ObjectStructure;
}
export interface ObjectStructureRandom {
  type: "random";
  value: Array<any>;
}
