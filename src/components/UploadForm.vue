<script>
import requests from '@/requests/requests';
export default {
    props: {

    },
    data() {
        return {
            displayForm: false,
            files: [],
        }
    },
    methods: {
        displayFormChange() {
            this.displayForm = !this.displayForm
            this.$nextTick(() => {
                this.$refs.firstForm.focus()
            })
        },
        uploadSong(event) {
            this.files = event.target.files;
            console.log(this.files);
            requests.postFiles(this.files).then((response) => response.json()).catch((err) => console.log(err));
        }
    }
}
</script>

<template>
    <div class="flex justify-center m-5 text-sky-100">
        <div 
            class=
            "border-solid border-2 border-black w-3/8
            shadow-sm shadow-cyan-100/75 rounded-lg bg-slate-800
            text-center"
        >
            <span @click="displayFormChange" class="cursor-pointer"><b>𐎈 upload new song</b></span>
            
        </div>
    </div>
    <div v-if="displayForm" 
        class=
            "fixed inset-0 z-20 flex w-3/4 md:w-1/4 h-1/2 mx-auto my-auto
            m-10 text-right text-sky-100 justify-center
            bg-slate-800 shadow-sm shadow-black rounded-2xl"
    >
        <!-- window close not working on mobile -->
        <div @click="displayFormChange"
            class=
                "absolute left-0 font-bold text-2xl p-3 hover:cursor-pointer 
                rounded-l-md text-shadow-lg text-shadow-indigo-600 
                text-sky-100 hover:text-shadow-white"> X </div>
        <div class="fixed pt-10 font-bold text-2xl text-shadow-sm text-shadow-black">Upload a new song</div>
        <div class="fixed flex h-1/2 items-center text-right">
            <form>
                <div class="table-row">
                    <div class="table-cell">Song Title:</div>
                    <input ref="firstForm" type="text" class="table-cell ml-4 mr-2 bg-black focus:outline-1 focus:outline-offset-1" />
                </div>
                <div class="table-row">
                    <div class="table-cell pt-1">Album:</div>
                    <input type="text" class="table-cell ml-4 mr-2 bg-black focus:outline-1 focus:outline-offset-1" />
                </div>
                <div class="table-row">
                    <div class="table-cell pt-1">Artist:</div>
                    <input type="text" class="table-cell ml-4 mr-2 bg-black focus:outline-1 focus:outline-offset-1" />
                </div>
                <div class="table-row">
                    <div class="table-cell pt-1">Release Date:</div>
                    <input placeholder=" YYYY-MM-DD" type="text" class="table-cell ml-4 mr-2 bg-black focus:outline-1 focus:outline-offset-1" />
                </div>
                <div class="table-row text-center">
                    <div class="table-cell pt-1">MP3/WAV file:</div>
                    <label for="file" 
                        class=
                            "bg-black pl-4 pr-4 pb-0.25 pt-0.25 rounded-2xl 
                            shadow-indigo-600 shadow-sm hover:cursor-pointer 
                            hover:inset-shadow-sm hover:shadow-white"
                    >
                        <input type="file" id="file" class="hidden" @change="uploadSong" />
                        <b>Upload a file</b>
                    </label>
                    <ul>
                        <li v-for="file in files" :key="file">
                            {{ file.name }}
                        </li>
                    </ul>
                </div>
            </form>
        </div>
        <div class=
                "absolute bottom-0 mb-2 p-1 bg-black 
                pl-4 pr-4 pb-0.25 pt-0.25 rounded-2xl text-2xl
                shadow-indigo-600 shadow-sm hover:cursor-pointer 
                hover:inset-shadow-sm hover:shadow-white font-bold">Submit</div>
    </div>
</template>