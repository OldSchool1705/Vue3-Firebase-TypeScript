<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { Song } from './types'
import { getSongs } from './firebase/songs'
import SongsList from './components/SongsList.vue'
import SongsPlayer from './components/SongsPlayer.vue'

const songs = ref<Song[]>([])

onMounted(async () => {
  getSongs(songs)
})
</script>

<template>
  <main>
    <SongsPlayer/>
    <SongsList :songs="songs" />
  </main>
</template>
