<template>
    <div class="loading-wrapper">
        <div class="loading-content">
            <img src="../../assets/apha-loding——2.gif" width="50" height="50">
            <p class="title">{{ title }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: '页面加载中...'
        }
    },
}
</script>

<style lang="scss" scoped>
.loading-wrapper {
    width: 100%;
    position: absolute;
    top: 50%;
    height: 100vh;
    transform: translateY(-50%);
    background-color: #5e5656;
    opacity: 0.6;
}

.loading-content {
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