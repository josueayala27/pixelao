<template>
  <button class="bg-[#4373EF] rounded-lg text-white text-sm px-3 py-2">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    color: { type: String, default: '', required: true },
  },
}
</script>
