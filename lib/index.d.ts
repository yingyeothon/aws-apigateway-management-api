/// <reference types="node" />
import AWS = require("aws-sdk");
declare type AWSError = import("aws-sdk").AWSError;
declare type Config = import("aws-sdk").Config;
declare type Request<D, E> = import("aws-sdk").Request<D, E>;
declare type ServiceConfigurationOptions = import("aws-sdk/lib/service").ServiceConfigurationOptions;
interface Blob {
}
declare class ApiGatewayManagementApi extends AWS.Service {
    constructor(options?: ApiGatewayManagementApi.Types.ClientConfiguration);
    config: Config & ApiGatewayManagementApi.Types.ClientConfiguration;
    deleteConnection(params: ApiGatewayManagementApi.Types.DeleteConnectionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
    deleteConnection(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
    getConnection(params: ApiGatewayManagementApi.Types.GetConnectionRequest, callback?: (err: AWSError, data: ApiGatewayManagementApi.Types.GetConnectionResponse) => void): Request<ApiGatewayManagementApi.Types.GetConnectionResponse, AWSError>;
    getConnection(callback?: (err: AWSError, data: ApiGatewayManagementApi.Types.GetConnectionResponse) => void): Request<ApiGatewayManagementApi.Types.GetConnectionResponse, AWSError>;
    postToConnection(params: ApiGatewayManagementApi.Types.PostToConnectionRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
    postToConnection(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
}
declare namespace ApiGatewayManagementApi {
    type Data = Buffer | Uint8Array | Blob | string;
    interface DeleteConnectionRequest {
        ConnectionId: __string;
    }
    interface GetConnectionRequest {
        ConnectionId: __string;
    }
    interface GetConnectionResponse {
        ConnectedAt?: __timestampIso8601;
        Identity?: Identity;
        LastActiveAt?: __timestampIso8601;
    }
    interface Identity {
        SourceIp: __string;
        UserAgent: __string;
    }
    interface PostToConnectionRequest {
        Data: Data;
        ConnectionId: __string;
    }
    type __string = string;
    type __timestampIso8601 = Date;
    type apiVersion = "2018-11-29" | "latest" | string;
    interface ClientApiVersions {
        apiVersion?: apiVersion;
    }
    type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
    export import Types = ApiGatewayManagementApi;
}
export declare const newApiGatewayManagementApi: (options?: ApiGatewayManagementApi.ClientConfiguration | undefined) => ApiGatewayManagementApi;
export {};
