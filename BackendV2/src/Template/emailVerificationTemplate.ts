import inlineCss from 'inline-css';

export const emailVerificationTemplate = async (OTP: { otp: number }) => {
    const otpString = OTP.otp.toString();
    const otpDigits = otpString.split('');
    const placeholders = ['1', '2', '3', '4', '5', '6'];

    placeholders.forEach((placeholder, index) => {
        placeholders[index] = otpDigits[index] || placeholder; 
    });

    let template = `<!DOCTYPE html>
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
    
            .otp {
                display: flex;
                justify-content: center;
                align-items: center;
                gap: 20px;
                font : bold;
                margin-top: 1rem;
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

            span{
                color: #04ABFF;
            }

        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="top-div">
                <img class="logo" src="https://i.ibb.co/09sZrYC/cover.png" alt="HealthHub Logo" loading="lazy">
                <div class="message">OTP Confirmation</div>
                <h3 class="welcome-message">Welcome to <span>Health Hub,</span><br> Please verify your email  <br>and be a part of our family. </h3>
                <div class="otp">
                    <span class="border p-4">${placeholders[0]}</span>
                    <span class="border p-4">${placeholders[1]}</span>
                    <span class="border p-4">${placeholders[2]}</span>
                    <span class="border p-4">${placeholders[3]}</span>
                    <span class="border p-4">${placeholders[4]}</span>
                    <span class="border p-4">${placeholders[5]}</span>
                </div>
                <div class="support">
                    If you have any questions or need assistance, please feel free to reach out to us at <a href="mailto:wdevelopment296@gmail.com">wdevelopment296@gmail.com</a>. We are here to help!
                </div>
            </div>
        </div>
    </body>
    
    </html>
    `;
    const options = {
        url: 'temp.html', 
        extraCss: '/* Additional CSS styles here */',
    };

    const emailWithInlineCss = await inlineCss(template, options);

    return template;
}
