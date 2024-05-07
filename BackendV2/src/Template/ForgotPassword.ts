export const ForgotPassword = ({ name, link }: { name: string, link: string }) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Course Registration Confirmation</title>
        <style>
            body {
                background-color: #fff;
            }
    
            .container {
                margin: auto;
                max-width: 32rem;
            }
    
            .top-div {
                border: 1px solid #3b82f6;
                border-radius: 0.5rem;
                padding: 1.5rem;
                background-color: #dbeafe;
                margin-bottom: 1.5rem;
                border-radius: 2vh;
            }
    
            .logo {
                display: block;
                margin: auto;
                width: 400px;
                height: auto;
                border-radius: 2vh;
            }
    
            .message {
                font-size: 1.5rem;
                font-weight: bold;
                color: #2563eb;
                text-align: center;
                margin-top: 1.5rem;
                letter-spacing: 3px;
            }
    
            .border {
                border: 1px solid #3b82f6;
                border-radius: 0.5rem;
            }
    
            .p-4 {
                padding: 1rem;
            }
    
            .support {
                font-size: 0.875rem;
                color: #4b5563;
                text-align: center;
                margin-top: 1.5rem;
                font-style: italic;
            }
    
            .support a {
                color: #3b82f6;
            }
            .welcome-message {
                color: #010033;
                width: 95%;
                margin-left: auto;
                margin-right: auto;
                text-align: center;
                font-size: x-large;
                line-height: 3vh;
                letter-spacing: 2px;
            }

            .click-message{
                text-align: center;
            }

            .link{
                text-align: center;
                color: #04ABFF;
                font-style: italic;
            }

            span{
                color: #04ABFF;
            }

        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="top-div">
                <img class="logo" src="https://i.ibb.co/09sZrYC/cover.png" alt="HealthHub Logo" loading="lazy">
                <div class="message">Reset Password </div>
                <h3 class="welcome-message">Hello ${name} </h3>
                <h3 class="click-message">Please click on this link to reset your passowrd.</h3>
                <h4 class="link">${link}</h4>
                <div class="support">
                    If you have any questions or need assistance, please feel free to reach out to us at <a href="mailto:wdevelopment296@gmail.com">wdevelopment296@gmail.com</a>. We are here to help!
                </div>
            </div>
        </div>
    </body>
    
    </html>
    `;
}
