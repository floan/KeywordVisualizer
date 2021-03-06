const handleVisualizeData = async (transcript) =>{
  const payload = {'transcript' : transcript};
  const URL = 'http://192.168.10.86:5000/send-transcript';
  const response = await fetch(URL, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': null
    }, 
    body: JSON.stringify(payload),
  })
  const processedData = await response.json(); 
  return processedData
}


export default handleVisualizeData