import { Business } from "../../layout/Layout";

export function Iso(){
    return(
        <div className="container-fluid">
            <div className="col-lg-11 mx-auto">
                <div className="row">
                    <div className="col-md-7">
                        <Business
                        h1={"Easiest way to mining your Business with PayPe"}
                        p={"We are highly focused on business services and that will lead positively to the future web with PayPe."}
                        />
                    </div>
                    <div className="col-md-5">
                        <img className="img-fluid" src="https://hyperproof.io/wp-content/uploads/2021/02/bg-iso27k-shield-police-perp.png" alt=".." />
                    </div>
                </div>
            </div>
        </div>
    )
}