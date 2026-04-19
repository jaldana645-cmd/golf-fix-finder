const golfData = {
  Slice: {
    causes: ["Open clubface", "Outside-in swing path"],
    drills: ["Strengthen your grip", "Alignment stick drill"],
    video: "yPH3skcNkeA",
    link: "https://www.youtube.com/watch?v=yPH3skcNkeA"
  },

  Hook: {
    causes: ["Closed clubface at impact", "Inside-out swing path"],
    drills: ["Weaken your grip slightly", "Control swing path"],
    video: "EndU64gWnAQ",
    link: "https://www.youtube.com/watch?v=EndU64gWnAQ"
  },

  Push: {
    causes: ["Open clubface", "Swing path too inside"],
    drills: ["Square the face earlier", "Neutral swing path"],
    video: "eGA6J43Go8A",
    link: "https://www.youtube.com/watch?v=eGA6J43Go8A"
  },

  Pull: {
    causes: ["Over-the-top swing", "Closed face relative to path"],
    drills: ["Shallow downswing", "Pause at top drill"],
    video: "5egUKiYnwPg",
    link: "https://www.youtube.com/watch?v=5egUKiYnwPg"
  },

  Chunk: {
    causes: ["Ball too far back", "Too steep downswing"],
    drills: ["Move ball forward", "Shallow swing drill"],
    video: "cFkP8SdEnww",
    link: "https://www.youtube.com/watch?v=cFkP8SdEnww"
  },

  Top: {
    causes: ["Standing up through impact", "Lifting your head"],
    drills: ["Stay down drill", "Slow tempo swings"],
    video: "M5WG-GHHMFo",
    link: "https://www.youtube.com/watch?v=M5WG-GHHMFo"
  },

  "Loss of Distance": {
    causes: ["Off-center contact", "Low swing speed"],
    drills: ["Center strike drill", "Speed training"],
    video: "ZUsN-5q_bO8",
    link: "https://www.youtube.com/watch?v=ZUsN-5q_bO8"
  },

  "Too Much Spin": {
    causes: ["Too much loft", "Steep angle of attack"],
    drills: ["Forward shaft lean", "Shallow strike"],
    video: "mCrdlpBua6I",
    link: "https://www.youtube.com/watch?v=mCrdlpBua6I"
  }
};

function getFix() {
  const issue = document.getElementById("issue").value;
  const result = document.getElementById("result");

  if (!issue || !golfData[issue]) {
    result.innerHTML = "Please select a valid issue.";
    return;
  }

  const data = golfData[issue];
  const thumbnail = `https://img.youtube.com/vi/${data.video}/hqdefault.jpg`;

  result.innerHTML = `
    <div class="card">
      <h2>${issue}</h2>

      <h3>Possible Causes</h3>
      <ul>
        ${data.causes.map(c => `<li>${c}</li>`).join("")}
      </ul>

      <h3>Drills</h3>
      <ul>
        ${data.drills.map(d => `<li>${d}</li>`).join("")}
      </ul>

      <h3>Watch This</h3>

      <a href="${data.link}" target="_blank" class="video-link">
        <div class="video-thumbnail">
          <img src="${thumbnail}" alt="Video thumbnail">
          <div class="play-button"></div>
        </div>
      </a>
    </div>
  `;
}
