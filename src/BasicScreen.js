import React from 'react'

import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';


import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';

import './BasicScreen.css'


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));



function BasicScreen() {

  const [expanded, setExpanded] = React.useState('none');

  const handleChange = (panel) => (event, isExpanded) => {
    if(expanded === panel){
      setExpanded('none')
    } else {
      setExpanded(isExpanded ? false : panel);
      return window.scrollTo(0, 0);
    }
  };


  return (
    <div className="basicScreen">

    <div className="accordionWrapper">
      <div className="accordion">
        <div className="accordion-title" onClick={handleChange('panel1')}>
          {expanded === 'panel1' ? <KeyboardArrowUpRoundedIcon /> : <KeyboardArrowDownRoundedIcon />}
          <h2 className={`${expanded === 'panel1' ? "accordion-title--selected" : "accordion-title--default"}`}>Introduction</h2>
        </div>
        <div className={`accordion-content ${expanded === 'panel1' ? "accordion-content--show" : "accordion-content--hidden"}`}>
          <p>The mission of Advanced Analgesia in the Emergency Department (AAED) is to provide patients with better, safer, definitive pain control. AAED is both a philosophy and approach to pain management. It integrates the best evidence based practices into an easily understandable and applicable framework and emphasizes the humanistic aspects of medicine that define optimal patient care. AAED appreciates the complexity and diversity of the pain experience and arms clinicians with the expertise needed to approach and ameliorate pain in all its forms.</p>
          <br />
          <ul>
            <p>AAED philosophy that emphasizes the following:</p>
            <li>Use of nonopioid approaches, both medical and procedural, as first-line therapies</li>
            <li>Use of several agents for multimodal pain control rather than relying on monotherapies</li>
            <li>Use of opioids primarily as rescue medications</li>
            <li>Discussion of realistic, functional pain management goals with patient</li>
            <li>Use of empathic language when discussing pain</li>
          </ul>
          <br />
          <ol>
            <p>In order to master and apply AAED, clinicians must master the three pillars upon which optimal pain control is obtained, those include:</p>
            <li>Pain Psychology</li>
            <li>Multimodal Analgesia</li>
            <li>Regional Analgesia</li>
          </ol>
          <br />
          <p>Once mastered, these interconnected skill and knowledge sets allow clinicians to provide patients, even patients with complex injuries, medical or psychiatric comorbidities with excellent analgesia. Moreover, through a master of these pillars of pain management, clinicians will find themselves less dependent on opioid analgesics, and more capable of providing patients with excellent analgesia. The importance of decreasing opioid utilization, especially in the context of our current opioid crisis cannot be overstated.</p>
          <br />
          <p>In Block Party, we provide emergency clinicians with an easy to access resource that builds foundational knowledge and provides a quick and accessible reference to use on shift. Block Party, makes accessible to emergency clinicians the knowledge of how to perform an comprehensive array of procedures, nerve blocks and field blocks that can be used to address the most severe types of pain. Moreover, regional analgesia as a practice hold significant benefits in terms of length of stay, patient satisfaction, morbidity and mortality (see evidence of benefit section).</p>
          <br />
          <p>Depending on the location of the nerve block, anesthesia can be achieved over a large area. Blocks can be performed to help facilitate pain control with acute injuries, provide analgesia for laceration repair, incision and drainage or ED based procedures such as central lines / chest tubes, as well as aid in fracture and dislocation reduction. Simple nerve blocks may be familiar to the emergency physician and easily performed by landmark techniques (i.e., dental blocks, wrist blocks). However, more technically challenging regional anesthesia and plane blocks have increased success and safety when using ultrasound guidance.</p>
          <br />
          <p>In addition, regional and procedural analgesia represent an area of medicine where optimal care is well reimbursed, providing a compelling financial incentive for clinicians and practices to add regional analgesia to their skill set.</p>
          <br />
          <p>This reference, along with practice, are meant to aid emergency clinicians to develop competency with as many techniques as possible in order to provide opioid-free analgesic options. We hope that this reference serves you and your patients well, and that it is a means to improving the care that you are able to provide.</p>
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-title" onClick={handleChange('panel2')}>
          {expanded === 'panel2' ? <KeyboardArrowUpRoundedIcon /> : <KeyboardArrowDownRoundedIcon />}
          <h2 className={`${expanded === 'panel2' ? "accordion-title--selected" : "accordion-title--default"}`}>Evidence of Benefit</h2>
        </div>
        <div className={`accordion-content ${expanded === 'panel2' ? "accordion-content--show" : "accordion-content--hidden"}`}>
          <p>Regional Anesthesia (RA) has emerged as an effective alternative to opioid medications for pain in the emergency department (ED). The safety and overall effectiveness of RA in the ED has been proven through multiple investigations over the last decade. In the ED setting, RA has been shown to decrease the length of stay, reduce the need for procedural sedation, reduce the need for in-hospital opioids, and increased overall patient satisfaction compared to other methods of pain control. In specific cases RA has also been shown to decrease mortality, particularly RA that provide analgesia for rib, hip and femur fractures. Ultrasound improves block the success rate over landmark based approaches and also time of onset of block, decreased anesthetic requirements, decreased block performance time and decreased rate of complications.</p>
          <br />
          <p>Ultrasound guided regional anesthesia (UGRA) is increasingly being performed in academic Eds throughout the country, with 84% of institutions reporting performance of these procedures. Yet there is no unified curriculum, there is significant variation in methods, techniques and which UGRA procedures are taught. An expert panel of 13 emergency medicine trained ultrasound faculty members achieved a consensus that the following nerve blocks should be part of the curriculum for practicing emergency medicine physicians:</p>
          <ul>
            <li>Interscalene brachial plexus</li>
            <li>Supraclavicular brachial plexus</li>
            <li>Radial nerve</li>
            <li>Median nerve</li>
            <li>Ulnar nerve</li>
            <li>Serratus anterior plane</li>
            <li>Fascia iliaca</li>
            <li>Femoral nerve</li>
            <li>Popliteal sciatic nerve</li>
            <li>Posterior tibial nerve</li>
          </ul>
          <br />
          <br />
          <div className="accordion-content--reference">
            <ol>
              <p>Reference</p>
              <li>Tucker RV, Peterson WJ, Mink JT, et al. Defining an ultrasound-guided regional anesthesia curriculum for emergency medicine. AEM Educ Train. 2021;5(3):e10557.</li>
              <li>(1)	Malik A, Thom S, Haber B, et al. Regional anesthesia in the emergency department: an overview of common nerve block techniques and recent literature. Curr Emerg Hosp Med Rep. 2022;10(3):54-66.</li>
              <li>(1)	Gadsden J, Warlick A. Regional anesthesia for the trauma patient: improving patient outcomes. Local Reg Anesth. 2015;8:45-55.</li>
              <li>Amini R, Kartchner JZ, Nagdev A, Adhikari S. Ultrasound-guided nerve blocks in emergency medicine practice. Journal of Ultrasound in Medicine. 2016;35(4):731-736.</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-title" onClick={handleChange('panel3')}>
          {expanded === 'panel3' ? <KeyboardArrowUpRoundedIcon /> : <KeyboardArrowDownRoundedIcon />}
          <h2 className={`${expanded === 'panel3' ? "accordion-title--selected" : "accordion-title--default"}`}>Anesthetic Choice</h2>
        </div>
        <div className={`accordion-content ${expanded === 'panel3' ? "accordion-content--show" : "accordion-content--hidden"}`}>
          <p>It is important to know the specific characteristics of the commonly used anesthetics in the emergency room as they have different speed, duration of action and risk profiles.</p>
          <br />
          <h3>Mechanism:</h3>
          <p>All anesthetics work by reversible inhibition of sodium ion influx into nerve fibers, blocking depolarization and overall transmission of pain along the nerve. The different anesthetics have differing degrees of duration of action and toxicity. Of the three anesthetics, bupivacaine has the highest lipid solubility, both affecting its duration of action and toxicity. It has the highest cardio and neuro toxicity, likely because it can most readily cross lipid layers and inhibit the sodium channels that exist in the brain and heart. As such, the safe doses of bupivacaine that can be used are much lower than that of the other anesthetics such as lidocaine.</p>
          <br />
          <h3>Time to onset:</h3>
          <p>The in vivo time to onset of nerve inhibition largely depends on the concentration of anesthetic used. The concentration of anesthetic will determine how fast it diffuses to the tissues around it. To illustrate this, .75% Bupivacaine will have a faster onset then .25% lidocaine. Yet, because of its higher toxicity, bupivacaine generally comes only in .25% or .5% concentrations. This means that in actual clinic use, bupivacaine will have a slower onset to action then lidocaine, which comes in 1-2% concentrations.  </p>
          <br />
          <h3>Classes of anesthetics:</h3>
          <p>Lidocaine, bupivacaine and ropivacaine are all amides. If a patient is allergic to any one of these, an ester type anesthetic should be used, some examples of which include chloroprocaine and prilocaine. A table of the commonly used anesthetics in the emergency department are listed below.</p>
          <br/>

          <p><strong>Local Anesthetic Maximum Bolus Doses in Regional Anesthesia</strong></p>

          <div className="accordion-content--tableWrapper">
          <table cellPadding="0" cellSpacing="0" className="tableWidth-150">
            <tr>
              <td className="tdWidth-70">Local Anesthetic</td>
              <td>Max Dose (mg/kg)</td>
              <td>50 kg (mL)</td>
              <td>60 kg (mL)</td>
              <td>70 kg (mL)</td>
              <td>80 kg (mL)</td>
              <td>90 kg (mL)</td>
              <td>100 kg (mL)</td>
              <td className="tdWidth-70">Half-life Additional Considerations</td>
            </tr>
            <tr>
              <td>Bupivacaine 0.25%(2.5 mg/mL)</td>
              <td>2 mg/kg</td>
              <td>100 mg (40 mL)</td>
              <td>120 mg (48 mL)</td>
              <td>140 mg (56 mL)</td>
              <td>160 mg (64 mL)</td>
              <td>175 mg (70 mL)</td>
              <td>-</td>
              <td>4-8 hours Contraindicated in pregnancy</td>
            </tr>
            <tr>
              <td>Bupivacaine 0.5% (5 mg/mL)</td>
              <td>2 mg/kg</td>
              <td>100 mg (20 mL)</td>
              <td>120 mg (24 mL)</td>
              <td>140 mg (28 mL)</td>
              <td>160 mg (32 mL)</td>
              <td>175 mg (35 mL)</td>
              <td>-</td>
              <td>4-8 hours Contraindicated in pregnancy</td>
            </tr>
            <tr>
              <td>Lidocaine 1% w/ epi (10 mg/mL)</td>
              <td>7 mg/kg</td>
              <td>350 mg (35 mL)</td>
              <td>420 mg (42 mL)</td>
              <td>490 mg (49 mL)</td>
              <td>500 mg (50 mL)</td>
              <td>-</td>
              <td>-</td>
              <td>2-6 hours. Good for facial, digit and penile blocks</td>
            </tr>
            <tr>
              <td>Lidocaine 1% (10 mg/mL)</td>
              <td>4 mg/kg</td>
              <td>200 mg (20 mL)</td>
              <td>240 mg (24 mL)</td>
              <td>280 mg (28 mL)</td>
              <td>300 mg (30 mL)</td>
              <td>-</td>
              <td>-</td>
              <td>1-4 hours. Do not repeat within 2 hours Ideal for shorter blocks</td>
            </tr>
            <tr>
              <td>Lidocaine 2% (20 mg/mL)</td>
              <td>4 mg/kg</td>
              <td>200 mg (10 mL)</td>
              <td>240 mg (12 mL)</td>
              <td>280 mg (14 mL)</td>
              <td>300 mg (15 mL)</td>
              <td>-</td>
              <td>-</td>
              <td>1-4 hours. Do not repeat within 2 hours Ideal for shorter blocks</td>
            </tr>
            <tr>
              <td>Lidocaine 2% (20 mg/mL)</td>
              <td>4 mg/kg</td>
              <td>200 mg (10 mL)</td>
              <td>240 mg (12 mL)</td>
              <td>280 mg (14 mL)</td>
              <td>300 mg (15 mL)</td>
              <td>-</td>
              <td>-</td>
              <td>1-4 hours. Do not repeat within 2 hours Ideal for shorter blocks</td>
            </tr>
            <tr>
              <td>Ropivacaine 0.2% (2 mg/mL)</td>
              <td>3 mg/kg</td>
              <td>150 mg (75 mL)</td>
              <td>180 mg (90 mL)</td>
              <td>210 mg (105 mL)</td>
              <td>240 mg (120 mL)</td>
              <td>270 mg (135 mL)</td>
              <td>300 mg (150 mL)</td>
              <td>4-10 hours. Less cardiotoxic than bupivacaine = safer for high-dose, high-volume blocks</td>
            </tr>
            <tr>
              <td>Ropivacaine 0.5% (5 mg/mL)</td>
              <td>3 mg/kg</td>
              <td>150 mg (30 mL)</td>
              <td>180 mg (36 mL)</td>
              <td>210 mg (42 mL)</td>
              <td>240 mg (48 mL)</td>
              <td>270 mg (48 mL)</td>
              <td>300 mg (48 mL)</td>
              <td>4-10 hours. Less cardiotoxic than bupivacaine = safer for high-dose, high-volume blocks</td>
            </tr>
          </table>
          </div>
          
          <p className="accordion-content--reference">* Do not exceed maximum recommended dose regardless of weight This quick reference table shows the recommended safe maximal doses for commonly used anesthetics in regional anesthesia. It is important to note that the acutely ill or elderly may be more susceptible to local anesthetic toxicity.</p>

          <br />
          <h3>Dosing adjustment considerations:</h3>
          <p>Dosing adjustment considerations related to renal function, extremes of age, hepatic dysfunction, advanced heart failure and all stages of pregnancy. These conditions either reduce clearance of anesthetic such as in the case of congestive heart failure and liver disease or, in the case of pregnancy, increase the susceptibility of nerves to these drugs. In all these scenarios, the dosage of local anesthetics should be decreased.</p>
          <br />
          <h3>Additives:</h3>
          <p>Epinephrine is a common additive to anesthetic solutions. It causes vasoconstriction in the area applied, reducing the rate of vascular absorption thereby increasing the number of molecules that remain in the area for a longer amount of time. This will extend the duration of any nerve blocks performed.  Previous investigations have found that the addition of dexamethasone in a peripheral nerve block is associated with a longer duration of sensory block and reduction in pain multiple days out.</p>
          <br />
          <div className="accordion-content--reference">
            <p>Reference</p>
            <ol>
              <li><a href="https://www-clinicalkey-com.revproxy.brown.edu/#!/content/playContent/1-s2.0-S2058534919301520?returnurl=null&referrer=null"  target="_blank">https://www-clinicalkey-com.revproxy.brown.edu/#!/content/playContent/1-s2.0-S2058534919301520?returnurl=null&amp;referrer=null</a></li>
              <li>MD MAG, MD LIE, MD LAF, MD JPWK, MD NHC, MD KL, eds. Miller's Anesthesia, 2-Volume Set. 9th edition. Elsevier; 2019.</li>
              <li>Huynh TM, Marret E, Bonnet F. Combination of dexamethasone and local anaesthetic solution in peripheral nerve blocks: A meta-analysis of randomised controlled trials. Eur J Anaesthesiol. 2015;32(11):751-758.</li>
              <li>Knezevic NN, Anantamongkol U, Candido KD. Perineural dexamethasone added to local anesthesia for brachial plexus block improves pain but delays block onset and motor blockade recovery. Pain Physician. 2015;18(1):1-14.</li>
              <li>Intraneural lidocaine uptake compared with analgesic differences between pregnant and nonpregnant rats. Regional Anesthesia and Pain Medicine. 1997;22(4):363-371.</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-title" onClick={handleChange('panel4')}>
          {expanded === 'panel4' ? <KeyboardArrowUpRoundedIcon /> : <KeyboardArrowDownRoundedIcon />}
          <h2 className={`${expanded === 'panel4' ? "accordion-title--selected" : "accordion-title--default"}`}>Risks of RA</h2>
        </div>
        <div className={`accordion-content ${expanded === 'panel4' ? "accordion-content--show" : "accordion-content--hidden"}`}>
          <p>Complications associated with Regional Anesthesia include infection, bleeding, neurologic injury, systemic toxicity or local anesthetic systemic toxicity (LAST) and for some specific blocks respiratory failure. Factors that can affect the amount of risk for the procedures include individual patient risk factors, anatomy factors of the target anesthetic location, anesthetic choice, intensity, and duration of analgesia desired and the level and period of clinical monitoring after the procedure that is available. It is incumbent on the performing clinician to have a throughout understanding of the benefits of risks of regional anesthesia before performing any of these procedures. Proper safety protocols should be in place to deal with complications known to occur with these procedures. These protocols should generally include making the following routine practice during the performance of regional anesthesia procedures:</p>
          <ol>
            <li>Vital sign monitoring equipment including a cardiac monitor in active use on the patient</li>
            <li>Drugs to terminate convulsions within easy access, namely intralipid 20%, and benzodiazepines for any seizures including midazolam, lorazepam or diazepam</li>
            <li>IV in place to be able to rapidly administer these drugs</li>
            <li>Airway equipment easily and rapidly accessible capable of delivering positive pressure ventilation within easy access</li>
          </ol>
          <br/>

          <h3>Infection:</h3>
          <p>Studies examining the role of asepsis during peripheral nerve blocks is lacking. Alcohol-based chlorhexidine antiseptic solution should be applied before performance of procedure. Sterile surgical gloves should be used. There is significant disagreement on whether a sterile field should be in place for each RA procedure.</p>
          <br />
          <h3>Nerve injury:</h3>
          <p>Peripheral nerve Injury is a rare event, occurring 2-4/10,000 procedures (1). Most of these injuries resolve within weeks, with 99.9% of these peripheral neuropathies resolving within a year. Injury often occurs with direct trauma with a needle and intra-neural injection during the performance of RA techniques (4). Rupture of the perineurium from trauma compromises the fascicle’s protective environment, which can result in subsequent peripheral nerve injury. Local anesthetic directly applied to the nerve can also cause neurotoxicity and inflammation. This is because the concentration found in most commercial solutions are toxic to the nerves. Normally, the concentration of anesthetic that reaches the nerve is diluted as it spreads through the tissues to reach the nerve. Bleeding around and inside the nerve can also lead to ischemia of the nerve. As such, it is imperative that intraneural needle insertion and injection does not occur. Visualizing the entire length and tip of the needle with good in-line technique during the procedure is imperative. Some techniques used to help achieve this include:</p>
          <ul>
            <li>Operator competency: Previous experience identifying needles using ultrasound through experience, simulation and/or practice</li>
            <li>Hydrolocation: Injection of small volumes of saline during the procedure</li>
            <li>Tissue movement: Shaking of needle to assess movement of surrounding tissue</li>
            <li>Decreased angle of insonation: Decreasing the angle between the needle and probe helps visualize the needle</li>
            <li>Use of echogenic needle</li>
          </ul>
          <br />
          <p>There is no little evidence to support the effectiveness of  “hand feel” monitoring during injection, although alternative more effective methods have been describe. Patient risk factors found to independently increase the chance of neurologic injury after RA include diabetes, peripheral vascular disease, hypertension, smoking and vasculitis,</p>
          <br />
          <div className="accordion-content--reference">
            <p>Reference</p>
            <ol>
              <li><a href="https://rapm-bmj-com.revproxy.brown.edu/content/rapm/40/5/401.full.pdf" target="_blank">https://rapm-bmj-com.revproxy.brown.edu/content/rapm/40/5/401.full.pdf</a></li>
              <li>Auroy Y, Benhamou D, Bargues L, et al. Major complications of regional anesthesia in France. The SOS regional anesthesia hotline service. Anesthesiology. 2002;97:1274–1280.</li>
              <li>Perioperative peripheral nerve injuries <a href="https://www.nysora.com/topics/foundations-of-regional-anesthesia/patient-management/monitoring-documentation-consent-regional-anesthesia-procedures/" target="_blank">https://www.nysora.com/topics/foundations-of-regional-anesthesia/patient-management/monitoring-documentation-consent-regional-anesthesia-procedures/</a></li>
              <li>Neal JM, Barrington MJ, Brull R, et al. The second asra practice advisory on neurologic complications associated with regional anesthesia and pain medicine: executive summary 2015. Reg Anesth Pain Med. 2015;40(5):401-430.</li>
              <li><a href="https://rapm-bmj-com.revproxy.brown.edu/content/rapm/31/4/311.full.pdf" target="_blank">https://rapm-bmj-com.revproxy.brown.edu/content/rapm/31/4/311.full.pdf</a></li>
              <li>Tucker RV, Peterson WJ, Mink JT, et al. Defining an ultrasound-guided regional anesthesia curriculum for emergency medicine. AEM Educ Train. 2021;5(3):e10557.</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="accordion">
        <div className="accordion-title" onClick={handleChange('panel5')}>
          {expanded === 'panel5' ? <KeyboardArrowUpRoundedIcon /> : <KeyboardArrowDownRoundedIcon />}
          <h2 className={`${expanded === 'panel5' ? "accordion-title--selected" : "accordion-title--default"}`}>Local Anesthetic Systemic Toxicity (LAST)</h2>
        </div>
        <div className={`accordion-content ${expanded === 'panel5' ? "accordion-content--show" : "accordion-content--hidden"}`}>
          <p><strong>Local anesthetic systemic toxicity (LAST)</strong>is a life-threatening adverse reaction resulting from local anesthetic reaching significant systemic circulating levels. This generally occurs with accidental intravascular injection or use of excessive doses.  It is rare, and all data known about it are from case reports and retrospective analysis. It is estimated there is an overall incidence of 27 per peripheral nerve blocks, with different blocks having different rates of LAST. The mechanism is unclear, however it is believed to be by blockade of sodium channels in critical areas including central nervous system neurons and cardiac tissue. Blockade of sodium channels in cortical neurons results in seizures and respiratory arrest, whereas blockade in the cardiovascular systems results in arrythmias including bradycardia, ventricular arrythmias, hypotension and cardiac arrest.</p>
          <br />
          <p> As seen in the table below (figure 1), the symptoms generally follow a linear progression from tinnitus and oral sensory abnormalities to cardiovascular. Generally, CNS toxicity resulting in seizures occur before cardiovascular collapse. As such, if early symptoms of LAST start to occur, injection or infusion of further anesthetic should immediately be stopped, and treatment highly considered.</p>
          <div className="accordion-content--img">
            <img src="https://advanced-analgesia.s3.amazonaws.com/basics/BasicScreen_LAST-fig1.png" alt="" />
            <p className="accordion-content--reference">Figure 1. Relationship of signs and symptoms of toxicity </p>
          </div>
          <div className="accordion-content-reference">
            <p>Source: Local Anesthetics, Goldfrank's Toxicologic Emergencies, 10e</p>
            <p>Citation: Hoffman RS, Howland M, Lewin NA, Nelson LS, Goldfrank LR. Goldfrank's Toxicologic Emergencies, 10e;</p>
          </div>
          <br />
          <br />
          <h3>Treatment:</h3>
          <p>LAST is rare and almost always occurs within minutes of injection of local anesthetic. In addition to standard care given for seizures and/or cardiac arrest, a lipid emulsion therapy should be administered. Although the mechanism of action is unclear in LAST, it may act as a lipid sink and facilitate redistribution of local anesthetic from target organs.</p>
          <br />
          <h3>Dosing 20% intralipid:</h3>
          <ul>
            <li>Bolus: 1-1.5 mL/kg over 1 min</li>
            <ul>
              <li>Can repeat bolus every 3 minutes up to a total dose of 3 mL/kg</li>
            </ul>
            <li>Infusion: 0.25 mL/kg/min</li>
            <ul>
              <li>Continue infusion until hemodynamically stable for at least 10 minutes</li>
              <li>Can increase infusion to 0.5 mL/kg/min if BP worsens</li>
            </ul>
          </ul>
          <p>The needed equipment to recognize and treat LAST in timely manner should be in place before any RA procedure is performed. This includes having the patient on a cardiac monitor, an intravenous line in place, and easily and rapidly accessible intralipid to be able to immediately administer it.</p>
          <br />
          <br />
          <div className="accordion-content--reference">
            <p>Reference</p>
            <ol>
              <li>Arumugam S, Contino V, Kolli S. Local anesthetic systemic toxicity (Last) - a review and update. Curr Anesthesiol Rep. 2020;10(2):218-226.</li>
              <li>Ciechanowicz S, Patil V. Lipid emulsion for local anesthetic systemic toxicity. Anesthesiol Res Pract. 2012;2012:131784.</li>
            </ol>
          </div>
        </div>
        
      </div>


      <div className="accordion">
        <div className="accordion-title" onClick={handleChange('panel6')}>
          {expanded === 'panel6' ? <KeyboardArrowUpRoundedIcon /> : <KeyboardArrowDownRoundedIcon />}
          <h2 className={`${expanded === 'panel6' ? "accordion-title--selected" : "accordion-title--default"}`}> Reimbursement</h2>
        </div>
        <div className={`accordion-content ${expanded === 'panel6' ? "accordion-content--show" : "accordion-content--hidden"}`}>
          <p>Regional analgesia presents an opportunity to provide better care, and also reimbursable care for physician and physician groups. Below is a summary of reimbursement based on 2020 Medicare rates. While there is direct reimbursement for procedures performed by emergency physicians, the far greater benefit to the health system and patients are decreased costs form decreased length of stay, decreased morbidity and mortality and improve patient satisfaction.</p>
          <br/>


          <table cellPadding="0" cellSpacing="0">
            <tr>
              <td colSpan="4" style={{textAlign:"center"}}>
                <h2>RVU Table</h2>
                <p className="accordion-content--reference">based on 2020 Medicare Reimbursement Rates</p>
              </td>
            </tr>
            <tr>
              <td colSpan="4">
                <ul>
                  <li>Medicaid rates typically pay between 50% - 80% of Medicare</li>
                  <li>Private insurance typically pays 1.25 to 10X Medicare Rates</li>
                  <li>Most insurers and Medicare decrease the second and subsequent procedures performed on the same day by 50-75% reimbursement of the fee schedule</li>
                </ul>
              </td>
            </tr>
          </table>
          
          <table cellPadding="0" cellSpacing="0">
            <tr>
              <td colSpan="4" style={{textAlign:"center"}}><h2>Head & Neck</h2></td>
            </tr>
            <tr>
              <td><strong>Block</strong></td>
              <td><strong>RVU</strong></td>
              <td><strong>Medicare 2020</strong></td>
              <td><strong>Medicare 2021 presumed</strong></td>
            </tr>
            <tr>
              <td>Trigeminal Nerve Blocks</td>
              <td>1.44</td>
              <td>$51.97</td>
              <td>$48.07</td>
            </tr>
            <tr>
              <td>Superficial Cervical Plexus Block</td>
              <td>1.23</td>
              <td>$51.97</td>
              <td>$48.07</td>
            </tr>
            <tr>
              <td>Greater Auricular Nerve Block</td>
              <td>1.23</td>
              <td>$44.39</td>
              <td>$41.06</td>
            </tr>
            <tr>
              <td>Occipital Nerve Block</td>
              <td>1.55</td>
              <td>$55.94</td>
              <td>$51.74</td>
            </tr>
          </table>
{/*  */}
          <table cellPadding="0" cellSpacing="0">
            <tr>
              <td colSpan="4" style={{textAlign:"center"}}><h2>Upper Extremity</h2></td>
            </tr>
            <tr>
              <td><strong>Block</strong></td>
              <td><strong>RVU</strong></td>
              <td><strong>Medicare 2020</strong></td>
              <td><strong>Medicare 2021 presumed</strong></td>
            </tr>
            <tr>
              <td>Interscalene brachial plexus block</td>
              <td>1.83</td>
              <td>$66.04</td>
              <td>$61.09</td>
            </tr>
            <tr>
              <td>Supraclavicular brachial plexus block</td>
              <td>1.83</td>
              <td>$66.04</td>
              <td>$61.09</td>
            </tr>
            <tr>
              <td>Suprascapular Block</td>
              <td>1.64</td>
              <td>$55.19</td>
              <td>$54.74</td>
            </tr>
            <tr>
              <td>Forearm block Ulnar Nerve Block</td>
              <td>1.23</td>
              <td>$44.39</td>
              <td>$41.06</td>
            </tr>
            <tr>
              <td>Radial Nerve Block</td>
              <td>1.23</td>
              <td>$44.39</td>
              <td>$41.06</td>
            </tr>
            <tr>
              <td>Median  Nerve Block</td>
              <td>1.23</td>
              <td>$44.39</td>
              <td>$41.06</td>
            </tr>
            <tr>
              <td>Complete Forearm Nerve block (All 3 nerves)</td>
              <td>3.69</td>
              <td>$133.17</td>
              <td>$123.17</td>
            </tr>
            <tr>
              <td>Landmark based Hand Block (All 3 nerves)</td>
              <td>3.69</td>
              <td>$133.17</td>
              <td>$123.17</td>
            </tr>
          </table>
{/*  */}
          <table cellPadding="0" cellSpacing="0">
            <tr>
              <td colSpan="4" style={{textAlign:"center"}}><h2>Torso / Abdomen</h2></td>
            </tr>
            <tr>
              <td><strong>Block</strong></td>
              <td><strong>RVU</strong></td>
              <td><strong>Medicare 2020</strong></td>
              <td><strong>Medicare 2021 presumed</strong></td>
            </tr>
            <tr>
              <td>Serratus Anterior Block</td>
              <td>1.72</td>
              <td>$62.07</td>
              <td>$57.41</td>
            </tr>
            <tr>
              <td>PECS I Block</td>
              <td>1.23</td>
              <td>$44.39</td>
              <td>$41.06</td>
            </tr>
            <tr>
              <td>PECS II Block</td>
              <td>2.95</td>
              <td>$106.46</td>
              <td>$98.47</td>
            </tr>
            <tr>
              <td>Erector Spinae Block</td>
              <td>-</td>
              <td>-</td>
              <td>-</td>
            </tr>
            <tr>
              <td>TAP Blocks unilateral</td>
              <td>1.62</td>
              <td>$58.47</td>
              <td>$54.08</td>
            </tr>
            <tr>
              <td>TAP Blocks bilateral</td>
              <td>2</td>
              <td>$72.18</td>
              <td>$66.76</td>
            </tr>
            <tr>
              <td>PENG Block</td>
              <td>1.53</td>
              <td>$55.22</td>
              <td>$51.07</td>
            </tr>
            <tr>
              <td>Axillary Nerve Bolck</td>
              <td>1.75</td>
              <td>$63.16</td>
              <td>$58.42</td>
            </tr>
          </table>
{/*  */}
          <table cellPadding="0" cellSpacing="0">
            <tr>
              <td colSpan="4" style={{textAlign:"center"}}><h2>Lower Extremity</h2></td>
            </tr>
            <tr>
              <td><strong>Block</strong></td>
              <td><strong>RVU</strong></td>
              <td><strong>Medicare 2020</strong></td>
              <td><strong>Medicare 2021 presumed</strong></td>
            </tr>
            <tr>
              <td>Fascia Iliaca Block</td>
              <td>1.53</td>
              <td>$55.22</td>
              <td>$51.07</td>
            </tr>
            <tr>
              <td>Femoral Nerve Block</td>
              <td>1.53</td>
              <td>$55.22</td>
              <td>$51.07</td>
            </tr>
            <tr>
              <td>Adductor Canal Block</td>
              <td>1.53</td>
              <td>$55.22</td>
              <td>$51.07</td>
            </tr>
            <tr>
              <td>Popliteal Block</td>
              <td>1.55</td>
              <td>$55.94</td>
              <td>$51.74</td>
            </tr>
            <tr>
              <td>Ankle Block</td>
              <td>1.23</td>
              <td>$44.39</td>
              <td>$41.06</td>
            </tr>
            <tr>
              <td>Posterior Tibial nerve block</td>
              <td>1.23</td>
              <td>$44.39</td>
              <td>$41.06</td>
            </tr>
          </table>
{/*  */}
          <table cellPadding="0" cellSpacing="0">
            <tr>
              <td colSpan="4" style={{textAlign:"center"}}><h2>Joint or Bursa Injections</h2><p className="accordion-content--reference">* Same code and reimbursement for the physician regardless of injection or aspiration or agent injecting into the joint</p></td>
            </tr>
            <tr>
              <td><strong>Block</strong></td>
              <td><strong>RVU</strong></td>
              <td><strong>Medicare 2020</strong></td>
              <td><strong>Medicare 2021 presumed</strong></td>
            </tr>
            <tr>
              <td>Knees, Hip, Shoulder</td>
              <td>1.32</td>
              <td>$47.64</td>
              <td>$44.06</td>
            </tr>
            <tr>
              <td>Knees, Hip, Shoulder with US</td>
              <td>1.73</td>
              <td>$62.44</td>
              <td>$57.75</td>
            </tr>
            <tr>
              <td>Ankle, wrist, elbow, AC, TMJ</td>
              <td>1.08</td>
              <td>$33.98</td>
              <td>$36.05</td>
            </tr>
            <tr>
              <td>Ankle, wrist, elbow, AC, TMJ with US</td>
              <td>1.52</td>
              <td>$54.86</td>
              <td>$0.74</td>
            </tr>
          </table>
{/*  */}
          <table cellPadding="0" cellSpacing="0">
            <tr>
              <td colSpan="4" style={{textAlign:"center"}}><h2>Trigger Point Injections</h2></td>
            </tr>
            <tr>
              <td><strong>Block</strong></td>
              <td><strong>RVU</strong></td>
              <td><strong>Medicare 2020</strong></td>
              <td><strong>Medicare 2021 presumed</strong></td>
            </tr>
            <tr>
              <td>Injection 1 or 2 named muscles</td>
              <td>1.11</td>
              <td>$40.06</td>
              <td>$37.05</td>
            </tr>
            <tr>
              <td>Injection 3 or more named muscles</td>
              <td>1.25</td>
              <td>$45.11</td>
              <td>$41.73</td>
            </tr>
            <tr>
              <td>Dry Needling/Accupuncture 1 or 2 named muscles</td>
              <td>0.47</td>
              <td>$16.96</td>
              <td>$15.69</td>
            </tr>
            <tr>
              <td>Dry Needling/Accupuncture 3 or more named muscles</td>
              <td>1.72</td>
              <td>$62.07</td>
              <td>$57.41</td>
            </tr>
          </table>
{/*  */}
          <table cellPadding="0" cellSpacing="0">
            <tr>
              <td colSpan="4" style={{textAlign:"center"}}><h2>Hematoma Blocks</h2><p className="accordion-content--reference">* If the hematoma is in a joint, you would use the arthrocentesis code. If it is in the shaft, you could use the other peripheral nerve code</p></td>
            </tr>
            <tr>
              <td><strong>Block</strong></td>
              <td><strong>RVU</strong></td>
              <td><strong>Medicare 2020</strong></td>
              <td><strong>Medicare 2021 presumed</strong></td>
            </tr>
            <tr>
              <td>Wrist</td>
              <td>1.08</td>
              <td>$33.98</td>
              <td>$36.05</td>
            </tr>
            <tr>
              <td>Ankle</td>
              <td>1.08</td>
              <td>$33.98</td>
              <td>$36.05</td>
            </tr>
            <tr>
              <td>Other long bones (ie Femur, Humerus, etc)</td>
              <td>1.08</td>
              <td>33.98</td>
              <td>$57.41</td>
            </tr>
          </table>
{/*  */}
          <table cellPadding="0" cellSpacing="0">
            <tr>
              <td colSpan="4" style={{textAlign:"center"}}><h2>ULTRASOUND for nerve blocks</h2></td>
            </tr>
            <tr>
              <td><strong>Block</strong></td>
              <td><strong>RVU</strong></td>
              <td><strong>Medicare 2020</strong></td>
              <td><strong>Medicare 2021 presumed</strong></td>
            </tr>
            <tr>
              <td>US for nerve block</td>
              <td>1.62</td>
              <td>$58.47</td>
              <td>$54.08</td>
            </tr>
            <tr>
              <td colSpan="4" style={{textAlign:"center"}}>
                <p><strong>Note: </strong>most insurers and Medicare decrease the second and subsequent procedures performed on the same day by 50-75% reimbursement of the fee schedule.</p>
              </td>
            </tr>
          </table>
          
        </div>
      </div>

      {expanded === 'none' ? <div className="basicScreen__bottomFill"></div> : null}

    </div>
    </div>
  )
}

export default BasicScreen