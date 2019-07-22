const theme1 = {
  ["--theme-color"]: "#a11f21",
  ["--showcase"]: 'url("./img/showcase1.jpg") no-repeat center center fixed'
};

const theme2 = {
  ["--theme-color"]: "#41ae51",
  ["--showcase"]: 'url("./img/showcase2.jpg") no-repeat center center fixed'
};

let themeToApply = theme2;

function changeTheme() {
  document.body.style.setProperty(
    "--theme-color",
    themeToApply["--theme-color"]
  );
  document.body.style.setProperty("--showcase", themeToApply["--showcase"]);

  if (themeToApply === theme1) themeToApply = theme2;
  else themeToApply = theme1;
}

function goList() {
  console.log("go list work");
  document.getElementsByClassName("row")[0].style = "flex: 0 0 100%;";
}

function goGrid() {
  console.log("go list work");
  document.getElementsByClassName("row")[0].style = "";
  document.getElementById("divImage").style.width = "30%";
  document.getElementById("divProfile").style.width = "70%";
}
