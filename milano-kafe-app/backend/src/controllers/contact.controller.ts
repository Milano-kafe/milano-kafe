import { Request, Response } from 'express';
import Contact from '../models/contact.model';
import { sendContactEmail } from '../services/contact.service';

export const submitContactForm = async (req: Request, res: Response) => {
    try {
        const { name, email, message } = req.body;

        const newContact = new Contact({
            name,
            email,
            message,
        });

        await newContact.save();
        await sendContactEmail(name, email, message);

        res.status(201).json({ message: 'Contact form submitted successfully.' });
    } catch (error) {
        res.status(500).json({ message: 'Error submitting contact form.', error });
    }
};