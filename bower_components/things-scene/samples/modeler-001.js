function handler_rect_click(e) {
  p.set('text', {
    text: this.get('name') + '이 클릭되었습니다.'
  })
}

var model = {
  components: [{
    type: 'text',
    top: 30,
    left: 30,
    textAlign: 'left',
    fontSize: '30',
    fontFamily: 'serif',
    text: `
이 예제에서는 가이드레이어를 설명합니다.
마우스를 움직여보세요.
    `

  }, {
    type: 'rect',
    name: '첫번째 사각형',
    class: 'xxx yyy',
    left: 0,
    top: 150,
    rotation: 0,
    width: 100,
    height: 100,
    eventMap: {
      '(self)': {
        '(self)': {
          click: handler_rect_click
        }
      }
    }
  }, {
    type: 'rect',
    name: '두번째 사각형',
    class: 'xxx zzz',
    left: 0,
    top: 300,
    rotation: 0,
    width: 100,
    height: 100,
    eventMap: {
      '(self)': {
        '(self)': {
          click: handler_rect_click
        }
      }
    }
  }],

  /* 현재 모델 자손 중 사각형에서 클릭 이벤트가 발생할 때, ... */
  eventMap: {
    '(self)': {
      '.xxx': {
        click: animate
      }
    }
  }
};

var p = null;

function create() {
  p = scene.create({
    target: 'scene',
    model: model,
    layers: [{
      type: 'guide-layer'
    // }, {
    //   type: 'minimap-layer'
    }]
  });
}

function dispose() {
  p.dispose();
}

function animate(e, desc) {
  var target = desc.origin

  p.animate({
    step: function(delta) {
      target.set({
        left: delta * 300
      })
    },

    delta: function(progress) { /* bounce */
      for(var a = 0, b = 1; 1; a += b, b /= 2) {
        if (progress >= (7 - 4 * a) / 11) {
          return - Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2)
        }
      }
    }
  }).start()
}

function change() {
}

function fullscreen() {
  p.fullscreen()
}
