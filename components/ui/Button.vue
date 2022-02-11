<template>
  <button
    :class="[background]"
    class="rounded-lg text-sm px-3 py-2 transition-all duration-200 font-medium"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    color: { type: String, default: 'blue' },
  },
  data() {
    return {
      colors: {
        blue: 'bg-[#4373EF] text-white',
        gray: 'hover:bg-gray-200 text-black',
      },
    }
  },
  computed: {
    background() {
      return this.colors[this.color]
    },
  },
}
</script>
