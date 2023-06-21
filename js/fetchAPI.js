const api_url = 'https://'
async function getData(){
    const resp = await fetch(api_url);
    const data = await resp.json();
    const {question , response} = data
    console.log(question)
    console.log(response)
}
getData()