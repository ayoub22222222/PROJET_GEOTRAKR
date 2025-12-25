const form = document.querySelector(".form-event");

const eventSelect = document.getElementById("list-options");
const cadenceInput = document.getElementById("cadence");
const elevationInput = document.getElementById("elevation");
const coursee = document.getElementById("coursee");
const bikee = document.getElementById("bikee");

cadenceInput.style.display = "none";
elevationInput.style.display = "none";
coursee.style.display = "none";
bikee.style.display = "none";

eventSelect.addEventListener("change", function () {
    if (this.value === "Course") {
        cadenceInput.style.display = "block";
        elevationInput.style.display = "none";
    } 
    else if (this.value === "Vélo") {
        cadenceInput.style.display = "none";
        elevationInput.style.display = "block";
    } 
    else {
        cadenceInput.style.display = "none";
        elevationInput.style.display = "none";
    }
});


form.addEventListener("submit", function (e) {
  e.preventDefault(); 

  const distance = Number(form.distance.value);
  const duration = Number(form.duration.value);

  if (!eventSelect.value || !distance || !duration) {
    alert("Veuillez remplir tous les champs obligatoires");
    return;
  }
  if (eventSelect.value === "Course") {
    const cadence = Number(form.cadence.value);
    const pace = (duration / distance).toFixed(1);

    document.querySelector("#course-distance .n-dis").textContent = distance;
    document.querySelector("#course-duration .n-dis").textContent = duration;
    document.querySelector("#course-pace .n-dis").textContent = pace;
    document.querySelector("#course-cadence .n-dis").textContent = cadence;
    coursee.style.display = "block";

  }else if (eventSelect.value === "Vélo") {
    const elevation = Number(form.elevation.value);
    const speed = ((distance / duration) * 60).toFixed(1);

    document.querySelector("#bike-distance .n-dis").textContent = distance;
    document.querySelector("#bike-duration .n-dis").textContent = duration;
    document.querySelector("#bike-speed .n-dis").textContent = speed;
    document.querySelector("#bike-elevation .n-dis").textContent = elevation;
    bikee.style.display = "block";
  }
  form.reset();
});