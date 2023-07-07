import mongoose, {Schema} from "mongoose";
 
const schema = new Schema({
    title: String,
    description: String
    },
    {
        timestamps: true,
    }
)

const Topic = mongoose.models.Topic ||mongoose.model("Topic", schema)
export default Topic
