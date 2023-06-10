import React from "react";

import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";

import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";

import "./BasicScreen.css";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

function BasicScreen() {
  const [expanded, setExpanded] = React.useState("none");

  const handleChange = (panel) => (event, isExpanded) => {
    if (expanded === panel) {
      setExpanded("none");
    } else {
      setExpanded(isExpanded ? false : panel);
      return window.scrollTo(0, 0);
    }
  };

  return (
    <div className="basicScreen">
      <div className="accordionWrapper">
        <div className="accordion">
          <div className="accordion-title" onClick={handleChange("panel1")}>
            {expanded === "panel1" ? (
              <KeyboardArrowUpRoundedIcon />
            ) : (
              <KeyboardArrowDownRoundedIcon />
            )}
            <h2
              className={`${
                expanded === "panel1"
                  ? "accordion-title--selected"
                  : "accordion-title--default"
              }`}
            >
              Introduction
            </h2>
          </div>
          <div
            className={`accordion-content ${
              expanded === "panel1"
                ? "accordion-content--show"
                : "accordion-content--hidden"
            }`}
          >
            <p>
              The mission of Advanced Analgesia in the Emergency Department
              (AAED) is to provide patients with better, safer, definitive pain
              control. AAED is both a philosophy and an approach to pain
              management, integrating the best evidence-based practices into an
              easily understood and applicable framework emphasizing optimal
              patient care. AAED appreciates the complexity and diversity of the
              pain experience and arms clinicians with the expertise needed to
              approach and ameliorate pain in all its forms.
            </p>
            <br />
            <ul>
              <p>Our philosophy emphasizes these principles:</p>
              <li>
                Use of non opioid approaches,both medications and procedures, as
                first-line therapies.
              </li>
              <li>
                An integrated approach to multimodal pain control rather than
                relying on monotherapies.
              </li>
              <li>
                Focus on realistic, functional pain management goals with
                patients
              </li>
              <li>
                Use of empathic language and psychological interventions to
                improveyour patients’ pain experience.
              </li>
            </ul>
            <br />
            <ol>
              <p>
                In order to master and apply AAED, clinicians must master the
                three pillars upon which optimal pain control is obtained, those
                include:
              </p>
              <li>Pain Psychology</li>
              <li>Multimodal Analgesia</li>
              <li>Regional Analgesia</li>
            </ol>
            <br />
            <p>
              AAED is based on three pillars upon which optimal pain control is
              provided. Once mastered, these interconnected skills and knowledge
              allow clinicians to be less dependent on opioid analgesics while
              providing patients, even those with complex injuries or
              co-morbidities, with optimal analgesia.
            </p>
            <br />
            <p>
              The importance of decreasing opioid utilization, especially in the
              context of our current opioid crisis, cannot be overstated. In
              this book, the regional analgesia (RA) pillar of advanced
              analgesia will be described and explored. We aim to help emergency
              clinicians build on their foundational knowledge by providing a
              quick, accessible reference to use on a busy clinical shift.
            </p>
            <br />
            <p>
              Depending on the location of the nerve block, anesthesia can be
              achieved over a large area. Blocks can be performed to help
              facilitate pain control with acute injuries, provide analgesia for
              laceration repair, incision and drainage or ED based procedures
              such as central lines / chest tubes, as well as aid in fracture
              and dislocation reduction. Simple nerve blocks may be familiar to
              the emergency physician and easily performed by landmark
              techniques (i.e., dental blocks, wrist blocks). However, more
              technically challenging regional anesthesia and plane blocks have
              increased success and safety when using ultrasound guidance.
            </p>
            <br />
            <p>
              We will cover how to perform an array of nerve blocks. This
              reference, along with guided practice, can help emergency
              physicians develop competency with as many of these procedures as
              possible.
            </p>
            <br />
            <p>
              Our editorial team hopes this guide serves you and your patients
              well, as you provide better, safer, definitive pain control in the
              emergency department.
            </p>
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-title" onClick={handleChange("panel2")}>
            {expanded === "panel2" ? (
              <KeyboardArrowUpRoundedIcon />
            ) : (
              <KeyboardArrowDownRoundedIcon />
            )}
            <h2
              className={`${
                expanded === "panel2"
                  ? "accordion-title--selected"
                  : "accordion-title--default"
              }`}
            >
              What is Advanced Analgesia?
            </h2>
          </div>
          <div
            className={`accordion-content ${
              expanded === "panel2"
                ? "accordion-content--show"
                : "accordion-content--hidden"
            }`}
          >
            <p>
              Advanced analgesia integrates the best evidence-based practices
              into an easily understandable and applicable framework that
              emphasizes optimal patient care. Regional analgesia is an
              important tool in the advanced management of pain in the emergency
              department. RA as a practice holds significant benefits in terms
              of length of stay, patient satisfaction, and morbidity and
              mortality. Through mastery of the pillars of pain management,
              clinicians will find themselves less dependent on opioid
              analgesics and more capable of providing patients with a
              multimodal pain plan. The importance of decreasing opioid
              utilization, especially in the context of our current opioid
              crisis, cannot be overstated.
            </p>
            <br />
            <p>
              Depending on the nerve or field block, anesthesia can be achieved
              over large areas. Blocks can be performed to help augment pain
              control or provide complete analgesia to facilitate ED-based
              procedures including laceration repair, incision and drainage,
              central line placement, chest tube placement, and
              fracture/dislocation reduction among others.
            </p>
            <br />
            <p>
              Although some nerve blocks may be performed by landmark techniques
              (ie, dental blocks, wrist blocks), ultrasound guidance has
              increased success and safety of RA.
            </p>
            <br />
            <p>
              In addition, regional and procedural analgesia represent an area
              of medicine where optimal care is recognized by payors, including
              state and federal programs. Adding RA to the practice of emergency
              medicine makes sense for patients and is financially viable for
              clinicians and their groups.
            </p>
            <br />
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-title" onClick={handleChange("panel3")}>
            {expanded === "panel3" ? (
              <KeyboardArrowUpRoundedIcon />
            ) : (
              <KeyboardArrowDownRoundedIcon />
            )}
            <h2
              className={`${
                expanded === "panel3"
                  ? "accordion-title--selected"
                  : "accordion-title--default"
              }`}
            >
              Evidence of Benefit
            </h2>
          </div>
          <div
            className={`accordion-content ${
              expanded === "panel3"
                ? "accordion-content--show"
                : "accordion-content--hidden"
            }`}
          >
            <p>
              Regional anesthesia has emerged as an effective alternative to
              opioid medications for treating pain in the ED. Its safety and
              overall efficacy in the ED has been proven through multiple
              investigations. As such, it is rapidly becoming a core tool in the
              emergency physician’s management of pain at the bedside. The role
              of RA in the management of pain is also increasingly being
              integrated into guidelines and clinical workflows nationwide. RA
              has been endorsed by the American College of Surgeons as best
              practice in the management of trauma patients and required for
              credentialed trauma centers.
            </p>
            <br />
            <p>
              In the ED setting, RA has been shown to have multiple
              patient-centered benefits:
            </p>
            <ul>
              <li>Decreased length of stay</li>
              <li>Reduction in need for procedural sedation</li>
              <li>Reduction in ED/hospital opioid requirements</li>
              <li>
                Increased overall patient satisfaction compared to other methods
                of pain control
              </li>
              <li>May decrease mortality for hip and rib fractures</li>
            </ul>
            <br />
            <p>
              In addition, RA is reimbursed and (most important) provides
              emergency clinicians with the gratification of seeing patients
              improve right before their eyes.
            </p>
            <br />
            <p>
              In general, performing RA with ultrasound guidance improves the
              success rate over landmark-based approaches and decreases the time
              to onset of sensory blockade, anesthetic volume requirement, block
              performance time, and rate of complications.
            </p>
            <br />
            <p>
              Ultrasound-guided regional anesthesia (UGRA) is increasingly being
              performed in academic emergency medicine centers throughout the
              country, with 84% of institutions reporting performance of these
              procedures in early 2023.
            </p>
            <br />
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-title" onClick={handleChange("panel4")}>
            {expanded === "panel4" ? (
              <KeyboardArrowUpRoundedIcon />
            ) : (
              <KeyboardArrowDownRoundedIcon />
            )}
            <h2
              className={`${
                expanded === "panel4"
                  ? "accordion-title--selected"
                  : "accordion-title--default"
              }`}
            >
              Anesthetic Choice
            </h2>
          </div>
          <div
            className={`accordion-content ${
              expanded === "panel4"
                ? "accordion-content--show"
                : "accordion-content--hidden"
            }`}
          >
            <p>
              It is important to know the specific characteristics of the
              commonly used local anesthetics (LA) in the emergency department
              as they have different onset times, duration of action, and risk
              profiles.
            </p>
            <br />
            <h3>Mechanism:</h3>
            <p>
              All local anesthetics work by reversible inhibition of sodium ion
              influx into nerve fibers, blocking depolarization and overall
              transmission of pain along the nerve. The different LAs have
              differing degrees of duration of action and toxicity.
            </p>
            <br />
            <h3>Time to onset:</h3>
            <p>
              Time to onset of nerve inhibition is dependent on several factors
              including the lipid solubility, pKA, protein binding and
              concentration of LA used. The selection of specific agents and
              concentration are factors that will determine how fast it diffuses
              into nerves and the tissues around it. Hence, 2% lidocaine will
              have a faster onset of action than 1% lidocaine. Of commonly used
              agents, ropivacaine, bupivacaine and levobupivacaine have slower
              onset of action than other “fast onset” LA’s such as lidocaine,
              mepivacaine and chloroprocaine.
            </p>
            <br />
            <h3>Classes of anesthetics:</h3>
            <p>
              Lidocaine, bupivacaine and ropivacaine are all amides. If a
              patient is allergic to any one of these, an ester type anesthetic
              should be used, some examples of which include chloroprocaine,
              procaine and tetracaine. If a patient is allergic to both amides
              and esters, or has a severe allergy but is unaware of drug name or
              class, then 1% Diphenhydramine may be considered for simple
              procedures such as laceration repairs. The evidence for benadryl
              as a substitute for larger plane or nerve blocks is scant.
            </p>
            <br />
            <h3>Local Anesthetic Dosing & Max Dose:</h3>
            <p>
              The dosing of LAs is a major determinant of safety.
              Supratherapeutic doses may result in Local Anesthetic Systemic
              Toxicity (LAST), a condition with sig- nificant morbidity and
              mortality. More on LAST and its treatment is covered later in this
              book.for larger plane or nerve blocks is scant.
            </p>
            <br />
            <p>
              When using LA for regional analgesia, awareness of and adherence
              to dosing limits is essential for patient safety. The following
              table serves as a guide to max- imum doses for patients, based on
              ideal body weight (IBW). Multiple resources, including online
              resources are available, and we recommended using these if you are
              considering using enough LA to approach maximum bolus doses.
            </p>
            <br />

            <p>
              <strong>
                Local Anesthetic Maximum Bolus Doses in Regional Anesthesia
              </strong>
            </p>

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
                  <td className="tdWidth-70">
                    Half-life Additional Considerations
                  </td>
                </tr>

                <tr>
                  <td>Bupivacaine 0.25%(2.5 mg/mL)</td>
                  <td rowspan="2">2 mg/kg</td>
                  <td>100 mg (40 mL)</td>
                  <td>120 mg (48 mL)</td>
                  <td>140 mg (56 mL)</td>
                  <td>160 mg (64 mL)</td>
                  <td>175 mg (70 mL)</td>
                  <td>-</td>
                  <td rowspan="2">
                    <ul>
                      <li>4-8 hrs</li>
                      <li>Contraindicated in pregnancy</li>
                      <li>More likely cause cardiac toxicity</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Bupivacaine 0.5% (5 mg/mL)</td>
                  {/* <td>2 mg/kg</td> */}
                  <td>100 mg (20 mL)</td>
                  <td>120 mg (24 mL)</td>
                  <td>140 mg (28 mL)</td>
                  <td>160 mg (32 mL)</td>
                  <td>175 mg (35 mL)</td>
                  <td>-</td>
                  {/* <td>4-8 hours Contraindicated in pregnancy</td> */}
                </tr>
                <tr>
                  <td>Ropivacaine 0.2% (2 mg/mL)</td>
                  <td rowspan="2">3 mg/kg</td>
                  <td>150 mg (75 mL)</td>
                  <td>180 mg (90 mL)</td>
                  <td>210 mg (105 mL)</td>
                  <td>240 mg (120 mL)</td>
                  <td>270 mg (135 mL)</td>
                  <td>300 mg (150 mL)</td>
                  <td rowspan="2">
                    <ul>
                      <li>4-10 hrs</li>
                      <li>
                        Less cardiotoxic than bupivacaine making it safer for
                        high-dose, high-volume blocks
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Ropivacaine 0.5% (5 mg/mL)</td>
                  {/* <td>3 mg/kg</td> */}
                  <td>150 mg (30 mL)</td>
                  <td>180 mg (36 mL)</td>
                  <td>210 mg (42 mL)</td>
                  <td>240 mg (48 mL)</td>
                  <td>270 mg (48 mL)</td>
                  <td>300 mg (48 mL)</td>
                  {/* <td>
                    4-10 hours. Less cardiotoxic than bupivacaine = safer for
                    high-dose, high-volume blocks
                  </td> */}
                </tr>

                <tr>
                  <td>Lidocaine 1% (10 mg/mL)</td>
                  <td rowspan="2">4 mg/kg</td>
                  <td>200 mg (20 mL)</td>
                  <td>240 mg (24 mL)</td>
                  <td>280 mg (28 mL)</td>
                  <td>300 mg (30 mL)</td>
                  <td>-</td>
                  <td>-</td>
                  <td rowspan="2">
                    <ul>
                      <li>1-4 hrs</li>
                      <li>Do not repeat within 2 hrs</li>
                      <li>Ideal for shorter blocks</li>
                    </ul>
                  </td>
                </tr>

                <tr>
                  <td>Lidocaine 2% (20 mg/mL)</td>
                  {/* <td>4 mg/kg</td> */}
                  <td>200 mg (10 mL)</td>
                  <td>240 mg (12 mL)</td>
                  <td>280 mg (14 mL)</td>
                  <td>300 mg (15 mL)</td>
                  <td>-</td>
                  <td>-</td>
                  {/* <td>
                    1-4 hours. Do not repeat within 2 hours Ideal for shorter
                    blocks
                  </td> */}
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
                  <td>
                    <ul>
                      <li>2-6 hrs</li>
                      <li>Relative contraindication for penile block</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>

            <p className="accordion-content--reference">
              * Bupivacaine is associated with a greater risk of cardiac
              toxicity, likely because it readily crosses lipid layers and
              inhibits the sodium channels in the heart. As such, the safe doses
              of bupivacaine are much lower than that of the other anesthetics
              used in the ED.
            </p>
            <br />
            <p className="accordion-content--reference">
              * Do not exceed maximum recommended dose regardless of weight. For
              elderly, acutely ill, or physiologically fail patients consider
              reducing maximum dose.
            </p>

            <br />
            <h3>Dosing adjustment considerations:</h3>
            <p>
              Dosing adjustment considerations include renal function, extremes
              of age, hepatic dysfunction, advanced heart failure and all stages
              of pregnancy. Congestive heart failure and liver disease reduce
              clearance of LAs. Pregnancy increases the susceptibility of nerves
              to these drugs. In all of these scenarios, the dosage of
              anesthetic should be decreased and if in large volume be discussed
              with a pharmacist. We strongly advise using an app or online
              calculator that takes into account these disease and physiological
              states; relying on tables that do not take these variables into
              account is a common source of dosing error.
            </p>
            <br />
            <p>
              There is significant debate in the scientific literature, and no
              clear consensus, on which agents should be commonly used in
              emergency departments. Of these agents two, dexamethasone and
              epinephrine, are commonly used in ED settings.
            </p>
            <br />
            <p>
              Dexamethasone is the most effective additive for prolonging the
              effects of LAs and it has minimal adverse effects. Dexamethasone
              is commonly stocked and available in EDs, making the addition of
              this medication feasible and easy to implement. In several studies
              including a cochrane review, dexamethasone significantly prolongs
              the duration of regional anesthesia by 6-8 hours when added to a
              long acting LAs such as ropivacaine or bupivacaine. The dosage of
              4 mg has been studied and in some literature is thought to be the
              “ceiling dose” for dexamethasone’s action.
            </p>
            <br />
            <p>
              Epinephrine minimally prolongs the duration of action of long
              acting LAs, but it does increase the therapeutic margin for short
              acting LA agents such as lidocaine. Epinephrine has been shown to
              decrease neural blood flow, so some experts avoid it due to
              potential for neurotoxicity, although this claim has not been
              proven clinically significant. Epinephrine was traditionally used
              as a marker of intravascular injection, but this is less pertinent
              when ultrasound is utilized with good visualization of the needle
              and deposition of LA.
            </p>
            <br />
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-title" onClick={handleChange("panel5")}>
            {expanded === "panel5" ? (
              <KeyboardArrowUpRoundedIcon />
            ) : (
              <KeyboardArrowDownRoundedIcon />
            )}
            <h2
              className={`${
                expanded === "panel5"
                  ? "accordion-title--selected"
                  : "accordion-title--default"
              }`}
            >
              Risks of RA
            </h2>
          </div>
          <div
            className={`accordion-content ${
              expanded === "panel5"
                ? "accordion-content--show"
                : "accordion-content--hidden"
            }`}
          >
            <p>
              {" "}
              Complications associated with Regional Anesthesia include
              infection, bleeding, neurologic injury, injury to adjacent
              structures, local anesthetic systemic toxicity (LAST), and, for
              some specific blocks, arterial injury, diaphragmatic paralysis,
              Horner syndrome and pneumothorax (which may result in
              hypoventilation/ hypoxia). Each procedure in this book will have a
              description of associated risks so that an informed consent can be
              adequately discussed. Broadly speaking, the risks of RA come from
              either mechanical trauma from the needle, or from local
              anesthetics (tissue level vs systemic administration).
            </p>
            <br />
            <p>
              Risk factors include patient comorbidities, age, location of
              block, LA agent used, concentration, and volume/amount of LA used.
            </p>
            <br />
            <p>
              The clinician must have a thorough understanding of the risks and
              benefits of regional anesthesia before performing a block. Proper
              safety protocols generally include:
            </p>
            <br />
            <ol>
              <li>
                Cardiac monitoring that includes heart rate, blood pressure and
                pulse oximetry.
              </li>
              <li>
                Drugs to treat LAST being readily available including Intralipid
                20%, Benzodiazepines and antiepileptic agents for seizures, ACLS
                drugs for cardiac arrest
              </li>
              <li>
                A working intravenous access for all blocks to be able to
                rapidly administer treatments for LAST if needed with the
                possible exception of forearm or distal lower leg blocks, as
                these are considered to be very low risk.
              </li>
              <li>
                Availability of emergent airway equipment Airway equipment
                easily and rapidly accessible.
              </li>
            </ol>
            <br />

            <h3>Infection:</h3>
            <p>
              Even though there are no large studies defining infection rates
              from RA, we feel it is prudent to use basic infection control when
              performing blocks. We recommend simple techniques such as basic
              skin disinfection and transparent adhesive covers when performing
              ultrasound-guided nerve blocks. In general, we refer to local
              infection control guidelines and standards at your institution
              when performing RA.
            </p>
            <br />
            <h3>Nerve injury:</h3>
            <p>
              Peripheral Nerve Injury (PNI) is a rare event, occurring in
              2–4/10,000 procedures. Of those that develop a PNI the majority
              resolve within weeks, with 99.9% of these peripheral neuropathies
              resolving within a year. Injury mechanism is believed to occur
              from direct needle trauma and/or intraneural injection during the
              performance of RA. For these reasons, we recommend an extra-neural
              anesthetic deposition or “stay away from the nerve” technique to
              reduce direct mechanical trauma from a malpositioned needle tip.
              Factors/techniques used to help reduce the risk of neural injury
              include:
            </p>
            <ul>
              <li>
                {" "}
                Operator competency: Previous ultrasound-based procedural
                skills. Specific ultrasound techniques and methods that improve
                needle visualization include:
                <ol>
                  <li>
                    Hydrolocation: injection of a small amount of normal saline
                    to produce a small anechoic window, allowing better needle
                    tip visualization.{" "}
                  </li>
                  <li>
                    Hydrodissection: Injection of small volumes of saline to
                    open up fascial planes to define the correct location of
                    anesthetic.{" "}
                  </li>
                  <li>
                    Decreased angle of needle insertion/insonation: Decreasing
                    the angle between the needle and probe helps visualize the
                    needle.{" "}
                  </li>
                  <li>Use of echogenic needles.</li>
                </ol>
              </li>

              <li>
                {" "}
                Factors that decrease potential for nerve injury include:
                <ol>
                  <li>Use of blunt or non-cutting needles.</li>

                  <li>
                    {" "}
                    Monitoring patient symptoms such as electrical or shock type
                    pain, pares- thesias or significant pain with injection.
                  </li>
                </ol>
              </li>

              <li>
                Needle selection:
                <ol>
                  <li>
                    {" "}
                    We recommend short tip / blunt tip needles when performing
                    ultra- sound-guided nerve blocks.{" "}
                  </li>
                  <li>
                    We recommend ultrasound-guided specific block needles since
                    along with having a blunt tip, they are often serrated at
                    the tip to improve ultrasound visualization.{" "}
                  </li>
                  <li>
                    {" "}
                    If these needles are not available, Quincke spinal needles
                    can be used as an alternative.{" "}
                  </li>
                  <li>
                    {" "}
                    Long bevel / sharp tip needles that are commonly used in the
                    emergency department for local skin infiltration are not
                    recommended.
                  </li>
                </ol>
                <img
                  src="https://advanced-analgesia.s3.amazonaws.com/basics/1.1+Needle+Bevels.jpg"
                  alt="Needle Bevel Types"
                />
                <p className="accordion-content--reference">Needle Bevels</p>
              </li>
            </ul>
            <br />
            <p>
              Patient risk factors found to independently increase the chance of
              PNI include: diabetes, peripheral vascular disease, hypertension,
              smoking and vasculitis.
            </p>
            <br />
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-title" onClick={handleChange("panel6")}>
            {expanded === "panel6" ? (
              <KeyboardArrowUpRoundedIcon />
            ) : (
              <KeyboardArrowDownRoundedIcon />
            )}
            <h2
              className={`${
                expanded === "panel6"
                  ? "accordion-title--selected"
                  : "accordion-title--default"
              }`}
            >
              Local Anesthetic Systemic Toxicity (LAST)
            </h2>
          </div>
          <div
            className={`accordion-content ${
              expanded === "panel6"
                ? "accordion-content--show"
                : "accordion-content--hidden"
            }`}
          >
            <p>
              <strong>Local anesthetic systemic toxicity (LAST)</strong> is a
              life-threatening adverse reaction resulting from local anesthetic
              reaching toxic systemic levels. This generally occurs with
              accidental intravascular injection or use of excessive doses. It
              is estimated there is an overall incidence of 2-2.8 per 10,000
              peripheral nerve blocks, with different blocks having different
              rates of LAST. In general blocks that occur closer to large blood
              vessels or involve large volumes carry a higher risk of LAST. The
              mechanism of LAST is unclear, however it is believed to be caused
              by blockade of sodium channels in the central nervous system and
              cardiac tissue. Blockade of sodium channels in cortical neurons
              results in seizures and respiratory arrest, whereas blockade in
              the cardiovascular systems results in arrhythmias including
              bradycardia, ventricular arrhythmias, hypotension and/or cardiac
              arrest.
            </p>
            <br />
            <p>
              {" "}
              As seen in the figure, the symptoms generally follow a linear
              progression from tinnitus and oral sensory abnormalities to
              cardiovascular collapse. Generally, CNS toxicity resulting in
              seizures occurs before cardiovascular collapse. As such, if early
              symptoms of LAST start to occur, injection or infusion of further
              anesthetic should immediately be stopped, and treatment with
              intralipid should be highly considered. Bupivacaine has somewhat
              fallen out of favor because of reports of cardiac toxicity
              presenting before neurologic symptoms. Ropivacaine is generally
              considered to be less cardiotoxic than other agents commonly used
              for RA.
            </p>

            <img
              src="https://advanced-analgesia.s3.amazonaws.com/basics/1.2+Lidocaine+toxicity.jpg"
              alt="Lidocaine Toxicity Symptoms and Relationship to Serum Concentration"
            />
            <p className="accordion-content--reference">
              Lidocaine Toxicity Symptoms and Relationship to Serum
              Concentration
            </p>
            <div className="accordion-content-reference">
              <p>
                Source: Local Anesthetics, Goldfrank's Toxicologic Emergencies,
                10e
              </p>
            </div>
            <br />
            <br />
            <h3>Treatment:</h3>
            <p>
              LAST is rare and almost always occurs within minutes of anesthetic
              injection. In addition to standard care given for seizures and/or
              cardiac arrest, lipid emulsion therapy, with intralipid 20%,
              should be administered. Intralipid 20% is a widely available,
              effective and inexpensive antidote to LAST. Although the mechanism
              of action as an antidote is unclear, it is theorized to act as a
              lipid sink and facilitate redistribution of local anesthetic from
              target organs. Dosing is based on ideal body weight.
            </p>
            <br />
            <h3>Dosing 20% intralipid:</h3>
            <ul>
              <li>Bolus: 1-1.5 mL/kg over 1 min</li>
              <ul>
                <li>
                  Can repeat bolus every 3 minutes up to a total dose of 3 mL/kg
                </li>
              </ul>
              <li>Infusion: 0.25 mL/kg/min</li>
              <ul>
                <li>
                  Continue infusion until hemodynamically stable for at least 10
                  minutes
                </li>
                <li>Can increase infusion to 0.5 mL/kg/min if BP worsens</li>
              </ul>
            </ul>
            <p>
              Equipment and supplies needed to recognize and treat LAST should
              be in place before any procedure that involved injection of more
              than 5–10 cc of anesthetic. This includes cardiac monitoring,
              intravenous access, and rapidly accessible intralipid. It is also
              recommended that dosing instructions be included in any lipid
              rescue kit, to facilitate proper administration. delay in the
              decision to administer intralipid can lead to morbidity and
              mortality, and clinicians should be knowledgeable in both
              recognition of symptoms as well as administration of the antidote.
              There is essentially no downside to treating with intralipid if
              LAST is suspected.
            </p>
            <br />
            <br />
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-title" onClick={handleChange("panel7")}>
            {expanded === "panel7" ? (
              <KeyboardArrowUpRoundedIcon />
            ) : (
              <KeyboardArrowDownRoundedIcon />
            )}
            <h2
              className={`${
                expanded === "panel7"
                  ? "accordion-title--selected"
                  : "accordion-title--default"
              }`}
            >
              How to Implement Rregional Anesthesia Training
            </h2>
          </div>
          <div
            className={`accordion-content ${
              expanded === "panel7"
                ? "accordion-content--show"
                : "accordion-content--hidden"
            }`}
          >
            <p>
              Coordinate with hospital leadership and other departments:
              Initiate meetings with all pertinent stakeholders and hospital
              leadership to develop a clear interdepartmental plan for optimal
              pain control utilizing RA. Buy-in is required from multiple
              departments: anesthesia, orthopedics, surgery, and other services
              that may see patients who receive blocks in the ED. Coordination
              is essential to optimize care and reduce confusion and potential
              patient harms.{" "}
            </p>
            <br />
            <p>
              Common concerns from specialists include documentation, masking of
              the neurologic exam, compartment syndrome, and peripheral nerve
              injury. Address these valid concerns through creating good
              policies, procedures, and training.
            </p>
            <br />
            <p>
              Establish protocols with pharmacy to provide access to local
              anesthetics, adjuvants and intralipid. It is recommended that
              intralipid be available outside of automated medication dispensing
              systems. Many departments have a “block box” containing all
              essential medications that can be taken to the bedside and then
              inventoried by protocol; this can drastically speed up workflow.
            </p>
            <br />
            <p>
              Block Box: A user-based design approach will reduce barriers
              needed to perform RA blocks. Keep all supplies needed for
              performing RA blocks in one location (ie, tray, bag, or cart) to
              streamline the process.
            </p>
            <br />
            <p>
              A block cart should be mobile, well-organized, and routinely
              restocked. It should contain all equipment needed to perform RA
              blocks (skin preps, protective adhesive barriers, needles/block
              needles, syringes, sterile gel, marking pens), in addition to a
              diverse array of local anesthetics, adjuncts, and intralipid in
              case of rare but life-threatening complications.
            </p>

            <img
              src="https://advanced-analgesia.s3.amazonaws.com/basics/7.1+Block+cart.jpg"
              alt="block cart"
            />
            <p className="accordion-content--reference">Block cart</p>
            <img
              src="https://advanced-analgesia.s3.amazonaws.com/basics/7.1+Block+drawer.jpg"
              alt="block drawer"
            />
            <p className="accordion-content--reference">Block drawer</p>
            <img
              src="https://advanced-analgesia.s3.amazonaws.com/basics/7.2+EMR+screen.jpg"
              alt="EMR screen"
            />
            <p className="accordion-content--reference">EMR screen</p>

            <br />
            <p>
              Templated notes in the electronic medical record allow the
              clinician to document important information, including:
            </p>
            <ul>
              <li>Indication for the block</li>
              <li>Block type</li>
              <li>Laterality</li>
              <li>Anesthetic type and amount used</li>
              <li>Complications</li>
              <li>Time the block was performed</li>
            </ul>
            <br />
            <p>
              Identify a Clinical Champion, Develop Skills: Identify a clinical
              champion to develop expertise and serve as a resource to others
              learning new skills. The clinical champion can obtain required
              skills several ways:
            </p>
            <br />
            <ul>
              <li>
                Use local resources: RA is often performed by anesthesiologists
                perioperatively. Develop partnerships with anesthesiology and
                surgery to learn skills under the guidance of an experienced,
                local practitioner. This also allows the clinical champion to
                determine the equipment, medications, and tools already used in
                their hospital for RA in order to build the 'block box.'
              </li>
              <li>
                Attend a national course on regional analgesia: There are
                courses run by anesthesiology as well as EM. The hands-on
                component (either in simulation or cadavers) should be a central
                aspect of the course.
              </li>
              <li>
                Use written and online resources: There are multiple textbooks
                on regional analgesia. The champion’s learning can also be
                supplemented and refreshed via numerous online resources.
              </li>
            </ul>
            <p>
              Once the RA clinical champion has acquired the skills to perform
              blocks, s/he will need to establish a training pathway for other
              physicians at the institution. Scaling to all clinicians is often
              the most challenging step. Clinicians or hospitals can consider
              sending their physicians to national courses or hosting local
              courses using specialists or consultants.
            </p>
            <br />
            <p>
              Local champions can identify 1-2 high-yield RA blocks. The easiest
              to teach and most pertinent RA blocks include: fascia
              iliaca/femoral nerve block for hip fractures, serratus anterior or
              erector spinae blocks for rib fractures and thoracic injuries, and
              forearm nerve blocks for hand injuries. Limit the number of RA
              blocks in the initial training of novice staff to allow learners
              to focus on the general principles of RA as well as good needling
              techniques.
            </p>
            <br />
            <p>
              Tailor training to the learners’ experience with procedural
              ultrasound. Learners with minimal experience may benefit from the
              use of needle trainer devices, which can either be purchased or
              created at home using household supplies. Programs can also use
              existing hospital simulation centers if available.
            </p>
            <br />
            <p>
              The RA clinical champion should do clinical hands-on training on
              shift. Learners can consider scheduling training shifts in the ED
              with the RA clinical champion to perform blocks. Also consider
              establishing agreements with anesthesia to allow learning from
              anesthesiologists performing RA blocks in the perioperative
              setting.
            </p>
            <br />
            <p>
              Get Credentialed: In 2021, the American College of Emergency
              Physicians (ACEP) issued a policy statement specific to RA
              programs, affirming that ED-provider-performed RA blocks are not
              only within the scope of EM, but also are a “core component” of
              pain control for ED patients, pointing to their rising role as the
              new standard of care for acutely ill or injured patients.
              Landmark-based nerve blocks have long been a part of the ACGME’s
              EM residency education requirement (Milestones 1.0), with
              ultrasound guidance improving their safety profile. According to
              an ACEP policy statement reaffirmed in 2020, the provider with
              emergency ultrasound privileges needs no outside certification to
              perform RA blocks. While this may seem surprising to some, note
              that no other clinical procedure requires special external
              certification: for example, central venous access or intubation,
              which follow a similar historical path of being brought into EM
              after initially exclusively being performed by anesthesia or
              critical care specialists. As with EM, anesthesia physicians also
              require no additional certification to perform nerve blocks. All
              physicians are encouraged to know if RA is already covered in
              their hospital credentialing; if it is not, then this should be
              added prior to broad adoption of RA by emergency clinicians.
            </p>
            <br />
            <p>
              Initiating and updating emergency physicians’ RA block privileges
              can be done safely via the standard intradepartmental
              credentialing approval process. As of 2023, ACEP guidelines
              require individuals obtaining initial credentialing to complete
              the training and proof of competency determined by their own ED.
              The guidelines suggest an approximate threshold of 10 with new
              ultrasound procedures that build upon existing procedural skills;
              for example, 10 transvaginal ultrasounds for those who already
              perform POCUS, rather than the usual threshold of 25 when learning
              a new application of ultrasound. For reference, The American
              Institute of Ultrasound in Medicine recommends anesthesiologists
              perform 20 RA blocks per year to maintain competence.
            </p>
          </div>
        </div>

        <div className="accordion">
          <div className="accordion-title" onClick={handleChange("panel8")}>
            {expanded === "panel8" ? (
              <KeyboardArrowUpRoundedIcon />
            ) : (
              <KeyboardArrowDownRoundedIcon />
            )}
            <h2
              className={`${
                expanded === "panel8"
                  ? "accordion-title--selected"
                  : "accordion-title--default"
              }`}
            >
              {" "}
              Reimbursement
            </h2>
          </div>
          <div
            className={`accordion-content ${
              expanded === "panel8"
                ? "accordion-content--show"
                : "accordion-content--hidden"
            }`}
          >
            <p>
              Regional analgesia presents an opportunity to provide better care
              for patients, and also reimbursable care for physician and
              physician groups. While there is direct reimbursement for
              procedures performed by emergency physicians, the far greater
              benefit to the health system and patients is decreased costs from
              decreased length of stay, decreased morbidity and mortality, and
              improved patient satisfaction.
            </p>
            <br />

            <table cellPadding="0" cellSpacing="0">
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  <h2>RVU Table</h2>
                  <p className="accordion-content--reference">
                    RVU Table (based on 2023 Medicare payment rates)
                  </p>
                </td>
              </tr>
              <tr>
                <td colSpan="4">
                  <ul>
                    <li>
                      Medicare payment = RVU x current Medicare conversion
                      factor ($33.887 for 2023).
                    </li>
                    <li>
                      Medicaid rates typically pay between 50-80% of Medicare.
                    </li>
                    <li>
                      Private insurance typically pays 1.25-10 times Medicare
                      rates.
                    </li>
                    <li>
                      Most insurers and Medicare decrease the second and
                      subsequent procedures performed on the same day by 50-75%
                      reimbursement of the fee schedule. Modifier 51 is appended
                      to the CPT code.
                    </li>
                    <li>
                      The work RVU is only one portion of the total RVU
                      generated. The total RVU will depend on the practice
                      expense RVU, malpractice expense RVU and work RVU, all of
                      which undergo a geographic practice cost index (GPCI)
                      adjustment.
                    </li>
                    <li>
                      To calculate the Total RVU for your region, multiply Total
                      RVU X (GPCI for your region).
                    </li>
                  </ul>
                </td>
              </tr>
            </table>

            <table cellPadding="0" cellSpacing="0">
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  <h2>Head & Neck</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Block</strong>
                </td>
                <td>
                  <strong>Work RVU / Medicare</strong>
                </td>
                <td>
                  <strong>Total RVU / Medicare</strong>
                </td>
              </tr>
              <tr>
                <td>Trigeminal Nerve Block (64400)</td>
                <td>0.75/$25.42</td>
                <td>1.50/$50.83</td>
              </tr>
              <tr>
                <td>Superficial Cervical Plexus Block (64999)</td>
                <td>+</td>
                <td>+</td>
              </tr>
              <tr>
                <td>Greater Auricular Nerve Block (64450)</td>
                <td>0.75/$25.42</td>
                <td>1.24/$42.02</td>
              </tr>
              <tr>
                <td>Occipital Nerve Block (64405)</td>
                <td>0.94/$31.85</td>
                <td>1.57/$53.20</td>
              </tr>
            </table>
            {/*  */}
            <table cellPadding="0" cellSpacing="0">
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  <h2>Upper Extremity</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Block</strong>
                </td>
                <td>
                  <strong>Work RVU / Medicare</strong>
                </td>
                <td>
                  <strong>Total RVU / Medicare</strong>
                </td>
              </tr>
              <tr>
                <td>Interscalene brachial plexus block (64415)</td>
                <td>1.50/$50.83</td>
                <td>2.05/$69.47</td>
              </tr>
              <tr>
                <td>Supraclavicular brachial plexus block (64415)</td>
                <td>1.50/$50.83</td>
                <td>2.05/$69.47</td>
              </tr>
              <tr>
                <td>Suprascapular Block (64418)</td>
                <td>1.1/$37.28</td>
                <td>1.65/$55.91</td>
              </tr>
              <tr>
                <td>Ulnar Nerve Block (64450)</td>
                <td>0.75/$25.42</td>
                <td>1.24/$42.02</td>
              </tr>
              <tr>
                <td>Radial Nerve Block (64450)</td>
                <td>0.75/$25.42</td>
                <td>1.24/$42.02</td>
              </tr>
              <tr>
                <td>Median Nerve Block (64450)</td>
                <td>0.75/$25.42</td>
                <td>1.24/$42.02</td>
              </tr>
              <tr>
                <td>Complete Forearm Nerve block (All 3 nerves)</td>
                <td>
                  1.5/$50.84<sup>*</sup>
                </td>
                <td>
                  2.48/$84.04<sup>*</sup>
                </td>
              </tr>
              <tr>
                <td>Landmark based Hand Block (All 3 nerves)</td>
                <td>
                  1.5/$50.84<sup>*</sup>
                </td>
                <td>
                  2.48/$84.04<sup>*</sup>
                </td>
              </tr>
            </table>
            {/*  */}
            <table cellPadding="0" cellSpacing="0">
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  <h2>Torso / Abdomen</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Block</strong>
                </td>
                <td>
                  <strong>Work RVU / Medicare</strong>
                </td>
                <td>
                  <strong>Total RVU / Medicare</strong>
                </td>
              </tr>
              <tr>
                <td>Serratus Anterior Block (64450)</td>
                <td>0.75/$25.42</td>
                <td>1.24/$42.02</td>
              </tr>
              <tr>
                <td>PECS I Block (64450)</td>
                <td>0.75/$25.42</td>
                <td>1.24/$42.02</td>
              </tr>
              <tr>
                <td>PECS II Block</td>
                <td>0.75/$25.42</td>
                <td>1.24/$42.02</td>
              </tr>
              <tr>
                <td>Erector Spinae Block</td>
                <td>0.75/$25.42</td>
                <td>1.24/$42.02</td>
              </tr>
              <tr>
                <td>TAP Block unilateral (64486)</td>
                <td>1.27/$43.04</td>
                <td>1.63/$55.24</td>
              </tr>
              <tr>
                <td>TAP Blocks bilateral (64488)</td>
                <td>1.6/$54.21</td>
                <td>2.02/$68.45</td>
              </tr>
              <tr>
                <td>PENG Block (64447)</td>
                <td>1.34/$45.41</td>
                <td>1.86/$63.03</td>
              </tr>
              <tr>
                <td>Axillary Nerve Block (64417)</td>
                <td>1.31/$44.37</td>
                <td>1.87/$63.37</td>
              </tr>
            </table>
            {/*  */}
            <table cellPadding="0" cellSpacing="0">
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  <h2>Lower Extremity</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Block</strong>
                </td>
                <td>
                  <strong>Work RVU / Medicare</strong>
                </td>
                <td>
                  <strong>Total RVU / Medicare</strong>
                </td>
              </tr>
              <tr>
                <td>Fascia Iliaca Block (64447)</td>
                <td>1.34/$45.41</td>
                <td>1.86/$63.03</td>
              </tr>
              <tr>
                <td>Femoral Nerve Block (64447)</td>
                <td>1.34/$45.41</td>
                <td>1.86/$63.03</td>
              </tr>
              <tr>
                <td>Adductor Canal Block</td>
                <td>1.34/$45.41</td>
                <td>1.86/$63.03</td>
              </tr>
              <tr>
                <td>Popliteal Block (64445)</td>
                <td>1.39/$47.10</td>
                <td>2.17/$73.53</td>
              </tr>
              <tr>
                <td>Ankle Block/Injection (20605)</td>
                <td>0.68/$23.04</td>
                <td>1.10/$37.28</td>
              </tr>
              <tr>
                <td>Ankle Block/Injection with US (20606)</td>
                <td>1.0/$33.89</td>
                <td>1.54/$52.19</td>
              </tr>
              <tr>
                <td>Posterior Tibial nerve block</td>
                <td>0.75/$25.42</td>
                <td>1.24/$42.02</td>
              </tr>
            </table>
            {/*  */}
            <table cellPadding="0" cellSpacing="0">
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  <h2>Joint or Bursa Injections</h2>
                  <p className="accordion-content--reference">
                    * Same code and reimbursement for the physician regardless
                    of injection or aspiration
                  </p>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Block</strong>
                </td>
                <td>
                  <strong>Work RVU / Medicare</strong>
                </td>
                <td>
                  <strong>Total RVU / Medicare</strong>
                </td>
              </tr>
              <tr>
                <td>Knees, Hip, Shoulder (20610)</td>
                <td>0.79/$26.77</td>
                <td>1.34/$45.41</td>
              </tr>
              <tr>
                <td>Knees, Hip, Shoulder with US (20611)</td>
                <td>1.10/$37.28</td>
                <td>1.78/$60.32</td>
              </tr>
              <tr>
                <td>Ankle, wrist, elbow, AC, TMJ (20605)</td>
                <td>0.68/$23.04</td>
                <td>1.54/$52.19</td>
              </tr>
              <tr>
                <td>Ankle, wrist, elbow, AC, TMJ with US (20606)</td>
                <td>1.0/$33.89</td>
                <td>1.54/$52.19</td>
              </tr>
            </table>
            {/*  */}
            <table cellPadding="0" cellSpacing="0">
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  <h2>Trigger Point Injections</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Block</strong>
                </td>
                <td>
                  <strong>Work RVU / Medicare</strong>
                </td>
                <td>
                  <strong>Total RVU / Medicare</strong>
                </td>
              </tr>
              <tr>
                <td>Injection 1 or 2 named muscles (20552)</td>
                <td>0.66/$22.37</td>
                <td>1.10/$37.28</td>
              </tr>
              <tr>
                <td>Injection 3 or more named muscles (20553)</td>
                <td>0.75/$25.41</td>
                <td>1.26/$42.70</td>
              </tr>
              <tr>
                <td>Dry Needling/Acupuncture 1 or 2 named muscles (20560)</td>
                <td>0.32/$10.84</td>
                <td>0.44/$14.91</td>
              </tr>
              <tr>
                <td>Dry Needling/Acupuncture 3 or more named muscles</td>
                <td>0.48/$16.26</td>
                <td>0.62/$21.00</td>
              </tr>
            </table>
            {/*  */}

            <table cellPadding="0" cellSpacing="0">
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  <h2>ULTRASOUND for nerve blocks</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <strong>Block</strong>
                </td>
                <td>
                  <strong>Work RVU / Medicare</strong>
                </td>
                <td>
                  <strong>Total RVU / Medicare</strong>
                </td>
              </tr>
              <tr>
                <td>
                  <sup>**</sup>US for nerve block (76942–51)
                </td>
                <td>0.34/$11.52</td>
                <td>0.42/$14.23</td>
              </tr>
            </table>

            <div className="basicReimbursementTableNoteWrapper">
              <p>
                <strong>Notes: Table 7.1. RA Reimbursement, 2023</strong>
              </p>
              <p className="accordion-content--reference">
                <span>+</span> (Superficial) Cervical Plexus block CPT code
                64413 was deleted Jan. 1, 2023, and does not have an applicable
                CPT. Coders are instructed to use 64999 which is “Other nervous
                system procedure” and bills 0 RVU. Many nerve block procedures
                are not listed under a formal CPT code. The code 64450, “other
                peripheral nerve or branch” should be used in most of these
                scenarios.
              </p>
              <p className="accordion-content--reference">
                <span>
                  <sup>*</sup>
                </span>
                For the complete forearm and hand blocks, the RVUs will be
                decreased as there are multiple procedures. Modifier 51 will be
                appended to the second two blocks, resulting in 50% decrease in
                reimbursement of those two.
              </p>
              <p className="accordion-content--reference">
                <span>
                  <sup>**</sup>
                </span>
                The use of ultrasound for guidance is bundled for the following
                blocks (of the ones listed above) and is not separately
                reported: brachial plexus, axillary, femoral (PENG, FI, adductor
                canal), TAP. When US is a separate procedure, Modifier 51 is
                appended, resulting in 50% decrease in reimbursement.
              </p>
            </div>
            <div>
              <p className="accordion-content--reference">
                <strong>Notes</strong>
              </p>
              <p className="accordion-content--reference">
                These CPT codes are referring to “single shot” as opposed to
                continuous infusion through a temporary catheter. There are
                different codes for continuous infusion blocks.
              </p>
              <p className="accordion-content--reference">
                For hematoma blocks, use the joint injection code if in the
                joint, and use the forearm or ankle block if in the shaft.
              </p>
              <p className="accordion-content--reference">
                CPT information obtained from AMA 2023 CPT Codebook.
              </p>
              <p className="accordion-content--reference">
                RVU information obtained from CMS Physician Fee Schedule
                released Jan. 5, 2023.
              </p>
            </div>
          </div>
        </div>
      </div>

      {expanded === "none" ? (
        <div className="basicScreen__bottomFill"></div>
      ) : null}
    </div>
  );
}

export default BasicScreen;
