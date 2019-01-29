<template>

    <div>
    <p class="black">Contacts</p>    

    <div class="row btn-div">
        <button class="btn py-2 mr-1 btn-primary active" @click="gotoNewContact">Add New Contact</button>
        <button class="btn py-2 btn-secondary active">Import Contacts</button>
    </div>

    <div class="form-group has-search mt-3">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" class="form-control" placeholder="Search Contacts">
    </div>

    <contact-card v-for="item in 8" :key="item"/>
    </div>

</template>

<style lang="scss" scoped>
.container{
    background-color: white;
    width: 100%;
    border: 0.4px solid #C4C4C4;

    //  .row{
    //     align-items: center;
    // }
    
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

.btn-div{
    margin-left: 1.5px;
}

button{
    height: 45px;
    width: 160px;
    font-size: 0.8rem;
}

input{
    width: 91.5%;
    font-size: 0.8rem;
}

.has-search .form-control {
    padding-left: 2.375rem;
    width: 327px;
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

.btn-secondary:not(:disabled):not(.disabled).active{
    background-color: #79818a;
    border-color: #79818a;
}

.black{
    color: black;
    font-size: 1.5rem;
    font-weight: bold;
}
</style>

<script>
import ContactCard from "./../../components/customer/ContactCard";
export default {
    components: {
        ContactCard
    },
    data() {
        return {
           image: "https://www.beweship.com/wp-content/uploads/2017/04/beweship-contact-placeholder.jpg",
           search: "https://storage.googleapis.com/spec-host-backup/mio-design%2Fassets%2F0B4tcF52UnWX4bU9iODkyWXIwN3c%2Fusability-bidirectionality-guidelines-whennot5.png"
        }
    },
    methods: {
        gotoNewContact(){
            this.$router.push({name: "customers.contacts.new"});
        }
    }
}
</script>


