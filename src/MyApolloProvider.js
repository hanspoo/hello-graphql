import ApolloClient from "apollo-boost";
import PropTypes from "prop-types";
import { ApolloProvider } from "@apollo/react-hooks";
import React from "react";

const client = new ApolloClient({
  uri: "/intervi/graphql"
});

const MyApolloProvider = ({ children }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);
MyApolloProvider.propTypes = {
  children: PropTypes.object.isRequired
};

export default MyApolloProvider;
