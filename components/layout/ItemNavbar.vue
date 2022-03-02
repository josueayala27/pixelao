<template>
  <div
    class="cursor-pointer items-center gap-2 flex hover:text-blue-500 p-3 transition-all duration-300"
    @click="$emit('click')"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ItemNavbarComponent',
}
</script>
