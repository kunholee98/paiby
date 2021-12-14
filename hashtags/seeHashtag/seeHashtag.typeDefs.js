import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seeHashtag(hashtagName: String!, skip: Int!, take: Int!): Hashtag!
  }
`;
