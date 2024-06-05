<template>
  <header class="flex items-center justify-between mt-5">
    <NuxtLink to="/" class="text-xl font-bold">Finance Tracker</NuxtLink>
    <div>
      <UAvatar
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar" />
    </div>
  </header>
</template>

<script lang="js" setup>
const user = useSupabaseUser()

watch(user, (user)=>{
  if (user) {
    console.log('Signed In!')
  }
}, {immediate: true})
</script>
