'use server'

import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
 host: "smtp.gmail.com",
 port: 465,
 secure: true,
 auth: {
  user: "info@rdbrothers.com",
  pass: "kpkq bpem xlma xgbl"
 }
})

export async function contact({ name, email, subject, message }) {
 return transporter.sendMail({
  to: "info@rdbrothers.com",
  subject: "New Enquiry: " + subject,
  html: `<div>
   <h3>New Equiry From: <strong>${name}</strong></h3>
   <h3>Email: <strong>${email}</strong></h3>
   <h3>Message:</h3>
   <p>${message}</p>
  </div>`
 }).then(() => {
  return {
   success: true,
   message: "Email Sent!"
  }
 }).catch((err) => {
  return {
   success: false,
   message: err
  }
 })
}

export async function resume_submision(formData) {
 const name = formData.get("name")
 const email = formData.get("email")
 const resume = formData.get("resume")
 const coverLetter = formData.get("coverLetter")

 return transporter.sendMail({
  to: "info@rdbrothers.com",
  subject: `Resume Submission: ${name}`,
  html: `<div>
   <h3>Name: <strong>${name}</strong></h3>
   <h3>Email: <strong>${email}</strong></h3>
   <h3>Message:</h3>
   <p>${coverLetter}</p>
  </div>`,
  attachments: [
   {
    filename: resume.name,
    content: Buffer.from(await resume.arrayBuffer()),
   }]
 }).then(() => {
  return {
   success: true,
   message: "Email Sent!"
  }
 }).catch((err) => {
  return {
   success: false,
   message: err
  }
 })
}
