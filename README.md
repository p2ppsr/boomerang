# Boomerang

Simplified wrapper around the fetch API

## Name and Meaning

You throw the boomerang through cyberspace at a URL. It comes back and hits you in the face, ideally with the data you want.

## Usage

```js
import boomerang from '@p2ppsr/boomerang'

const data = await boomerang(
  'POST',
  'https://example.com',
  {
    para: 'meter'
  },
  {
    hea: 'der'
  }
)
```

## API

The package exports a single function, `boomerang`, which requests your data.

### `boomerang(HTTPMethod, URL, requestPayload, headers) => response`

This function will parse your data into the correct format for the HTTP method used, send the request and parse the response into either a JSON object or a string.

#### Parameters

Name       | Optional | Description
-----------|----------|---------------
`method`   | No       | The HTTP method to use for the request
`URL`      | No       | The URL to request
`params`   | Yes      | Request parameters. For GET, these will be your query string parameters. For POST, this will be sent as the JSON request body
`headers`  | Yes      | Any additional headers to include with the request

#### Return Value

The function will either return a JavaScript object (if the response was JSON), or a string value otherwise.

#### Throws

This function will throw native errors if they occur. No custom errors are defined. This is a wrapper for the fetch API. Please consult the documentation for more information.

## Confidentiality

Peer-to-peer Privacy Systems Research proprietary and confidential.