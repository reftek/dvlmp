<template>
    <div class="container h-100 bg-white">
        <div class="row py-4 px-3">
            <div class="col-9">
                <div class="title-bold">Sign In</div>
            </div>
        </div>
        <div class="row px-3">
            <div class="col-12">
                <input type="text" v-model="email" class="form-control mb-3 py-4" placeholder="Email" required>
            </div>
            <div class="col-12">
                <div class="input-group">
                    <input :type="passwordType" v-model="password" id="button-add1" class="form-control mb-3 py-4" placeholder="Password">

                    <div class="input-group-append">
                        <button class="btn" type="button" id="button-addon2">
                            <i v-if="passwordVisible" class="mdi mdi-eye-off form-control-feedback" @click="passwordVisible = !passwordVisible"></i>
                            <i v-else class="mdi mdi-eye form-control-feedback" @click="passwordVisible = !passwordVisible"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="row px-3 mt-2" v-if="errorMessage">
            <div class="col">
                <div class="alert alert-danger text-center">
                    {{ errorMessage }}
                </div>
            </div>
        </div>
        <div class="row px-3">
            <div class="col">
                <button type="submit" class="btn mt-3 p-3 py-3 btn-primary btn-block active" @click="tryLogin">Log In</button>
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
import axios from 'axios';
import Toasted from 'vue-toasted';

export default {
    data(){
        return {
            email: '',
            password: '',
            passwordVisible: false,
            errorMessage: '',
        }
    },
    computed: {
        passwordType(){
            if(this.passwordVisible == true){
                return 'text';
            }else{
                return 'password';
            }
        },
        isLoggedIn() {
            return this.$store.getters.getIsLoggedInStatus;
        }
    },
    methods: {
        tryLogin(){
            var body = {
                'email': this.email,
                'password': this.password,
            }

            if ((this.email || this.password) == "" ) {
                    this.errorMessage = "Please provide valid login information";
                }

            this.$store.dispatch('loginUser', body)
            .then((data) => {
                let user = this.$store.getters.getCurrentUser;

                if(user.type == 'customer') {
                    this.$router.push({name: 'customers.dashboard'});
                } else if (user.type == 'merchant') {
                    this.$router.push({name: 'merchants.dashboard'});
                } 

                console.log("i am done dispatching");
                let toast = this.$toasted.show(`Welcome ${user.name}!`, { 
                        theme: "toasted-primary", 
                        position: "bottom-center", 
                        duration : 2000
                });
            }).catch(err => {
                console.log(err)
            })
        }
    },
    beforeCreate() {
        let token = this.$store.getters.getToken;

        if(token) {
            this.$router.push({name: 'customers.dashboard'});
            console.log('You are already logged in!')
        }
    },
    watch: {
        password(){
            this.errorMessage = ''
        },
        email() {
            this.errorMessage = ''
        },
    },
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
