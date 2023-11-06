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
        
        msgArray(){
            return this.filteredContacts[this.activeIndexUser].messages
        },

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
            this.msgArray().push(newmsg);
            this.message = '';

            // received message
            setTimeout(()=> {
                const receivedmsg = {
                    date: '10/01/2020 15:30:55',
                    message: 'ok',
                    status: 'received'
                };
                this.msgArray().push(receivedmsg);    
            }, 1000);
        },

        deleteMsg(index){
            this.msgArray().splice(index, 1)
        },
        
        openSettings(index){
            this.msgArray()[index].settings = !this.msgArray()[index].settings
            console.log(this.msgArray()[index].settings)
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