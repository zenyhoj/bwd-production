let h1 = document.querySelector("h1");

const pi = 3.1417;
const radius = 31.98;
const ftToMeters = 3.28;
const cuFtTocuM = 0.028;
const tankVolume = 2000;

document.querySelector(".calculate").addEventListener("click", function () {
  let inputQ = Number(document.querySelector("#discharge").value);
  let height = Number(document.querySelector("#tank-height").value);

  let timeToFill = (q, tankHeight) => {
    let waterInTank = pi * radius ** 2 * (tankHeight * ftToMeters) * cuFtTocuM;
    let totalHoursNeeded = (tankVolume - waterInTank) / (q * 3.6);
    return Math.ceil(totalHoursNeeded);
  };
  let text = document.createTextNode(
    `Time needed to fill with reservoir level at ${height}m: ${timeToFill(
      inputQ,
      height
    )} hours`
  );

  let existingH2 = document.querySelector("h2");
  if (existingH2) {
    existingH2.remove();
  }

  let newH2 = document.createElement("h2");
  newH2.classList.add("h2");

  newH2.appendChild(
    !inputQ || !height
      ? document.createTextNode("Please provide a proper value")
      : text
  );

  h1.insertAdjacentElement("afterend", newH2);
});
