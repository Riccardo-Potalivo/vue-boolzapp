"use strict";

// import {} from './utility.js'
import {contacts} from './data.js'
import {getIndex} from './utility.js';

const {createApp} = Vue

createApp({
    data(){
        return {
            contacts: contacts,
            indexUser: 0
        }
    },

    methods: {
        lastMessage(contact){
            return contact.messages[contact.messages.length - 1].message 
        },

        selectById(id){
            const index = getIndex(id, this.contacts);
            console.log(index);
            this.indexUser = index
        },

    },
    
    computed: {
        msgStatusClass(messages){
            return {
                'msg_sent' : messages.status === 'sent', 'msg_received' : messages.status === 'received'
            }
        },


        
        
    },

    mounted(){

    }
}).mount('#app');