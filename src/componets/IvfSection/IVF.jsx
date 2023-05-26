import React from "react";
import "./style.css";
import MiniIvf from "../miniComponet/MiniIvf";
import Toggle from "../miniComponet/toggle";

const IVF = () => {
  return (
    <>
      <div className="ivf-main" id="Ivf">
        <div className="ivf-container">
          <div className="ivf-wrap">
            <div className="ivf-content">
              <h2 className="ivf-head">What is IVF</h2>
              <div className="ivf-bold-con">
                <span>
                  Infertility is failure to achieve pregnancy after 12 months of
                  unprotected intercourse. Complete evaluation and Infertility
                  Surgery Treatment in Bangalore for both partners is available
                  at our Hospital. We have been successful in treating many
                  infertile couples through ovulation induction, intrauterine
                  insemination & IVF/ICSI (test tube baby). Our center has a
                  good success rate of 50-60% with IVF Centre in Bangalore
                  couples at affordable costs.
                </span>
              </div>
              <div className="ivf-bold-con">
                <ol>
                  <li>
                    {" "}
                    Ovulation induction, follicular studies followed by either
                    timed intercourse or Intrauterine Insemination (IUI- with
                    husband’s or donor sperms).
                  </li>
                  <li>
                    IVF (Test tube baby). We offer the highest IVF Treatment
                    Centre in Bangalore success rates (50-60%) at affordable
                    costs.
                  </li>
                </ol>
              </div>
              <div className="ivf-bold-con">
                <h3>
                  {" "}
                  <bold>It Is Offered To Females :</bold>
                </h3>
                <ul>
                  <li>Tubal factor infertility.</li>
                  <li>Severe endometriosis.</li>
                  <li>Failed multiple cycles of OI, IUI.</li>
                  <li>Unexplained infertility, etc.</li>
                  <li>Male factor infertility- very low counts, motility.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MiniIvf />

      <div className="ivf-container">
        <div className="ivf-bold-con">
          <h3 className="ivf-head">Is IVF for me?</h3>
          <h4>A clinic may recommend IVF as your best treatment option if:</h4>
          <ul>
            <li>You have been diagnosed with unexplained infertility.</li>
            <li>
              You have been unsuccessful with other techniques like using
              fertility drugs or intrauterine insemination (IUI).
            </li>
            <li>
              You have been unsuccessful with other techniques like using
              fertility drugs or intrauterine insemination (IUI).
            </li>
            <li>
              There is a minor degree of male subfertility – more severe
              problems are treated with intra-cytoplasmic sperm injection
              (ICSI).
            </li>
          </ul>
        </div>
      </div>
      <Toggle />
      <div className="ivf-container">
        <div className="ivf-bold-con">
          <h2 className="ivf-head">Embryo Donation :</h2>
          <p className="em-para">
            Indicated in : There may be fertility problems such has neither of
            the partners would not be able to produce healthy gametes. In this
            case, the best option would be suggested for Embryo Donation.
          </p>
          <h3 style={{marginTop:"5px", marginBottom:"5px"}}>Other Indications :</h3>
          <ul>
            <li>
              For menopausal or perimenopausal women with a sub-fertile partner.
            </li>
            <li>Recurrent IVF failures.</li>
            <li>
              Patients who are carriers of genetic disease or chromosomal
              abnormalities
            </li>
          </ul>
          <h1 className="ivf-head" style={{marginTop:"5px", marginBottom:"5px"}}>Embryo Freezing (cryopreservation) :</h1>
        
      <p className="em-para">Extra embryos if present in excess and of good quality are preserved so that they can be used later if the first cycle fails.
</p>

<h2 className="ivf-head" style={{marginTop:"8px", marginBottom:"8px"}}>Sperm Freezing :</h2>
<p className="em-para">Sperm freezing is an option for those males who might not be present on the day of ovum pick up or intrauterine insemination. It also helps those who fail to produce their sample on the particular day due to stress.</p>
    
    <h2 className="ivf-head"  style={{marginTop:"8px", marginBottom:"8px"}}>Laser Assisted Hatching :</h2>
    <p className="em-para">The procedure is based on the fact that an alteration in zona pellucida (outer covering of egg) either by drilling a hole through it or by thinning it, will promote hatching or implantation of embryos that are otherwise unable to escape intact from the zona pellucida.</p>
    

    <h2 className="ivf-head"  style={{marginTop:"8px", marginBottom:"8px"}}>Sperm Retrieval Procedures :</h2>
    <h4>The testicular / epididymal sperm retrieval techniques are:</h4>
    <ul className="em-para">
        <li>PESA – Percutaneous Epididymal Sperm Aspiration.</li>
        <li>MESA – Microsurgical Epididymal Sperm Aspiration.</li>
        <li>TESA – Testicular Sperm Aspiration.</li>
        <li>TESE – Testicular Sperm Extraction.</li>
        </ul>

    <h2 className="ivf-head"  style={{marginTop:"8px", marginBottom:"8px"}}>Semen Banking :</h2>
    <p className="em-para">These facilities are available in Altius Hospital. The bank contains frozen sperm from voluntary donors with various backgrounds and physical characteristics to match with the individual needs. Donors are screened thoroughly to rule out transmission of any infectious or genetic diseases.</p>
    <h4>Other treatment modalities for infertile patients</h4>
<ul className="em-para">
    <li>Laparoscopic tubal recanalization.</li>
    <li>Laparoscopic varicocele ligation in male patients.</li>
</ul>

<h2 className="ivf-head"  style={{marginTop:"8px", marginBottom:"8px"}}>Our Achievements</h2>
<ul className="em-para">
    <li>First IVF/ICSI Baby.</li>
    <li>Success rates of 50-60%.</li>
    <li>Successfully delivered babies through IVF.</li>
    <li>Successfully delivered babies by ovum donation and embryo donation.</li>
    <li>Successfully delivered babies through surrogacy.</li>
    <li>Important contribution to overall pregnancy rates by embryo freezing.</li>
    <li>High success rates with IUI treatment.</li>
</ul>
        </div>
      </div>
    </>
  );
};

export default IVF;
