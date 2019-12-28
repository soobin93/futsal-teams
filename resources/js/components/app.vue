<template>
    <div>
        <a-layout>
            <a-layout-header class="header">
                <div>Futsal Teams</div>
            </a-layout-header>

            <main>
                <div class="container">
                    <router-view :key="$route.fullPath" />
                </div>
            </main>
        </a-layout>
    </div>
</template>

<script>
    export default {
        //
    }
</script>

<style scoped>
    .header {
        color: #fff;
    }

    .container {
        margin: 24px;
    }
</style>
