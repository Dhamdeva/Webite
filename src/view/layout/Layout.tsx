export function Business(props:any){
    return(
        <div className="business">
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
            <div className="search  d-flex">
                <input type="text" className=" m-2 p-2 form-control" placeholder="Search your service" />
                <button className="bt m-2 px-3">Search</button>
            </div>
            <button className="service my-3 py-3 ">
                <a className="service-go" href="/">Go for Services</a>
            </button>
        </div>
    )
}

export function Private(props:any){
    return(
        <div className=" private">
            <h1>{props.h1}</h1>
            <p>{props.p}</p>
            <div className="row">
                <div className="col-md-3 my-3 ">
                    <h6>{props.h6}</h6>
                    <p>{props.p1}</p>
                </div>
                <div className="col-md-3 my-3">
                    <h6>{props.h61}</h6>
                    <p>{props.p2}</p>
                </div>
                <div className="col-md-3 my-3">
                    <h6>{props.h62}</h6>
                    <p>{props.p3}</p>
                </div>
            </div>
            <button className="service my-3 py-3 ">
                <a className="service-go" href="/">Go for Services</a>
            </button>
        </div>
    )
}

export function Form(props:any){
    return(
        <div>
            <input type={'text'} className="form-control my-4 p-2" placeholder='your Name' />
            <input type={'email'} className="form-control my-4 p-2" placeholder='Email Address' />
            <input type={'number'} className="form-control my-4 p-2" placeholder='phone number' />
            <select className="form-select" id="flot">
                <option selected>Select the State</option>
                <option value="1">Tamil Nadu</option>
                <option value="2">Goa</option>
                <option value="3">Kolkate</option>
            </select>
            <button type="submit" className="p-3 my-3">Submit</button>
        </div>
    )
}