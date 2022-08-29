import numeral from "numeral"
import moment from "moment"

const format = {
    format_number(val){
        return numeral(val).format('0,0');
      },
    format_date(date){
        return moment(date,'YYYY-MM-DD').format('DD/MM/YYYY');
    },
    mask_email(email){
      let result = "****";

      if(email=== null)
          return "";
      else{
          return email.substring(0,email.length/2) + result;
      }
    }
};

export default format