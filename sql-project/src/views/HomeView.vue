<script setup>
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://tzithwsneecztaewiwhj.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
