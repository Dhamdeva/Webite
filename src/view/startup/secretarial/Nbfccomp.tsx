import { Form, Private } from "../../layout/Layout";

export function Nbfccomp(){
    return(
        <div className="container-fluid">
            <div className="col-lg-11 mx-auto">
                <div className="row">
                    <div className="col-md-7">
                        <Private
                        h1={'NBFC Compliance'}
                        p={"There was a time when NBFCs compliances were far simpler and lenient but after Sahara case, RBI has drafted new compliances for NBFCs and keep them under their screening. A portion of the significant.."}
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


