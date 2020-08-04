<template>
  <div>
    <Header />
    <Hero :title="title" :content="pages" />
    <ContentGrid :title="title" :content="pages" />
    <Footer />
  </div>
</template>


<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "@/components/Hero.vue"
import ContentGrid from "@/components/ContentGrid"
import { contentQuery } from "~/graphql/queries/content"

export default {
  components: {
    Header,
    ContentGrid,
    Footer,
    Hero,
    
  },
  data() {
    return {
      pages:[], //query result
      title: "Team" //page title
    };
  },
  apollo: {
    pages: {
      query: contentQuery,
      variables () {
        return {
          Page: this.title
        }
      },
      prefetch: true
    }
  }
}
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
  padding: 6rem 0 0 0;
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