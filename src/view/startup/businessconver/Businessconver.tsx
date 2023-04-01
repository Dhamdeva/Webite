import { Business } from "../../layout/Layout";

export function Businessconver(){
    return(
        <div className="container-fluid">
            <div className="col-lg-11 mx-auto">
                <div className="row">
                    <div className="col-md-7">
                        <Business
                        h1={"Easiest way to mining your Business with Corpbiz"}
                        p={"We are highly focused on business services and that will lead positively to the future web with Corpbiz."}
                        />
                    </div>
                    <div className="col-md-5">
                        <img className="img-fluid" src="https://www.corefactors.in/blog/content/images/wordpress/2020/04/busy-marketing.png" alt=".." />
                    </div>
                </div>
            </div>
        </div>
    )
}