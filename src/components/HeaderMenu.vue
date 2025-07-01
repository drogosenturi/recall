<script>
export default {
    data() {
        return {
            isMobile: window.innerWidth < 768,
            isActive: false
        }
    }
}
</script>
<template>
    <router-link to="/" class="z-10">
        <img v-if="isMobile" alt="re:call" src="../assets/mobile-pink1.gif" class="w-40" />
        <img v-if="!isMobile" alt="re:call" src="../assets/recall-fuzz-gray.gif" class="w-120" />

    </router-link>
    <nav class="grid grid-flow-dense grid-rows-1 grid-cols-2 group font-bold text-4xl">
        <img v-if="isMobile" 
            @click="isActive = !isActive" 
            src="../assets/marshall_knob_gr.png" 
            class="rotate-55 size-18" 
            :class="isActive ? 'duration-500 rotate-340 ': 'rotate-55 duration-500'" 
        />
        <img v-if="!isMobile"
            src="../assets/marshall_knob_gr.png" 
            class="rotate-55 size-18 duration-500 group-hover:rotate-340"
        />
        <router-link to="/music" v-if="isMobile" 
            :class="isActive ? 'duration-600 text-sky-100 text-shadow-black text-shadow-md' : 'duration-600 text-transparent'">
            Music
        </router-link>
        <router-link to="/music" v-if="!isMobile" 
            class="text-transparent duration-600 group-hover:text-sky-100 group-hover:text-shadow-black group-hover:text-shadow-md">
            Music
        </router-link>
    </nav>
</template>