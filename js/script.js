"use strict";

// import {} from './utility.js'
import {contacts} from './data.js'

const {createApp} = Vue

createApp({
    data(){
        return {
            contacts: contacts,
        }
    },

    methods: {

    },

    computed: {
        
    },

    mounted(){

    }
}).mount('#app');