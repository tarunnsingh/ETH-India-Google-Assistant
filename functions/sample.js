const axios = require('axios')

axios.post('https://ethindia.appspot.com/offers',{
    Accept: 'application/json',
    'Content-Type': 'application/json'

})
.then((res) => {
  console.log(`statusCode: ${res.statusCode}`)
  console.log(res)
})
.catch((error) => {
  console.error(error)
})

