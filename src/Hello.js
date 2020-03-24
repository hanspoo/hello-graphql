import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const HELLO = gql`
  query hello($name: String) {
    hello(name: $name)
  }
`;

/*
curl -XPOST http://localhost:9000/intervi/graphql -d ' { "query": "{ hello  }" }'

*/
export default function ExchangeRates() {
  const { loading, error, data } = useQuery(HELLO, {
    variables: { name: "Aldo" }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  console.log("data", data.hello);

  return <p>Listo {data && data.hello}</p>;
}
