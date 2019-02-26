<template>
    <div class="contact-card rounded mb-3 p-3" @click="goToContact(contactId)">
        <div class="row">
            <div class="col-3">
                <div class="image rounded" :style="{'background-image': 'url('+contactImage+')'}"></div>
            </div>
            <div class="col col-lg-4 align-self-center">
                <div class="contact-name pb-1">
                    {{ contactName }}
                </div>
                <div class="contact-number">
                    {{ contactNumber }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: [
        'contactId',
        'contactName',
        'contactNumber',
        'contactImage'
    ],
    methods: {
        goToContact(contactId) {
            this.$router.push({ name: 'customers.contacts.detail', params: {id:contactId}});
        }
    },    
}
</script>

<style lang="scss" scoped>
.contact-card{
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
        min-height: 55px;
        background-position: center, center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .mdi::before{
        vertical-align: inherit;
    }
}
</style>

