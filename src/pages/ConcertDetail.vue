<template>
  <div v-if="concert">
    <h2>Edit Concert</h2>

    <input v-model="concert.title" />
    <input v-model="concert.city" />
    <input v-model="concert.venue" />

    <button @click="save">Save</button>
    <button @click="remove">Delete</button>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { getConcert, updateConcert, deleteConcert } from '../services/concertService'
import { ref } from 'vue'

const route = useRoute()
const router = useRouter()

const concert = ref(getConcert(route.params.id as string))

function save() {
  updateConcert(route.params.id as string, concert.value!)
  alert("Updated!")
}

function remove() {
  deleteConcert(route.params.id as string)
  router.push('/')
}
</script>