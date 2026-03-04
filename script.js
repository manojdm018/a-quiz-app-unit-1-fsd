const quizData = [
  { question: "What does Semantic HTML mean?", options: ["HTML used for styling", "HTML that describes the meaning of content", "HTML used for animation", "HTML used only for forms"], answer: "HTML that describes the meaning of content" },
  { question: "Which of the following is a non-semantic HTML tag?", options: ["<article>", "<section>", "<div>", "<header>"], answer: "<div>" },
  { question: "Which tag represents navigation links?", options: ["<nav>", "<section>", "<footer>", "<main>"], answer: "<nav>" },
  { question: "Which HTML tag should contain the main content of the page?", options: ["<main>", "<aside>", "<header>", "<nav>"], answer: "<main>" },
  { question: "Which tag represents independent reusable content like blog posts?", options: ["<section>", "<article>", "<aside>", "<nav>"], answer: "<article>" },
  { question: "Which tag represents sidebar content?", options: ["<aside>", "<main>", "<footer>", "<header>"], answer: "<aside>" },
  { question: "Which semantic tag contains copyright information?", options: ["<header>", "<footer>", "<nav>", "<section>"], answer: "<footer>" },
  { question: "Which tag highlights text?", options: ["<mark>", "<time>", "<code>", "<figcaption>"], answer: "<mark>" },
  { question: "Which tag defines machine-readable date/time?", options: ["<date>", "<time>", "<datetime>", "<clock>"], answer: "<time>" },
  { question: "Which tag defines a caption for images or charts?", options: ["<figure>", "<figcaption>", "<image>", "<caption>"], answer: "<figcaption>" },
  { question: "What does CSS stand for?", options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style System", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
  { question: "Which property defines space inside the border?", options: ["margin", "padding", "border", "content"], answer: "padding" },
  { question: "Which property defines space outside the border?", options: ["margin", "padding", "border", "width"], answer: "margin" },
  { question: "Which CSS rule prevents padding from increasing width?", options: ["box-layout", "box-sizing:border-box", "border-layout", "padding-limit"], answer: "box-sizing:border-box" },
  { question: "Which layout system is 1D (row or column)?", options: ["Grid", "Flexbox", "Float", "Table"], answer: "Flexbox" },
  { question: "Which layout system is 2D (rows and columns)?", options: ["Flexbox", "Float", "Grid", "Inline"], answer: "Grid" },
  { question: "Which CSS property aligns items horizontally in Flexbox?", options: ["align-items", "justify-content", "align-content", "place-items"], answer: "justify-content" },
  { question: "Which property aligns items vertically in Flexbox?", options: ["justify-items", "align-items", "justify-content", "flex-grow"], answer: "align-items" },
  { question: "Which CSS feature allows reuse of values?", options: ["CSS functions", "CSS variables", "CSS loops", "CSS constants"], answer: "CSS variables" },
  { question: "Which syntax defines a CSS variable?", options: ["$color:red", "--color:red", "var=color", "@color:red"], answer: "--color:red" },
  { question: "Responsive design means:", options: ["Website works only on mobile", "Website adapts to different screen sizes", "Website loads faster", "Website uses JavaScript"], answer: "Website adapts to different screen sizes" },
  { question: "Which tag is required for responsive design?", options: ["viewport meta tag", "header tag", "title tag", "style tag"], answer: "viewport meta tag" },
  { question: "Which CSS technique enables responsive design?", options: ["Media Queries", "CSS Variables", "CSS Grid", "Flexbox"], answer: "Media Queries" },
  { question: "Which unit is commonly used for fluid layouts?", options: ["px", "%", "pt", "cm"], answer: "%" },
  { question: "Which CSS rule makes images responsive?", options: ["img {width:100%}", "img {max-width:100%; height:auto}", "img {display:block}", "img {flex:1}"], answer: "img {max-width:100%; height:auto}" },
  { question: "Bootstrap is a:", options: ["JavaScript framework", "CSS framework", "Programming language", "Database"], answer: "CSS framework" },
  { question: "Bootstrap grid system is based on:", options: ["10 columns", "12 columns", "16 columns", "24 columns"], answer: "12 columns" },
  { question: "Which class creates a Bootstrap button?", options: [".button", ".btn", ".bootstrap-btn", ".button-primary"], answer: ".btn" },
  { question: "Which component organizes Bootstrap layout?", options: ["container", "row", "col", "all of the above"], answer: "all of the above" },
  { question: "React Bootstrap replaces Bootstrap JavaScript with:", options: ["jQuery", "Angular", "React components", "Vue"], answer: "React components" },
  { question: "SPA stands for:", options: ["Single Page Application", "System Page Application", "Secure Page Application", "Simple Page Access"], answer: "Single Page Application" },
  { question: "Which framework commonly builds SPAs?", options: ["React", "Angular", "Vue", "All of the above"], answer: "All of the above" },
  { question: "In an SPA navigation:", options: ["reloads the page", "loads new HTML page", "updates content dynamically", "reloads server"], answer: "updates content dynamically" },
  { question: "Which rendering is used in SPAs?", options: ["Server-side rendering", "Client-side rendering", "Static rendering", "Hybrid rendering"], answer: "Client-side rendering" },
  { question: "Which is an example of SPA?", options: ["Gmail", "Facebook", "Netflix", "All of the above"], answer: "All of the above" },
  { question: "React applications are built using:", options: ["modules", "components", "packages", "controllers"], answer: "components" },
  { question: "Which is the modern React component type?", options: ["Class component", "Function component", "Template component", "Static component"], answer: "Function component" },
  { question: "Which hook manages state in functional components?", options: ["useEffect", "useState", "useData", "useRender"], answer: "useState" },
  { question: "Which lifecycle method runs after mounting?", options: ["componentDidMount", "componentUpdate", "componentInit", "componentCreate"], answer: "componentDidMount" },
  { question: "Hooks were introduced in:", options: ["React 15", "React 16.8", "React 17", "React 18"], answer: "React 16.8" },
  { question: "How many lifecycle phases exist?", options: ["2", "3", "4", "5"], answer: "3" },
  { question: "Which lifecycle phase creates the component?", options: ["Mounting", "Updating", "Unmounting", "Rendering"], answer: "Mounting" },
  { question: "Which lifecycle method renders JSX?", options: ["constructor", "render", "update", "mount"], answer: "render" },
  { question: "Which lifecycle method runs after updating?", options: ["componentDidUpdate", "componentDidMount", "componentWillUnmount", "shouldComponentUpdate"], answer: "componentDidUpdate" },
  { question: "Which method runs before removing component?", options: ["componentWillUnmount", "componentDidMount", "componentUpdate", "componentWillStart"], answer: "componentWillUnmount" },
  { question: "Hooks allow functional components to use:", options: ["state", "lifecycle", "side effects", "all of the above"], answer: "all of the above" },
  { question: "Which hook handles side effects?", options: ["useState", "useEffect", "useContext", "useReducer"], answer: "useEffect" },
  { question: "Which hook accesses context values?", options: ["useContext", "useData", "useProps", "useEffect"], answer: "useContext" },
  { question: "Redux is used for:", options: ["UI rendering", "state management", "database access", "routing"], answer: "state management" },
  { question: "Redux follows which architecture?", options: ["MVC", "Flux", "MVVM", "Layered"], answer: "Flux" },
  { question: "The Redux store:", options: ["holds application state", "stores components", "manages routing", "runs API"], answer: "holds application state" },
  { question: "Actions in Redux are:", options: ["functions", "objects", "arrays", "classes"], answer: "objects" },
  { question: "Reducers are:", options: ["pure functions", "classes", "APIs", "hooks"], answer: "pure functions" },
  { question: "REST stands for:", options: ["Remote Execution State Transfer", "Representational State Transfer", "Reactive Server Transfer", "Resource System Transfer"], answer: "Representational State Transfer" },
  { question: "Which HTTP method retrieves data?", options: ["POST", "GET", "PUT", "DELETE"], answer: "GET" },
  { question: "Which HTTP method creates data?", options: ["GET", "POST", "DELETE", "PATCH"], answer: "POST" },
  { question: "HTTP status code 200 means:", options: ["Error", "Unauthorized", "Success", "Redirect"], answer: "Success" },
  { question: "Which component wraps the router?", options: ["BrowserRouter", "Route", "Link", "Navigate"], answer: "BrowserRouter" },
  { question: "Which component defines URL mapping?", options: ["Route", "Router", "Switch", "Link"], answer: "Route" },
  { question: "Which component navigates without page reload?", options: ["Link", "Anchor tag", "Redirect", "Route"], answer: "Link" }
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const progressEl = document.getElementById("progress");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const scoreTextEl = document.getElementById("score-text");
const restartBtn = document.getElementById("restart-btn");

let currentIndex = 0;
let score = 0;
let selectedOption = null;
let answered = false;

function loadQuestion() {
  const currentQuestion = quizData[currentIndex];
  progressEl.textContent = `Question ${currentIndex + 1} / ${quizData.length}`;
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";
  selectedOption = null;
  answered = false;
  nextBtn.textContent = currentIndex === quizData.length - 1 ? "Finish" : "Next";

  currentQuestion.options.forEach((optionText) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.textContent = optionText;

    button.addEventListener("click", () => {
      if (answered) return;
      selectedOption = optionText;
      [...optionsEl.children].forEach((optionButton) => optionButton.classList.remove("selected"));
      button.classList.add("selected");
    });

    optionsEl.appendChild(button);
  });
}

function showAnswerFeedback() {
  const currentQuestion = quizData[currentIndex];
  const optionButtons = [...optionsEl.children];

  optionButtons.forEach((button) => {
    const isCorrect = button.textContent === currentQuestion.answer;

    if (isCorrect) {
      button.classList.add("correct");
    }

    if (button.textContent === selectedOption && !isCorrect) {
      button.classList.add("wrong");
    }

    button.disabled = true;
  });
}

function handleNext() {
  if (!selectedOption || answered) {
    return;
  }

  const currentQuestion = quizData[currentIndex];
  if (selectedOption === currentQuestion.answer) {
    score += 1;
  }

  answered = true;
  showAnswerFeedback();

  setTimeout(() => {
    currentIndex += 1;

    if (currentIndex < quizData.length) {
      loadQuestion();
    } else {
      showResult();
    }
  }, 600);
}

function showResult() {
  const percentage = ((score / quizData.length) * 100).toFixed(2);
  document.getElementById("question-container").classList.add("hidden");
  nextBtn.classList.add("hidden");
  resultEl.classList.remove("hidden");
  progressEl.textContent = `Question ${quizData.length} / ${quizData.length}`;
  scoreTextEl.textContent = `You scored ${score} out of ${quizData.length} (${percentage}%).`;
}

function restartQuiz() {
  currentIndex = 0;
  score = 0;
  selectedOption = null;
  answered = false;
  document.getElementById("question-container").classList.remove("hidden");
  nextBtn.classList.remove("hidden");
  resultEl.classList.add("hidden");
  loadQuestion();
}

nextBtn.addEventListener("click", handleNext);
restartBtn.addEventListener("click", restartQuiz);

loadQuestion();
