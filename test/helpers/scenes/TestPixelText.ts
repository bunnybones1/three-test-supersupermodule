import { Color, PerspectiveCamera, WebGLRenderer } from 'three'
import lib from '@lib/index'
import { FPSControls } from '~/utils/fpsControls'
import { getUrlFlag } from '~/utils/location'

import { BaseTestScene } from './BaseTestScene'
import libFoo from 'three-super-module'

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
    
    const init = async () => {
      const test2 = new libFoo.Foo()
      test2.position.set(-0.125, 0, 0)
      this.scene.add(test2)
      test2.scale.set(0.1, 0.1, 0.1)
      const book = new lib.Bar()
      book.position.set(-0.125, 0, 0)
      this.scene.add(book)
      book.scale.set(0.04, 0.04, 0.04)
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
