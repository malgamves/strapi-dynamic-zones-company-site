<template>
  <div>
    <NuxtPage />
    <p>{{restaurant}} </p>
    <br>
    <p>{{page}}</p>
  </div>
</template>

<script setup lang="ts">
import { contentQuery } from "~/query/content"

const graphql = useStrapiGraphQL()
// Option 1: use inline query
const restaurant = await graphql(`  
query {
  pages {
    data {
      id
      attributes {
        Title
      }
    }
  }
}`)

const pageTitle = "About"
// const dz = await graphql(`
// query Pages($Page: String!){
//   pages: pages(filters: { Title: { eq: ${pageTitle}  }}) {
//     data {
//       attributes {
//         Title
//         Description
//         pageZone {
//           __typename
//           ... on ComponentPostImage {
//             caption
//             image {
//               data {
//                 attributes {
//                   url
//                 }
//               }
//             }
//           } 
//           ... on ComponentPostQuote {
//             quote
//             quoter
//           }
//           ... on ComponentPostRichText {
//             richText
//           }
//         }
//       }
//     }
//   }
// }`)

const page = await graphql(contentQuery, { "Page": pageTitle })
</script>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
