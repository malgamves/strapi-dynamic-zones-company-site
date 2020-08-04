import gql from "graphql-tag";


// Main query to get page specific content

export const contentQuery = gql`
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
