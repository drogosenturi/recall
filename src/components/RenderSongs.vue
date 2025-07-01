<script>
export default {
    data() {
        return {
            //active: 'hidden'
            active: null,
            songs: [
                { id:1, name:"falling apart", album:"recalling lost friends" },
                { id:2, name:"flow", album: "recalling lost friends"},
                { id:3, name:"be my friend", album: "single" }
            ]
        }
    },
    methods: {
        changeActive(id) {
            this.active = this.active === id ? null : id;
        }
    }
}
</script>

<template>
    <div class="flex justify-center m-5 text-sky-100">
        <ul class="md:w-3/8">
            <li v-for="song in songs" :key="song.id" class="flex pb-2 md:justify-start justify-center-safe">
                <div 
                    @click="changeActive(song.id)"
                    :class="{
                        '-translate-x-5': active === song.id,
                        'translate-x-0': active !== song.id
                    }"
                    class=
                        "z-10 cursor-pointer size-48
                        border-solid border-2 border-black rounded-l-lg
                        shadow-sm shadow-cyan-100/75
                        bg-[url(../assets/virgo.png)]
                        transition-all duration-400 ease-in-out
                        "
                >
                    <img class="size-full object-contain" src="../assets/virgo.png" />    
                </div>
                <Transition name="slide">
                    <div v-show="active === song.id"
                        class=
                            "h-48 w-120 
                            border-solid border-2 border-black rounded-r-lg
                            shadow-sm shadow-cyan-100/75
                            bg-slate-800"
                    >
                        <p class="p-2">{{ song.name }} - {{ song.album }}</p>
                        <button type="button" 
                            class=
                                "cursor-pointer m-2 w-10 text-black
                                shadow-sm shadow-white rounded-md  
                                active:shadow-none"
                        >
                            <img class="object-fill " src="../assets/play.png">
                        </button>
                        
                    </div>
                </Transition>
                
            </li>
        </ul>

    </div>
</template>

<style scoped>
    .slide-enter-active,
    .slide-leave-active {
        transition: all 0.4s ease-in-out
    }
    .slide-enter-from,
    .slide-leave-to {
        transform: translateX(-80px);
        opacity: 0;
    }
</style>