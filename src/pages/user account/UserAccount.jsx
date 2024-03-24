import "./userAccount.css";
import { HeadingBreadcrumb } from "../../allPagesPaths";
import { useTitle } from "../../components/helpers";

/*===========================================*/
/*===========================================*/
/*===========================================*/

const UserAccount = () => {

    // get the page title
    useTitle(`Account - Nfood`);

    /*===========================================*/

    return (
        <div>
            <HeadingBreadcrumb breadcrumb="Account" />
            UserAccount
        </div>
    )
}

export default UserAccount;