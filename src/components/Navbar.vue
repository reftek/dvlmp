<template>
    <nav class="navbar navbar-expand-lg navbar-light py-3">
        <router-link class="navbar-brand text-primary" :to="{name: 'main.home'}">
            <i class="mdi mdi-apple-keyboard-control"></i>
        </router-link>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mr-5" id="navbarNavAltMarkup">
            <div class="navbar-nav ml-auto">
                <router-link class="nav-item nav-link" active-class="active" exact :to="{name: 'main.home'}">Home</router-link>
                <router-link class="nav-item nav-link" active-class="active" exact :to="{name: 'main.about'}">About Us</router-link>
                <router-link class="nav-item nav-link" active-class="active" exact :to="{name: 'main.how-it-works'}">How It Works</router-link>
                <router-link class="nav-item nav-link" active-class="active" exact :to="{name: 'main.merchants'}">Merchants</router-link>
                <router-link class="nav-item nav-link" active-class="active" exact :to="{name: 'main.faq'}">FAQs</router-link>
                <router-link class="nav-item nav-link main-button px-4" :to="{name: 'main.login'}">Login</router-link>
                <router-link class="nav-item nav-link main-button px-4" :to="{name: 'main.signup'}">Sign Up</router-link>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
nav{
    background-color: transparent;
    z-index: 100;
}
.navbar-light .navbar-toggler {
    border: none;
    color: blue !important;
}

.navbar-light .navbar-toggler-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(0,0,225, 1)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
}

.mdi::before{
    transform: rotate(-90deg);
}
</style>
