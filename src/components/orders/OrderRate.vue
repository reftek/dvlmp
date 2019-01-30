<template>
    <div class="container mt-4 pt-2 pb-2 rounded">
        <div class="row">
            <div class="col">
                <div class="text-center rate my-2">
                    RATE THIS SERVICE
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="text-center icoon rating mt-2 mb-1 ml-2">
                    <i class="mdi mdi-32px mdi-star small"></i>
                    <i class="mdi mdi-32px mdi-star small"></i> 
                    <i class="mdi mdi-32px mdi-star small"></i>
                    <i class="mdi mdi-32px mdi-star small"></i>
                    <i class="mdi mdi-32px mdi-star-outline small"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped> 
.container{
    background-color: white;
    border: 0.5px solid rgb(209, 208, 208);;

    .rating{
        color: blue;
        
        .mdi::before {
            font-size: 37px;
        }
    }

    .rate{
        color: black;
        font-weight: 600;
        font-size: 0.75rem;
    }
}

.icoon{
    letter-spacing: 1.2rem;
}
</style>
