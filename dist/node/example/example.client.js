// @generated by protobuf-ts 2.9.4 with parameter long_type_number,output_javascript_es2015,force_optimize_code_size,client_generic,generate_dependencies
// @generated from protobuf file "example/example.proto" (package "lctech_base.example", syntax proto3)
// tslint:disable
import { ExampleService } from "./example";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service lctech_base.example.ExampleService
 */
export class ExampleServiceClient {
    constructor(_transport) {
        this._transport = _transport;
        this.typeName = ExampleService.typeName;
        this.methods = ExampleService.methods;
        this.options = ExampleService.options;
    }
    /**
     *  Account 相關
     *
     * @generated from protobuf rpc: Example(lctech_base.example.ExampleReq) returns (lctech_base.example.ExampleRes);
     */
    example(input, options) {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept("unary", this._transport, method, opt, input);
    }
}
