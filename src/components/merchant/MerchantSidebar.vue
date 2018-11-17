<template>
    <nav id="sidebar" class="bg-dark text-white">
        <router-link tag="div" class="pointer mt-5 fs-13 font-weight-bold pl-4" :to="{name: 'main.home'}">
            DVLMP
        </router-link>
    
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
            <router-link class="nav-side-link py-3 my-2" active-class="active" exact :to="{name: 'merchants.settings'}">
                <i class="mdi mdi-settings-outline mr-3 fs-1"></i> Settings
            </router-link>
        </div>
    </nav>
</template>


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
</style>