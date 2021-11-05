function getScore(score) {
  if (isNaN(score)) {
    return 'Por favor, digite um número válido'
  } else if (score == "") {
    return 'Por favor, preencha o campo de nota!'
  };

  if (score >= 90 && score <= 100) {
    return 'Parabéns, você tirou A!'
  } else if (score >= 80 && score <= 89) {
    return 'Muito bem, você tirou B!'
  } else if (score >= 70 && score <= 79) {
    return 'Você está na média, tirou C!'
  } else if (score >= 60 && score <= 69) {
    return 'Você pode melhorar, tirou D!'
  } else if (score < 60 && score >= 0) {
    return 'Você precisa estudar mais, tirou F!'
  } else {
    return 'Nota inválida'
  }
};

function handler() {
  const number = document.querySelector('#number').value;
  const score = getScore(Number(number));
  const result = document.querySelector('#res');
  result.innerHTML = score;
}