<template>
    <div>
      <h2>LISTA DE CONTATOS</h2>
      <ul>
        <li v-for="contact in contacts" :key="contact.id">
          <div>
            <!-- Mostrar apenas o 'nome do contato' e o botão 'Detalhes', elencando os contatos pelo 'id'-->
            <span>{{ contact.name }}</span> 
            <button @click="detailsContact(contact.id)">Detalhes</button>
            <!-- Adicionar rota para a página de Detalhes do contato -->
          </div>
        </li>
      </ul> 
    </div>
</template>

<script>
    export default {
        name: 'DetailsContactList'
    }
</script>

<style>

</style>