
const animationTimeline = () => {
  // Spit chars that needs to be animated individually
  const textBoxChars = document.getElementsByClassName("hbd-chatbox")[0];
  const hbd = document.getElementsByClassName("wish-hbd")[0];

  textBoxChars.innerHTML = `<span>${textBoxChars.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  hbd.innerHTML = `<span>${hbd.innerHTML
    .split("")
    .join("</span><span>")}</span`;

  const ideaTextTrans = {
    opacity: 0,
    y: -20,
    rotationX: 5,
    skewX: "15deg"
  };

  const ideaTextTransLeave = {
    opacity: 0,
    y: 20,
    rotationY: 5,
    skewX: "-15deg"
  };

  const tl = new TimelineMax();

  tl
    .to(".container", 0.1, {
      visibility: "visible"
    })
    .from(".one", 0.7, {
      opacity: 0,
      y: 10
    })
    .to(
      ".one",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=.5"
    )
    .from(".two", 0.7, {
      opacity: 0,
      y: 10
    })
    .to(
      ".two",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=.5"
    )
    .from(".three", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".three",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=.5"
    )
    .from(".three1", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".three1",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=.5"
    )
    .from(".four", 0.7, {
      scale: 0.2,
      opacity: 0
    })
    .from(".fake-btn", 0.3, {
      scale: 0.2,
      opacity: 0
    })
    .staggerTo(
      ".hbd-chatbox span",
      0.5,
      {
        visibility: "visible"
      },
      0.05
    )
    .to(".fake-btn", 0.1, {
      backgroundColor: "rgb(127, 206, 248)"
    })
    .to(
      ".four",
      0.5,
      {
        scale: 0.2,
        opacity: 0,
        y: -150
      },
      "+=1"
    )
    .from(".idea-1", 0.7, ideaTextTrans)
    .to(".idea-1", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-2", 0.7, ideaTextTrans)
    .to(".idea-2", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-3", 0.7, ideaTextTrans)
    .to(".idea-3 strong", 0.5, {
      scale: 1.2,
      x: 10,
      backgroundColor: "rgb(21, 161, 237)",
      color: "#fff"
    })
    .to(".idea-3", 0.7, ideaTextTransLeave, "+=1.5")
    .from(".idea-4", 0.7, ideaTextTrans)
    .to(".idea-4", 0.7, ideaTextTransLeave, "+=1.5")
    .from(
      ".idea-5",
      0.7,
      {
        rotationX: 15,
        rotationZ: -10,
        skewY: "-5deg",
        y: 50,
        z: 10,
        opacity: 0
      },
      "+=0.5"
    )
    .to(
      ".idea-5 span",
      0.7,
      {
        rotation: 90,
        x: 8
      },
      "+=0.4"
    )
    .to(
      ".idea-5",
      0.7,
      {
        scale: 0.2,
        opacity: 0
      },
      "+=2"
      )
    .from(".a", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".a",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".b", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".b",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".c", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".c",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".d", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".d",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".e", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".e",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".f", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".f",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".g", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".g",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".h", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".h",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".i", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".i",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".j", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".j",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".k", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".k",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".l", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".l",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".m", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".m",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".n", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".n",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".o", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".o",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=3"
    )
    .from(".p", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".p",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".q", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".q",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=3"
    )
    .from(".r", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".r",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=3"
    )
    .from(".s", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".s",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".t", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".t",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=3"
    )
    .from(".u", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".u",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".v", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".v",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=4"
    )
    .from(".w", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".w",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=3"
    )
    .from(".x", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".x",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".y", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".y",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=3"
    )
    .from(".z", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".z",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=2"
    )
    .from(".a1", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".a1",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=3"
    )
    .from(".b1", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".b1",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".c1", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".c1",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".d1", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".d1",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".e1", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".e1",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".f1", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".f1",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".g1", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".g1",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".h1", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".h1",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".i1", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".i1",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".j1", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".j1",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".k1", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".k1",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    .from(".l1", 0.7, {
      opacity: 0,
      y: 10
      // scale: 0.7
    })
    .to(
      ".l1",
      0.7,
      {
        opacity: 0,
        y: 10
      },
      "+=1"
    )
    
    .staggerFrom(
      ".idea-6 span",
      0.8,
      {
        scale: 1,
        opacity: 0,
        rotation: 1,
        ease: Expo.easeOut
      },
      0.2
    )
    .staggerTo(
      ".idea-6 span",
      0.8,
      {
        scale: 1,
        opacity: 0,
        rotation: -1,
        ease: Expo.easeOut
      },
      0.2,
      "+=1"
    )
    .staggerFromTo(
      ".baloons img",
      2.5,
      {
        opacity: 0.9,
        y: 1400
      },
      {
        opacity: 1,
        y: -1000
      },
      0.2
    )
    .from(
      ".lydia-dp",
      0.5,
      {
        scale: 3.5,
        opacity: 0,
        x: 25,
        y: -25,
        rotationZ: -45
      },
      "-=2"
    )
    .staggerFrom(
      ".wish-hbd span",
      0.7,
      {
        opacity: 0,
        y: -50,
        // scale: 0.3,
        rotation: 150,
        skewX: "30deg",
        ease: Elastic.easeOut.config(1, 0.5)
      },
      0.1
    )
    .staggerFromTo(
      ".wish-hbd span",
      0.7,
      {
        scale: 1.4,
        rotationY: 150
      },
      {
        scale: 1,
        rotationY: 0,
        color: "#ff69b4",
        ease: Expo.easeOut
      },
      0.1,
      "party"
    )
    .from(
      ".wish h5",
      0.5,
      {
        opacity: 0,
        y: 10,
        skewX: "-15deg"
      },
      "party"
    )
    .staggerTo(
      ".eight svg",
      1.5,
      {
        visibility: "visible",
        opacity: 0,
        scale: 80,
        repeat: 3,
        repeatDelay: 1.4
      },
      0.3
    )
    .to(".six", 0.5, {
      opacity: 0,
      y: 30,
      zIndex: "-1"
    })
    .staggerFrom(".nine p", 1, ideaTextTrans, 1.2)
    .to(
      ".last-smile",
      0.5,
      {
        rotation: 90
      },
      "+=1"
    );

  // tl.seek("currentStep");
  // tl.timeScale(2);

  // Restart Animation on click
  const replyBtn = document.getElementById("replay");
  replyBtn.addEventListener("click", () => {
    tl.restart();
  });
};

// Import the data to customize and insert them into page
const fetchData = () => {
  fetch("customize.json")
    .then(data => data.json())
    .then(data => {
      Object.keys(data).map(customData => {
        if (data[customData] !== "") {
          if (customData === "imagePath") {
            document
              .getElementById(customData)
              .setAttribute("src", data[customData]);
          } else {
            document.getElementById(customData).innerText = data[customData];
          }
        }
      });
    });
};

// Run fetch and animation in sequence
const resolveFetch = () => {
  return new Promise((resolve, reject) => {
    fetchData();
    resolve("Fetch done!");
  });
};

resolveFetch().then(animationTimeline());
