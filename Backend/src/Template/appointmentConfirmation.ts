export const appointmentConfirmation = (userName: any,DoctorName: any) => {
    return `<!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="UTF-8">
        <title>Course Registration Confirmation</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    </head>
    
    <body class="bg-white">
        <div class="container mx-auto max-w-2xl">
            <div class="top-div border border-blue-500 rounded-lg p-6 bg-blue-100 mb-6">
                <img class="logo mx-auto" src="https://i.ibb.co/09sZrYC/cover.png" alt="HealthHub Logo">
                <div class="message text-2xl font-bold text-blue-800">Appointment Booking Confirmation</div>
                <div class="body text-lg my-5">
                    <p>Dear ${userName},</p>
                    <p>You have successfully booked an appointment with <span class="font-bold text-blue-800">"${DoctorName}"</span>.</p>
                </div>
                <div class="support text-sm text-gray-600">
                    If you have any questions or need assistance, please feel free to reach out to us at <a href="mailto:wdevelopment296@gmail.com" class="text-blue-600">wdevelopment296@gmail.com</a>. We are here to help!
                </div>
            </div>
        </div>
    </body>
    
    </html>
    `;
}