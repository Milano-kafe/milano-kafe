import { User } from '../models/user.model';
import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

class UserService {
    async register(userData) {
        const hashedPassword = await hash(userData.password, 10);
        const user = new User({ ...userData, password: hashedPassword });
        return await user.save();
    }

    async login(email, password) {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('User not found');
        }
        const isMatch = await compare(password, user.password);
        if (!isMatch) {
            throw new Error('Invalid credentials');
        }
        const token = sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        return { user, token };
    }

    async getUserById(userId) {
        return await User.findById(userId);
    }

    async updateUser(userId, updateData) {
        return await User.findByIdAndUpdate(userId, updateData, { new: true });
    }

    async deleteUser(userId) {
        return await User.findByIdAndDelete(userId);
    }

    async getAllUsers() {
        return await User.find();
    }
}

export default new UserService();