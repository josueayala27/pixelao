<template>
  <nav class="border-b">
    <div class="container flex justify-between mx-auto">
      <div></div>
      <div class="flex"><slot name="right" /></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent',
}
</script>
