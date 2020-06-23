// thanks to https://stackoverflow.com/a/1714899 for this
export default json => {
  const str = []
  for (const p in json) {
    if (json.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(json[p]))
    }
  }
  return str.join('&')
}
