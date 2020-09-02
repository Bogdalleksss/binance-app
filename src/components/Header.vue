<template>
    <ul class="header">
        <router-link :to="{name : 'table'}">
            <li>Table</li>
        </router-link>
        <router-link :to="{name : 'select'}">
            <li>Select</li>
        </router-link>
    </ul>
</template>

<script>
export default {
    name: 'header'
}
</script>

<style>

ul.header {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 100vw;
    height: 60px;
    background: #2fb677;
    box-shadow:0px 2px 16px 0px rgba(0,0,0,0.23);
}

ul.header li {
    list-style: none;
    padding: 0 10px;
    cursor: pointer;
    color: #ffffff;
    text-transform: uppercase;
}

ul.header a {
    text-decoration: none;
}

.router-link-exact-active {
    font-weight: bold;
}
</style>