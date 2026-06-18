import nodemailer from 'nodemailer';

let transporter = null;

export function getTransporter() {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return transporter;
}

export function buildEmailHtml(data) {
  const fields = [
    { label: 'Full Name', value: data.name },
    { label: 'Phone', value: data.phone },
    { label: 'Email', value: data.email },
    { label: 'Treatment', value: data.treatment },
    { label: 'Preferred Date', value: data.preferred_date || 'Not specified' },
    { label: 'Message', value: data.message || 'No message' },
  ];

  const rows = fields
    .map(
      (f) => `
    <tr>
      <td style="padding:10px 14px;font-size:13px;font-weight:600;color:#242E28;border-bottom:1px solid #EDE1D6;width:140px">${f.label}</td>
      <td style="padding:10px 14px;font-size:13px;color:#4D5750;border-bottom:1px solid #EDE1D6">${f.value}</td>
    </tr>`
    )
    .join('');

  return `
  <div style="max-width:560px;margin:0 auto;font-family:Arial,sans-serif;background:#FCFAF7;border-radius:14px;overflow:hidden;border:1px solid #EDE1D6">
    <div style="background:linear-gradient(135deg,#344F39,#2A3F2E);padding:24px 28px;text-align:center">
      <div style="font-size:20px;font-weight:700;color:#DBC1AC;letter-spacing:1px">Kairavam</div>
      <div style="font-size:11px;color:#B9C9BB;letter-spacing:2px;text-transform:uppercase;margin-top:4px">PMU & Aesthetic Studio</div>
    </div>
    <div style="padding:24px 28px">
      <h2 style="font-size:18px;color:#242E28;margin:0 0 4px">New Consultation Booking</h2>
      <p style="font-size:13px;color:#808A83;margin:0 0 20px">A new lead has submitted the consultation form.</p>
      <table style="width:100%;border-collapse:collapse">${rows}</table>
    </div>
    <div style="background:#FAF6F2;padding:14px 28px;text-align:center;font-size:11px;color:#808A83">Kairavam PMU & Aesthetic Studio · Vijayawada</div>
  </div>`;
}

export async function sendConsultationEmail(data) {
  const transporter = getTransporter();
  const to = process.env.TO_EMAIL || 'kairavam@gmail.com';

  const mailOptions = {
    from: `"Kairavam Website" <${process.env.SMTP_USER}>`,
    to,
    subject: `New Consultation from ${data.name} — ${data.treatment}`,
    html: buildEmailHtml(data),
  };

  return transporter.sendMail(mailOptions);
}
