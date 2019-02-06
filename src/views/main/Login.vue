<template>
    <div class="container h-100 bg-white">
        <div class="row py-4 px-3">
            <div class="col-9">
                <div class="title-bold">Sign In</div>
            </div>
        </div>
        <div class="row px-3">
            <div class="col-12">
                <input type="text" class="form-control mb-3 py-4" placeholder="Email" required>
            </div>
            <div class="col-12">
                <div class="input-group">
                    <input :type="passwordType" id="button-add1" class="form-control mb-3 py-4" placeholder="Password">

                    <div class="input-group-append">
                        <button class="btn" type="button" id="button-addon2">
                            <i v-if="passwordVisible" class="mdi mdi-eye-off form-control-feedback" @click="passwordVisible = !passwordVisible"></i>
                            <i v-else class="mdi mdi-eye form-control-feedback" @click="passwordVisible = !passwordVisible"></i>
                        </button>
                    </div>
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
.title-bold{
    color: blue;
    font-size: 1.7rem;
    font-weight: bold;
}

input{
    color: black;
    font-size: 0.8rem;
}

#button-addon2{
    height: 50.3px;
    background-color: transparent;
    border-top: 1px solid #ced4da;
    border-bottom: 1px solid #ced4da;
    border-right: 1px solid #ced4da;
}

#button-add1{
    border-right: none;
}

.btn:focus, .btn.focus {
    outline: 0; 
     -webkit-box-shadow: 0 0 0 0 rgba(61, 78, 225, 0.25); 
     box-shadow: 0 0 0 0 rgba(61, 78, 225, 0.25); 
}
</style>
