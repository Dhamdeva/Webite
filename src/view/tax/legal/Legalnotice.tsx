import { Form, Private } from "../../layout/Layout";

export function Legalnotice(){
    return(
        <div className="container-fluid">
            <div className="col-lg-11 mx-auto">
                <div className="row">
                    <div className="col-md-7">
                        <Private
                        h1={'Legal Notice'}
                        p={"Choosing us can be the ideal choice for you if you want to have your procedure done in a quick and fast manner which is also hassle free."}
                        h6={"100000 +"}
                        p1={"Happy Customer"}
                        h61={"1000 +"}
                        p2={"CA & Lawyers"}
                        h62={"50 +"}
                        p3={"Offices"}
                        />
                    </div>
                    <div className="col-md-5 form">
                        <div className="col-lg-11 mx-auto">
                            <h4 className="text-center">Free Consultation by Expert</h4>
                            <Form/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}