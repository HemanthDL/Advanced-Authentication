// import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"

//  import { mailtrapClient, sender } from "./mailtrap.config.js"

// export const sendVerificationEmail = async (email, verificationToken) => {
//     const recipient = [{ email }]

//     try {
//         const response = await mailtrapClient.send({
//             from: sender,
//             to: recipient,
//             subject: "Verify your email",
//             html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
//             category: "Email Verification"
//         })

//         // console.log("Email sent successfully ", response);

//     } catch (error) {
//         // console.error(`Error in verifying email ${error}`);
//         throw new Error(`Error in verifying email ${error}`)
//     }
// }

// export const sendWelcomeEmail = async (email, name) => {
//     const recipient = [{ email }]

//     try {

//         const response = await mailtrapClient.send({
//             from: sender,
//             to: recipient,
//             template_uuid: "c9de4534-7233-4d61-87e7-bfe8efc017cb",
//             template_variables: {
//                 "company_info_name": "Maestro Company",
//                 "name": name
//             }
//         })

//         // console.log("Welcome Email sent successfully ", response);

//     } catch (error) {
//         // console.error(`Error in sending welcome email ${error}`);
//         throw new Error(`Error in sending welcome email ${error}`)
//     }
// }

// export const sendPasswordResetEmail = async(email,resetUrl)=>{
//     const recipient = [{email}]

//     try {
//         const response = await mailtrapClient.send({
//             from : sender,
//             to : recipient,
//             subject : "Reset your password",
//             html : PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}",resetUrl),
//             category : "Password Reset"
//         })

//         // console.log("Email sent successfully ", response);
//         // console.log("endpoint is  : ", resetUrl);
//     } catch (error) {
//         // console.error(`Error in sending reset email ${error}`);
//         throw new Error(`Error in sending reset email ${error}`)
//     }
// }

// export const sendResetSuccessfullEmail = async(email)=>{
//     const recipient = [{email}]

//     try {
//         const response = await mailtrapClient.send({
//             from : sender,
//             to : recipient,
//             subject : "Password reset Succesfully",
//             html : PASSWORD_RESET_SUCCESS_TEMPLATE,
//             category : "Password Reset"
//         })

//         // console.log("Email sent successfully ", response);
//     } catch (error) {
//         // console.error(`Error in sending reset email ${error}`);
//         throw new Error(`Error in sending reset email ${error}`)
//     }
// }


import { PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js"
import { transporter, sender } from "./mailtrap.config.js";



export const sendVerificationEmail = async (email, verificationToken) => {
    try {
        const response = await transporter.sendMail({
            from: `"${sender.name}" <${sender.email}>`,
            to: email,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
        });
    } catch (error) {
        throw new Error(`Error in verifying email: ${error}`);
    }
};


export const sendWelcomeEmail = async (email, name) => {
    try {
        const response = await transporter.sendMail({
            from: `"${sender.name}" <${sender.email}>`,
            to: email,
            subject: "Welcome to AutoMate Company",
            html: `<p>Hello ${name}, welcome to AutoMate Service!!</p>`,
        });
    } catch (error) {
        throw new Error(`Error in sending welcome email: ${error}`);
    }
};


export const sendPasswordResetEmail = async (email, resetUrl) => {
    try {
        const response = await transporter.sendMail({
            from: `"${sender.name}" <${sender.email}>`,
            to: email,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetUrl),
        });
    } catch (error) {
        throw new Error(`Error in sending password reset email: ${error}`);
    }
};


export const sendResetSuccessfullEmail = async (email) => {
    try {
        const response = await transporter.sendMail({
            from: `"${sender.name}" <${sender.email}>`,
            to: email,
            subject: "Password Reset Successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
        });
    } catch (error) {
        throw new Error(`Error in sending reset email: ${error}`);
    }
};

