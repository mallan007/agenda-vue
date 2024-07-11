<template>
    <div>
      <h1>Agenda</h1>
      <ul>
        <li v-for="(contact, index) in contacts" :key="contact.id">
          {{ contact.id }}. {{ contact.name }}
          <button @click="editContact(contact)">Edit</button>
        </li>
      </ul>
      <EditContactForm v-if="editing" :contact="editingContact" @save="saveContact" @cancel="cancelEdit" />
    </div>
  </template>
  
  <script lang="ts">
  import EditContactForm from './EditContactForm.vue'
  import agenda from '../agenda.json'
  
  export default {
    components: { EditContactForm },
    data() {
      return {
        contacts: agenda,
        editing: false,
        editingContact: null
      }
    },
    methods: {
      editContact(contact) {
        this.editing = true
        this.editingContact = contact
      },
      saveContact(contact) {
        const index = this.contacts.findIndex(c => c.id === contact.id)
        this.contacts.splice(index, 1, contact)
        this.editing = false
      },
      cancelEdit() {
        this.editing = false
      }
    }
  }
  </script>
  
  <style scoped>
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li {
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  
  li:last-child {
    border-bottom: none;
  }
  
  button {
    margin-left: 10px;
    background-color: #4CAF50;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #3e8e41;
  }
  </style>