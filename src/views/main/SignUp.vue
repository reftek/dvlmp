<template>
    <div class="container bg-white h-100">
        <!-- <div class="row justify-content-center align-items-center h-100">
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
            </div> -->
        <div class="title-bold p-4">Sign Up</div>
    
        <div class="pb-4 px-3 pill-border">
            <nav class="nav nav-pills nav-justified">
                <a class="nav-item nav-link" :class="isActiveStatus('user')" id="user-pill" href="#" @click="status = 'user'">User</a>
                <a class="nav-item nav-link" :class="isActiveStatus('merchant')" id="merchant-pill" href="#" @click="status = 'merchant'">Merchant</a>
            </nav>
        </div>
    
        <div v-if="status == 'user'">
            <sign-up-user />
        </div>
    
        <div v-if="status == 'merchant'">
            <sign-up-merchant />
        </div>
    
    </div>
</template>

<script>
    import SignUpUser from "./../../components/signup/SignUpUser";
    import SignUpMerchant from "./../../components/signup/SignUpMerchant";
    
    export default {
        components: {
            SignUpUser,
            SignUpMerchant,
        },
        data() {
            return {
                status: 'user',
            }
        },
        methods: {
            isActiveStatus(type){
                if(this.status == type){
                    return 'active';
                }else{
                     return '';
                }
            },
        },
    }
</script>


<style lang="scss" scoped>
    .small-icon {
        height: 60px;
    }
    
    .title-bold {
        color: blue;
        font-size: 1.7rem;
        font-weight: bold;
    }
    
    .has-search .form-control {
        // padding-left: 2.375rem;
        width: 100%;
    }
    
    .has-search .form-control-feedback {
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
    
    input {
        color: black;
        font-size: 0.8rem;
    }
</style>
