export default async function handler(req, res) {
  const { token, page = 1 } = req.query

  const url =
    `https://api.plavix.skin/xxapi/buyitoken/waitpayerpaymentslip?page=${page}&limit=50&if_asc=false&min_amount=5000&max_amount=100000&method=1&date_asc=0`

  const response = await fetch(url, {
    headers: {
      Accept: 'application/json',
      indiatoken: token,
      'x-rs-cfg-floxpayreqgate': 'N5R8T1YQ6WZX',
    },
  })

  const text = await response.text()
  res.status(response.status).send(text)
}
