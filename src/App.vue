<template>
  <div id="app">
    <to-do-item>
    </to-do-item>
</div>

  
</template>

<script>
import ToDoItem from "./components/ToDoItem.vue";
import "./styles/estilos.css";

export default {
  name: 'App',
  components: {
    ToDoItem,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
