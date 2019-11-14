import * as urls from "./Urls";

export const getQuestionsForTopic = (topic, numberOfQuestions = 1) => {
  let questionsSets = [];

  return questionsSets;
};

export const getTopics = async onCallback => {
  //let url = "http://localhost:44200/api/topics";//"/api/topics";//http://RIA336:44200
  // const response = await fetch(url, {
  //   method: "GET", // *GET, POST, PUT, DELETE, etc.
  //   mode: "no-cors", // no-cors, *cors, same-origin
  //   credentials: 'omit', // include, *same-origin, omit
  //   headers: {
  //     'Content-Type': 'application/json'
  //     // 'Content-Type': 'application/x-www-form-urlencoded',
  //   },
  //   redirect: 'follow', // manual, *follow, error
  //   referrer: 'no-referrer' // no-referrer, *client
  //   //body: JSON.stringify(data) // body data type must match "Content-Type" header
  // });

  let url = urls.GET_TOPICS_ENDPOINT;
  const response = await fetch(url);
  console.log("Response", response);
  const json = await response.json();
  onCallback(json);
};
