<template>
  <button
    :class="[background]"
    class="rounded-lg text-sm px-3 py-2 transition-all duration-200 font-medium"
    @click="$emit('click')"
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
        blue: 'bg-[#06f] hover:bg-[#005ce6] text-white',
        gray: 'hover:bg-gray-100 hover:text-[#06f] text-black',
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
