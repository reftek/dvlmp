<template>
    <nav id="sidebar" class="bg-primary text-white">
        <router-link tag="div" class="pointer mt-5 fs-13 font-weight-bold pl-4" :to="{name: 'main.home'}">
            DVLMP
        </router-link>
    
        <div class="mt-5">
            <router-link class="nav-side-link py-3 my-2" active-class="active" exact :to="{name: 'customers.dashboard'}">
                <i class="mdi mdi-monitor-dashboard mr-3 fs-1"></i> Dashboard
            </router-link>
            <router-link class="nav-side-link py-3 my-2" active-class="active" exact :to="{name: 'customers.contacts'}">
                <i class="mdi mdi-contacts mr-3 fs-1"></i> Contacts
            </router-link>
            <router-link class="nav-side-link py-3 my-2" active-class="active" :to="{name: 'customers.orders'}">
                <i class="mdi mdi-package-variant mr-3 fs-1"></i> Order History
            </router-link>
            <router-link class="nav-side-link py-3 my-2" active-class="active" exact :to="{name: 'customers.wallet'}">
                <i class="mdi mdi-wallet-outline mr-3 fs-1"></i> Wallet
            </router-link>
            <router-link class="nav-side-link py-3 my-2" active-class="active" exact :to="{name: 'customers.stats'}">
                <i class="mdi mdi-finance mr-3 fs-1"></i> Statistics
            </router-link>
            <router-link class="nav-side-link py-3 my-2" active-class="active" exact :to="{name: 'customers.settings'}">
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
        // max-width: 290px;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        .nav-side-link {
            padding-left: 40px;
            display: block;
            text-decoration: none;
            color: black;
            &:hover,
            &.active {
                background-color: #3D4EE1;
                color: white;
                cursor: pointer;
            }
        }
    }
    
    #sidebar.active {
        margin-left: -250px;
    }
</style>