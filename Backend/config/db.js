import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://codewithgautam:gautam12345@cluster0.reeqfxz.mongodb.net/ReactProj').then(()=>console.log("DB Connected"));
}