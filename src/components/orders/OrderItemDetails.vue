<template>
    <div class=" mt-4 container rounded pb-3">
        <div class="row">
            <div class="col">
                <div class="mb-2">Item:</div>
                <div class="detail">A pair of trousers</div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col">
                <div class="mb-2">Pick up Contact:</div>
                <div class="detail">James Donut</div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col">
                <div class="mb-2">Delivery Contact:</div>
                <div class="detail">Jane Wick</div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col">
                <div class="mb-2">Pick up Address:</div>
                <div class="detail">31B Baker's Street, Maryland Crescent.</div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col">
                <div class="mb-2">Delivery Address:</div>
                <div class="detail">2C Obasa close, Oba Akran, Ikeja.</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .container{
        background-color: white;
        border-radius: 0px;
        border: 0.5px solid rgb(209, 208, 208);;

        hr{ margin-bottom: 0.1em auto; }

        .detail{
            font-size: 0.9rem;
            margin-bottom: 0px;
        }

        .col{
            margin-top: 10px;
        }
        .col div:first-of-type{
            margin-bottom: 0.1rem;
            // font-weight: 600;
        }
    }
</style>
