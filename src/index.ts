/**
 * Copied from
 *   - `aws-sdk@2.563.0/clients/apigatewaymanagementapi.d.ts`.
 */
import AWS = require("aws-sdk");

type AWSError = import("aws-sdk").AWSError;
type Config = import("aws-sdk").Config;
type Request<D, E> = import("aws-sdk").Request<D, E>;
type ServiceConfigurationOptions = import("aws-sdk/lib/service").ServiceConfigurationOptions;

interface Blob {}

declare class ApiGatewayManagementApi extends AWS.Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: ApiGatewayManagementApi.Types.ClientConfiguration);
  config: Config & ApiGatewayManagementApi.Types.ClientConfiguration;
  /**
   * Delete the connection with the provided id.
   */
  deleteConnection(
    params: ApiGatewayManagementApi.Types.DeleteConnectionRequest,
    callback?: (err: AWSError, data: {}) => void
  ): Request<{}, AWSError>;
  /**
   * Delete the connection with the provided id.
   */
  deleteConnection(
    callback?: (err: AWSError, data: {}) => void
  ): Request<{}, AWSError>;
  /**
   * Get information about the connection with the provided id.
   */
  getConnection(
    params: ApiGatewayManagementApi.Types.GetConnectionRequest,
    callback?: (
      err: AWSError,
      data: ApiGatewayManagementApi.Types.GetConnectionResponse
    ) => void
  ): Request<ApiGatewayManagementApi.Types.GetConnectionResponse, AWSError>;
  /**
   * Get information about the connection with the provided id.
   */
  getConnection(
    callback?: (
      err: AWSError,
      data: ApiGatewayManagementApi.Types.GetConnectionResponse
    ) => void
  ): Request<ApiGatewayManagementApi.Types.GetConnectionResponse, AWSError>;
  /**
   * Sends the provided data to the specified connection.
   */
  postToConnection(
    params: ApiGatewayManagementApi.Types.PostToConnectionRequest,
    callback?: (err: AWSError, data: {}) => void
  ): Request<{}, AWSError>;
  /**
   * Sends the provided data to the specified connection.
   */
  postToConnection(
    callback?: (err: AWSError, data: {}) => void
  ): Request<{}, AWSError>;
}

declare namespace ApiGatewayManagementApi {
  export type Data = Buffer | Uint8Array | Blob | string;
  export interface DeleteConnectionRequest {
    ConnectionId: __string;
  }
  export interface GetConnectionRequest {
    ConnectionId: __string;
  }
  export interface GetConnectionResponse {
    /**
     * The time in ISO 8601 format for when the connection was established.
     */
    ConnectedAt?: __timestampIso8601;
    Identity?: Identity;
    /**
     * The time in ISO 8601 format for when the connection was last active.
     */
    LastActiveAt?: __timestampIso8601;
  }
  export interface Identity {
    /**
     * The source IP address of the TCP connection making the request to API Gateway.
     */
    SourceIp: __string;
    /**
     * The User Agent of the API caller.
     */
    UserAgent: __string;
  }
  export interface PostToConnectionRequest {
    /**
     * The data to be sent to the client specified by its connection id.
     */
    Data: Data;
    /**
     * The identifier of the connection that a specific client is using.
     */
    ConnectionId: __string;
  }
  export type __string = string;
  export type __timestampIso8601 = Date;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2018-11-29" | "latest" | string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions &
    ClientApiVersions;
  /**
   * Contains interfaces for use with the ApiGatewayManagementApi client.
   */
  export import Types = ApiGatewayManagementApi;
}

/**
 * Copied from
 *   - `aws-sdk@2.563.0/apis/apigatewaymanagementapi-2018-11-29.min.json`
 *   - `aws-sdk@2.563.0/clients/apigatewaymanagementapi.js`
 */

const model = {
  metadata: {
    apiVersion: "2018-11-29",
    endpointPrefix: "execute-api",
    signingName: "execute-api",
    serviceFullName: "AmazonApiGatewayManagementApi",
    serviceId: "ApiGatewayManagementApi",
    protocol: "rest-json",
    jsonVersion: "1.1",
    uid: "apigatewaymanagementapi-2018-11-29",
    signatureVersion: "v4"
  },
  operations: {
    DeleteConnection: {
      http: {
        method: "DELETE",
        requestUri: "/@connections/{connectionId}",
        responseCode: 204
      },
      input: {
        type: "structure",
        members: {
          ConnectionId: {
            location: "uri",
            locationName: "connectionId"
          }
        },
        required: ["ConnectionId"]
      }
    },
    GetConnection: {
      http: {
        method: "GET",
        requestUri: "/@connections/{connectionId}",
        responseCode: 200
      },
      input: {
        type: "structure",
        members: {
          ConnectionId: {
            location: "uri",
            locationName: "connectionId"
          }
        },
        required: ["ConnectionId"]
      },
      output: {
        type: "structure",
        members: {
          ConnectedAt: {
            shape: "S5",
            locationName: "connectedAt"
          },
          Identity: {
            locationName: "identity",
            type: "structure",
            members: {
              SourceIp: {
                locationName: "sourceIp"
              },
              UserAgent: {
                locationName: "userAgent"
              }
            },
            required: ["SourceIp", "UserAgent"]
          },
          LastActiveAt: {
            shape: "S5",
            locationName: "lastActiveAt"
          }
        }
      }
    },
    PostToConnection: {
      http: {
        requestUri: "/@connections/{connectionId}",
        responseCode: 200
      },
      input: {
        type: "structure",
        members: {
          Data: {
            type: "blob"
          },
          ConnectionId: {
            location: "uri",
            locationName: "connectionId"
          }
        },
        required: ["ConnectionId", "Data"],
        payload: "Data"
      }
    }
  },
  shapes: {
    S5: {
      type: "timestamp",
      timestampFormat: "iso8601"
    }
  },
  paginators: {}
};

const PatchedApiGatewayManagementApi = (() => {
  // To access private members in TypeScript, convert it as any type.
  const aws = AWS as any;
  const NewApi = aws.Service.defineService("apigatewaymanagementapi", [
    "2018-11-29"
  ]);
  Object.defineProperty(
    aws.apiLoader.services["apigatewaymanagementapi"],
    "2018-11-29",
    {
      get: () => model,
      enumerable: true,
      configurable: true
    }
  );
  return NewApi;
})();

export const newApiGatewayManagementApi = (
  options?: ApiGatewayManagementApi.Types.ClientConfiguration
): ApiGatewayManagementApi => {
  return new PatchedApiGatewayManagementApi(options);
};
