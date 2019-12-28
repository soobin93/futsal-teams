<template>
    <div>
        <a-layout>
            <a-layout-header class="header">
                <div>Futsal Teams</div>
            </a-layout-header>

            <a-layout>
                <a-layout-sider
                    width="200"
                    class="sider"
                >
                    <a-menu
                        mode="inline"
                        class="sider-menu"
                        :defaultSelectedKeys="['menu_players']"
                    >
                        <a-menu-item key="menu_players">
                            <a-icon type="user" /> Players
                        </a-menu-item>

                        <a-menu-item key="menu_matches">
                            <a-icon type="star" /> Matches
                        </a-menu-item>
                    </a-menu>
                </a-layout-sider>

                <a-layout>
                    <a-layout-content class="container">
                        <router-view :key="$route.fullPath" />
                    </a-layout-content>
                </a-layout>
            </a-layout>
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

    .sider {
        background: #fff;
    }

    .sider-menu {
        height: 100%;
        border-right: 0;
    }

    .container {
        background: #fff;
        padding: 24px;
        margin: 0 24px 24px;
        min-height: 280px;
    }
</style>
