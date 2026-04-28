<template>
  <div>
    <h2>Concerts</h2>
    <ul>
      <li v-for="concert in concerts" :key="concert.id">
        <router-link :to="`/concerts/${concert.id}`">
          {{ concert.title }} - {{ concert.city }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { listConcerts } from '../services/concertService'

const concerts = listConcerts()
</script>