<template>
    <div class="loading">
        <img src="../../assets/apha-loding——2.gif" width="70" height="70">
        <p class="title">{{ title }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '正在加载中...',
        },
    },
    data() {
        return {

        }
    },
    mounted() {
        console.log('This is page loading');
    },

}
</script>

<style lang="scss" scoped>
.loading {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    .title {
        font-size: 20px;
        line-height: 20px;
    }
}
</style>