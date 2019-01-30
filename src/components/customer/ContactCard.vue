<template>
    <div class="container rounded mb-3 pt-2 pb-2">
        <div class="row">
            <div class="col-3">
                <div class="image rounded" :style="{'background-image': 'url('+image+')'}"></div>
            </div>
            <div class="col align-self-center">
                <div class="contact-name pb-1">
                    Alfred Miller
                </div>
                <div class="contact-number">
                    07089324817
                </div>
            </div>
            <div class="col-1">
                <div class="icon">
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
        min-height: 55px;
        background-position: center, center;
        background-size: cover;
        background-repeat: no-repeat;
    }

    .mdi::before{
        vertical-align: inherit;
    }
}

.icon{
    position: relative;
    right: 8px;
}
</style>

