<template>
    <div class="h-screen bg-bg text-text-primary flex flex-col">
        <header class="flex items-center justify-between py-5 px-8">
            <h1>Proggres<span class="text-blue">Track</span></h1>
            <div class="h-11 w-11 bg-gray-400 rounded-full"></div>
        </header>

        <section class="h-full overflow-auto px-8 pt-5 relative pb-20">
            <RouterView></RouterView>
        </section>

        <nav class="bg-item flex items-center justify-around px-8 py-5 rounded-t-[50px]">
            <RouterLink :to="{name : 'home'}" @click="cambiarLink('home')">
                <img :src="seccion=='home' ? homeSelected : home" alt="Inicio">
            </RouterLink>

            <RouterLink :to="{name : 'rutinas'}" @click="cambiarLink('train')">
                <img :src="seccion=='train' ? trainSelected : train " alt="Entrenamiento">
            </RouterLink>
            <RouterLink :to="{name : 'perfil'}" @click="cambiarLink('user')">
                <img :src="seccion=='user' ? userSelected : user" alt="Perfil">
            </RouterLink>
        </nav>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import home from '@/assets/icons/home.svg';
import homeSelected from '@/assets/icons/home_selected.svg';
import train from '@/assets/icons/train.svg';
import trainSelected from '@/assets/icons/train_selected.svg';
import user from '@/assets/icons/user.svg';
import userSelected from '@/assets/icons/user_selected.svg';

const seccion = ref(localStorage.getItem('seccion') || 'home');

const cambiarLink = (link) => {
    seccion.value = link
    localStorage.setItem('seccion', link)
}
</script>