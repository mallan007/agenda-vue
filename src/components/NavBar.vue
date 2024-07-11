<template>
    <div id="nav">
     <router-link to="/">Home</router-link> <!-- Criar a Lista de Contatos aqui, já como página inicial, com botão de Exibir Detalhes (v-show com todos os atributos do formulário)-->
     <router-link to="/details">Detalhes do Contato</router-link> <!-- Aqui será a parte de Detalhes, com botões de Editar e Cancelar (Voltar -> Home)-->
     <router-link to="/add-contact">Adicionar Contato</router-link> <!-- Aqui será a parte de Adicionar Contatos, com botões de Salvar e Cancelar (Voltar->Home e não guardar infos)-->
    </div>
   </template>

   <script>


    </script>
    
    <style scoped>

    </style>