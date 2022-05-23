import { Color, PerspectiveCamera, WebGLRenderer } from 'three'
import lib from '@lib/index'
import { FPSControls } from '~/utils/fpsControls'
import { getUrlFlag } from '~/utils/location'

import { BaseTestScene } from './BaseTestScene'

function url(name: string, ext: string) {
  return `books/${name}.${ext}`
}

export default class TestPixelTextScene extends BaseTestScene {
  constructor() {
    super()
    this.camera.position.set(0, 0, 0.5)

    this.camera.lookAt(0, 0, 0)
    // this.camera.updateProjectionMatrix()
    const fps = new FPSControls(this.camera as PerspectiveCamera)
    if (getUrlFlag('fpsCam')) {
      fps.toggle(true)
    }

    // const s = 1

    // const hello = new PixelTextMesh(' ABC \n 010 \n ntz \n "#% \n { } \n0ANan')
    // // const hello = new PixelTextMesh('This is the beginning!\nHello World!\nHello World!\nHello World!\nHello World!')
    // hello.scale.multiplyScalar(s)
    // this.scene.add(hello)

    const init = async () => {
      const book = new lib.Foo()
      book.position.set(-0.125, 0, 0)
      this.scene.add(book)
    }
    init()
  }
  update(dt: number) {
    super.update(dt)
  }
  render(renderer: WebGLRenderer, dt: number) {
    super.render(renderer, dt)
  }
}
