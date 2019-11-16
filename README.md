# ApiGatewayManagementApi@2.536.0

A library to provide the `ApiGatewayManagementApi` module from `aws-sdk-js@2.236.0` for AWS Lambda container that has only `aws-sdk@2.488.0` library. It is highly inspired from [guerrerocarlos/AWS-ApiGatewayManagementApi](https://github.com/guerrerocarlos/AWS-ApiGatewayManagementApi).

Now, AWS Lambda for JavaScript runtime has `aws-sdk@2.488.0` that already includes a basic `ApiGatewayManagementApi` module but there is a missing useful API such as `DeleteConnection`. This library will patch your `aws-sdk` as possible as small.

## What does change

Please see [aws-sdk-js/CHANGELOG](https://github.com/aws/aws-sdk-js/blob/master/CHANGELOG.md) with a search of `apigatewaymanagementapi`. Now, there is an only change for `DeleteConnection` API.

## How to use

```typescript
import { newApiGatewayManagementApi } from "@yingyeothon/aws-apigateway-management-api";

const dropConnection = (event: APIGatewayProxyEvent) =>
  newApiGatewayManagementApi({
    endpoint: event.requestContext.domainName + "/" + event.requestContext.stage
  })
    .deleteConnection({
      ConnectionId: event.requestContext.connectionId
    })
    .promise();
```

## Disclaim

This code is copied from [aws-sdk-js](https://github.com/aws/aws-sdk-js).

- [apigatewaymanagementapi.js](https://github.com/aws/aws-sdk-js/blob/master/clients/apigatewaymanagementapi.js)
- [apigatewaymanagementapi-2018-11-29.min.json](https://github.com/aws/aws-sdk-js/blob/master/apis/apigatewaymanagementapi-2018-11-29.min.json)

Unlike [guerrerocarlos/AWS-ApiGatewayManagementApi](https://github.com/guerrerocarlos/AWS-ApiGatewayManagementApi), it will patch anyway if there is a newly module in your `aws-sdk` so please be careful.

## License

[aws-sdk-js#LICENSE](https://github.com/aws/aws-sdk-js/#license)
