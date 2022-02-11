<!-- eslint-disable vue/no-v-html -->
<template>
  <div v-html="icon"></div>
</template>

<script>
export default {
  name: 'IconComponent',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    icon() {
      return require(`assets/icons/${this.name}.svg?raw`)
    },
  },
}
</script>
