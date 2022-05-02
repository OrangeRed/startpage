function showTime() {
  const date = new Date()

  let today = date.toLocaleString("ja-JP", { weekday: "short" })
  let hour = date.toLocaleString("en", { hour: "2-digit", hour12: false }) // use 24h time format
  let minute = date.toLocaleString("en", { minute: "2-digit" })
  let second = date.toLocaleString("en", { second: "2-digit" })
  let day = date.toLocaleString("en", { day: "numeric" })
  let month = date.toLocaleString("en", { month: "numeric" })
  let year = date.toLocaleString("en", { year: "numeric" })

  minute = addZero(minute)
  second = addZero(second)

  document.getElementById("date").innerHTML = `${year}年${month}月${day}日 (${today}) | ${hour}:${minute}:${second}`

  setTimeout(showTime, 0)
}

function addZero(i) {
  if (i.length < 2) i = "0" + i
  return i
}

showTime()
