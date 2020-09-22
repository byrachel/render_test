const navHomeReducer = (state, action) => {
	switch (action.type) {
		case "GET_HOMES":
			return {
				...state,
                homes: action.payload,
			};

		case "HOME_ID":
			return {
				...state,
				homeId: action.payload
            };

		default:
			return state;
	}
};

export default navHomeReducer;
