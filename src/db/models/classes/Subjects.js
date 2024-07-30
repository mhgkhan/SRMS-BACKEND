import mongoose from "mongoose";

const subjectsSchema = mongoose.Schema({
    urdu: Boolean,
    islamyat: Boolean,
    nazra:Boolean,
    science:Boolean,
    maths:Boolean,
    english:Boolean,
    pakstudy:Boolean,
    biology:Boolean,
    chemistry:Boolean,
    physics:Boolean
});

const Subjects = mongoose.model("subject", subjectsSchema)
export default subjectsSchema