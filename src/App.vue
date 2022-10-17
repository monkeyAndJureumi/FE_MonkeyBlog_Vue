<template>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <StyleComponents />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import StyleComponents from './components/StyleComponents.vue';

export default {
    name: 'App',
    components: {
        HelloWorld,
        StyleComponents
    }
};
</script>

<style lang="scss">
.title {
}
</style>
