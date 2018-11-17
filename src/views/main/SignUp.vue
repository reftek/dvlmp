<template>
    <div class="container h-100">
        <div class="row justify-content-center align-items-center h-100">
            <div class="col-md-6 text-center">
                <h1 class="display-4 mb-5">Sign Up</h1>

                <div class="row justify-content-around">
                    <div class="col-md-6">
                        <div class="border bg-white py-5 mb-4 rounded-1">
                            <img class="mb-5 small-icon" src="../../assets/images/motorcycle@2x.png" />
                            <div class="fs-12">Merchant</div>
                            <router-link :to="{name: 'main.signup.merchant'}" tag="button" class="btn btn-primary rounded-0 px-5 mt-5">Sign Up</router-link>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="border bg-white py-5 mb-4 rounded-1">
                            <img class="mb-5 small-icon" src="../../assets/images/woman@2x.png" />
                            <div class="fs-12">Individual / Business</div>
                            <router-link :to="{name: 'main.signup.user'}" tag="button" class="btn btn-primary rounded-0 px-5 mt-5">Sign Up</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.small-icon{
    height: 60px;
}
</style>
