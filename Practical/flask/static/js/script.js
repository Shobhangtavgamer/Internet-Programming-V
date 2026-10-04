document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector("form");
    const submitButton = document.querySelector(".submit-btn");

    if (!form) return;


    /* PHONE VALIDATION */

    const phoneInputs = document.querySelectorAll(
        'input[type="tel"]'
    );

    phoneInputs.forEach(input => {

        input.addEventListener("input", () => {

            input.value = input.value.replace(/\D/g, "");

            if (input.value.length > 10) {
                input.value = input.value.slice(0, 10);
            }

        });

    });


    /* PINCODE VALIDATION */

    const pincode = document.querySelector(
        'input[name="pincode"]'
    );

    if (pincode) {

        pincode.addEventListener("input", () => {

            pincode.value =
                pincode.value.replace(/\D/g, "");

            if (pincode.value.length > 6) {
                pincode.value =
                    pincode.value.slice(0, 6);
            }

        });

    }


    /* FORM SUBMISSION */

    form.addEventListener("submit", (event) => {

        const phone =
            document.querySelector('input[name="phone"]');

        const guardianPhone =
            document.querySelector(
                'input[name="guardian_phone"]'
            );


        /* Check phone */

        if (phone && phone.value.length !== 10) {

            event.preventDefault();

            alert("Please enter a valid 10-digit phone number.");

            phone.focus();

            return;

        }


        /* Check guardian phone */

        if (
            guardianPhone &&
            guardianPhone.value.length !== 10
        ) {

            event.preventDefault();

            alert(
                "Please enter a valid 10-digit guardian phone number."
            );

            guardianPhone.focus();

            return;

        }


        /* Check pincode */

        if (
            pincode &&
            pincode.value.length !== 6
        ) {

            event.preventDefault();

            alert("Please enter a valid 6-digit pincode.");

            pincode.focus();

            return;

        }


        /* Loading animation */

        if (submitButton) {

            submitButton.classList.add("loading");

            submitButton.innerHTML =
                "Submitting Registration...";

        }

    });


    /* INPUT ANIMATION */

    const inputs =
        document.querySelectorAll(
            "input, select, textarea"
        );

    inputs.forEach(input => {

        input.addEventListener("focus", () => {

            input.parentElement.classList.add(
                "focused"
            );

        });

        input.addEventListener("blur", () => {

            input.parentElement.classList.remove(
                "focused"
            );

        });

    });

});
