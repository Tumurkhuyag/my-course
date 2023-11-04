function interviewQuestion(job) {
  if (job === "programmer") {
    return function (name) {
      document.getElementById(name).textContent =
        name + ", Та prototype гэж юу болохыг мэдэх үү?";
    };
  } else if (job === "teacher") {
    return function (name) {
      document.getElementById(name).textContent =
        name + ", Та ямар хичээл зааж чадах вэ?";
    };
  } else if (job === "designer") {
    return function (name) {
      document.getElementById(name).textContent =
        name + ", Та figma shortcut -уудыг хэр сайн ашигладаг вэ?";
    };
  }
}

var programmerQuestion = interviewQuestion("programmer");
var teacherQuestion = interviewQuestion("teacher");
var designerQuestion = interviewQuestion("designer");

programmerQuestion("Tom");
teacherQuestion("Ikhee");
interviewQuestion("designer")("Uno");
