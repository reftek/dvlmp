<template>
    <div class="container h-100 bg-white">
        <div class="row py-4 px-3">
            <div class="col-9">
                <div class="title-bold">Sign In</div>
            </div>
        </div>
        <div class="row px-3">
            <div class="col-12 col-lg-12">
                <input type="text" class="form-control mb-3 py-4" id="" placeholder="Email" required>
            </div>
            <div class="col-12 col-lg-12">
                <div class="has-eye">
                    <i class="mdi mdi-eye form-control-feedback"></i>
                    <input type="text" class="form-control mb-3 py-4" placeholder="Password">
                </div>
            </div>
        </div>
        <div class="row mt-3 p-3">
            <div class="col">
                <button type="submit" class="btn py-3 btn-primary btn-block active">Log In</button>
            </div>
        </div>

        <div class="row px-4 pt-2">
            <div class="col">
                <div class="text-center">
                    Forgot Password?
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.title-bold{
    color: blue;
    font-size: 1.7rem;
    font-weight: bold;
}

input{
    color: black;
    font-size: 0.8rem;
}

.has-eye .form-control {
    // padding-left: 2.375rem;
    width: 100%;
}

.has-eye .form-control-feedback {
    position: absolute;
    right: 5%;
    top: 6%;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: rgb(139, 139, 139);
}
</style>
