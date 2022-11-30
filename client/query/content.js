//import gql from "graphql-tag";


// Main query to get page specific content

export const contentQueryV3 = `
query Pages($Page: String!) {
  pages: pages(where: { Title: $Page }) {
    Title
    Description
    pageZone {
      ... on ComponentPostImage {
        caption
        image {
          url
        }
      }
      ... on ComponentPostQuote {
        quote
        quoter
      }
      ... on ComponentPostRichText {
        richText
      }
    }
}
}
`
export const contentQuery = `
query Pages($Page: String!){
  pages: pages(filters: { Title: { eq: $Page  }}) {
    data {
      attributes {
        Title
        Description
        pageZone {
          __typename
          ... on ComponentPostImage {
            caption
            image {
              data {
                attributes {
                  url
                }
              }
            }
          } 
          ... on ComponentPostQuote {
            quote
            quoter
          }
          ... on ComponentPostRichText {
            richText
          }
        }
      }
    }
  }
}`