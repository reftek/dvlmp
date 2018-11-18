<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">

                <div class="fs-2 mb-3">Dashboard</div>
                    <div class="d-flex border bg-light border mb-5 rounded-1">
                        <div class="p-3 text-white bg-primary border">
                            <i class="mdi mdi-alarm-light"></i>
                        </div>
                        <div class="p-3 flex-grow-1 fs-12">
                            You have <span class="font-weight-bold text-success">12</span> new delivery requests
                        </div>
                        <div class="p-3 bg-light">
                            <a href="#">View All</a>
                        </div>
                    </div>
                
                    <div class="mb-2">Recent Deliveries</div>
                
                    <div class="table-responsive bg-light border p-4">
                        <table class="table mb-0 table-borderless">
                            <thead>
                                <tr class="border-bottom">
                                    <th scope="col">#</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Pick Up</th>
                                    <th scope="col">Delivery</th>
                                    <th scope="col">Merchant</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Time</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(item, index) in 5" :key="index" class="border-bottom">
                                    <th scope="row">{{item+1}}</th>
                                    <td>A Pair of shoes</td>
                                    <td>Maryland</td>
                                    <td>Apapa</td>
                                    <td>GAP Deliveries</td>
                                    <td>
                                        <i class="mdi mdi-circle text-success fs-1"></i>
                                        In Transit
                                    </td>
                                    <td>
                                        <button class="btn btn-sm btn-primary">View Details</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

            </div>
        </div>
    </div>
</template>
