<template>
    <!-- <nav class="navbar navbar-expand-lg navbar-light bg-white py-4 px-4 align-center"> -->
        
        <div class="row justify-content-between bg-transparent px-3 py-3 align-items-center">
            <div class="col">
                <div class="user-image"></div>
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
        </div>
    <!-- </nav> -->
</template>

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
