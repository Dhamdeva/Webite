
import MainNavigator from "../../controller/MainNavigator";
import { Navbar } from "../layout/Navbar";

export function Dashboard(){
    return(
        <div className="container-fluid p-0">
            <Navbar />
            <div className="container">
                <MainNavigator />
            </div>
        </div>
    )
}