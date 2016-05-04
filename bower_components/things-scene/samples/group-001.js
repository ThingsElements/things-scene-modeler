var model = {
  components: [{
    type: 'text',
    top: 30,
    left: 30,
    textAlign: 'left',
    fontSize: '30',
    fontFamily: 'serif',
    text: `
이 예제에서는 그룹을 설명합니다.
    `

  }, {
    type: 'group',
    left: 200,
    top: 200,
    width: 400,
    height: 400,
    rotation: 0.5,
    components: [{
      type: 'rect',
      name: '첫번째 사각형',
      class: 'xxx yyy',
      left: 0,
      top: 0,
      rotation: 0,
      width: 100,
      height: 100,
      strokeStyle: '#000000'
    }, {
      type: 'rect',
      name: '두번째 사각형',
      class: 'xxx zzz',
      left: 100,
      top: 100,
      rotation: 0,
      width: 100,
      height: 100,
      strokeStyle: '#000000'
    }]
  }]
};

var p = null;

function create() {
  p = scene.create({
    target: 'scene',
    model: model,
    layers: [{
      type: 'selection-layer'
    }, {
      type: 'guide-layer'
    }, {
      type: 'modeling-layer'
    }, {
      type: 'shift-layer'
    }],
    handlers: [
      'text-editor',
      'move-handler'
    ]
  });
}

function dispose() {
  p.dispose();
}

function change() {
}

function fullscreen() {
  p.fullscreen()
}
