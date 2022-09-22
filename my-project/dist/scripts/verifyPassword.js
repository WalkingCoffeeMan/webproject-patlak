function verifyPassword()
{
    var message = "";
    if(document.getElementById("inputFirstName").value != "")
    {
        if (document.getElementById("inputLastName").value != "")
        {
            if (document.getElementById("inputPhoneNumber").value != "")
            {
                if (document.getElementById("inputEmail").value != "")
                {
                    if(document.getElementById("inputEmail").value.includes("@"))
                    {
                        if (document.getElementById("inputPassword").value != "") {
                            if (document.getElementById("inputPassword").value.length >= 8) {
                                document.getElementById("errorMessage").classList.remove("text-danger");
                                document.getElementById("errorMessage").classList.add("text-white");
                                message = "You successfully contaced us !";
                            } else {
                                message = "Please write at least 8 characters";
                            }
                        } else {
                            message = "Please enter your password";
                        }
                    }
                    else
                    {
                        message = "Email must contain a @ sign";
                    }
                } else
                {
                    message = "Please enter your email";
                }
            }
            else
            {
                message = "Please enter your phone number";
            }
        }
        else
        {
            message = "Please write your last name!";
        }
    }
    else
    {
        message = "Please write your first name!";
    }

    document.getElementById("errorMessage").innerText = message;
}