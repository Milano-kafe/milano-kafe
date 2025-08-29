import { Router } from 'express';
import { submitContactForm } from '../controllers/contact.controller';

const router = Router();

// Route for submitting the contact form
router.post('/submit', submitContactForm);

export default router;