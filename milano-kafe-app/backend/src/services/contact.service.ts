import { ContactModel } from '../models/contact.model';

export class ContactService {
    async submitContactForm(contactData: any) {
        try {
            const newContact = new ContactModel(contactData);
            await newContact.save();
            return { success: true, message: 'Contact form submitted successfully.' };
        } catch (error) {
            throw new Error('Error submitting contact form: ' + error.message);
        }
    }

    async getAllContacts() {
        try {
            const contacts = await ContactModel.find();
            return contacts;
        } catch (error) {
            throw new Error('Error fetching contacts: ' + error.message);
        }
    }
}