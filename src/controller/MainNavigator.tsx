import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../view/dashboard/Dashboard";
import { Fpomark } from "../view/license/fssai/Fpomark";
import { Fssaieat } from "../view/license/fssai/Fssaieat";
import { Fssailicense } from "../view/license/fssai/Fssailicense";
import { Fssaiproduct } from "../view/license/fssai/Fssaiproduct";
import { Fssairecycle } from "../view/license/fssai/Fssairecycle";
import { Fssaistate } from "../view/license/fssai/Fssaistate";
import { Indianpatent } from "../view/license/ipr/Indianpatent";
import { Ipr } from "../view/license/ipr/Ipr";
import { Trademark } from "../view/license/ipr/Trademark";
import { Trademarkclass } from "../view/license/ipr/Trademarkclass";
import { Trademarkreg } from "../view/license/ipr/Trademarkreg";
import { Wordmark } from "../view/license/ipr/Wordmark";
import { Iso } from "../view/license/iso/Iso";
import { Isocer } from "../view/license/iso/Isocer";
import { Isocerti } from "../view/license/iso/Isocerti";
import { Isocertific } from "../view/license/iso/Isocertific";
import { Isoems } from "../view/license/iso/Isoems";
import { Isofsms } from "../view/license/iso/Isofsms";
import { Businessclousre } from "../view/startup/businessclousre/Businessclousre";
import { Closinglim } from "../view/startup/businessclousre/Closinglim";
import { Revival } from "../view/startup/businessclousre/Revival";
import { Windingup } from "../view/startup/businessclousre/Windingup";
import { Businessconver } from "../view/startup/businessconver/Businessconver";
import { Conversionprivate } from "../view/startup/businessconver/Conversionprivate";
import { Conversionpublic } from "../view/startup/businessconver/Conversionpubic";
import { Partnershipcompany } from "../view/startup/businessconver/Partnershipcompany";
import { Soloproprietor } from "../view/startup/businessconver/Soloproprietor";
import { Businessreg } from "../view/startup/businessreg/Businessreg";
import { Nidhireg } from "../view/startup/businessreg/Nidhireg";
import { Onepersonreg } from "../view/startup/businessreg/Onepersonreg";
import { Privatelimitedreg } from "../view/startup/businessreg/Privatelimitedreg";
import { Producerreg } from "../view/startup/businessreg/Producerreg";
import { Publiclimitedreg } from "../view/startup/businessreg/Publiclimited";
import { Appointmentdir } from "../view/startup/eventbased/Appointmentdir";
import { Changeindir } from "../view/startup/eventbased/Changeindir";
import { Changeinname } from "../view/startup/eventbased/Changeinname";
import { Changeinobject } from "../view/startup/eventbased/Changeinobject";
import { Eventbased } from "../view/startup/eventbased/Eventbased";
import { Eventcomplianes } from "../view/startup/eventbased/Eventcomplianes";
import { Abregs } from "../view/startup/ngo/Abregs";
import { Ngo } from "../view/startup/ngo/Ngo";
import { Ngocsrcon } from "../view/startup/ngo/Ngocsrcon";
import { Ngocsrfill } from "../view/startup/ngo/Ngocsrfill";
import { Ngoreg } from "../view/startup/ngo/Ngoreg";
import { Strikeoff } from "../view/startup/ngo/Strikeoff";
import { Annualcomp } from "../view/startup/secretarial/Annualcomp";
import { Annualfill } from "../view/startup/secretarial/Annualfill";
import { Nbfccomp } from "../view/startup/secretarial/Nbfccomp";
import { Nidhicompany } from "../view/startup/secretarial/Nidhicompany";
import { Secretarial } from "../view/startup/secretarial/Secretarial";
import { Sectioncompany } from "../view/startup/secretarial/Sectioncompany";
import { Cheque } from "../view/tax/legal/Cheque";
import { Consumercomplaint } from "../view/tax/legal/Consumercomplaint";
import { Legalnotice } from "../view/tax/legal/Legalnotice";
import { Legalservice } from "../view/tax/legal/Legalservice";
import { Publicinterest } from "../view/tax/legal/Publicinterest";
import { Rera } from "../view/tax/legal/Rera";
import { Gstreg } from "../view/tax/taxfilling/Gstreg";
import { Gstreturn } from "../view/tax/taxfilling/Gstreturn";
import { Incometax } from "../view/tax/taxfilling/Incometax";
import { Professionaltax } from "../view/tax/taxfilling/Professionaltax";
import { Taxfiling } from "../view/tax/taxfilling/Taxfiling";
import { Tdsreturn } from "../view/tax/taxfilling/Tdsreturn";

function MainNavigator() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/businessreg" element={<Businessreg />} />
        <Route path="/privatelimitedreg" element={<Privatelimitedreg />} />
        <Route path="/nidhireg" element={<Nidhireg />} />
        <Route path="/onepersonreg" element={<Onepersonreg />} />
        <Route path="/pubiclimitedreg" element={<Publiclimitedreg />} />
        <Route path="/producerreg" element={<Producerreg />} />
        <Route path="/businessclousre" element={<Businessclousre />} />
        <Route path="/closinglim" element={<Closinglim />} />
        <Route path="/revival" element={<Revival />} />
        <Route path="/windingup" element={<Windingup />} />
        <Route path="/businessconver" element={<Businessconver />} />
        <Route path="/conversionprivate" element={<Conversionprivate />} />
        <Route path="/conversionpublic" element={<Conversionpublic />} />
        <Route path="/partnershipcompany" element={<Partnershipcompany />} />
        <Route path="/soloproprietor" element={<Soloproprietor />} />
        <Route path="/appointmentdir" element={<Appointmentdir />} />
        <Route path="/changeindir" element={<Changeindir />} />
        <Route path="/changeinobject" element={<Changeinobject />} />
        <Route path="/changeinname" element={<Changeinname />} />
        <Route path="/eventbased" element={<Eventbased />} />
        <Route path="/eventcomplianes" element={<Eventcomplianes />} />
        <Route path="/abregs" element={<Abregs />} />
        <Route path="/ngo" element={<Ngo />} />
        <Route path="/ngocsrfill" element={<Ngocsrfill />} />
        <Route path="/ngocsrcon" element={<Ngocsrcon />} />
        <Route path="/ngoreg" element={<Ngoreg />} />
        <Route path="/strikeoff" element={<Strikeoff />} />
        <Route path="/annualcomp" element={<Annualcomp />} />
        <Route path="/annualfill" element={<Annualfill />} />
        <Route path="/nbfccomp" element={<Nbfccomp />} />
        <Route path="/nidhicomp" element={<Nidhicompany />} />
        <Route path="/secretarial" element={<Secretarial />} />
        <Route path="/sectioncomp" element={<Sectioncompany />} />
        <Route path="/fssaieat" element={<Fssaieat />} />
        <Route path="/fssailicense" element={<Fssailicense />} />
        <Route path="/fpomark" element={<Fpomark />} />
        <Route path="/fssaiproduct" element={<Fssaiproduct />} />
        <Route path="/fssairecycle" element={<Fssairecycle />} />
        <Route path="/fssaistate" element={<Fssaistate />} />
        <Route path="/ipr" element={<Ipr />} />
        <Route path="/indianpatent" element={<Indianpatent />} />
        <Route path="/trademark" element={<Trademark />} />
        <Route path="/trademarkclass" element={<Trademarkclass />} />
        <Route path="/trademarkreg" element={<Trademarkreg />} />
        <Route path="/wordmark" element={<Wordmark />} />
        <Route path="/iso" element={<Iso />} />
        <Route path="/isocer" element={<Isocer />} />
        <Route path="/isocerti" element={<Isocerti />} />
        <Route path="/isocertific" element={<Isocertific />} />
        <Route path="/isoems" element={<Isoems />} />
        <Route path="/incometax" element={<Incometax />} />
        <Route path="/isofsms" element={<Isofsms />} />
        <Route path="/taxfiling" element={<Taxfiling />} />
        <Route path="/tdsreturn" element={<Tdsreturn />} />
        <Route path="/gstreg" element={<Gstreg />} />
        <Route path="/gstreturn" element={<Gstreturn />} />
        <Route path="/professionaltax" element={<Professionaltax />} />
        <Route path="/rera" element={<Rera />} />
        <Route path="/cheque" element={<Cheque />} />
        <Route path="/consumercomplaint" element={<Consumercomplaint />} />
        <Route path="/legalnotice" element={<Legalnotice />} />
        <Route path="/legalservice" element={<Legalservice />} />
        <Route path="/publicinterest" element={<Publicinterest />} />
      </Routes>
    </div>
  );
}

export default MainNavigator;