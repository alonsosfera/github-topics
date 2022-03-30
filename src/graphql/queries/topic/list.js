import { gql } from "@apollo/client"

export const getTopics = gql`
  query GetTopics ($name: String!) {
    topic(name: $name) {
      name
      stargazerCount
      relatedTopics {
        name
      }    
    }
  }
`
