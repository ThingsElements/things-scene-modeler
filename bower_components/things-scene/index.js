import * as scene from './src/things-scene'

export default scene

if(typeof window !== 'undefined')
  window.scene = scene

if (typeof global !== 'undefined') {
	global.scene	= scene
}
