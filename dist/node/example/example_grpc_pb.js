// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var example_example_pb = require('../example/example_pb.js');

function serialize_lctech_base_example_ExampleReq(arg) {
  if (!(arg instanceof example_example_pb.ExampleReq)) {
    throw new Error('Expected argument of type lctech_base.example.ExampleReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lctech_base_example_ExampleReq(buffer_arg) {
  return example_example_pb.ExampleReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_lctech_base_example_ExampleRes(arg) {
  if (!(arg instanceof example_example_pb.ExampleRes)) {
    throw new Error('Expected argument of type lctech_base.example.ExampleRes');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_lctech_base_example_ExampleRes(buffer_arg) {
  return example_example_pb.ExampleRes.deserializeBinary(new Uint8Array(buffer_arg));
}


var ExampleServiceService = exports.ExampleServiceService = {
  //  Account 相關
example: {
    path: '/lctech_base.example.ExampleService/Example',
    requestStream: false,
    responseStream: false,
    requestType: example_example_pb.ExampleReq,
    responseType: example_example_pb.ExampleRes,
    requestSerialize: serialize_lctech_base_example_ExampleReq,
    requestDeserialize: deserialize_lctech_base_example_ExampleReq,
    responseSerialize: serialize_lctech_base_example_ExampleRes,
    responseDeserialize: deserialize_lctech_base_example_ExampleRes,
  },
};

exports.ExampleServiceClient = grpc.makeGenericClientConstructor(ExampleServiceService, 'ExampleService');
