<template>
    <nav id="sidebar" class="bg-dark text-white">
        <div class="pad-left mt-5 ">
            <div class="row align-items-center">
                <div class="col-3 ">
                    <div class="profile-pic" :style="{'background-image': 'url('+userImage+')'}">
                    </div>
                </div>
                <div class="col">
                    <div class="profile-name">
                    {{ userName }} 
                    </div>
                </div>
            </div>
        </div>
    
        <div class="mt-5">
            <router-link class="nav-side-link py-3 my-2" active-class="active" exact :to="{name: 'merchants.dashboard'}">
                <i class="mdi mdi-monitor-dashboard mr-3 fs-1"></i> Dashboard
            </router-link>
            <router-link class="nav-side-link py-3 my-2" active-class="active" exact :to="{name: 'merchants.requests'}">
                <i class="mdi mdi-alarm-light mr-3 fs-1"></i> Requests
            </router-link>
            <router-link class="nav-side-link py-3 my-2" active-class="active" exact :to="{name: 'merchants.orders'}">
                <i class="mdi mdi-package-variant mr-3 fs-1"></i> Order History
            </router-link>
            <router-link class="nav-side-link py-3 my-2" active-class="active" exact :to="{name: 'merchants.payments'}">
                <i class="mdi mdi-checkbook mr-3 fs-1"></i> Payment History
            </router-link>
            <router-link class="nav-side-link py-3 my-2" active-class="active" exact :to="{name: 'merchants.stats'}">
                <i class="mdi mdi-finance mr-3 fs-1"></i> Statistics
            </router-link>
            <router-link class="nav-side-link py-3 my-2" active-class="active" exact :to="{name: 'merchants.zones'}">
                <i class="mdi mdi-earth mr-3 fs-1"></i> Delivery Zones
            </router-link>
            <div class="nav-side-link py-3 my-2" @click="isActive = !isActive">
                <i class="mdi mdi-settings-outline mr-3 fs-1"></i> Settings
            </div>
            <div v-if="isActive" class="ml-5 font-weight-light">
                <router-link class="nav-side-link py-3 my-2" exact :to="{name: 'merchants.settings'}">
                    Profile & Security
                </router-link>
                <router-link class="nav-side-link py-3 my-2" exact :to="{name: 'merchants.settings'}">
                    Payments
                </router-link>
            </div>
            <div class="nav-side-link py-3 my-2" @click="logout">
                <i class="mdi mdi-logout-variant mr-3 fs-1"></i> Log Out
            </div>
        </div>
    </nav>
</template>

<script>
import axios from 'axios';
export default {
    props: [
        'userImage',
        'userName',
        'isActive',
       
    ],
    data() {
        return {
            isLoggedIn: false,
        }
    },
    methods: {
        logout() {
            this.isLoggedIn = !this.isLoggedIn;

            console.log(this.isLoggedIn);

            window.localStorage.removeItem('dvlmp-token');
            window.localStorage.removeItem('user-info');

            this.$router.push({ name: 'main.home'});
        }
    },
    watch: {
        isLoggedIn() {
            (this.isLoggedIn === true) ? console.log('still logged in') : this.$router.push({ name: 'main.home'})
        }
    }
}
</script>



<style lang="scss" scoped>
    @import "./../../assets/scss/partials/_colors.scss";
    .wrapper {
        display: flex;
        width: 100%;
        align-items: stretch;
    }
    
    #sidebar {
        min-width: 290px;
        max-width: 290px;
        min-height: 100vh;
        .nav-side-link {
            padding-left: 40px;
            display: block;
            text-decoration: none;
            color: white;
            &:hover,
            &.active {
                background-color: $primary-color;
                cursor: pointer;
            }
        }
    }
    
    #sidebar.active {
        margin-left: -250px;
    }

    .pad-left{
    padding-left: 25px;
}

.profile-pic{
    background-position: center, center;
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 50px;
    min-width: 50px;
    border-radius: 50%;
    
}

.profile-name{
    position: relative;
    right: 1rem;
    font-weight: bold;
    font-size: 0.8rem;
}
</style>