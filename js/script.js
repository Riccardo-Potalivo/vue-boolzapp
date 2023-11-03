"use strict";

var DateTime = luxon.DateTime;

// import {} from './utility.js'
import {contacts} from './data.js';
import {getIndex} from './utility.js';
import {getRndNumber} from './utility.js';

const {createApp} = Vue

createApp({
    data(){
        return {
            contacts: contacts,
            activeIndexUser: 0,
            message: '',
            searchContact: ''
        }
    },

    methods: {
        lastMessage(contact){
            return contact.messages[contact.messages.length - 1].message 
        },

        selectById(id){
            const index = getIndex(id, this.contacts);
            console.log(index);
            this.activeIndexUser = index
        },

        newMessage(){
            // sendt message
            const newmsg = {
                date: '10/01/2020 15:30:55',
                message: this.message,
                status: 'sent'
            };
            this.contacts[this.activeIndexUser].messages.push(newmsg);
            this.message = '';

            // received message
            setTimeout(()=> {
                const receivedmsg = {
                    date: '10/01/2020 15:30:55',
                    message: 'ok',
                    status: 'received'
                };
                this.contacts[this.activeIndexUser].messages.push(receivedmsg);    
            }, 1000);
        },

        filteredContacts(){
            console.log(this.searchContact)
            console.log(this.contacts.filter((contact) => contact.name.toLowerCase().includes(this.searchContact.toLowerCase())))
            return this.contacts.filter((contact) => contact.name.toLowerCase().includes(this.searchContact.toLowerCase()))
        }

    },
    
    computed: {
        msgStatusClass(messages){
            return {
                'msg_sent' : messages.status === 'sent', 'msg_received' : messages.status === 'received'
            }
        },

        filteredContacts(){
            return this.contacts.filter((contact) => contact.name.toLowerCase().includes(this.searchContact.toLowerCase()))
        }
        
        
    },

    mounted(){

    }
}).mount('#app');