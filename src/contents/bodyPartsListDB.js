const bodyPartsListDB = [
  {
    bodyId: 0,
    part: "head & neck",
    list: [
      {
        name: "Cervical Plexus",
        illustration: "illust",
        materials:{
          title: "Materials: Transducer, Needle, Volume of anesthetic",
          content: {
            "Probe": "High-Frequency Linear probe", 
            "Needle": "50 mm, 22-gauge blunt tip needle; hyperechoic block needle with tubing preferred", 
            "Volume of Anesthetic" : "10-15cc of preferred anesthetic",
            "Others": "10cc of sterile saline, 20ml syringe, 5cc of syringe with 1% lidocaine for skin wheal, cleaning supplies, IV tubing"
          }
        },
        region: {
          title: "Region of Analgesia",
          content: "The cervical plexus nerve block anesthetizes the sensory branches of the C2, C3 and C4 nerve roots as well as the supraclavicular, lesser occipital, transverse cervical and greater auricular nerves. By doing so, anesthesia is achieved in the area of the anterior and lateral neck, including the inferior and posterior aspects of the auricle and extends caudally to cover the area of the clavicle. There is no motor involvement."
        },
        indications: {
          title: "Indications",
          content: ["Clavicle fracture", "Placement of internal jugular central lines", "Ear lacerations", "Drainage of anterior and/or lateral neck abscesses", "Burn management"]
        },
        contraindications: [
          {
            title: "Please list any contraindications to the procedure",
            content: ["Allergy to local anesthetic", "Infection overInfection, abscess over site of injection"]
          },
          {
            title: "Relative Contraindication",
            content: ["Anticoagulation", "Dependance and/or single lung on side of block"]
          }
        ],
        positioning: {
          title: "Patient Positioning",
          content: "Lying supine with the patient’s head turned to the contralateral side.  The block may also be performed with the patient in the lateral decubitus position."
        },
        procedure: {
          title: "Procedure",
          content: [
            "Sterilize your field per your local guidelines.",
            "Place the probe at the posterolateral aspect of the SCM in a sagittal orientation.",
            "Identify the sternocleidomastoid muscle (SCM at the level of the thyroid cartilage), the lateral aspect of the SCM with the levator scapulae muscle in view (deep) and the carotid artery..  The plane between the SCM and levator scapulae muscle layers is the location for anesthesia injection.",
            "Inject 3-4cc of 1% lidocaine at anticipated site of needle entry approximately 1-2 cm lateral to edge of probe.",
            "Using an in-plane approach, direct your needle tip to be under the SCM fascial layer at the posterolateral border.",
            "Once a homogeneous anechoic stripe is observed between the SCM and levator scapulae muscle inject approximately 10-15cc of desired anesthetic."
          ]
        },
        pitfall: {
          title: "Pearls and Pitfall",
          content: [
            "This is a very superficial block.", "Always note the location of the carotid artery.", "Always aspirate to avoid  Intravascular injection.", "Brachial plexus involvement and phrenic nerve paralysis are rare therefore this block is not indicated in patients with severe respiratory compromise."
          ]
        },
        citations: {
          title: "Citations",
          content: [
            "Pandit JJ, Bree S, Dillon P, Elcock D, McLaren ID, Crider B. A Comparison of Superficial Versus Combined (Superficial and Deep) Cervical Plexus Block for Carotid Endarterectomy: A Prospective, Randomized Study. Anesthesia & Analgesia. 2000;91(4):781-786. doi:10.1097/00000539-200010000-00004",
            "Tran DQH, Dugani S, Finlayson RJ. A Randomized Comparison Between Ultrasound-Guided and Landmark-Based Superficial Cervical Plexus Block: Regional Anesthesia and Pain Medicine. 2010;35(6):539-543. doi:10.1097/AAP.0b013e3181faa11c",
            "Winnie AP, Ramamurthy S, Durrani Z, Radonjic R. Interscalene Cervical Plexus Block: A Single-Injection Technic. Anesthesia & Analgesia. 1975;54(3):370???375. doi:10.1213/00000539-197505000-00030",
            "Kende P, Wadewale M, Mathai P, Landge J, Desai H, Nimma V. Role of Superficial Cervical Plexus Nerve Block as an Adjuvant to Local Anesthesia in the Maxillofacial Surgical Practice. Journal of Oral and Maxillofacial Surgery. 2021;79(11):2247-2256. doi:10.1016/j.joms.2021.05.005",
            "Gürkan Y, Taş Z, Toker K, Solak M. Ultrasound guided bilateral cervical plexus block reduces postoperative opioid consumption following thyroid surgery. J Clin Monit Comput. 2015;29(5):579-584. doi:10.1007/s10877-014-9635-x",
            "Li J, Szabova A. Ultrasound-Guided Nerve Blocks in the Head and Neck for Chronic Pain Management: The Anatomy, Sonoanatomy, and Procedure. Pain Physician. 2021;24(8):533-548. https://pubmed.ncbi.nlm.nih.gov/34793642/. Accessed July 9, 2022."

          ]
        }
      },

      {
        name: "Greater Auricular Nerve",
        illustration: "",
        materials: {
          title: "",
          content: {
            "Probe" : "",
            "Needle" : "",
            "Volume of Anesthetic": "",
            "Other": ""
          }
        },
        region: {
          title: "Region of Analgesia",
          content: ""
        },
        indications: {
          title: "Indications",
          content: [""]
        },
        contraindications: [
          {
            title: "Please list any contraindications to the procedure.",
            content: ["", ""]
          }
        ],
        positioning: {
          title: "Patient Positioning",
          content: ""
        },
        
      },
      {
        name: "Occipital Nerve",
        illustration: ""
      },
      {
        name: "Trigeminal Nerve",
        illustration: ""
      }
    ]
  },
  {
    bodyId: 1,
    part: "torso",
    list: [
      {
        name: "PECS I & II",
        illustration: ""
      },
      {
        name: "Serratus Anterior",
        illustration: ""
      },
      {
        name: "Erector Spinae",
        illustration: ""
      },
      {
        name: "TAP",
        illustration: ""
      }
    ]
  },
  {
    bodyId: 2,
    part: "arms",
    list: [
      {
        name: "Interscalene",
        illustration: ""
      },
      {
        name: "Supraclavicular Brachial Plexus",
        illustration: ""
      },
      {
        name: "Suprascapular",
        illustration: ""
      },
      {
        name: "Forearm",
        illustration: ""
      },
      {
        name: "Axillary Brachial Plexus",
        illustration: ""
      }
    ]
  },
  {
    bodyId: 3,
    part: "legs",
    list: [
      {
        name: "PENG",
        illustration: ""
      },
      {
        name: "Ankle",
        illustration: ""
      },
      {
        name: "Posterior Tibial Nerve",
        illustration: ""
      },
      {
        name: "Popliteal Nerve",
        illustration: ""
      },
      {
        name: "Adductor Canal",
        illustration: ""
      },
      {
        name: "Fascia Iliaca",
        illustration: ""
      },
      {
        name: "Transgluteal Sciatic Nerve",
        illustration: ""
      }
    ]
  },
  
]

export default bodyPartsListDB;