import * as grpcWeb from 'grpc-web';

import * as example_example_pb from '../example/example_pb'; // proto import: "example/example.proto"


export class ExampleServiceClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  example(
    request: example_example_pb.ExampleReq,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.RpcError,
               response: example_example_pb.ExampleRes) => void
  ): grpcWeb.ClientReadableStream<example_example_pb.ExampleRes>;

}

export class ExampleServicePromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; });

  example(
    request: example_example_pb.ExampleReq,
    metadata?: grpcWeb.Metadata
  ): Promise<example_example_pb.ExampleRes>;

}

