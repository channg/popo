export default function () {
  $.get('https://caesar.wan.panda.tv/api/game/list?pkey=panda').done(function (data) {
    debugger
  }).fail(function (data) {
    debugger
  })
  
}