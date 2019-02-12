<template>
    <div class="contact-card rounded mb-3 p-3">
        <div class="row">
            <div class="col-3 col-lg-3">
                <div class="image rounded" :style="{'background-image': 'url('+contactImage+')'}"></div>
            </div>
            <div class="col col-lg-4 align-self-center">
                <div class="contact-name pb-1">
                    {{contactName}}
                </div>
                <div class="contact-number">
                    {{contactNumber}}
                </div>
            </div>
            <div class="col-2 col-lg-5 text-right">
                <div class="text-right">
                    <i class="mdi mdi-dots-vertical"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    props: [
        'contactName',
        'contactNumber',
        'contactImage'
    ],
    data() {
        return {
            // image: "https://www.beweship.com/wp-content/uploads/2017/04/beweship-contact-placeholder.jpg",
        }
    },
    mounted(){
        let contactInfo = JSON.parse(window.localStorage.getItem('contact-info'));
        console.log(contactInfo);
        // this.contact = contactInfo;
    }
    
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

