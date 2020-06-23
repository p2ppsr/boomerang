import JSON2QS from './JSON2QS'

export default async (method, url, params = {}, headers = {}) => {
  if (method === 'GET') {
    url = url + '?' + JSON2QS(params)
    if (url.endsWith('?')) {
      url = url.slice(0, url.length - 1)
    }
  }

  if (method !== 'GET') {
    headers['Content-Type'] = 'application/json'
  }

  let correctFetch
  if (typeof fetch === 'function') {
    correctFetch = fetch
  } else {
    correctFetch = await import('node-fetch')
    correctFetch = correctFetch.default
  }

  const result = await correctFetch(url, {
    method,
    headers,
    referrerPolicy: 'no-referrer',
    redirects: 'follow',
    cache: 'no-cache',
    body: method !== 'GET' ? JSON.stringify(params) : undefined
  })
  try {
    return result.json()
  } catch (e) {
    return result.text()
  }
}
