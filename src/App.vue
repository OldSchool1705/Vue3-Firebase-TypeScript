<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from './firebase/config'

interface Song {
  id: string;
  title: string;
  artist: string;
  year: string;
}

const songs: Song[] = reactive([])

onMounted(async () => {
  const q = query(collection(db, 'songs'))

  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    console.log(doc);
    
    songs.push({
      id: doc.id,
      ...doc.data(),
    } as Song)
  })
})
</script>

<template>
    <main>
      <v-card class="mx-auto pa-2" max-width="300">
        <v-list>
          <v-list-subheader>Favorite songs</v-list-subheader>

          <v-list-item
            v-for="(song, i) in songs"
            :key="i"
            :value="song"
            color="primary"
            rounded="shaped"
          >
            <template v-slot:prepend>
              <v-icon icon="mdi-headphones"></v-icon>
            </template>

            <v-list-item-title v-text="song.title"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-card>
    </main>
</template>
