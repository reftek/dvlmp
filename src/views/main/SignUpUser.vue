<template>
    <div class="container bg-white h-100">
        <div class="row align-items-center justify-content-center pt-4 px-3">
            <div class="col-9">
                <div class="title-bold">Sign Up</div>
            </div>
            <div class="col-3">
                <div class="user text-center rounded p-1">
                    USER
                </div>
            </div>
        </div>

        <div class="row p-3">
            <div class="col">
                <div class="info mb-4 mt-2">
                    Sign up as a user to start making personal or business delivery requests immediately.  
                </div>
            </div>
        </div>

        <sign-up-user-card />
    </div>
</template>

<style lang="scss" scoped>
.small-icon{
    height: 30px;
}

.title-bold{
    color: blue;
    font-size: 1.7rem;
    font-weight: bold;
}

.user{
    border: 1px solid blue;
    color: blue;
    font-size: 0.7rem;
}

 .info{
     color: black;
     font-size: 0.9rem;
 }
</style>

<script>
import SignUpUserCard from "./../../components/signup/SignUpUserCard.vue";
    
export default {
    components: {
        SignUpUserCard,
    }
}
</script>
