// 微应用挂载的逻辑
function mount() {
  const appContainer = document.getElementById('purehtml-container')
  appContainer.innerHTML = '<h1>Node App Mounted</h1>'
  console.log('Node app is mounted')
}

// 微应用卸载的逻辑
function unmount() {
  const appContainer = document.getElementById('purehtml-container')
  appContainer.innerHTML = ''
  console.log('Node app is unmounted')
}

// 导出给 Qiankun 使用
window.__POWERED_BY_QIANKUN__ = true

if (window.__POWERED_BY_QIANKUN__) {
  window['nodeApp'] = {
    mount,
    unmount,
  }
}
