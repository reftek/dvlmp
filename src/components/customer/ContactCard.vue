<template>
    <div>
        <div class="container rounded mb-3 pt-2 pb-2 pl-2">
        <div class="row">
            <div class="col-2">
                <img :src="image" alt="" class="image rounded">
            </div>
            <div class="col ml-4 align-self-center">
                <div class="row contact-name pb-1">Alfred Miller</div>
                <div class="row contact-number"> 07089324817</div>
            </div>
            <div class="col-1 icon pr-4">
                <i class="mdi mdi-dots-vertical"></i>
            </div>
        </div>
    </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            image: "https://www.beweship.com/wp-content/uploads/2017/04/beweship-contact-placeholder.jpg",
        }
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
</style>

