<template>
    <div class="container h-100 bg-white">
        <!-- <div class="row justify-content-center h-100 pt-5">
            <div class="col-md-9">

                <div class="text-center">
                    <img class="mb-3 small-icon" src="../../assets/images/woman@2x.png" />
                    <h1 class="fs-13 mb-5">Individual / Business</h1>
                </div>

                <div class="row shadow-sm bg-white py-5 px-5 mb-4 rounded-5">
                    <div class="col-md-12 pt-4">
                        <div class="row">
                            <div class="col-md-12 mb-3">
                                <div class="form-group">
                                    <label>Profile Type</label>
                                    <select class="form-control rounded-1 bg-silver">
                                        <option value="individual">Individual</option>
                                        <option value="business">Business</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="form-group">
                                    <label>First Name</label>
                                    <input type="text" class="form-control rounded-1 bg-silver">
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="form-group">
                                    <label>Last Name</label>
                                    <input type="text" class="form-control rounded-1 bg-silver">
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="form-group">
                                    <label>Email</label>
                                    <input type="text" class="form-control rounded-1 bg-silver">
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="form-group">
                                    <label>Phone Number</label>
                                    <input type="text" class="form-control rounded-1 bg-silver">
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="form-group">
                                    <label>Password</label>
                                    <input type="password" class="form-control rounded-1 bg-silver">
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="form-group">
                                    <label>Confirm Password</label>
                                    <input type="password" class="form-control rounded-1 bg-silver">
                                </div>
                            </div>
                        </div>

                        <div class="mt-5 pb-3 text-center">
                            <button class="btn btn-primary btn-lg rounded-0 px-5">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div> -->
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

        <div class="row px-3">
            <div class="col-12 col-lg-12">
                <input type="text" class="form-control mb-3 py-4" id="" placeholder="Name" required>
            </div>
            <div class="col-12 col-lg-12">
                <input type="email" class="form-control mb-3 py-4" id="" placeholder="Email Address" required>
            </div>
            <div class="col-12 col-lg-12">
                <input type="" class="form-control mb-3 py-4" id="" placeholder="Phone Number" required>
            </div>
            <div class="col-12 col-lg-12">
                <div class="has-eye">
                    <i class="mdi mdi-eye form-control-feedback"></i>
                    <input type="text" class="form-control mb-3 py-4" placeholder="Password">
                </div>
            </div>
            <div class="col-12 col-lg-12">
                <input type="" class="form-control mb-3 py-4" id="" placeholder="Confirm Password" required>
            </div>
        </div>

        <div class="row mt-3 p-3">
            <div class="col">
                <button type="submit" class="btn py-3 btn-primary btn-block active">Sign Up</button>
            </div>
        </div>
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

input{
    color: black;
    font-size: 0.8rem;
}

#password + .mdi {
   cursor: pointer;
   pointer-events: all;
 }

 .info{
     color: black;
     font-size: 0.9rem;
 }

 .has-eye .form-control {
    // padding-left: 2.375rem;
    width: 100%;
}

.has-eye .form-control-feedback {
    position: absolute;
    right: 5%;
    top: 6%;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: rgb(139, 139, 139);
}
</style>

<script>
export default {
    methods: {
        changeClass() {

        }
    }
}
</script>
