let progress = 40;

function updateProgressUI() {
  const bar = document.getElementById("progressBar");
  const text = document.getElementById("progressText");

  bar.value = progress;
  text.textContent = `${progress}% Complete`;
}

function increaseProgress() {
  if (progress < 100) {
    progress += 10;
    updateProgressUI();
  } else {
    alert("All lessons completed!");
  }
}

function takeQuiz() {
  const answer = prompt("Quick Quiz: What is 5 × 6?");
  if (answer === null) return;

  if (answer.trim() === "30") {
    alert("Correct! ⭐");
  } else {
    alert("Not quite — try again!");
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Hook buttons safely (no inline issues)
  const completeBtn = document.getElementById("completeLessonBtn");
  const quizBtn = document.getElementById("startQuizBtn");

  if (completeBtn) completeBtn.addEventListener("click", increaseProgress);
  if (quizBtn) quizBtn.addEventListener("click", takeQuiz);

  updateProgressUI();
});