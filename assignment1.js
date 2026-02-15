function age_eligibility () {
    let age = Number(prompt("Enter the age of the person for eligibility for vote:"));
    if(age>=18)
    {
        alert("You are eligible to vote.");
    }
    else
    {
        alert("You are not eligible to vote.");
    }
}

age_eligibility();