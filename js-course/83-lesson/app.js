var level = 2;

const mouseLegCount = 4;
const zombieLegCount = 2;

// Жишээ const -ын хэрэглээ: хүний төрсөн оныг өөрчилж болохгүй
const birthDate = 1995;

// Жишээ let -ын хэрэглээ: {} хаалтнаас гадна ажиллахгүй
{
  {
    var a = 1;
    let b = 1;
    const c = 1;
  }
  console.log("a = ", a);
  // console.log("b = ", b);
  // sconsole.log("c = ", c);
}

if (level === 1) {
  let mouse = 200;
  console.log(mouseLegCount + " хөлтэй " + mouse + " ш хулганууд дайрлаа ");
} else if (level === 2) {
  // zombieLegCount = 3;
  // const zombie = 1500;
  let zombie = 1500;
  zombie = zombie - 1;

  console.log(zombieLegCount + " хөлтэй " + zombie + " ш зомби дайрлаа...");
}
