import { fetchJSON } from '../../http';

export function inbox() {
  return fetchJSON('/inbox', {}, true);
}

export function reload(page: number) {
  return fetchJSON('/inbox/',
  {
    method: 'GET',
    query: page ? { page } : {}
  });
}

export function thread(id: string) {
  return fetchJSON('/inbox/' + id, {}, true);
}

export function respond(id: string, response: string) {
  return fetchJSON('/inbox/' + id, {
    method: 'POST',
    body: JSON.stringify({
      text: response
    })
  }, true);
}

export function newThread(username: string, subject: string, text: string) {
  return fetchJSON('/inbox/new', {
    method: 'POST',
    body: JSON.stringify({
      username,
      subject,
      text
    })
  }, true);
}

export function deleteThread(id: string) {
  return fetchJSON('/inbox/' + id + '/delete', {method: 'POST'}, true);
}