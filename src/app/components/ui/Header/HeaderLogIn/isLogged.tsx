const loggedReducer = (state = false, action: any) => {
   switch (action.type) {
      case 'SIGN_IN':
         return false;
      case 'LOG_OUT':
         return true;
   }
};

export default loggedReducer;
