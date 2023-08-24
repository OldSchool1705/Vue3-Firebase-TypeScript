import { collection, query, getDocs, onSnapshot } from 'firebase/firestore'
import { db } from '../firebase/config'
import type { Song } from '../types'
import type { Ref } from 'vue'

export const getSongs = (songs: Ref<Song[]>) => {
  const q = query(collection(db, 'songs'))
  onSnapshot(q, (querySnapshot) => {
    const tempSong: Song[] = []
    querySnapshot.forEach((doc) => {
      tempSong.push({ id: doc.id, ...doc.data() } as Song)
    })
    songs.value = tempSong
  })
}
