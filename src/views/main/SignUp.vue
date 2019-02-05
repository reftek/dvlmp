<template>
    <div class="container bg-white h-100">
        <div class="title-bold p-4">Sign Up</div>
    
        <div class="pb-4 px-3 ">
            <nav class="nav nav-pills nav-justified pill-border rounded">
                <a class="nav-item nav-link" :class="isActiveStatus('user')" id="user-pill" href="#" @click="status = 'user'">User</a>
                <a class="nav-item nav-link mr-0" :class="isActiveStatus('merchant')" id="merchant-pill" href="#" @click="status = 'merchant'">Merchant</a>
            </nav>
        </div>
    
        <div v-if="status == 'user'">
            <sign-up-user-card />
        </div>
    
        <div v-if="status == 'merchant'">
            <sign-up-merchant-card />
        </div>
    
    </div>
</template>

<script>
    import SignUpUserCard from "./../../components/signup/SignUpUserCard";
    import SignUpMerchantCard from "./../../components/signup/SignUpMerchantCard";
    
    export default {
        components: {
            SignUpUserCard,
            SignUpMerchantCard,
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

.pill-border{
    border: 0.5px solid blue;
}
    
input {
    color: black;
    font-size: 0.8rem;
}
    
.nav-pills .nav-link:nth-child(2) {
    border-radius: 0px 0.25rem 0.25rem 0px;
}

.nav-pills .nav-link:nth-child(1) {
    border-radius: 0.25rem 0px 0px 0.25rem;
}
</style>
