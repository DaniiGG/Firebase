<script setup>
import { useCollection } from 'vuefire'
import { collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { useFirestore } from 'vuefire'
import { ref, defineProps } from 'vue';


let db = useFirestore();
const todos = useCollection(collection(db, 'prueba'))


function eliminarNota(id) {
  console.log("Eliminando nota con id =", id);
  deleteDoc(doc(db, 'prueba', id));
}

function subirPrioridadNota(id, prioridad) {
  const actualizar = doc(db, "prueba", id);
if(prioridad=="media"){

    updateDoc(actualizar, {

    prioridad: "alta"

})      

}else if(prioridad=="alta"){

    updateDoc(actualizar, {

        prioridad: "baja"
})  
}else{

updateDoc(actualizar, {

    prioridad: "media"
})  
}
  
}

function marcarHecho(todo) {
  const actualizar = doc(db, 'prueba', todo.id);
  updateDoc(actualizar, {
    hecho: !todo.hecho
  });
}

</script>

<template>
   <ul>
    <li v-for="todo in todos" :key="todo.id">
      <input type="checkbox" :id="'check-' + todo.id" :checked="todo.hecho" @change="marcarHecho(todo)" />
      <label :for="'check-' + todo.id">
        <span :style="{ 'text-decoration': todo.hecho ? 'line-through' : 'none' }">{{ todo.titulo }} - {{ todo.prioridad }} - {{ todo.fecha }}</span>
      </label>
      <button @click="eliminarNota(todo.id)">Eliminar</button>
      <button @click="subirPrioridadNota(todo.id, todo.prioridad)">Subir prioridad</button>
    </li>
  </ul>
</template>