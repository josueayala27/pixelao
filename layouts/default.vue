<template>
  <div class="h-screen flex flex-col">
    <Modal
      :visible="modals.export"
      title="Export"
      @close="modals.export = false"
    >
      Export Image code...
    </Modal>
    <Navbar>
      <template #right>
        <ItemNavbar><Icon name="dots-horizontal" /></ItemNavbar>
        <div class="h-full py-3 px-2">
          <div class="h-full bg-gray-300 w-[1px]"></div>
        </div>
        <ItemNavbar><Icon name="left-arrow" /></ItemNavbar>
        <ItemNavbar><Icon name="right-arrow" /></ItemNavbar>
        <div class="h-full py-3 px-2">
          <div class="h-full bg-gray-300 w-[1px]"></div>
        </div>
        <ItemNavbar @click="exportImage()"
          ><Icon name="share" /> Export</ItemNavbar
        >
        <ItemNavbar><Icon name="heart" />Save</ItemNavbar>
      </template>
    </Navbar>
    <div class="h-full flex">
      <main class="flex-1">
        <Nuxt class="w-full" />
      </main>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/layout/Navbar.vue'
import ItemNavbar from '@/components/layout/ItemNavbar.vue'
import Icon from '@/components/ui/Icon.vue'
import Modal from '@/components/ui/Modal.vue'

export default {
  name: 'DefaultLayout',
  components: { Navbar, ItemNavbar, Icon, Modal },
  data() {
    return {
      modals: {
        export: false,
      },
    }
  },
  methods: {
    exportImage() {
      this.modals.export = true
    },
  },
}
</script>
