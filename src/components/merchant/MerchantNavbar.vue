<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white py-4 px-4 align-center">
        <div class="input-group w-50">
            <i class="mdi mdi-magnify pt-2"></i>
            <input type="text" class="form-control hide-outline hide-input" placeholder="Search Deliveries, Order Numbers">
        </div>
        
        <div class="navbar-nav ml-auto">
            <a class="nav-item nav-link" active-class="active" exact :to="{name: 'main.home'}">
                <i class="mdi mdi-bell"></i>
            </a>
        </div>
    </nav>
</template>
