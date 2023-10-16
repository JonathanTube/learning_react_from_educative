import { generateUser } from "../data/static-data"

const userReducer = (state = generateUser(), action) => {
  return state
}

export default userReducer
