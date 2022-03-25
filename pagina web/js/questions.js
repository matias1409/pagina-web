(function() {
  const titleQuestions = [...document.querySelectorAll('.questions_title')];
  console.log(titleQuestions);

  titleQuestions.forEach(question =>{
    question.addEventListener('click', function () {
        let heigth = 0;
        let arrow = question.nextElementSibling;
        let addPadding = question.parentElement.parentElement;

        addPadding.classList.toggle('questions_padding--add');

        question.children[0].classList.toggle('questions_arrow--rotate');

        if (arrow.clientHeight === 0) {
          heigth = arrow.scrollHeight;
        };

        arrow.style.heigth = `${heigth}px`;
      });
  });

});