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
            }
    
            .logo {
                display: block;
                margin: auto;
                width: 400px;
                height: auto;
            }
    
            .message {
                font-size: 1.25rem;
                font-weight: bold;
                color: #2563eb;
                text-align: center;
                margin-top: 1.5rem;
            }
    
            .otp {
                display: flex;
                gap: 20px;
                margin-top: 1rem;
            }
    
            .otp .border {
                border: 1px solid #3b82f6;
                border-radius: 0.5rem;
            }
    
            .otp .p-4 {
                padding: 1rem;
            }
    
            .support {
                font-size: 0.875rem;
                color: #4b5563;
                text-align: center;
                margin-top: 1.5rem;
            }
    
            .support a {
                color: #3b82f6;
            }
        </style>
    </head>
    
    <body>
        <div class="container">
            <div class="top-div">
                <img class="logo" src="https://i.ibb.co/09sZrYC/cover.png" alt="HealthHub Logo">
                <div class="message">OTP Confirmation</div>
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
