<template>
    <div>
    
    </div>
</template>

<script setup>
    
    async function signInWithEmail() {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: 'example@email.com',
    password: 'example-password',
  })
}
async function signOut() {
  const { error } = await supabase.auth.signOut()
}
</script>
