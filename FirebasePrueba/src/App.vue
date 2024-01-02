<script setup>
import { useCollection } from 'vuefire'
import { collection, addDoc, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { useFirestore } from 'vuefire'

import Cabecera from './components/cabecera.vue';
import Cuerpo from './components/cuerpo.vue';
</script>

<template>
   <header>
        <div class="wrapper">
            <Cabecera/>
            <Cuerpo/>
        </div>
    </header>
</template>
