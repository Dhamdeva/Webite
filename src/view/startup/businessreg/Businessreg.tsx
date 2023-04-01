import { Business } from "../../layout/Layout";

export function Businessreg(){
    return(
        <div className="container-fluid">
            <div className="col-lg-11 mx-auto">
                <div className="row">
                    <div className="col-md-7">
                        <Business
                        h1={"Make Your Business Ready to Scale with Us!"}
                        p={"50k+ Start-ups have touched new heights with our registration and compliance services. We have 250+ experts who helped new start-ups or entrepreneurs to expand their business all over the world."}
                        />
                    </div>
                    <div className="col-md-5">
                        <img className="img-fluid" src="https://taxzona.in/wp-content/uploads/2021/08/business-registration.png" alt=".." />
                    </div>
                </div>
            </div>
        </div>
    )
}