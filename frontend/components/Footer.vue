<template>
    <footer class="footer">
        <div class="container">
            <span v-html="settings.footer" /> <span> Thanks to <a href="https://unsplash.com/@wocintechchat">Christina</a>,<a href="https://unsplash.com/@galina88"> Galina </a>and <a href="https://unsplash.com/@bkotynski">Bethany</a> for the images.</span>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            settings: require("../data/info.json")
        }
    }
}
</script>

<style scoped>
.footer {
    font-size: 0.8rem;
    padding: 6rem 0;
}
</style>