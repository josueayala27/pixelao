<template>
  <div class="h-screen flex flex-col">
    <Modal
      :visible="modals.export"
      title="Export"
      @close="modals.export = false"
    >
      <p>I hate you all very much, I'm going to sleep 😈</p>
      <div class="mt-4 flex justify-end gap-2">
        <Button
          color="gray"
          @click="test('Cancel Export...'), (modals.export = false)"
        >
          Cancel
        </Button>
        <Button @click="test('Download your uggly drawing...')">
          Export
        </Button>
      </div>
    </Modal>
    <Navbar>
      <template #right>
        <ItemNavbar><Icon name="dots-horizontal" /></ItemNavbar>
        <div class="h-full py-3 px-2">
          <div class="h-full bg-gray-300 w-[1px]"></div>
        </div>
        <ItemNavbar @click="undo"><Icon name="left-arrow" /></ItemNavbar>
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
import { mapMutations } from 'vuex'

export default {
  name: 'DefaultLayout',
  data() {
    return {
      modals: {
        export: false,
      },
    }
  },
  methods: {
    ...mapMutations('controls', ['test']),
    exportImage() {
      this.modals.export = true
    },
    test(message) {
      console.log(message)
    },
    undo() {
      this.test('Undo 👌')
    },
  },
}
</script>
