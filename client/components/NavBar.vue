<template>
    <div class="header">
        <div class="container">
            <div class="left">
                <NuxtLink to="/" class="home-link">
                    <b>Company X </b>
                </NuxtLink>
            </div>
            <nav class="nav right">
                <NuxtLink class="nav__link" to="/about">About Us</NuxtLink>
                <NuxtLink class="nav__link" to="/team">Team</NuxtLink>
                <NuxtLink class="nav__link" to="/testimonials">Testimonials</NuxtLink>

            </nav>
        </div>
    </div>
</template>

<script>
export default {
  
};
</script>

<script setup>
        
</script>


<style scoped>
.header {
    position: relative;
    height: 6rem;
    z-index: 10;
}
.header.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
.header > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}
.home-link {
    text-decoration: none;
}
.logo {
    height: 4.5rem !important;
}
.site-name {
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-decoration: none;
    text-transform: uppercase;   
}
.nav > * {
    font-size: 0.9rem;
    font-weight: 600;
    text-decoration: none;
    margin-top: 4px;
    margin-right: 3rem;
    padding-bottom: 4px;
    border-bottom: 1px solid;
    border-color: transparent;
    transition: border 0.15s;
}
.nav > *:last-of-type {
    margin: 0;
}
.nav > *:hover {
    border-color: inherit;
}
.nav > .active {
    border-color: inherit;
}
</style>