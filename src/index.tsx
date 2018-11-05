import React from "react";
import ReactDOM from "react-dom";
import AWSAppSyncClient, { AUTH_TYPE } from "aws-appsync";
import { ApolloProvider } from "react-apollo";
import Amplify, { Auth } from "aws-amplify";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import AppSyncConfig from "./aws-exports";

Amplify.configure(AppSyncConfig);

const client = new AWSAppSyncClient({
  disableOffline: true,
  url: AppSyncConfig.aws_appsync_graphqlEndpoint,
  region: AppSyncConfig.aws_appsync_region,
  auth: {
    type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
    jwtToken: async () =>
      (await Auth.currentSession()).getIdToken().getJwtToken()
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
