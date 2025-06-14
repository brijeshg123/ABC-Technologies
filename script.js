function EvaluateSysInfo() {
  // 2. Get selected RAM from dropdown
  const ram = document.getElementById('ram').value;
  // 3. Get selected CPU from dropdown
  const cpu = document.getElementById('cpu').value;

  // Get reference to the button to update visualization
  const button = document.querySelector('button');

  // 4. If RAM < 4GB
  if (ram === 4) {
    // Display “Insufficient Resources”
    button.textContent = "Insufficient Resources";
    // Change button to color red (visualization update)
    button.style.backgroundColor = "red";
    button.style.color = "#ffffff";
  }
  // 5. Else if CPU < 4 Cores
  else if (cpu === "2 Cores") {
    // Display “Insufficient Resources”
    button.textContent = "Insufficient Resources";
    // Change button to color red (visualization update)
    button.style.backgroundColor = "red";
    button.style.color = "#ffffff";
  }
  // 6. Else (resources are sufficient)
  else {
    // Display “Sufficient Resources”
    button.textContent = "Sufficient Resources";
    // Change button to color green (visualization update)
    button.style.backgroundColor = "green";
    button.style.color = "#ffffff";
  }
}
