<template>
  <div>
    <h2>Editar Contato</h2>
    <form @submit.prevent="saveContact">
      <div>
        <label for="name">Nome:</label>
        <input type="text" id="name" v-model="contact.name" />
      </div>
      <div>
        <label for="address">Endereço</label>
        <input type="text" id="address" v-model="contact.address" />
      </div>
      <div>
        <label for="phone">Número do Telefone:</label>
        <input type="tel" id="phone" v-model="contact.phone" />
      </div>
      <div>
        <label for="email">E-mail:</label>
        <input type="email" id="email" v-model="contact.email" />
      </div>
      <button type="submit">Salvar</button>
      <button type="button" @click="$emit('cancel')">Cancelar</button>
    </form>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    contact: {
      type: Object,
      required: true
    }
  },
  methods: {
    saveContact() {
      this.$emit('save', this.contact)
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

label {
  margin-bottom: 10px;
}

input {
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
}

button[type="submit"] {
  background-color: #4CAF50;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

