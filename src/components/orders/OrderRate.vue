<template>
    <div class="flex container mt-4 pt-2 pb-2 rounded">
        <div class="row">
            <div class="col text-center rate">
                <div class="text-center mb-2">RATE THIS SERVICE</div>
            </div>
        </div>
        <div class="row rating mt-2 mb-1">
            <div class="col text-center">
                <i class="mdi mdi-32px mdi-star small icon-blue star-icon"></i> &nbsp;
                <i class="mdi mdi-32px mdi-star small icon-blue star-icon"></i>  &nbsp;
                <i class="mdi mdi-32px mdi-star small icon-blue star-icon"></i> &nbsp;
                <i class="mdi mdi-32px mdi-star small icon-blue star-icon"></i> &nbsp;
                <i class="mdi mdi-32px mdi-star-outline small icon-blue star-icon"></i>
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
            .star-icon{
                margin-right: 4px;
                margin-left: 4px;
            }
            .mdi::before {
                font-size: 40px;
            }
        }

        .rate{
            color: black;
            font-weight: 600;
            font-size: 0.9rem;
        }
    }
</style>
