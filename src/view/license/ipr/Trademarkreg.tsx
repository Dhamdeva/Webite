import { Form, Private } from "../../layout/Layout";

export function Trademarkreg(){
    return(
        <div className="container-fluid">
            <div className="col-lg-11 mx-auto">
                <div className="row">
                    <div className="col-md-7">
                        <Private
                        h1={'Trademark Registration'}
                        p={"Trademark registration provides an exclusive right to the owner and makes its products and services distinctive from others. It is not mandatory by law; however it is a good idea to get it done for yo.."}
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