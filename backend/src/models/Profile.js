import mongoose from "mongoose";

const { Schema } = mongoose;

let Profile = null;

try {
  const ProfileSchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: "User"
    },
    avatar: {
      type: String
    },
    skills: [
      {
        claim_id: String,
        claimant: String,
        claim: String,
        witnesses: [String],
        claimConfirmed: {
          type: Boolean,
          default: false
        }
      }
    ],
    bio: String,
    experience: [
      {
        claim_id: String,
        claimant: String,
        claim: String,
        witnesses: [String],
        claimConfirmed: {
          type: Boolean,
          default: false
        }
      }
    ],
    education: [
      {
        claim_id: String,
        claimant: String,
        claim: String,
        witnesses: [String],
        claimConfirmed: {
          type: Boolean,
          default: false
        }
      }
    ],
    social: {
      youtube: {
        type: String
      },
      twitter: {
        type: String
      },
      facebook: {
        type: String
      },
      linkedin: {
        type: String
      },
      instagram: {
        type: String
      }
    },
    created_at: {
      type: Date,
      default: Date.now
    }
  });
  Profile = mongoose.model("Profile", ProfileSchema);
} catch (e) {
  Profile = mongoose.model("Profile");
}

export default Profile;
