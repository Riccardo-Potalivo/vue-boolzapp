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
            searchContact: '',
            messageIndex: null
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

        lastMessageData(contact){
            if(contact.messages.length > 0){
                return contact.messages[contact.messages.length - 1].date
            }
            else {
                return ''
            }
        },

        userAccess(){
            if(this.msgArray().length > 0){
                return this.msgArray()[this.msgArray().length - 1].date
            }
            else {
                return ''
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
                date: DateTime.now().setLocale('it').toLocaleString(DateTime.DATETIME_SHORT),
                message: this.message,
                status: 'sent'
            };
            this.msgArray().push(newmsg);
            this.message = '';

            // received message
            setTimeout(()=> {
                const receivedmsg = {
                    date: DateTime.now().setLocale('it').toLocaleString(DateTime.DATETIME_SHORT),
                    message: 'ok',
                    status: 'received'
                };
                this.msgArray().push(receivedmsg);    
            }, 1000);
        },

        deleteMsg(index){
            this.msgArray().splice(index, 1);
            this.messageIndex = null
        },
        
        openSettings(index){
            if(this.messageIndex !== index){
                this.messageIndex = index
            }
            else {
                this.messageIndex = null
            }
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