<template>
    <div class="container bg-white h-100">
        <!-- <div class="row justify-content-center h-100 pt-5">
            <div class="col-md-9">

                <div class="text-center">
                    <img class="mb-3 small-icon" src="../../assets/images/motorcycle@2x.png" />
                    <h1 class="fs-13 mb-5">Merchant</h1>
                </div>

                <div class="row shadow-sm bg-white py-5 px-5 mb-4 rounded-5">
                    <div class="col-md-12 pt-4">
                        <div class="row">
                            <div class="col-md-6 mb-3">
                                <div class="form-group">
                                    <label>Company Name</label>
                                    <input type="text" class="form-control rounded-1 bg-silver">
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="form-group">
                                    <label>Contact Name</label>
                                    <input type="text" class="form-control rounded-1 bg-silver">
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="form-group">
                                    <label>Company Email</label>
                                    <input type="text" class="form-control rounded-1 bg-silver">
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="form-group">
                                    <label>Phone Number</label>
                                    <input type="text" class="form-control rounded-1 bg-silver">
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control rounded-1 bg-silver">
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" class="form-control rounded-1 bg-silver">
                                </div>
                            </div>
                        </div>

                        <div class="mt-5 pb-3 text-center">
                            <button class="btn btn-primary btn-lg rounded-0 px-5">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
        <div class="row align-items-center justify-content-center pt-4 px-3">
            <div class="col-8">
                <div class="title-bold">Sign Up</div>
            </div>
            <div class="col-4">
                <div class="user text-center rounded p-1">
                    MERCHANT
                </div>
            </div>
        </div>

        <div class="row p-3">
            <div class="col">
                <div class="info mb-4 mt-2">
                    Sign up as a merchant to start receiving delivery requests from customers around Nigeria. 
                </div>
            </div>
        </div>

        <sign-up-merchant-card />

        
    </div>
</template>

<style lang="scss" scoped>
.small-icon{
    height: 30px;
}

.title-bold{
    color: blue;
    font-size: 1.7rem;
    font-weight: bold;
}

.user{
    border: 1px solid blue;
    color: blue;
    font-size: 0.7rem;
}



 .info{
     color: black;
     font-size: 0.9rem;
 }


</style>

<script>
import SignUpMerchantCard from "./../../components/signup/SignUpMerchantCard.vue";
export default {
    components: {
        SignUpMerchantCard,
    }
}
</script>
