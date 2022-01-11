<template>
  <div class="h-screen flex flex-col">
    <nav
      class="w-full p-4 flex justify-center text-white bg-gradient-to-r to-[#DB7DFC] from-[#4373EF]"
    >
      <div class="flex fill-current">Nuxt pixel art it is free to use 💕</div>
    </nav>
    <nav class="border-b p-2 flex justify-end">
      <Button>Download</Button>
    </nav>
    <div class="h-full flex">
      <Sidebar>
        <button class="p-3 hover:bg-gray-200 bg-gray-100 rounded-lg">
          <Icon name="brush" />
        </button>
        <button class="p-3 hover:bg-gray-200 bg-gray-100 rounded-lg">
          <Icon name="eraser" />
        </button>
        <button class="p-3 hover:bg-gray-200 bg-gray-100 rounded-lg">
          <Icon name="zoom-in" />
        </button>
        <button class="p-3 hover:bg-gray-200 bg-gray-100 rounded-lg">
          <Icon name="zoom-out" />
        </button>
      </Sidebar>
      <main class="flex-1">
        <Nuxt class="w-full" />
      </main>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/navigation/Sidebar.vue'
import Icon from '@/components/ui/Icon.vue'
import Button from '@/components/ui/Button.vue'

export default {
  name: 'DefaultLayout',
  components: { Sidebar, Icon, Button },
}
</script>
