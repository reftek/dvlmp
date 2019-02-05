<template>
    <div>
        <div class="row px-3">
            <div class="col-12 col-lg-12">
                <input type="text" class="form-control mb-3 py-4" placeholder="Name" required>
            </div>
            <div class="col-12 col-lg-12">
                <input type="email" class="form-control mb-3 py-4" placeholder="Email Address" required>
            </div>
            <div class="col-12 col-lg-12">
                <input type="" class="form-control mb-3 py-4" placeholder="Phone Number" required>
            </div>
            <div class="col-12 col-lg-12">
                <div class="has-eye">
                    <i v-if="passwordVisible" class="mdi mdi-eye-off form-control-feedback password-eye" @click="passwordVisible = !passwordVisible"></i>
                    <i v-else class="mdi mdi-eye form-control-feedback password-eye" @click="passwordVisible = !passwordVisible"></i>

                    <input :type="passwordType" class="form-control mb-3 py-4" placeholder="Password">
                </div>
            </div>

            <div class="col-12">
                <div class="input-group">
                    <input :type="passwordType" class="form-control mb-3 py-4" placeholder="Password">

                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                            <i v-if="passwordVisible" class="mdi mdi-eye-off form-control-feedback password-eye" @click="passwordVisible = !passwordVisible"></i>
                            <i v-else class="mdi mdi-eye form-control-feedback password-eye" @click="passwordVisible = !passwordVisible"></i>
                        </button>
                    </div>
                </div>
            </div>

            <div class="col-12 col-lg-12">
                <input type="" class="form-control mb-3 py-4" placeholder="Confirm Password" required>
            </div>
        </div>

        <div class="row mt-3 p-3">
            <div class="col">
                <button type="submit" class="btn py-3 btn-primary btn-block active">Sign Up</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            passwordVisible: false,
        }
    },
    computed: {
        passwordType(){
            if(this.passwordVisible == true){
                return 'text';
            }else{
                return 'password';
            }
        }
    }
}
</script>


<style lang="scss" scoped>
input{
    color: black;
    font-size: 0.8rem;
}

#password + .mdi {
   cursor: pointer;
   pointer-events: all;
}

.has-eye .form-control {
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

.password-eye{
    // border: 1px solid red;
    position: relative;
    z-index: 10 !important;
    cursor: pointer;
}
</style>
