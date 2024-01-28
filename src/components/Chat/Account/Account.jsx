import { selectEmail } from "../../../redux/slices/auth"
import { useSelector } from "react-redux"
import { selectMessages } from "../../../redux/slices/chat"


function Account() {

   const messages = useSelector(selectMessages)
   const mail = useSelector(selectEmail)
   const truemail = 'parfparf@gmail.com'
   // let count = 0

   return (
      <>
         {/* {
            messages?.reduce((arr, m) => {
               if (arr) {
                  <div className="chat__account chat__account_select account">
                     <div className="account__login ">{}</div>
                  </div>
               }
            }, [])
         } */}
         {
            mail === truemail
               ? <>
                  <div className="chat__account chat__account_select account">
                     <div className="account__login ">Anatoliy</div>
                  </div>
               </>
               : <>
                  <div className="chat__account chat__account_select account">
                     <div className="account__login">Timaaa</div>
                  </div>
               </>
         }
      </>
      // <div className="chat__account account">
      //    <div className="account__login">Марина</div>
      // </div>

   )
}
export default Account