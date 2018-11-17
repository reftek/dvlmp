<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
        <a class="navbar-brand text-primary ml-5" href="#">DVLMP</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
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
