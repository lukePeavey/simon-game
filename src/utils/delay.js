export default function (ms) {
  return new Promise((resolve) => {
    window.setTimeout(() => resolve(), ms)
  })
}