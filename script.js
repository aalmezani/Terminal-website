// Listen for form submissions
document
  .getElementById("terminal")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    // Get the command input and clear the input field
    let input = document.getElementById("command-input");
    let command = input.value;
    input.value = "";

    // Create a new element for the command and output
    let commandElement = document.createElement("div");
    commandElement.innerHTML = `<p class="prompt">Ahmed@portfolio:~$ </p><p class="commandValue">${command}</p>`;

    // Execute the command and output the result
    let output = document.getElementById("output");

    // You can add your own command handling logic here
    switch (command) {
      case "about":
        commandElement.innerHTML +=
          "<p>My name is Ahmed AlMezani and I am a fresh IT graduate. I have a strong interest in programming and cybersecurity. I have always been fascinated by the power of code and the ability to use it to solve complex problems and build innovative solutions. I am constantly learning new programming languages and technologies, and I enjoy staying up to date with the latest trends and developments in the field. In addition, I am highly interested in cybersecurity and the ways in which I can use my knowledge and skills to protect individuals, organizations, and society as a whole from cyber threats. Overall, I am passionate about using my expertise in IT to make a positive impact in the world.</p>";
        break;
      case "hello":
        commandElement.innerHTML +=
          "<p>Hi and welcome to my personal portfolio website. Feel free to use the help command to see possible commands.</p>";
        break;
      case "projects":
        commandElement.innerHTML += "<p>Some of my projects include:</p>";
        commandElement.innerHTML +=
          "<ul><li>Project 1: My personal Website. I am always working to make it better</li><li>Project 2: an Online CV maker, still in its planning stage.</li><li>Project 3: Crypto trading bot. I have a working prototype but it still needs more work.</li></ul>";
        break;
      case "contact":
        commandElement.innerHTML += "<h2>Contact</h2>";
        commandElement.innerHTML += "<p>Email: aalmezani96@gmail.com</p>";
        commandElement.innerHTML += "<p></p>";
        break;
      case "help":
        commandElement.innerHTML += "<p>Commands:</p>";
        commandElement.innerHTML +=
          "<ul><li>about</li><li>projects</li><li>certs</li><li>contact</li><li>help</li></ul>";
        break;
      case "certs":
        commandElement.innerHTML += "<p>Certificates:</p>";
        commandElement.innerHTML +=
          "<ul><li>iELTS acedemic overall band score: 8</li></ul>";
        commandElement.innerHTML += "<p>Currently studying for:</p>";
        commandElement.innerHTML +=
          "<ol><li>Comptia Security+</li><li>Comptia A+</li><li>Comptia Network+</li></ol>";
        break;
      default:
        commandElement.innerHTML +=
          '<p>Invalid command. Type "help" for more information.</p>';
    }

    // Display the command and output in the terminal
    output.appendChild(commandElement);

    // Keep only the last three commands in the terminal
    while (output.childNodes.length > 3) {
      output.removeChild(output.firstChild);
    }

    // Scroll the terminal to the bottom
    output.scrollTop = output.scrollHeight;
  });
