// tslint:disable
// this is an auto generated file. This will be overwritten

export const getAuction = `query GetAuction($id: ID!) {
  getAuction(id: $id) {
    id
    name
    price
  }
}
`;
export const listAuctions = `query ListAuctions(
  $filter: ModelAuctionFilterInput
  $limit: Int
  $nextToken: String
) {
  listAuctions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      price
    }
    nextToken
  }
}
`;
