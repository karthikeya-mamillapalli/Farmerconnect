import { REQUIRED } from "@angular/forms/signals";

export const GlobalConst ={
   LOCAL_LOGIN_KEY:"farmerLoginData",
    API_ENDPOINTS:{
        LOGIN:'farmerUsers/login',
        GET_USER_BY_ID:'getUser?id='
    },

    VALIDATION_MESSAGE:{
        REQUIRED:"This is Required",
        MOBILE_NO:"Max and Min 10 char needed"
    }
}

