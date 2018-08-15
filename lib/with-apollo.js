import { withData } from 'next-apollo'
import { HttpLink } from 'apollo-link-http'

const apolloConfig = {
  link: new HttpLink({
    uri: 'http://127.0.0.1:3002/graphql'
  })
}

export default withData(apolloConfig)
