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
        <div class="row mt-3 p-3">
            <div class="col">
                <button type="submit" class="btn py-3 btn-primary btn-block active" @click="tryLogin()">Log In</button>
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
        }
    },
    methods: {
        tryLogin(){
            var body = {
                'email': this.email,
                'password': this.password,
            }

            // var headers = {
            //     'Content-Type': 'application/json',
            //     'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC8xMjcuMC4wLjE6ODAwMFwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTU0OTU0MjY1MywiZXhwIjoxNTQ5NTQ2MjUzLCJuYmYiOjE1NDk1NDI2NTMsImp0aSI6InlMN1JmY1JRcVhxOWdjQ2EiLCJzdWIiOjE1LCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.qj_DN8r0yC3l6Nk3Li6oRr4u6_W9sWVCPcnoplTTRB4'
            // }
            axios.post('http://127.0.0.1:8000/api/auth/login', body)
            .then(response => {
                console.log(response.data)
                if (response.data.status == true) {
                    console.log('Welcome')
                } else {
                    this.errorMessage = response.data.message
                    this.password = ''
                }
            }
            )
            .catch(e => {
                console.log('sorry')
            })
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
