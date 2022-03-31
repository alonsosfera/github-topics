import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"

const link = createHttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_URI })

const authLink = setContext((_, { headers }) => ({
  headers: { ...headers, Authorization: `bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}` }
}))

const client = new ApolloClient({
  link: authLink.concat(link),
  cache: new InMemoryCache()
})

// eslint-disable-next-line react/display-name
export const withApollo = Component => props => (
  <ApolloProvider client={client}>
    <Component {...props} />
  </ApolloProvider>
)
