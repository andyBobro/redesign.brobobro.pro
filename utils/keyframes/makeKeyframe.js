export default function (src) {
  let last = null
  const res = new Array(100).fill({}).reduce((_, item, i) => {
    if (src[i]) {
      _.push(src[i])
      last = src[i]

      return _
    }

    _.push(last)

    return _
  }, [])

  return res
}
