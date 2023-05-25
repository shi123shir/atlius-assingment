import React from "react";
import "./style.css";
import MiniIvf from "../miniComponet/MiniIvf";

const IVF = () => {
  return (
    <>
    <div className="ivf-main" id = "Ivf">
      <div className="ivf-container">
        <div className="ivf-wrap">
          <div className="ivf-content">
            <h2 className="ivf-head">What is IVF</h2>
            <div className="ivf-bold-con">
              <span>
                Infertility is failure to achieve pregnancy after 12 months of
                unprotected intercourse. Complete evaluation and Infertility
                Surgery Treatment in Bangalore for both partners is available at
                our Hospital. We have been successful in treating many infertile
                couples through ovulation induction, intrauterine insemination &
                IVF/ICSI (test tube baby). Our center has a good success rate of
                50-60% with IVF Centre in Bangalore couples at affordable costs.
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
        <h3 className="ivf-head" >Is IVF for me?</h3>
      <h4>A clinic may recommend IVF as your best treatment option if:</h4>
      <ul>
        <li>You have been diagnosed with unexplained infertility.</li>
        <li>You have been unsuccessful with other techniques like using fertility drugs or intrauterine insemination (IUI).
</li>
<li>You have been unsuccessful with other techniques like using fertility drugs or intrauterine insemination (IUI).
</li>
<li>There is a minor degree of male subfertility – more severe problems are treated with intra-cytoplasmic sperm injection (ICSI).
</li>
      </ul>

        </div>


    </div>
    </>
  );
};

export default IVF;
