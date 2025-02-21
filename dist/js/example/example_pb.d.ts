import * as jspb from 'google-protobuf'



export class ExampleReq extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExampleReq.AsObject;
  static toObject(includeInstance: boolean, msg: ExampleReq): ExampleReq.AsObject;
  static serializeBinaryToWriter(message: ExampleReq, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExampleReq;
  static deserializeBinaryFromReader(message: ExampleReq, reader: jspb.BinaryReader): ExampleReq;
}

export namespace ExampleReq {
  export type AsObject = {
  }
}

export class ExampleRes extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExampleRes.AsObject;
  static toObject(includeInstance: boolean, msg: ExampleRes): ExampleRes.AsObject;
  static serializeBinaryToWriter(message: ExampleRes, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExampleRes;
  static deserializeBinaryFromReader(message: ExampleRes, reader: jspb.BinaryReader): ExampleRes;
}

export namespace ExampleRes {
  export type AsObject = {
  }
}

