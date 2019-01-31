<template>
    <div class="main-container mt-4 rounded-top px-3">
        <div class="row">
            <div class="col-12">
                <div class="py-3 update">Updates:</div>
            </div>
            <div class="py-3 detail pl-3">Package picked up by 12:30pm</div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.main-container{
        background-color: white;
        border: 0.5px solid rgb(209, 208, 208);

        .update{
            font-size: 0.8rem;
            font-weight: bold;
        }

        .detail{
            width: 100%;
            font-size: 0.7rem;
            margin-bottom: 0px;
            background-color: #f5f5f5;
            background-size: cover;
            border-top: 0.5px solid rgb(216, 215, 215);
            border-bottom: 0.5px solid rgb(216, 215, 215);
    }
}
</style>
