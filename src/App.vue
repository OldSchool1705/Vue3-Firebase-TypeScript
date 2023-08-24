<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Song } from './types'
import { getSongs } from './firebase/songs'
import SongsList from './components/SongsList.vue'

const songs = ref<Song[]>([])

onMounted(async () => {
  getSongs(songs)
})
</script>

<template>
  <main>
    <SongsList :songs="songs" />
  </main>
</template>
