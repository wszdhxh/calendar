let FLAG = "RECORD-DATA"

function setInfo(time, title="", content="") {
  let DATA = JSON.parse(localStorage.getItem(FLAG) || "{}"),
      DATA_KEYS = Object.keys(DATA)
  if (!DATA_KEYS.includes(time)) {
    DATA[time] = []
  }
  let ARR = DATA[time]
  ARR.push({
    id: ARR.length === 0 ? 1 : parseInt(ARR[ARR.length - 1].id + 1),
    title,
    content,
    time: getHours()
  })
  localStorage.setItem(FLAG, JSON.stringify(DATA))
  return true
}

function getInfo(time, id) {
  let DATA = JSON.parse(localStorage.getItem(FLAG) || "{}"),
      DATA_KEYS = Object.keys(DATA)
  if (!DATA_KEYS.includes(time)) return null
  DATA = DATA[time]
  if (typeof id !== "undefined") {
    DATA = DATA.find(item => {
      return parseInt(item.id) === parseInt(id)
    })
  }
  return DATA
}

function delInfo(time, id) {
  let DATA = JSON.parse(localStorage.getItem(FLAG) || "{}"),
      DATA_KEYS = Object.keys(DATA)
  if (!DATA_KEYS.includes(time)) return false
  DATA[time] = DATA[time].filter(item => {
    return parseInt(item.id) !== parseInt(id)
  })
  localStorage.setItem(FLAG, JSON.stringify(DATA))
}

function formatDate(time) {
  let year = time.getFullYear(),
      month = time.getMonth() + 1,
      day = time.getDate()
  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  return `${year}/${month}/${day}`
}

function formatTime(time) {
  return time.split('/').map(item => 
    item = item.length < 2 ? '0' + item : item
  ).join('/')
}

function getHours() {
  let d = new Date(),
      hour = d.getHours(),
      mins = d.getMinutes()
  return `${hour}:${mins}`
}

export default {
  formatDate,
  formatTime,
  set: setInfo,
  get: getInfo,
  del: delInfo
}
