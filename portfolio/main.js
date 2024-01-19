import Typewriter from "typewriter-effect/dist/core";
var form = document.getElementById("form");

// Handle submit function handles the form submission
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);

// typewriter effect
new Typewriter("#words", {
  strings: ["Full Stack Developer", "Problem Solver"],
  autoStart: true,
  loop: true,
});

// create tech stack
// const techStack = [
//   "JavaScript",
//   "React",
//   "Next.js",
//   "Node.js",
//   "Typescript",
//   "HTML",
//   "CSS",
//   "PostgreSQL",
//   "Express",
//   "Jest",
//   "Vitest",
//   "Playwright",
// ];

// get the image from the dom

const techStack = {
  javascript: {
    name: "JavaScript",
    image: "./images/javascript.png",
  },
  react: {
    name: "React",
    image: "./images/react.png",
  },
};
console.log(techStack);

function append() {
  const techContainer = document.getElementById("techContainer");
  const techArray = Object.values(techStack);
  techArray.map((tech) => {
    const techImg = document.createElement("img");
    techImg.src = tech.image;
    console.log(tech);
    techContainer.appendChild(techImg);
  });
}

append();

// function append() {
//   const page = document.getElementById("append");

//   techStack.map((tech) => {
//     const h1Element = document.createElement("h1");
//     h1Element.textContent = tech;
//     page.appendChild(h1Element);
//   });
// }
// append();
