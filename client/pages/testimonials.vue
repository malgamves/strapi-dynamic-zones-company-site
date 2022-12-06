<template>
  <div class="layout">
    <NavBar />
    <Hero :title="title" :content="pages" />
    <ContentGrid :title="title" :content="pages" />
    <Footer />
  </div>
</template>

<script setup>
import { contentQuery } from "~/query/content"

const graphql = useStrapiGraphQL()
const title = "Testimonial"

const result = await graphql(contentQuery, { "Page": title })

const pages = result.data.pages.data[0].attributes
console.log(pages.pageZone[0].image.data.attributes.url)

</script>


<style>
* {
  box-sizing: border-box;
}
body {
  --color-base: rgb(255, 255, 255);
  --color-base-1: rgb(243, 243, 243);
  --color-contrast: rgb(0, 0, 0);
  --color-contrast-1: rgb(43, 43, 43);
  font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding: 0;
  font-size: 16px;
  background: var(--color-base);
  color: var(--color-contrast);
  transition: background 0.5s ease;
}
body.dark {
  --color-base: rgb(0, 0, 0);
  --color-base-1: rgb(43, 43, 43);
  --color-contrast: rgb(255, 255, 255);
  --color-contrast-1: rgb(243, 243, 243);
}
h1 {
  letter-spacing: -0.01em;
}
.layout {
  padding: 0;
}
.layout.sticky-header {
  padding: 0 0 0 0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}
@media (min-width: 860px) {
  .container {
    padding: 0 6rem;
  }
}
a {
  color: inherit;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
.label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
</style>