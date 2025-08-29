import mongoose, { Schema, Document } from 'mongoose';

export interface IMenuItem extends Document {
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    available: boolean;
}

const MenuItemSchema: Schema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    imageUrl: { type: String, required: true },
    available: { type: Boolean, default: true }
});

export default mongoose.model<IMenuItem>('MenuItem', MenuItemSchema);