<template>
  <div class="hero">
      <div v-for="zone in content.pageZone" :key="zone.id" class="project">
        <!-- Display all richText here -->
        <div class="sub-text" v-if="zone.__typename === 'ComponentPostRichText'">
          <p>{{ zone.richText }}</p>
        </div>

        <!-- Displays all Quotes here -->
        <div v-if="zone.__typename === 'ComponentPostQuote'">
          <p class="subtitle">{{ zone.quote }}</p>
          <p class="sub-text">by {{ zone.quoter}}</p>
        </div>

        <!-- Displays all Images -->
        <div class="sub-text" v-if="zone.__typename === 'ComponentPostImage'">
          <nuxt-img :src="zone.image.data.attributes.url" alt="image of company culture"/>
          <p class="sub-text hero-subtitle">{{ zone.caption }}</p>
        </div>
      </div>
    </div>
</template>

<script setup>
useHead({
  title: 'The Company X',
  meta: [
    { name: 'description', content: 'Our amazing Company Site.' }
  ]
})

</script>

<script>
export default {
  // content is query data from parent page
  // title is the page title of parent page
  props: {
    content: Object,
    title: String
}
};
</script>

<style scoped>
.hero {
  text-align: center;
  width: 650px;
  max-width: 100%;
  margin: 0 auto;
  padding: 1rem 0 8rem 0;
}
.sub-text {
  padding: 0 0 3rem 0;
}

.hero-subtitle p {
  margin: 0;
  padding: 0;
}
.hero-subtitle {
  font-size: 1em;
  font-weight: 400;
  line-height: 1.68;
  padding: 0;
  margin: 0;
  opacity: 0.6;
}

.subtitle {
  font-size: 1.5em;
  font-weight: 500;
  line-height: 1.68;
  padding: 0;
  margin: 0;
  opacity: 0.6;
}

.project {
  grid-column: auto / span 2;
  text-align: center;
}

@media (min-width: 920px) {
  .project {
    grid-column: auto / span 1;
  }
  .project:nth-child(3n + 1) {
    grid-column: auto / span 2;
  }
}
</style>