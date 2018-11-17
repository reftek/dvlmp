<template>
    <div class="container h-100">
        <div class="row justify-content-center align-items-center h-100">
            <div class="col-md-8 text-center">
                <h1 class="text-primary">Home Page</h1>
                <router-link class="mx-5" :to="{name: 'merchants.dashboard'}">Merchant Dashboard</router-link>

                <router-link class="mx-5" :to="{name: 'customers.dashboard'}">Customer Dashboard</router-link>
            </div>
        </div>
    </div>
</template>