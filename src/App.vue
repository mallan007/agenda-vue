<template>
  <Navbar />
  <router-view />
  <FooTer />
  <router-view />
  <HomeView/>
  <router-view />
  <DetailsContactList />
  <router-view />
  <EditContactForm />
  <router-view />
  <AddContactForm />
  <router-view />
  
 </template>
 
 <script>
 import Navbar from './components/Navbar.vue';
 import FooTer from './components/FooTer.vue';
 import HomeView from './components/HomeView.vue';
 import DetailsContactList from './components/DetailsContactList.vue';
 import EditContactForm from './components/EditContactForm.vue';
 import AddContactForm from './components/AddContactForm.vue';

 
 export default {
     components: {
       Navbar,
       FooTer,
       HomeView,
       DetailsContactList,
       EditContactForm,
       AddContactForm
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
