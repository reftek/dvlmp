<template>
    <nav class="row justify-content-between bg-transparent px-3 py-3 align-items-center">
        <div class="col">
            <div class="user-image" @click="toggleSideBar"></div>
        </div>
        <div class="col text-center brand-text text-primary">
            DVMLP
        </div>
        <div class="col text-right">
            <div class="btn-icon mx-2">
                <i class="mdi mdi-magnify"></i>
            </div>
            <div class="btn-icon mx-2">
                <i class="mdi mdi-bell"></i>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    computed: {
        sideBarStatus(){
            return this.$store.getters['getSideBarStatus'];
        }
    },
    methods: {
        toggleSideBar(){
            this.$store.commit("toggleSideBar", true);
        }
    }
}
</script>


<style lang="scss" scoped>
.brand-text{
    font-weight: bold;
}
.btn-icon{
    display: inline-block;
    background-color: transparent;
}
.user-image{
    width: 50px;
    height: 50px;
    background-image: url('https://placehold.it/80');
    background-position: center center;
    border-radius: 50%;
}
</style>
