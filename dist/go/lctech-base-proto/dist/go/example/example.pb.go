// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.36.5
// 	protoc        (unknown)
// source: example/example.proto

package example

import (
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
	unsafe "unsafe"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

type ExampleReq struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *ExampleReq) Reset() {
	*x = ExampleReq{}
	mi := &file_example_example_proto_msgTypes[0]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ExampleReq) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ExampleReq) ProtoMessage() {}

func (x *ExampleReq) ProtoReflect() protoreflect.Message {
	mi := &file_example_example_proto_msgTypes[0]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ExampleReq.ProtoReflect.Descriptor instead.
func (*ExampleReq) Descriptor() ([]byte, []int) {
	return file_example_example_proto_rawDescGZIP(), []int{0}
}

type ExampleRes struct {
	state         protoimpl.MessageState `protogen:"open.v1"`
	unknownFields protoimpl.UnknownFields
	sizeCache     protoimpl.SizeCache
}

func (x *ExampleRes) Reset() {
	*x = ExampleRes{}
	mi := &file_example_example_proto_msgTypes[1]
	ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
	ms.StoreMessageInfo(mi)
}

func (x *ExampleRes) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ExampleRes) ProtoMessage() {}

func (x *ExampleRes) ProtoReflect() protoreflect.Message {
	mi := &file_example_example_proto_msgTypes[1]
	if x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ExampleRes.ProtoReflect.Descriptor instead.
func (*ExampleRes) Descriptor() ([]byte, []int) {
	return file_example_example_proto_rawDescGZIP(), []int{1}
}

var File_example_example_proto protoreflect.FileDescriptor

var file_example_example_proto_rawDesc = string([]byte{
	0x0a, 0x15, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x2f, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c,
	0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x13, 0x6c, 0x63, 0x74, 0x65, 0x63, 0x68, 0x5f,
	0x62, 0x61, 0x73, 0x65, 0x2e, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x22, 0x0c, 0x0a, 0x0a,
	0x45, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x52, 0x65, 0x71, 0x22, 0x0c, 0x0a, 0x0a, 0x45, 0x78,
	0x61, 0x6d, 0x70, 0x6c, 0x65, 0x52, 0x65, 0x73, 0x32, 0x5d, 0x0a, 0x0e, 0x45, 0x78, 0x61, 0x6d,
	0x70, 0x6c, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x4b, 0x0a, 0x07, 0x45, 0x78,
	0x61, 0x6d, 0x70, 0x6c, 0x65, 0x12, 0x1f, 0x2e, 0x6c, 0x63, 0x74, 0x65, 0x63, 0x68, 0x5f, 0x62,
	0x61, 0x73, 0x65, 0x2e, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x2e, 0x45, 0x78, 0x61, 0x6d,
	0x70, 0x6c, 0x65, 0x52, 0x65, 0x71, 0x1a, 0x1f, 0x2e, 0x6c, 0x63, 0x74, 0x65, 0x63, 0x68, 0x5f,
	0x62, 0x61, 0x73, 0x65, 0x2e, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x2e, 0x45, 0x78, 0x61,
	0x6d, 0x70, 0x6c, 0x65, 0x52, 0x65, 0x73, 0x42, 0x23, 0x5a, 0x21, 0x6c, 0x63, 0x74, 0x65, 0x63,
	0x68, 0x2d, 0x62, 0x61, 0x73, 0x65, 0x2d, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x2f, 0x64, 0x69, 0x73,
	0x74, 0x2f, 0x67, 0x6f, 0x2f, 0x65, 0x78, 0x61, 0x6d, 0x70, 0x6c, 0x65, 0x62, 0x06, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x33,
})

var (
	file_example_example_proto_rawDescOnce sync.Once
	file_example_example_proto_rawDescData []byte
)

func file_example_example_proto_rawDescGZIP() []byte {
	file_example_example_proto_rawDescOnce.Do(func() {
		file_example_example_proto_rawDescData = protoimpl.X.CompressGZIP(unsafe.Slice(unsafe.StringData(file_example_example_proto_rawDesc), len(file_example_example_proto_rawDesc)))
	})
	return file_example_example_proto_rawDescData
}

var file_example_example_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_example_example_proto_goTypes = []any{
	(*ExampleReq)(nil), // 0: lctech_base.example.ExampleReq
	(*ExampleRes)(nil), // 1: lctech_base.example.ExampleRes
}
var file_example_example_proto_depIdxs = []int32{
	0, // 0: lctech_base.example.ExampleService.Example:input_type -> lctech_base.example.ExampleReq
	1, // 1: lctech_base.example.ExampleService.Example:output_type -> lctech_base.example.ExampleRes
	1, // [1:2] is the sub-list for method output_type
	0, // [0:1] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_example_example_proto_init() }
func file_example_example_proto_init() {
	if File_example_example_proto != nil {
		return
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: unsafe.Slice(unsafe.StringData(file_example_example_proto_rawDesc), len(file_example_example_proto_rawDesc)),
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_example_example_proto_goTypes,
		DependencyIndexes: file_example_example_proto_depIdxs,
		MessageInfos:      file_example_example_proto_msgTypes,
	}.Build()
	File_example_example_proto = out.File
	file_example_example_proto_goTypes = nil
	file_example_example_proto_depIdxs = nil
}
