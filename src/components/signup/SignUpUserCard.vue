<template>
    <div>
        <div class="row px-3">
            <div class="col-12 col-lg-12">
                <input type="text" v-model="name" class="form-control mb-3 py-4" placeholder="Name" required>
            </div>
            <div class="col-12 col-lg-12">
                <input type="email" v-model="email" class="form-control mb-3 py-4" placeholder="Email Address" required>
            </div>
            <div class="col-12 col-lg-12">
                <input type="text" v-model="phoneNumber" class="form-control mb-3 py-4" placeholder="Phone Number" required>
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

            <div class="col-12 col-lg-12">
                <input type="" v-model="confirmPassword" class="form-control mb-3 py-4" placeholder="Confirm Password" required>
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
                <button type="submit" class="btn py-3 btn-primary btn-block active" @click="signUpUser">Sign Up</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    props: {

    },
    data(){
        return {
            name: '',
            email: '',
            phoneNumber: '',
            password: '',
            confirmPassword: '',
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
        signUpUser() {
            // console.log('hi giddy');
            // (this.name == '' || this.email== '' || this.phoneNumber == '' || this.password == '' ) ?
            //         this.errorMessage = 'Fill in the blank fields': 
            //         this.errorMessage ='';
            // setTimeout(()=>{ this.errorMessage = ''; }, 2000);

            var body = {
                name: this.name,
                email: this.email,
                phone_number: this.phoneNumber,
                password: this.password,
                confirm_password: this.confirmPassword,
                type: 'customer',
            }

            axios.post('http://127.0.0.1:8000/api/signup', body)
            .then(response => {
                if(response.data.status == true){
                    console.log('Nice!!! user registered');
                    this.$router.push({name: 'main.login'});
                } else {
                    response.data.message = this.errorMessage
                }
            })
        }
    },
    watch: {
        confirmPassword() {
            (this.password !== this.confirmPassword) ?
                    this.errorMessage = 'Passwords don\'t match' :
                    this.errorMessage = ''
            }
    },

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
