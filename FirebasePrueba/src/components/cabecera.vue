<script setup>
import { useCollection } from 'vuefire'
import { collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { useFirestore } from 'vuefire'
import { ref, defineEmits } from 'vue';


let db = useFirestore();
const todos = useCollection(collection(db, 'prueba'))

let contenidonota = "";

function altanota() {
    const fechaActual = new Date().toLocaleTimeString();
    if (contenidonota !== ''){
  addDoc(collection(db, "prueba"), {
    titulo: contenidonota,
    prioridad: "baja",
    fecha: fechaActual
  });
}
contenidonota.value = '';
}

function contarTareasPendientes() {
  if (!todos.value) return 0; // Asegurarse de que todos.value exista antes de operar con él
  const tareasPendientes = todos.value.filter(todo => !todo.hecho).length;
  return tareasPendientes;
}
</script>

<template>
    <h1>Cabecera</h1>
    <input type="text" v-model="contenidonota"><button @click="altanota">Agregar</button>
    <p>Tienes {{ contarTareasPendientes() }} tareas pendientes de {{ todos.length }}</p>
    
</template>


<style scoped>
.active {
  background-color:rgb(66, 121, 121);
  color: white; 
}
</style>