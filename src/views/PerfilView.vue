<template>
    <div class="bg-item p-4 flex gap-4 rounded-lg">
        <div class="w-20 h-20 bg-gray-400 rounded-full">

        </div>
        <div>
            <h3>Nombre Perfil</h3>
            <p class="text-[#999]">Nombre Apellidos</p>
            <p class="subtext">X años, XX kg</p>
            <p class="link">Editar perfil</p>
        </div>
    </div>

    <div class="mt-6 flex flex-col gap-4">
        <h3>Calendario</h3>
        <div class="bg-item h-56 rounded-lg">

        </div>
        <p class="link">Mostrar más ►</p>
    </div>

    <div class="mt-6 flex flex-col gap-4">
        <div class="flex justify-between items-center">
            <h3>Entrenamientos</h3>
            <select class="link outline-none text-right bg-bg rounded-lg">
                <option value="0">Última semana</option>
                <option value="0">Últimas 2 semanas</option>
                <option value="0">último mes</option>
                <option value="0">últimos 3 meses</option>
            </select>
        </div>

        <div class="flex flex-col gap-1 bg-item w-full rounded-lg py-3 px-8">
            <h4>Nombre Rutina</h4>

            <table class="subtext">
                <tr>
                    <th class="text-left">Ejercicio</th>
                    <th class="text-center">Series</th>
                    <th class="text-right">Peso max.</th>
                </tr>
                <tr>
                    <td class="text-left">Ejercicio 1</td>
                    <td class="text-center">XX</td>
                    <td class="text-right">XXkg</td>
                </tr>
                <tr>
                    <td class="text-left">Ejercicio 2</td>
                    <td class="text-center">XX</td>
                    <td class="text-right">XXkg</td>
                </tr>
                <tr>
                    <td class="text-left">Ejercicio 3</td>
                    <td class="text-center">XX</td>
                    <td class="text-right">XXkg</td>
                </tr>
            </table>

            <p class="link text-xs mt-auto text-center">Ver más</p>
            <div class="flex border-t border-[#1F2E3B] pt-2 gap-4">
                <div><p class="text-white">45min</p><p class="subtext">tiempo</p></div>
                <div><p class="text-white">580kg</p><p class="subtext">volumen</p></div>
            </div>

        </div>
    </div>
</template>

<script setup>
    
</script>