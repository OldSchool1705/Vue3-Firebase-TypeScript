import { collection, query, addDoc, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase/config'
import type { Song } from '../types'
import type { Ref } from 'vue'

const DB_NAME = 'songs'

export const getSongs = (songs: Ref<Song[]>) => {
  const q = query(collection(db, DB_NAME))
  onSnapshot(q, (querySnapshot) => {
    const tempSong: Song[] = []
    querySnapshot.forEach((doc) => {
      tempSong.push({ id: doc.id, ...doc.data() } as Song)
    })
    songs.value = tempSong
  })
}

export const addSong = async (songs: Song) => {
  await addDoc(collection(db, DB_NAME), {
    title: songs.title,
    artist: songs.artist,
    year: songs.year,
  })
}
