export function buildQueryParams(params: any) {
  const keys = Object.keys(params)
  const query = keys
    .map((key) => {
      if (!params[key]) return
      if (Array.isArray(params[key])) {
        return params[key]
          .map((value) => {
            return `${key}=${value}`
          })
          .join('&')
      } else {
        return `${key}=${params[key]}`
      }
    })
    .join('&')

  return `?${query}`
}
