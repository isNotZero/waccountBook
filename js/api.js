const API_BASE_URL = 'http://localhost:4508/data'

export async function getAllData() {
  return fetch(`${API_BASE_URL}`).then(res => res.json())
}

export async function getData(id) {
  return fetch(`${API_BASE_URL}${id ? `?id=${id}` : ''}`).then(res => res.json())
}

export async function createData() {
  return fetch(`${API_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      date: date.value,
      time: time.value,
      amount: amount.value,
      summary: summary.value,
      memo: memo.value,
    })
  })
}

export async function updateData(id) {
  return fetch(`${API_BASE_URL}/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      date: date.value,
      time: time.value,
      amount: amount.value,
      summary: summary.value,
      memo: memo.value,
    })
  })
}

export async function deleteData(id) {
  return fetch(`${API_BASE_URL}/${id}`, {
    method: "DELETE",
  })
}