<template>
    <main>
        <b-container>
            <router-view :key="$route.fullPath" />
        </b-container>
    </main>
</template>

<script>
    export default {
        //
    }
</script>
