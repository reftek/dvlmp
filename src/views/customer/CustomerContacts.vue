<template>
    <div class="p-4">
        <p class="black">Contacts</p>    

        <div class="row justify-content-center">
            <div class="col-6 col-lg-2 col-md-3  pr-1">
                <div class="rounded py-2 blue text-center" @click="gotoNewContact">Add New Contact</div>
            </div>
            <div class="col-6 col-lg-2 col-md-3 pl-1">
                <div class="rounded grey py-2 text-center">Import Contacts</div>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-12 col-lg-4 col-md-6">
                <div class="form-group has-search mt-3">
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="form-control" placeholder="Search Contacts" v-model="searchInput">
                </div>
            </div>
        </div>

        <div v-if="!contacts" class="empty-array">
            No contacts yet!
        </div>

        <div v-if="isLoading">
            <tile :loading="isLoading"></tile>
        </div>


        <div v-if="!searchedContacts">
            Contact not found.
        </div>
       
        <div class="row wrap" v-if="!isLoading">
            <div class="col-12 col-lg-3 col-md-6" v-for="contact in searchedContacts" :key="contact.id">
                <contact-card :contactName="contact.name"
                                :contactId="contact.id"
                                :contactNumber="contact.number"
                                :contactImage="image"/>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import VueSpinners from 'vue-spinners';
import ContactCard from "./../../components/customer/ContactCard";

export default {
    components: {
        ContactCard
    },
    data() {
        return {
            searchInput: '',
           image: "https://www.beweship.com/wp-content/uploads/2017/04/beweship-contact-placeholder.jpg",
           search: "https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4tcF52UnWX4bU9iODkyWXIwN3c%2Fusability-bidirectionality-guidelines-whennot5.png",
           isSearchEmpty: false,
        }
    },
    computed: {
        isLoading() {
            return this.$store.getters.getIsLoadingStatus;
        },
        contacts() {
            return this.$store.getters.getContacts;
        },
        searchedContacts(){
            if(this.searchInput == ''){
                this.isSearchEmpty =false;
                return this.contacts;
            }

            let matchedContacts = [];

            this.contacts.forEach(contact => {
                let name = contact.name.toLowerCase();
                let input = this.searchInput.toLowerCase();

                if(name.search(input) > -1){
                    // this.isSearchEmpty = !this.isSearchEmpty;
                    matchedContacts.push(contact);
                } else { 
                    return this.isSearchEmpty = !this.isSearchEmpty;
                }
            });

            return matchedContacts;
        }
    },
    methods: {
        gotoNewContact(){
            this.$router.push({name: "customers.contacts.new"});
        }
    },
    watch: {
        searchedContacts(){
            
        }
    },
    mounted(){
        this.$store.dispatch('retrieveContacts');
    },
}
</script>

<style lang="scss" scoped>
.container{
    background-color: white;
    width: 100%;
    border: 0.4px solid #C4C4C4;
    
    .contact-name{
        font-size: 0.8rem;
        color: black;
        font-weight: bold;
    }

    .contact-number{
        font-size: 0.65rem;
        color: black;
    }

    .image{
        height: 55px;
    }

    .mdi::before{
        vertical-align: inherit;
    }
}

.blue{
    font-size: 0.8rem;
    background-color: blue;
    color: white;
    width: 100%;
}

input{
    width: 91.5%;
    font-size: 0.8rem;
}

.has-search .form-control {
    padding-left: 2.375rem;
    width: 100%;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: rgb(139, 139, 139);
}

.grey{
    background-color: #79818a;
    border-color: #79818a;
    color: white;
    font-size: 0.8rem;
    width: 100%;
}

.black{
    color: black;
    font-size: 1.5rem;
    font-weight: bold;
}

.mine{
    float: right;
}

.empty-array{
    font-size: 1rem;
    color: black;
}
</style>




