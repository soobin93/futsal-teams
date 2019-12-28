<template>
    <div>
        <a-tabs
            defaultActiveKey="tab_players"
            tabPosition="left"
            class="dashboard-slider"
        >
            <a-tab-pane key="tab_players">
                        <span slot="tab">
                            <a-icon type="user" />
                            Players
                        </span>

                Content of tab 1
            </a-tab-pane>

            <a-tab-pane key="tab_matches">
                        <span slot="tab">
                            <a-icon type="star" />
                            Matches
                        </span>

                Content of tab 2
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
    export default {
        //
    }
</script>

<style scoped>
    .dashboard-slider {
        background: #fff;
        height: 100%;
    }
</style>
