/**
 * @fileoverview gRPC-Web generated client stub for lctech_base.example
 * @enhanceable
 * @public
 */

// Code generated by protoc-gen-grpc-web. DO NOT EDIT.
// versions:
// 	protoc-gen-grpc-web v1.5.0
// 	protoc              v0.0.0
// source: example/example.proto


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.lctech_base = {};
proto.lctech_base.example = require('./example_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.lctech_base.example.ExampleServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.lctech_base.example.ExampleServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname.replace(/\/+$/, '');

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.lctech_base.example.ExampleReq,
 *   !proto.lctech_base.example.ExampleRes>}
 */
const methodDescriptor_ExampleService_Example = new grpc.web.MethodDescriptor(
  '/lctech_base.example.ExampleService/Example',
  grpc.web.MethodType.UNARY,
  proto.lctech_base.example.ExampleReq,
  proto.lctech_base.example.ExampleRes,
  /**
   * @param {!proto.lctech_base.example.ExampleReq} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.lctech_base.example.ExampleRes.deserializeBinary
);


/**
 * @param {!proto.lctech_base.example.ExampleReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.lctech_base.example.ExampleRes)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.lctech_base.example.ExampleRes>|undefined}
 *     The XHR Node Readable Stream
 */
proto.lctech_base.example.ExampleServiceClient.prototype.example =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/lctech_base.example.ExampleService/Example',
      request,
      metadata || {},
      methodDescriptor_ExampleService_Example,
      callback);
};


/**
 * @param {!proto.lctech_base.example.ExampleReq} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.lctech_base.example.ExampleRes>}
 *     Promise that resolves to the response
 */
proto.lctech_base.example.ExampleServicePromiseClient.prototype.example =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/lctech_base.example.ExampleService/Example',
      request,
      metadata || {},
      methodDescriptor_ExampleService_Example);
};


module.exports = proto.lctech_base.example;

