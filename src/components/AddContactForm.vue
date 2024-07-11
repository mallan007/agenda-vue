<template>
<div>
    <p> Adicionar Novo Contato</p>
    <div>
        <form id="input-container">
            <label for="nome">Nome</label>
            <input type="text" id="name" v-model="nome" placeholder="Nome"> <br>
            <label for="nome">Telefone</label>
            <input type="text" id="phone-number" v-model="phoneNumber" placeholder="Telefone"> <br>
            <label for="endereco">Endereço</label>
            <input type="text" id="address" v-model="address" placeholder="Endereço"> <br>
            <label for="email">E-mail</label>
            <input type="text" id="email" v-model="email" placeholder="E-mail"> <br>            
        </form>
    </div>
</div>
</template>

<script>
    export default{
        return {
            name: 'AddContactForm'
        }
    }
</script>

<style>

</style>