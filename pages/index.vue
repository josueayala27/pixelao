<template>
  <div class="flex h-screen w-full items-center flex-col justify-center">
    <div class="flex gap-4 items-center">
      <input v-model="board.color" type="color" />
      <button
        class="p-4 gap-x-3 fill-current flex bg-blue-500 rounded-lg text-white hover:bg-blue-600 transition-all"
        @click="print()"
      >
        <svg
          v-if="isLoading"
          class="animate-spin"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M2 11h5v2H2zm15 0h5v2h-5zm-6 6h2v5h-2zm0-15h2v5h-2zM4.222 5.636l1.414-1.414 3.536 3.536-1.414 1.414zm15.556 12.728-1.414 1.414-3.536-3.536 1.414-1.414zm-12.02-3.536 1.414 1.414-3.536 3.536-1.414-1.414zm7.07-7.071 3.536-3.535 1.414 1.415-3.536 3.535z"
          ></path>
        </svg>
        Descargar
      </button>
    </div>
    <div id="board" class="w-[600px] flex flex-wrap mt-5">
      <div
        v-for="(item, index) in board.size * board.size"
        :id="index"
        :key="index"
        class="w-[20px] select-none h-[20px] hover:bg-gray-200 cursor-pointer"
      ></div>
    </div>
  </div>
</template>

<script>
import * as htmlToImage from 'html-to-image'

export default {
  name: 'IndexPage',
  data() {
    return {
      isLoading: false,
      board: {
        size: 30,
        color: null,
      },
      config: {
        isHold: false,
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('mousedown', () => {
        this.config.isHold = true
      })
      window.addEventListener('mouseup', () => {
        this.config.isHold = false
      })
      this.draw()
    })
  },
  methods: {
    async print() {
      this.isLoading = true
      try {
        const node = document.getElementById('board')
        const image = await htmlToImage.toPng(node)
        const link = document.createElement('a')
        this.isLoading = false
        link.download = 'my-image-name.png'
        link.href = image
        link.click()
      } catch (error) {
        console.error(error)
      }
    },
    draw() {
      for (let index = 0; index < this.board.size * this.board.size; index++) {
        const element = document.getElementById(index)
        element.addEventListener('mousedown', () => {
          element.style.background = this.board.color
        })
        element.addEventListener('mouseenter', () => {
          if (this.config.isHold) {
            element.style.background = this.board.color
          }
        })
      }
    },
  },
}
</script>
