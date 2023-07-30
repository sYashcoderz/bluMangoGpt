const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
const PORT = 8080;

const apiKey = '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';

app.get('/', (req, res)=> {
    res.send("I am from ChatGPT demo live")
})

const generateDescription = (promptType, data) => {

    if (promptType === 'shoe_description') {
        const {color, features, specification} = data;
        let prompt = `generate shoe description about ${data} for ${color} and ${features} also include specifications ${specification} in the description`
        console.log("shoe Description ==>>", prompt)
        return prompt;
    }

    if (promptType === 'shoe_short_description') {
        const {color, features, specification} = data;
        console.log("shoe Description data ==>>", color, features)
        let prompt = `generate shoe short description about ${data} for ${color} and ${features} also include specifications ${specification} in the description`
        console.log("shoe Description ==>>", prompt)
        return prompt;
    }

    if (promptType === 'product_title') {
        const {color, features, specification} = data;
        console.log("shoe Description data ==>>", color, features)
        let prompt = `generate shoe shoe about ${data} for ${color} and ${features} also include specifications ${specification} in the description`
        console.log("shoe Description ==>>", prompt)
        return prompt;
    }

}

app.post('/chatgpt', async (req, res) => {
    let {prompt, promptType} = req.body;

    generateDescription(promptType, req.body);

    console.log("final prompt ==>>", prompt);
    const options = {
        method : 'post',
        headers: {
            "Content-Type": "application/json" ,
            "Authorization": `Bearer ${apiKey}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{"role": "user", "content": prompt}],
            max_tokens: 100
        })
    }

    try {
        const reponse = await fetch(`https://api.openai.com/v1/chat/completions`, options)
        const data  = await reponse.json()
        console.log("response data ==>>",data)
        res.send(data)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred while processing your request.' });
    }
});

app.listen(PORT,() => {console.log(`Listening at the port ${PORT}`)})