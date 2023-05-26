import React, {useState} from 'react'
import "./style.css"

const Toggle = () => {
    const [step1,setStep1] = useState(false)
    const [step2,setStep2] = useState(false)
    const [step3,setStep3] = useState(false)
    const [step4,setStep4] = useState(false)
    const [step5,setStep5] = useState(false)
    const [step6,setStep6] = useState(false)
    const [step7,setStep7] = useState(false)
    const [step8,setStep8] = useState(false)
  return (
<div style={{ maxWidth: "1140"}}>
    <div className='toggle-st'>
        <div className='tog-2'>
            <div className='tog-3'>
                <h2>How does IVF work For Women?</h2>
                <div style={{marginBottom:"20px"}}>
                    <p>
                    IVF techniques can differ from clinic to clinic, often depending on your individual circumstances.
                     A typical treatment may involve:
                    </p>
                    </div>
                <div className='todo-1'>
                    <a href  onClick={()=>setStep1(!step1)}>Step 1</a>
                    <div className='tog-true'>
                        {step1&&<p style={{padding:"15px",fontSize:"17px", fontFamily: "Poppins,sans-serif"}}>As a first step you may be given a drug to suppress your natural cycle.
                             Treatment is given as a daily injection. This continues for about two weeks</p>}
                    </div>
                    </div>
                <div className='todo-1'>
                    <a href  onClick={()=>setStep2(!step2)}>Step 2</a>
                    <div className='tog-true'>
                        {step2&&<p style={{padding:"15px",fontSize:"17px", fontFamily: "Poppins,sans-serif"}}>After the natural cycle is suppressed you are given a fertility hormone called FSH (or Follicle Stimulating Hormone). This is usually taken as a daily injection for around 12 days. This hormone will increase the number of eggs you produce – meaning that more eggs can be fertilised. 
                        With more fertilised eggs, the clinic has a greater choice of embryos to use in your treatment.</p>}
                    </div>
                </div>
                <div className='todo-1'>
                    <a href  onClick={()=>setStep3(!step3)}>Step 3</a>
                    <div className='tog-true'>
                        {step3&&<p style={{padding:"15px",fontSize:"17px", fontFamily: "Poppins,sans-serif"}}>Throughout the drug treatment, the clinic will monitor your progress. This is done by vaginal ultrasound scans and, possibly, blood tests. 
                        34–38 hours before your eggs are due to be collected you have a hormone injection to help your eggs mature treatment.</p>}
                    </div>
                </div>
                <div className='todo-1'>
                    <a href  onClick={()=>setStep4(!step4)}>Step 4</a>
                    <div className='tog-true'>
                        {step4&&<p style={{padding:"15px",fontSize:"17px", fontFamily: "Poppins,sans-serif"}}>Eggs are usually collected by ultrasound guidance under sedation. This involves a needle being inserted into the scanning probe and into each ovary. The eggs are, in turn, collected through the needle.
                         Cramping and a small amount of vaginal bleeding can occur after the procedure.</p>}
                    </div>
                </div>
                <div className='todo-1'>
                    <a href  onClick={()=>setStep5(!step5)}>Step 5</a>
                    <div className='tog-true'>
                        {step5&&<p style={{padding:"15px",fontSize:"17px", fontFamily: "Poppins,sans-serif"}}>Your eggs are mixed with your partner’s or the donor’s sperm and cultured in the laboratory for 16–20 hours. They are then checked to see if any have fertilised. Those that have been fertilised (now called embryos) are grown in the laboratory incubator for another one to two days before being checked again. The best one or two embryos will then be chosen for transfer. After egg collection, 
                        you are given medication to help prepare the lining of the womb for embryo transfer. This is given as pessaries, injection or gel.</p>}
                    </div>
                </div>
                <div className='todo-1'>
                    <a href  onClick={()=>setStep6(!step6)}>Step 6</a>
                    <div className='tog-true'>
                        {step6&&<p style={{padding:"15px",fontSize:"17px", fontFamily: "Poppins,sans-serif"}}>For women under the age of 40, one or two embryos can be transferred. If you are 40, or over, a maximum of three can be used. The number of embryos is restricted because of the risks associated with multiple births.
                         Remaining embryos may be frozen for future IVF attempts, if they are suitable.</p>}
                    </div>
                </div>
                <div className='todo-1'>
                    <a href  onClick={()=>setStep7(!step7)}>Step 7</a>
                    <div className='tog-true'>
                        {step7&&<p style={{padding:"15px",fontSize:"17px", fontFamily: "Poppins,sans-serif"}}>Around the time your partner’s eggs are collected, you are asked to produce a fresh sample of sperm. This is stored for a short time before the sperm are washed and spun at a high speed. This is so the healthiest and most active sperm can be selected</p>}
                    </div>
                </div>
                <div className='todo-1'>
                    <a href  onClick={()=>setStep8(!step8)}>Step 8</a>
                    <div className='tog-true'>
                        {step8&&<p style={{padding:"15px",fontSize:"17px", fontFamily: "Poppins,sans-serif"}}>Around the time your partner’s eggs are collected, you are asked to produce a fresh sample of sperm. This is stored for a short time before the sperm are washed and spun at a high speed.
                         This is so the healthiest and most active sperm can be selected</p>}
                    </div>
                </div>
                
            </div>

        </div>

    </div>
    </div>
  )
}

export default Toggle

