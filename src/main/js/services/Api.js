import jquery from 'jquery'

export function get (resource) {
  return jquery.get({
    type: 'GET',
    url: './rest/v1.0/' + resource,
    dataType: 'json',
    contentType: 'application/json'
  })
}
export function post (resource, data) {
  return jquery.get({
    type: 'POST',
    url: './rest/v1.0/' + resource,
    data: JSON.stringify(data),
    dataType: 'json',
    contentType: 'application/json'
  })
}
