export const nodejs = `const axios = require("axios")

const options = {
    method: 'POST'
    url: "https://connexa.com/api/v1/text-similarity,
    data:{
        text1: "on way down",
        text2: "on way down we go"

    },
    headers: {
        'Authorization' : 'YOUR_API_KEY',
    }
}

axios.request(options).then(function (response) {
    console.log(response.data)
}).catch(function(eror){
    console.error(error)
})

`

export const python = `import requests

url = 'https://connexa.com/api/v1/text-similarity'
api_key = 'YOUR_API_KEY'
text1= "on way down"
text2= "on way down we go"

headers= {
    'Authorization': api_key
}

payload = {
    'text1': text1,
    'text2': text2
}

response= requests.post(url, headers = headers, json=payload)

if response.status_code == 200:
    data = response.json()
    print(data)
else:
    print('Request failed with status code {response.status_code}')

`