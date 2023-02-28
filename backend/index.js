// imports at the top of the file
const cohere = require("cohere-ai")
const express = require("express")
const cors = require("cors")
require("dotenv").config()



// express app declaration after the imports
const app = express()

// middlewares after calling express()
app.use(cors())
//this pars your req to json by default
app.use(express.json())

app.listen(8080)



cohere.init("LHnbq6TlUZ7gpBZf2YPHiW3QvdkZ4UM3gZleKUkI")

cohere.init('HwUhP7p5m27jQW02QYDiCwoZwFVUPcqruxZkmnYm'); // This is your trial API key
async function negative(input){
  const response = await cohere.generate({
    model: 'command-xlarge-nightly',
    prompt: `topic:birth control\nnegative:Birth control can have negative side effects such as nausea, headaches, weight gain, mood changes, and decreased libido. Hormonal methods may also increase the risk of serious health issues, including blood clots and stroke. Access to birth control may also be limited due to cost, insurance coverage, or personal beliefs of healthcare providers.\n--\ntopic:niche writings\nnegative:Niche writings may limit readership and interest, leading to lower engagement and impact. While focusing on a specific topic or audience can be helpful, it can also restrict creativity and exploration. Niche writings may also be more challenging to market and monetize, making it difficult for writers to earn a living.\n--\ntopic:sleeping late\nnegative:Sleeping late can disrupt the body\'s natural sleep-wake cycle, leading to daytime sleepiness and fatigue. It can also negatively impact mood, cognitive function, and overall health. Sleeping late on a regular basis may increase the risk of chronic health issues such as obesity, diabetes, and heart disease.\n--\ntopic:${input}\nnegative:`,
    max_tokens: 300,
    temperature: 0.9,
    k: 0,
    p: 0.75,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: [],
    return_likelihoods: 'NONE'
  });
  return response.body.generations[0].text
}
async function positive(input){
  const response = await cohere.generate({
    model: 'command-xlarge-nightly',
    prompt: `topic:niche writings\npositive:Niche writings can create a dedicated following and foster a sense of community among like-minded individuals. By focusing on a specific topic, writers can become experts and provide valuable insights and knowledge to their readers. Niche writings can also offer opportunities for unique perspectives and storytelling that may not be found in more general writing.\n--\ntopic:birth control\npositive:Birth control provides individuals with the ability to choose when or if they want to have children, giving them greater control over their lives and future. It can also help manage menstrual cycles, reduce acne, and decrease the risk of certain health issues. Access to birth control can promote reproductive rights and gender equality.\n--\ntopic:sleeping late\npositive:Sleeping late can be a great way to catch up on rest and rejuvenate the body. It can also be a great way to relax and take a break from the stresses of daily life. Additionally, sleeping late can allow individuals to get the full recommended eight hours of sleep.\n--\ntopic:${input}\npositive:\n`,
    max_tokens: 300,
    temperature: 0.9,
    k: 0,
    p: 0.75,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: [],
    return_likelihoods: 'NONE'
  });
  return response.body.generations[0].text
}
async function nutural(input){
  const response = await cohere.generate({
    model: 'command-xlarge-nightly',
    prompt: `topic:niche writings\nneutral:Niche writings are focused on a specific topic or audience. They can provide in-depth coverage and insights on particular areas of interest. Niche writings can attract a dedicated following, but may have a limited reach. Ultimately, the value of niche writings depends on the individual\'s interests and preferences.\n--\ntopic:birth control\nneutral:Birth control is a medication or device used to prevent pregnancy. It comes in different forms, such as pills, injections, and devices implanted in the body. While it is a personal decision to use or not to use birth control, access to it is considered a basic healthcare right.\n--\ntopic:sleeping late\nneutral:Sleeping late refers to sleeping longer than usual or beyond a typical waking time. While it may be necessary for some individuals to catch up on sleep or manage their schedule, it can also disrupt the body\'s natural sleep cycle and impact overall health. Its effects may vary depending on individual circumstances.\n--\ntopic:${input}\nneutral:`,
    max_tokens: 300,
    temperature: 0.9,
    k: 0,
    p: 0.75,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: [],
    return_likelihoods: 'NONE'
  });
  return response.body.generations[0].text
}


app.post("/", async (req, res) => {
  //I'm alive to get positive
  const response1 = await positive(req.body.m1)

  const response2 = await nutural(req.body.m1)
  
  const response3 = await negative(req.body.m1)
  // const res = promise.all([response1,response2,response3])
  res.json({r1 : response1 , r2: response2 , r3:response3 })
    
  })




