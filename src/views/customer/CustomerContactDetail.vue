<template>
    <div>
        <!-- //Full name phone number altnumber company address -->
        <div class="mt-4 main-container rounded mx-3 pb-4 pt-2 px-3">
            <div class="row">
                <div class="col">
                    <div class="mb-1 bold">Full Name:</div>
                    <div class="detail">{{ contact.name }}</div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col">
                    <div class="mb-1 bold">Phone Number</div>
                    <div class="detail">{{ contact.number }}</div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col">
                    <div class="mb-1 bold">Company:</div>
                    <div class="detail">{{ contact.company }}</div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col">
                    <div class="mb-1 bold">Address:</div>
                    <div class="detail">{{ contact.address }}</div>
                </div>
            </div>
            <hr>
            <div class="row">
                <div class="col">
                    <div class="mb-1 bold">Alternate Number:</div>
                    <div class="detail">{{ contact.alternate_number }}</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    computed: {
        contact() {
            return this.$store.getters.getThisContact;
        }
    },
    mounted() {
        let contactId = this.$route.params.id;
        this.$store.dispatch('retrieveThisContact', contactId)
    }
}
</script>

<style lang="scss" scoped>
.main-container{
    background-color: white;
    border-radius: 0px;
    border: 0.5px solid rgb(209, 208, 208);

    .detail{
        font-size: 0.7rem;
    }

    .col{
        margin-top: 10px;
    }
    .col div:first-of-type{
        margin-bottom: 0.1rem;
        font-weight: 600;
        font-size: 0.8rem;
    }
}
</style>

