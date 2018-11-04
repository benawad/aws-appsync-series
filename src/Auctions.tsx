import * as React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";

import { AuctionCard } from "./AuctionCard";
import { listAuctions } from "./graphql/queries";
import { ListAuctionsQuery, ListAuctionsQueryVariables } from "./API";

export const Auctions = () => {
  return (
    <Query<ListAuctionsQuery, ListAuctionsQueryVariables>
      query={gql(listAuctions)}
      variables={{ limit: 10 }}
    >
      {({ data, loading }) => {
        if (
          loading ||
          !data ||
          !data.listAuctions ||
          !data.listAuctions.items
        ) {
          return null;
        }

        console.log(data.listAuctions.items);

        return (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gridGap: 10
            }}
          >
            {data.listAuctions.items.map(x => (
              <AuctionCard name={x!.name} price={x!.price} key={x!.id} />
            ))}
          </div>
        );
      }}
    </Query>
  );
};
