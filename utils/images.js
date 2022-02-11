import { toPng } from 'html-to-image'

export const downloader = async (node, name) => {
  const image = await toPng(node)
  const link = document.createElement('a')
  link.download = name
  link.href = image
  link.click()
}
