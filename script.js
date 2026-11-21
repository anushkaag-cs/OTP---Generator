
let currentOTP = "";

function generateOTP() {

    let length = Number(document.getElementById("length").value);

    // Generate a secure random OTP
    let digits = new Uint32Array(1);
    let max = Math.pow(10, length);

    let limit = Math.floor(4294967296 / max) * max;

    do {
        crypto.getRandomValues(digits);
    } while (digits[0] >= limit);

    currentOTP = String(digits[0] % max).padStart(length, "0");

    document.getElementById("otp").innerText = currentOTP;

    document.getElementById("message").innerText =
        "OTP Generated Successfully!";
}

function copyOTP() {

    if (currentOTP === "") {
        document.getElementById("message").innerText =
            "Please generate OTP first!";
        return;
    }

    navigator.clipboard.writeText(currentOTP)
        .then(() => {
            document.getElementById("message").innerText =
                "OTP Copied Successfully!";
        });
}
