<template>
    <div class="sm-hide">
        <h2>{{ msg }}</h2>
    </div>
    <div>
        <i class="ic-search"> </i>
        <i class="ic-naver"> </i>
        <i class="ic-kakao"> </i>
        <i class="ic-menu"> </i>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss"></style>
