<template>
    <div class="p-4">
    <p class="black">Add Contact</p>

    <div class="main-container rounded mb-3">
        <div class="row mb-3">
            <div class="col-12">
                <form>
                    <div class="row">
                        <div class="col-12 col-lg-6 mb-3">
                            <input type="text" v-model="fullName" class="form-control" placeholder="Full Name" required>
                        </div>
                        <div class="col-12 col-lg-6 mb-3">
                            <input type="text" v-model="phoneNumber" class="form-control" placeholder="Phone Number" required>
                        </div>
                        <div class="col-12 col-lg-6 mb-3">
                            <input type="text" v-model="alternatePhoneNumber" class="form-control" placeholder="Alternate Phone Number" required>
                        </div>
                        <div class="col-12 col-lg-6 mb-3">
                            <input type="text" v-model="company" class="form-control" placeholder="Company" required>
                        </div>
                        <div class="col-12 col-lg-12 mb-3">
                            <textarea name="" v-model="address" cols="30" rows="4" class="form-control" placeholder="Address"></textarea>
                        </div>
                    </div>
                </form>
            </div>
        </div>

        <div class="row mt-2 justify-content-center " v-if="isErrorMessage">
            <div class="col">
                <div class="alert alert-danger" v-for="error in isErrorMessage" :key="error.id">
                    {{ error[0] }}
                </div>
            </div>
        </div>

        <div class="row justify-content-center mt-2 " >
            <div class="col-12 col-md-3">
                <button type="submit" class="btn py-2 btn-primary btn-block active" @click="addNewContact">Save Contact</button>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import Toasted from 'vue-toasted';
import axios from 'axios';

export default {
    data() {
        return {
            fullName: '',
            phoneNumber: '',
            alternatePhoneNumber: '',
            company: '',
            address: '',
            isErrorMessage: ''
        }
    },
    methods: {
        addNewContact(){
            var body = {
                name: this.fullName,
                number: this.phoneNumber,
                alternate_number: this.alternatePhoneNumber,
                company: this.company,
                address: this.address,
            }

            axios.post('http://127.0.0.1:8000/api/contact', body)
                .then(response => {
                    let result = response.data
                    if(result.status === true) {
                        console.log('New contact added');

                        let toast = this.$toasted.show("Contact Added Successfully!", { 
                            theme: "toasted-primary", 
                            position: "top-right", 
                            duration : 5000
                        });

                        this.$router.push({ name: 'customers.contacts'});
                    }
                }).catch(error => {
                    if(error.response.status === 422) {
                        console.log(error.response.data.errors);
                        this.isErrorMessage = error.response.data.errors; 
                    }
                })
        }
    },
    watch: {
        fullName() {
            this.isErrorMessage = '';
        },
        phoneNumber() {
            this.isErrorMessage = '';
        },
        alternatePhoneNumber() {
            this.isErrorMessage = '';
        },
        company() {
            this.isErrorMessage = '';
        },
        address() {
            this.isErrorMessage = '';
        }
    },
}
</script>


<style lang="scss" scoped>
.main-container{
    input{
        font-size: 0.85rem;
    }

    textarea{
        font-size: 0.85rem;
    }
}

.black{
    color: black;
    font-weight: bold;
    font-size: 1.4rem;
}

button{
    font-size: 0.9rem;
}
</style>

