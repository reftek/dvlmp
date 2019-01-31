<template>
    <div class="p-4">
    <p class="black">Add Contact</p>

    <div class="main-container rounded mb-3">
        <div class="row mb-3">
            <div class="col-12">
                <form>
                    <div class="row">
                        <div class="col-12 col-lg-6 mb-3">
                            <input type="text" class="form-control" placeholder="Full Name" required>
                        </div>
                        <div class="col-12 col-lg-6 mb-3">
                            <input type="text" class="form-control" placeholder="Phone Number" required>
                        </div>
                        <div class="col-12 col-lg-6 mb-3">
                            <input type="text" class="form-control" placeholder="Alternate Phone Number" required>
                        </div>
                        <div class="col-12 col-lg-6 mb-3">
                            <input type="text" class="form-control" placeholder="Company" required>
                        </div>
                        <div class="col-12 col-lg-12 mb-3">
                            <textarea name="" id="" cols="30" rows="4" class="form-control" placeholder="Address"></textarea>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>

        <div class="row justify-content-center mt-2 " >
            <div class="col-12 col-lg-3">
                <button type="submit" class="btn py-2 btn-primary btn-block active">Save Contact</button>
            </div>
        </div>
    </div>
    </div>
</template>

<style lang="scss" scoped>
.main-container{
    input{
        font-size: 0.85rem;
    }

    textarea{
        font-size: 0.85rem;
    }
}

.black{
    color: black;
    font-weight: bold;
    font-size: 1.4rem;
}

button{
    font-size: 0.9rem;
}
</style>

