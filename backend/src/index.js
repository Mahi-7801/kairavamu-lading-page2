import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { sendConsultationEmail } from './smtp.js';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:5173' }));
app.use(express.json());

app.post('/api/consultation', async (req, res) => {
  try {
    const { name, phone, email, treatment, preferred_date, message } = req.body;

    if (!name?.trim() || !phone?.trim()) {
      return res.status(400).json({ error: 'Name and phone are required' });
    }

    await sendConsultationEmail({ name, phone, email, treatment, preferred_date, message });

    res.json({ success: true });
  } catch (err) {
    console.error('Email send failed:', err);
    res.status(500).json({ error: 'Failed to send email. Please try again.' });
  }
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Kairavam backend running on http://localhost:${PORT}`);
});
