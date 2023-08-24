<script lang="ts" setup>
import type { Song } from '../types'
import { deleteSong } from '@/firebase/songs'

const props = defineProps<{ songs: Song[] }>()
</script>

<template>
  <v-card class="mx-auto pa-2" max-width="300">
    <v-list>
      <v-list-subheader>Favorite songs</v-list-subheader>

      <v-list-item
        v-for="(song, i) in props.songs"
        :key="i"
        :value="song"
        color="primary"
        rounded="shaped"
      >
        <template v-slot:prepend>
          <v-icon icon="mdi-headphones"></v-icon>
        </template>
        <template v-slot:append>
          <v-icon @click="deleteSong(song.id)" icon="mdi-close"></v-icon>
        </template>

        <v-list-item-title v-text="song.title"></v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>
