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
        lastMessage(contact){
            return contact.messages[contact.messages.length - 1].message 
        }
    },

    computed: {
        
    },

    mounted(){

    }
}).mount('#app');