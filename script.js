function checkPassword() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let dob = document.getElementById("dob").value.trim();
    let spouse = document.getElementById("spouse").value.trim();
    let child = document.getElementById("child").value.trim();
    let password = document.getElementById("password").value.trim();

    let details = [name, email, dob, spouse, child];

    let fails = [];

    if (password.length < 8)
        fails.push("Minimum 8 characters required");

    if (!/[A-Z]/.test(password))
        fails.push("At least one uppercase letter required");

    if (!/[a-z]/.test(password))
        fails.push("At least one lowercase letter required");

    if (!/\d/.test(password))
        fails.push("At least one digit required");

    if (!/[!@#$%^&*()_+\-={}|[\]:;"'<>,.?/`~]/.test(password))
        fails.push("At least one special character required");

    details.forEach(det=>{
        if(det && password.toLowerCase().includes(det.toLowerCase())){
            fails.push(`Password must NOT contain personal detail: ${det}`)
        }
    });

    let result = document.getElementById("result");

    if(fails.length===0){
        result.textContent = "Your password is STRONG.";
    } else {
        let strength = fails.length <=2 ? "MEDIUM" : "WEAK";

        result.textContent = 
              `Password Strength: ${strength}\n\nFails:\n- `
              + fails.join("\n- ");
    }
}

function generate(){
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let digits = "0123456789";
    let special = "!@#$%^&*()_+-={}[]:;\"'<>,.?/";
    let all = upper + lower + digits + special;

    let pass = "";

    pass += upper[Math.floor(Math.random()*upper.length)];
    pass += lower[Math.floor(Math.random()*lower.length)];
    pass += digits[Math.floor(Math.random()*digits.length)];
    pass += special[Math.floor(Math.random()*special.length)];

    for(let i=4;i<12;i++){
        pass += all[Math.floor(Math.random()*all.length)];
    }

    // shuffle
    pass = pass.split("").sort(() => Math.random() - 0.5).join("");

    document.getElementById("result").textContent = pass;
}
