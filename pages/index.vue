<template>
  <div class="flex w-full h-full items-center flex-col justify-center mt-5">
    <div class="border">
      <div id="board" class="w-[600px] flex flex-wrap">
        <div
          v-for="(item, index) in board.size * board.size"
          :id="index"
          :key="index"
          class="w-[20px] select-none h-[20px] hover:bg-gray-200 cursor-pointer"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { downloader } from '@/utils/images'

export default {
  name: 'IndexPage',
  data() {
    return {
      isLoading: false,
      board: {
        size: 30,
        color: '#000000',
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
        const NAME = 'nuxt-pixel-art'
        await downloader(document.getElementById('board'), `${NAME}.png`)
        this.isLoading = false
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
