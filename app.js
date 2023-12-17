const OPENAI_API_KEY = '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';

const askQuestion = () => {
    var imagen = document.getElementById('miImagen');
    imagen.src = (imagen.src.endsWith('Wheatley.jpg')) ? 'portal.gif' : 'Wheatley.jpg';
  const questionInput = document.getElementById('question-input');
  const responseOutput = document.getElementById('response-output');
  fetch("https://api.openai.com/v1/chat/completions", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + OPENAI_API_KEY
    },
    body:JSON.stringify({
      "model": "gpt-3.5-turbo",
      "messages": [
        {
          "role": "system",
          "content": "eres un amable docente"
        },
        {
          "role": "user",
          "content": questionInput.value
        }
      ],
      max_tokens: 100
    })
  }).then(res => res.json()).then((data) => {
    responseOutput.innerHTML = `<strong>Respuesta:</strong> ${data.choices[0].message.content}`;
  });

}