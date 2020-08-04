import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory'

// Helps avoid making heuristic queries for union types in Strapi Dynamic Zones
import introspectionResult from '~/fragmentTypes.json';

const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData: introspectionResult,
  });

export default ({req, app}) => {
    return {
      httpEndpoint: (process.env.BACKEND_URL || "http://localhost:1337") + "/graphql",
      cache: new InMemoryCache({ fragmentMatcher })
    }
}
