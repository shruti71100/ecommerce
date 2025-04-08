document.addEventListener('DOMContentLoaded', () => {
    const signInButton = document.querySelector('.signin button');

    signInButton.addEventListener('click', () => {
        openSignInForm();
    });

    function openSignInForm() {
        const signInFormContent = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Sign In Form</title>
                <style>
                    body {
                        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: 700;
    font-size: 20px;
                        background-color:rgb(193,142,161);

                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        margin: 0;
                    }
                    .form-container {
                        background-color: white;
                        padding: 2em;
                        border: 1px solid #ddd;
                        border-radius: 6px;
                        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    }
                    .form-container h2 {
                        margin-top: 0;
                    }
                    .form-container input, .form-container button {
                        display: block;
                        width: 100%;
                        margin-bottom: 1em;
                        padding: 0.5em;
                        font-size: 1em;
                    }
                    .form-container button {
                        background-color: #28a745;
                        color: white;
                        border: none;
                        cursor: pointer;
                    }
                    .form-container .switch-button {
                        background-color: #007bff;
                    }
                </style>
            </head>
            <body>
                <div class="form-container">
                    <h2>Sign In</h2>
                    <form>
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required>
                        
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                        
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required>
                        
                        <button type="submit">Submit</button>
                        <button type="button" class="switch-button" id="openSignUpForm">Sign Up</button>
                    </form>
                </div>

                <script>
                    document.getElementById('openSignUpForm').addEventListener('click', () => {
                        openSignUpForm();
                    });

                    function openSignUpForm() {
                        const signUpFormContent = \`
                            <div class="form-container">
                                <h2>Sign Up</h2>
                                <form>
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="name" required>
                                    
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" required>
                                    
                                    <label for="password">Password</label>
                                    <input type="password" id="password" name="password" required>
                                    
                                    <label for="confirm-password">Confirm Password</label>
                                    <input type="password" id="confirm-password" name="confirm-password" required>
                                    
                                    <button type="submit">Submit</button>
                                </form>
                            </div>
                        \`;

                        document.body.innerHTML = signUpFormContent;
                    }
                </script>
            </body>
            </html>
        `;

        const newWindow = window.open('', '_blank');
        newWindow.document.write(signInFormContent);
        newWindow.document.close();
    }
});
