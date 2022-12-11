
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