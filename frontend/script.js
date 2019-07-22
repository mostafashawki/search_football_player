//run the local server before uncomment
// const archive_api = "http://localhost:8899/";
// const profile_api = "http://localhost:9988/";
const archive_api = "https://ofa.datenschutzstarter.de/";
const profile_api = "https://ofp.datenschutzstarter.de/";
const btnLoading = `<button disabled style="width: 100%;"><i class="fas fa-spinner fa-spin"></i></button>`;
const btnSubmit = `<input type="submit" />`;

function searchMode() {
  const el = document.getElementById("seachBox");
  el.style.display = "";
  document.getElementById("mainBtn").style.display = "none";
}

function handleSubmit() {
  const divButton = document.getElementById("divButton");
  const divResult = document.getElementById("result");
  const divImage = document.getElementById("divImage");
  const divProfile = document.getElementById("divProfile");
  const divMessage = document.getElementById("message");
  const divFirstRow = document.getElementById("divFirstRow");
  divButton.innerHTML = btnLoading;
  divMessage.innerText = "";
  divFirstRow.style.display = "none";

  const url = archive_api + document.getElementById("player").value;
  //two sequential fetch requests
  fetch(url, { method: "GET" })
    .then(res => res.json())
    .then(archive => {
      console.log(archive);
      if (archive) return fetch(profile_api + archive.profileId);
      else {
        const error = "the player is not available!";
        divMessage.style.display = "";
        divMessage.innerText = error;
        divButton.innerHTML = btnSubmit;
        divImage.innerHTML = "";
        divProfile.innerHTML = "";
        throw new Error(error);
      }
    })
    .then(res => res.json())
    .then(data => {
      console.log("final result :) ", data);
      divMessage.innerText = "";
      divMessage.style.display = "none";
      divFirstRow.style.display = "block";
      divButton.innerHTML = btnSubmit;
      divImage.innerHTML = `
      <img src="${data.profile.picture}" />
      `;
      divProfile.innerHTML = `
      <br>
      <p>Id: <strong>${data.id}</strong></p>
      <p>Active: <strong>True</strong></p><br><hr/>
      <p>Age: <strong>${data.profile.age}</strong></p>
      <p>Role: <strong>${data.profile.role}</strong></p>
      <p>Team: <strong>${data.profile.team}</strong></p>
      `;
    })
    .catch(err => {
      console.log(err);
    });
}
document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();
});
