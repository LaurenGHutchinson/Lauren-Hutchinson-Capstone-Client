export const baseUrl = 'http://localhost:8080'

export const getRandomQuestions = (questionsArray, allQuestions, questionsPerSkill, remainder) => {
    let pickedQuestions = [];
    questionsArray.forEach((skillType) => {
      const shuffled = skillType.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0,questionsPerSkill)
      pickedQuestions = pickedQuestions.concat(selected);
    })
      const allShuffled = allQuestions.sort(() => 0.5 - Math.random());
      const allSelected = allShuffled.slice(0, remainder);
      pickedQuestions = pickedQuestions.concat(allSelected);
      setPickedQuestionsArray(pickedQuestions);
      console.log(pickedQuestionsArray);
  }