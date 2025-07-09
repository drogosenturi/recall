<script>
import GlobalHeader from '@/components/GlobalHeader.vue';
import RenderSongs from '@/components/RenderSongs.vue';
import UploadForm from '@/components/UploadForm.vue';
import FooterMenu from '@/components/FooterMenu.vue';

export default {
    data() {
        return {
        }
    },
    components: {
        GlobalHeader,
        RenderSongs,
        UploadForm,
        FooterMenu
    }
}
</script>

<template>
    <GlobalHeader />
    <RenderSongs />
    <UploadForm />
    <FooterMenu />
</template>
<style scoped>
 
</style>
