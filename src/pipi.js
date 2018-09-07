import hook from './nhook'
hook({
  //拦截方法
  open: function () {
    this.response = '{"aa":"11"}'
    this.responseText = '{"aa":"11"}'
    this.readyState = 4
  },
  send: function () {
    this.onload()
    this.onreadystatechange()
    return true
  }
})