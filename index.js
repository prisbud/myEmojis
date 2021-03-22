const myEmojis = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emojiContainer");
const btnEmoji = document.getElementById("push-btn");
const inputEmoji = document.getElementById("emoji-input");
const unshiftBtn = document.getElementById("unshift-btn");

function renderEmojis() {
  emojiContainer.innerHTML = "";

  for (let i = 0; i < myEmojis.length; i++) {
    //console.log(myEmojis[i]);
    const emoji = document.createElement("span");
    emoji.textContent = myEmojis[i];
    emojiContainer.appendChild(emoji);
  }
}

renderEmojis();

btnEmoji.addEventListener("click", function () {
  if (inputEmoji.value) {
    console.log("emoji added");
    myEmojis.push(inputEmoji.value);
    inputEmoji.value = "";

    renderEmojis();
  }
});

unshiftBtn.addEventListener("click", function () {
  if (inputEmoji.value) {
    console.log("shift button");
    myEmojis.unshift(inputEmoji.value);
    inputEmoji.value = "";

    renderEmojis();
  }
});

const popBtn = document.getElementById("pop-btn");
popBtn.addEventListener("click", function () {
  myEmojis.pop();
  renderEmojis();
});

const shiftbtn = document.getElementById("shift-btn");
shiftbtn.addEventListener("click", function () {
  myEmojis.shift();
  renderEmojis();
});
