import { gql } from "@apollo/client"

export const getTopics = gql`
  query GetTopics ($name: String!) {
    topic(name: $name) {
      name
      stargazerCount
      relatedTopics (first: 10) {
        name
        stargazerCount
      }    
    }
  }
`
