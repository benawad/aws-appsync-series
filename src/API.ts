/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateAuctionInput = {
  id?: string | null,
  name: string,
  price: number,
};

export type UpdateAuctionInput = {
  id: string,
  name?: string | null,
  price?: number | null,
};

export type DeleteAuctionInput = {
  id?: string | null,
};

export type ModelAuctionFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  price?: ModelFloatFilterInput | null,
  and?: Array< ModelAuctionFilterInput | null > | null,
  or?: Array< ModelAuctionFilterInput | null > | null,
  not?: ModelAuctionFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelFloatFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type CreateAuctionMutationVariables = {
  input: CreateAuctionInput,
};

export type CreateAuctionMutation = {
  createAuction:  {
    __typename: "Auction",
    id: string,
    name: string,
    price: number,
  } | null,
};

export type UpdateAuctionMutationVariables = {
  input: UpdateAuctionInput,
};

export type UpdateAuctionMutation = {
  updateAuction:  {
    __typename: "Auction",
    id: string,
    name: string,
    price: number,
  } | null,
};

export type DeleteAuctionMutationVariables = {
  input: DeleteAuctionInput,
};

export type DeleteAuctionMutation = {
  deleteAuction:  {
    __typename: "Auction",
    id: string,
    name: string,
    price: number,
  } | null,
};

export type GetAuctionQueryVariables = {
  id: string,
};

export type GetAuctionQuery = {
  getAuction:  {
    __typename: "Auction",
    id: string,
    name: string,
    price: number,
  } | null,
};

export type ListAuctionsQueryVariables = {
  filter?: ModelAuctionFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAuctionsQuery = {
  listAuctions:  {
    __typename: "ModelAuctionConnection",
    items:  Array< {
      __typename: "Auction",
      id: string,
      name: string,
      price: number,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateAuctionSubscription = {
  onCreateAuction:  {
    __typename: "Auction",
    id: string,
    name: string,
    price: number,
  } | null,
};

export type OnUpdateAuctionSubscription = {
  onUpdateAuction:  {
    __typename: "Auction",
    id: string,
    name: string,
    price: number,
  } | null,
};

export type OnDeleteAuctionSubscription = {
  onDeleteAuction:  {
    __typename: "Auction",
    id: string,
    name: string,
    price: number,
  } | null,
};
