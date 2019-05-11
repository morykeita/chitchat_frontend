import * as fromInit from "../actions/index"


export interface InitState {
    initiated : boolean;
    initiating : boolean;
    errorMessage: any | null;
  }

  export const initialState: InitState = {
    initiated:false,
    initiating : false,
    errorMessage: ''
  };
  

  export function reducer(state = initialState, action: fromInit.InitActions): InitState {
 

    switch (action.type) {

        case fromInit.INIT: {
            return {
              ...state,
              initiated : false,
              initiating : true
            };
          }
  
      case fromInit.INIT_SUCESS: {
        return {
          ...state,
          initiated : true,
          initiating : false
        };
      }
      case fromInit.INIT_FAIL: {
        return {
          ...state,
          errorMessage: "error"
        };
      }
      

      default: {
        return state;
      }
    }
  }
  
  export const getIsInitiated = (state : InitState) => {return state.initiated}
  export const getIsInitiating = (state : InitState) => {return state.initiating}
  export const getInitError = (state : InitState) => {return state.errorMessage}
  
  