<template>
<div>
    <footer class="footer">
        <div class="container">
            <h1>this should show</h1>
            <span v-html="settings.footerText" /> <span> Thanks to <a href="https://unsplash.com/@wocintechchat">Christina</a>,<a href="https://unsplash.com/@galina88"> Galina </a>and <a href="https://unsplash.com/@bkotynski">Bethany</a> for the images.</span>
        </div>
    </footer>
</div>
</template>

<script>
export default {
  
};
</script>

<script setup>
    const settings = require("../info.json")
        
</script>

<style scoped>
.footer {
    font-size: 0.8rem;
    padding: 6rem 0;
}
</style>