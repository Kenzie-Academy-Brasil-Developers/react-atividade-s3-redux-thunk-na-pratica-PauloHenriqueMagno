import { ADD_COMMENT } from "./actionTypes";

const initialState = {
  name: "Kenzie",
  comments: [],
  user_image: "https://scontent.fcgh7-1.fna.fbcdn.net/v/t39.30808-6/236016410_389662682501311_665947530334969547_n.png?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zZ1-IWJlObIAX-Xjheo&_nc_ht=scontent.fcgh7-1.fna&oh=272e22bee502f0c80024e4a02f5436f4&oe=6158EF07"
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT:
      return action.updatedUser;
      
    default:
      return state;
  }
};

export default userReducer;