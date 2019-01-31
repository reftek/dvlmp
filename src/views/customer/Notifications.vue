<template>
    <div>
        <div class="main-container" v-for="item in 4" :key="item">
            <div class="row py-4">
                <div class="col-1 pr-5">
                    <i class="mdi mdi-bell"></i>
                </div>
                <div class="col">
                    <div class="title-notify mb-2">
                        Portal Deliveries updated your order status
                    </div>
                    <div class="detail-notify">
                        Your order has been delivered
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.main-container{
    border: 0.5px solid #EFEFEF;
    background-color: white;
}

.container:hover{
    background-color: #DDE0F9;
}

.title-notify{
    font-size: 0.7rem;
    color: black;
}

.detail-notify{
    font-size: 0.6rem;
    color: black;
}

.mdi::before{
    position: relative;
    right: -10px;
}
</style>
