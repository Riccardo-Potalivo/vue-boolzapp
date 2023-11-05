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
            if(contact.messages.length > 0){
                return contact.messages[contact.messages.length - 1].message
            }
            else {
                return 'Non ci sono messaggi'
            }
        },

        selectById(id){
            const index = getIndex(id, this.contacts);
            console.log(index);
            this.activeIndexUser = index
        },

        resetId(){
            // per evitare il blocco nell'aggiornamento dei contatti se l'id attivo è maggiore dell'array filtrato
            this.activeIndexUser = 0
        },

        newMessage(){
            // sent message
            const newmsg = {
                date: '10/01/2020 15:30:55',
                message: this.message,
                status: 'sent'
            };
            this.filteredContacts[this.activeIndexUser].messages.push(newmsg);
            this.message = '';

            // received message
            setTimeout(()=> {
                const receivedmsg = {
                    date: '10/01/2020 15:30:55',
                    message: 'ok',
                    status: 'received'
                };
                this.filteredContacts[this.activeIndexUser].messages.push(receivedmsg);    
            }, 1000);
        },


    },
    
    computed: {
      
        filteredContacts(){
            return this.contacts.filter((contact) => contact.name.toLowerCase().includes(this.searchContact.toLowerCase()))
        }
        
    },

    mounted(){

    }
}).mount('#app');