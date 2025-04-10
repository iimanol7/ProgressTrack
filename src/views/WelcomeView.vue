<template>
    <h1>WELCOME!</h1>
    <button @click="()=>router.push('/inicio')">Inicio</button>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter(); 

</script>