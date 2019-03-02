const initialState = {
  firstCount: {
    secondCount: {
      thirdCount: {
        count: 0
      }
    }
  }
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "ADD": {
      return {
        firstCount: {
            secondCount: {
              thirdCount: {
                count: state.firstCount.secondCount.thirdCount.count + 1
              }
            }
          }
      };
    }

    case "ADD5": {
      return {
        count: state.count + 5
      };
    }

    case "SUB": {
      return {
        count: state.count - 1
      };
    }

    case "RESET": {
      return {
        count: (state.count = 0)
      };
    }

    default:
      return state;
  }
}

export default rootReducer;
