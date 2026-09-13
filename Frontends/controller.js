// =====================================
// ROBO DOG CONTROLLER
// =====================================

const API_URL =
    "http://127.0.0.1:5000/api/robot";


// =====================================
// SEND ROBOT COMMAND
// =====================================

async function sendRobotCommand(command) {

    try {

        const response = await fetch(
            `${API_URL}/${command}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                }
            }
        );


        const data =
            await response.json();


        console.log(
            "Robot Response:",
            data
        );


        if (response.ok) {

            let message = "";


            if (command === "forward") {

                message =
                    "🤖 RoboDog is moving Forward 🚀";

            }

            else if (command === "backward") {

                message =
                    "🤖 RoboDog is moving Backward 🔄";

            }

            else if (command === "left") {

                message =
                    "🤖 RoboDog is turning Left ◀️";

            }

            else if (command === "right") {

                message =
                    "🤖 RoboDog is turning Right ▶️";

            }

            else if (command === "stop") {

                message =
                    "🛑 RoboDog has stopped.";

            }

            else {

                message =
                    `🤖 Command: ${command}`;

            }


            showMessage(message);


        }

        else {

            showMessage(
                data.message ||
                "Command failed.",
                true
            );

        }

    }

    catch (error) {

        console.error(
            "Robot Command Error:",
            error
        );


        showMessage(
            "❌ Cannot connect to server.",
            true
        );

    }

}



// =====================================
// SHOW MESSAGE
// =====================================

function showMessage(
    text,
    error = false
) {

    const message =
        document.getElementById(
            "controllerMessage"
        );


    if (!message) {

        console.error(
            "controllerMessage not found!"
        );

        return;

    }


    message.textContent = text;


    if (error) {

        message.style.color =
            "#dc2626";

        message.style.background =
            "#fef2f2";

        message.style.borderColor =
            "#fecaca";

    }

    else {

        message.style.color =
            "#2563eb";

        message.style.background =
            "#f5f8ff";

        message.style.borderColor =
            "#bfdbfe";

    }

}



// =====================================
// FORWARD
// =====================================

document
    .getElementById("forwardBtn")
    ?.addEventListener(
        "click",
        function () {

            sendRobotCommand(
                "forward"
            );

        }
    );



// =====================================
// BACKWARD
// =====================================

document
    .getElementById("backwardBtn")
    ?.addEventListener(
        "click",
        function () {

            sendRobotCommand(
                "backward"
            );

        }
    );



// =====================================
// LEFT
// =====================================

document
    .getElementById("leftBtn")
    ?.addEventListener(
        "click",
        function () {

            sendRobotCommand(
                "left"
            );

        }
    );



// =====================================
// RIGHT
// =====================================

document
    .getElementById("rightBtn")
    ?.addEventListener(
        "click",
        function () {

            sendRobotCommand(
                "right"
            );

        }
    );



// =====================================
// STOP
// =====================================

document
    .getElementById("stopBtn")
    ?.addEventListener(
        "click",
        function () {

            sendRobotCommand(
                "stop"
            );

        }
    );