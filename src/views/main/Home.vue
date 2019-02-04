<template>
    <div class="main-container h-100">
        <!-- <div class="row justify-content-center align-items-center h-100"> -->
            <!-- <div class="col-md-8 text-center">
                <h1 class="text-primary">Home Page</h1>
                <router-link class="mx-5" :to="{name: 'merchants.dashboard'}">Merchant Dashboard</router-link>

                <router-link class="mx-5" :to="{name: 'customers.dashboard'}">Customer Dashboard</router-link>
            </div> -->
        <!-- </div> -->
        <div class="row justify-content-center abss align-items-center pb-0 mb-0">
            <div class="col">
                <div class="landing-img"></div>
            </div>
        </div>
        <div class="info-container pb-5">
            <div class="row">
                <div class="col-12 px-5 pt-3 pb-2">
                    <div class="title-bold">
                        DVLMP
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-8 pl-5">
                    <div class="black">
                        Connect with delivery companies, send packages across the world with ease.
                    </div>
                </div>
            </div>
            <div class="row justify-content-center align-items-center">
                <div class="col-10">
                    <div>
                        <button type="submit" class="btn mt-4 mb-3 py-3 btn-primary btn-block active" @click="gotoSignUpUser">Sign up as a User</button>
                    </div>
                    <div>
                        <button type="submit" class="btn py-3 btn-dark btn-block active" @click="gotoSignUpMerchant">Sign up as a Merchant</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <div class="text-center black py-4">Already have an account?
                    <router-link class="" :to="{name: 'main.login'}">Log in</router-link>
                    </div>
                </div>
            </div>   
        </div>
    </div>
</template>

<style lang="scss" scoped>
.landing-img{
    background-image: url('./../../assets/images/iStock-1019214052.png');
    background-position: center, center;
    background-repeat: no-repeat;
    height: 305px;
    min-width: 100vw;
}

.main-container{
    margin-top: -72px;
}

// .abss{
//     position: relative;
//     // transform: translate(0, -20%);
//     z-index: 0;
// }

.info-container{
    background-color: white;
}

.title-bold{
    font-size: 3rem;
    color: blue;
    font-weight: bold;

}

.black{
    color: black;

    &.text-center{
        font-size: 0.9rem;
    }
}

// div.main{
//     background-color: pink;
// }
// .main-container{
//     display: table;
// }
</style>

<script>
export default {
    methods:{
        gotoSignUpUser() {
            return this.$router.push({name: 'main.signup.user'});
        },
        gotoSignUpMerchant() {
            return this.$router.push({name: 'main.signup.merchant'});
        }
    }
}
</script>
