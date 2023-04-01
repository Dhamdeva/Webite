export function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid ">
                <a className="navbar-brand" href="/">Paype</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown start-up">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Start Up
                    </a>
                        <ul className="dropdown-menu ">
                            <li className="business">
                                <a className="dropdown-item" href="/businessreg">Business Registration</a>
                                <a className="dropdown-item" href="/privatelimitedreg">Private Limited Company Registration</a>
                                <a className="dropdown-item" href="/pubiclimitedreg">Public Limited Company Registration</a>
                                <a className="dropdown-item" href="/onepersonreg">One Person Company Registration</a>
                                <a className="dropdown-item" href="/nidhireg">Nidhi Company Registration</a>
                                <a className="dropdown-item" href="/producerreg">Producer Company Registration</a>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li className="eventent">
                                <a className="dropdown-item" href="/eventbased">Eventent Baseed Compliances</a>
                                <a className="dropdown-item" href="/changeindir">Change In Directors</a>
                                <a className="dropdown-item" href="/eventcomplianes">Event Based Compliances in a company</a>
                                <a className="dropdown-item" href="/changeinobject">Change in Object Clause</a>
                                <a className="dropdown-item" href="/appointmentdir">Appointment and Resignation of Directors</a>
                                <a className="dropdown-item" href="/changeinname">Change in Name Clause</a>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li className="business-conversion">
                                <a className="dropdown-item" href="/businessconver">Business Conversion</a>
                                <a className="dropdown-item" href="/soloproprietor">Sole Proprietorship to Pvt.Ltd.Company</a>
                                <a className="dropdown-item" href="/conversionprivate">Conversion of Pvt.Ltd.to Public Limited</a>
                                <a className="dropdown-item" href="/conversionpublic">Conversion of LLp to Private Company</a>
                                <a className="dropdown-item" href="/partnershipcompany">Partnership Firm into Pvt.Ltd.Company</a>
                                <li><hr className="dropdown-divider" /></li>
                            </li>
                            <li className="ngo">
                                <a className="dropdown-item" href="/ngo">NGO</a>
                                <a className="dropdown-item" href="/abregs">12AB Registration</a>
                                <a className="dropdown-item" href="/ngoreg">NGO Registration</a>
                                <a className="dropdown-item" href="/ngocsrfill">NGO CSR-1 Filing</a>
                                <a className="dropdown-item" href="/ngocsrcon">NGO CSR Consultancy</a>
                                <a className="dropdown-item" href="/strikeoff">Strike off Section 8 Companies</a>
                                <li><hr className="dropdown-divider" /></li>
                            </li>
                            <li className="business-closure">
                                <a className="dropdown-item" href="/businessclousre">Business Closure</a>
                                <a className="dropdown-item" href="/windingup">Winding Up of Private Limited Company</a>
                                <a className="dropdown-item" href="/closinglim">Closing a Limited Liability Partnership</a>
                                <a className="dropdown-item" href="/revival">Revival of Struck Off Companies</a>
                                <li><hr className="dropdown-divider" /></li>
                            </li>
                            
                            <li className="secretarial">
                                <a className="dropdown-item" href="/secretarial">Secretarial Compliances</a>
                                <a className="dropdown-item" href="/annualcomp">Annual Compliance of a Pvt. Ltd. Company</a>
                                <a className="dropdown-item" href="/annualfill">Annual Filing for LLP</a>
                                <a className="dropdown-item" href="/nidhicomp">Nidhi Company Compliance</a>
                                <a className="dropdown-item" href="/sectioncomp">Section 8 Company Compliance</a>
                                <a className="dropdown-item" href="/nbfccomp">NBFC Compliance</a>
                                <li><hr className="dropdown-divider" /></li>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown license">
                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            License
                        </a>
                        <ul className="dropdown-menu">
                            <li>
                                <a className="dropdown-item" href="/fssaieat">FSSAI & EATING LICENSE</a>
                                <a className="dropdown-item" href="/fssailicense">FSSAI License</a>
                                <a className="dropdown-item" href="/fssairecycle">Food Recycling License</a>
                                <a className="dropdown-item" href="/fssaiproduct">FSSAI Product Approval</a>
                                <a className="dropdown-item" href="/fpomark">FPO Mark Certification</a>
                                <a className="dropdown-item" href="/fssaistate">FSSAI State License</a>
                                <li><hr className="dropdown-divider" /></li>
                            </li>
                            <li>
                                <a className="dropdown-item" href="/ipr">IPR</a>
                                <a className="dropdown-item" href="/trademark">Trademark Renewal</a>
                                <a className="dropdown-item" href="/wordmark">Wordmark Registration in India</a>
                                <a className="dropdown-item" href="/trademarkreg">Trademark Registration</a>
                                <a className="dropdown-item" href="/indianpatent">Indian Patent Search</a>
                                <a className="dropdown-item" href="/trademarkclass">Trademark Classes Finder</a>
                                <li><hr className="dropdown-divider" /></li>
                            </li>
                            <li className="iso">
                                <a className="dropdown-item" href="/iso">ISO</a>
                                <a className="dropdown-item" href="/isocer">ISO 2768-1 Certification</a>
                                <a className="dropdown-item" href="/isocerti">ISO 16001 Certification</a>
                                <a className="dropdown-item" href="/isoems">ISO 14001 EMS</a>
                                <a className="dropdown-item" href="/isofsms">ISO 22000 FSMS</a>
                                <a className="dropdown-item" href="/isocertific">ISO 9001 2015</a>
                                <li><hr className="dropdown-divider" /></li>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item dropdown tax">
                    <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Tax
                    </a>
                        <ul className="dropdown-menu">
                            <li className="tax-filing">
                                <a className="dropdown-item" href="/taxfiling">Tax Filing</a>
                                <a className="dropdown-item" href="/gstreg">GST Registration</a>
                                <a className="dropdown-item" href="/tdsreturn">TDS Return Filing</a>
                                <a className="dropdown-item" href="/gstreturn">GST Return Filing</a>
                                <a className="dropdown-item" href="/professionaltax">Professional Tax Registration</a>
                                <a className="dropdown-item" href="/incometax">Income Tax Return Filing</a>
                                <li><hr className="dropdown-divider" /></li>
                            </li>
                            <li className="legal">
                                <a className="dropdown-item" href="/legalservice">Legal Service</a>
                                <a className="dropdown-item" href="/legalnotice">Legal Notice</a>
                                <a className="dropdown-item" href="/rera">RERA Complaint</a>
                                <a className="dropdown-item" href="/cheque">Cheque Bounce Notice</a>
                                <a className="dropdown-item" href="/consumercomplaint">Consumer Complaint</a>
                                <a className="dropdown-item" href="/publicinterest">Public Interest Litigation</a>
                                <li><hr className="dropdown-divider" /></li>
                            </li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
    )
}