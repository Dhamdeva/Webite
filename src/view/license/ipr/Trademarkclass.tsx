import { Form, Private } from "../../layout/Layout";

export function Trademarkclass(){
    return(
        <div className="container-fluid">
            <div className="col-lg-11 mx-auto">
                <div className="row">
                    <div className="col-md-7">
                        <Private
                        h1={'Trademark Classes Finder'}
                        p={"Get your Trademark Classes Finder to uniform your unique needs in a very affordable service! Yes! You are just a phone call away from the well-organized Trademark Class Service of the PayPe team in.."}
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