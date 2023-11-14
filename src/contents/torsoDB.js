const torsoDB = [
  {
    name: 'Pectoralis(PECS) I and II Plane Block',
    url: 'pecs-i-&-ii',
    author: [
      'Robert F. Reardon, MD | Hennepin Healthcare and University of Minnesota Medical School',
    ],
    mainImg: '',
    materials: {
      title:
        'Materials (adapt to patient, clinician, and site-specific factors/availability)',
      content: {
        Probe: 'High-Frequency Linear probe preferred. ',
        Needle:
          '50–100 mm, 22 G blunt tip needle; Hyperechoic block needle with tubing',
        volumeOfAnesthetic: '10 mL for PECS I; 20 mL for PECS II',
        Other:
          '30 mL syringe, 10 mL sterile saline (for hydrodissection). Skin prep and PPE. Optional: 1-2 mL lidocaine in separate syringe for skin wheal',
      },
    },
    region: {
      title: 'Region of Analgesia',
      content:
        "PECS I: Anesthetizes the superior and lateral portions of breast and pectoralis major/minor muscles through medial and lateral pectoral nerves. PECS II: Anesthetizes the entire breast, axillary region, and anterior chest (T2-T6 nerve roots) through long thoracic, thoracodorsal,intercostal nerves. May affect adduction of affected side's arm, but rarely (PECS I)",
    },
    indications: {
      title: 'Indications',
      content: [
        'Breast and Pacemaker post operative pain relief',
        'Anterior and/or lateral rib fractures (PECS II)',
        'Breast and Axillary (PECS II) Abscesses',
        'Chest wall lacerations and burns (PECS I or II)',
        'Thoracostomy (PECS II)',
      ],
    },
    contraindications: [
      {
        title: '',
        content: [
          'Allergy to local anesthetic',
          'Overlying infection',
          'Anticoagulation (relative contraindication)',
        ],
      },
    ],
    positioning: {
      title: 'Patient Positioning',
      content:
        'Supine, with head turned away from affected side and operator at head of bed',
    },
    procedure: {
      title: 'Procedure',
      content: [
        'Sterilize field per local guidelines.',
        'Place probe in sagittal/oblique plane, inferior to clavicle, at lateral portion of pectoralis major, level of 4th rib.',
        'Identify sonoanatomy seen as horizontal tissue planes — pectoralis major muscle, pectoralis minor muscle, serratus anterior muscle, ribs (2nd/3rd or 3rd/4th), and lung.',
        'To block both PECS I and II: Using in-plane approach from cephalad to caudad, advance needle tip into plane between serratus anterior muscle and pectoralis minor muscle (PECS II block).',
        'After negative aspiration, confirm placement using hydrodissection to open planes. Once confirmed, inject 20 mL anesthetic (PECS II).',
        'If also performing PECS I block, retract until needle tip is between pectoralis major and minor muscles.',
        'After negative aspiration, confirm needle placement using hydrodissection to open the planes. Once confirmed, inject 10 mL anesthetic.',
      ],
    },
    pitfall: {
      title: 'Pearls and Pitfalls',
      content: [
        'Increasing volume (by dilution of LA), while staying within safe dose, can enhance spread and efficacy of block.',
        'PECS I & II are performed together with one needle-stick for breast and anterior chest soft tissue anesthesia.',
        'Debate exists between experts on increased risk of LAST from thoracic plane blocks. Several experts advocate for using lower than maximum doses.',
      ],
    },
    citations: {
      title: 'Citations',
      content: [
        'Blanco, R. The ‘pecs block’: a novel technique for providing analgesia after breast surgery. Anaesthesia 66.9 (2011): 847-848.',
        'Jack, J. M., et al. The role of serratus anterior plane and pectoral nerves blocks in cardiac surgery, thoracic surgery and trauma: a qualitative systematic review. Anaesthesia 75.10 (2020): 1372-1385.',
        'Chin, K. J., B. Versyck, and A. Pawa. Ultrasound‐guided fascial plane blocks of the chest wall: a state‐of‐the‐art review. Anaesthesia 76 (2021): 110-126.',
        'Pawa, A., et al. Combined thoracic paravertebral and pectoral nerve blocks for breast surgery under sedation: a prospective observational case series. Anaesthesia 73.4 (2018): 438-443.',
      ],
    },
    illustrations: [
      {
        caption: 'Dermatome and osteome',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/PECSIANDII/3.1+PECS+I+and+II+region+analgesia.jpg',
      },
      {
        caption: 'PECS I and II anatomy',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/PECSIANDII/3.1-A+PECS+I+and+II+anatomy.jpg',
      },
      {
        caption: 'Probe placement',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/PECSIANDII/3.1+PECS+probe+placement.jpg',
      },
      {
        caption: 'PECS US unlabeled',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/PECSIANDII/3.1+PECS+US+plain.jpg',
      },
      {
        caption:
          'PECS US labeled | 1 = Pectoralis major | 2 = PECS I | 3 = Pectoralis minor | 4 = PECS II | 5 = Serratus Anterior | 6 = Rib | 7 = Pleura',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/PECSIANDII/3.1+PECS+US+labeled.jpg',
      },
    ],
    videos: [
      {
        caption: '',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/PECSIANDII/pecs_i_%26_ii_block+(540p).mp4',
      },
    ],
  },
  {
    name: 'Serratus Anterior',
    url: 'serratus-anterior',
    author: [
      "Alexis LaPietra, DO | St. Joseph's Regional Medical Center",
      "Katherine Vlasica, DO | St. Joseph's Regional Medical Center",
    ],
    mainImg: '',
    materials: {
      title:
        'Materials (adapt to patient, clinician, and site-specific factors/availability)',
      content: {
        Probe: 'High-Frequency linear probe',
        Needle:
          '50-100 mm, 22 G blunt tip needle. Hyperechoic block needle with tubing',
        volumeOfAnesthetic:
          '20-40 mL anesthetic (dilute if needed; split dose between 2 syringes as needed)',
        Other:
          '30-50 mL syringe, 10 mL sterile saline (for hydrodissection). Skin prep and PPE. Optional: 1-2 mL 1% lidocaine in separate syringe for skin wheal',
      },
    },
    region: {
      title: 'Region of Analgesia',
      content:
        'Anesthetizes the T2–T9 dermatomes of the ipsilateral hemithorax through the lateral cutaneous nerves, long thoracic nerve, and thoracodorsal nerve, relieving pain in the anterior and lateral chest wall. It is possible to have a temporary wing scapula as a result of this block',
    },
    indications: {
      title: 'Indications',
      content: [
        'Anterior and/or lateral rib fractures',
        'Thoracostomy insertion',
        'Complex Chest lacerations and Abscesses',
        'Chest wall burns',
        'Chest wall herpes zoster rash',
      ],
    },
    contraindications: [
      {
        title: '',
        content: [
          'Allergy to local anesthetic',
          'Overlying infection',
          'Anticoagulation (relative contraindication)',
        ],
      },
    ],
    positioning: {
      title: 'Patient Positioning',
      content:
        'Supine or lateral decubitus position with injured side up, with arm above or perpendicular to torso, allowing for probe and operator at site of injection',
    },
    procedure: {
      title: 'Procedure',
      content: [
        'Sterilize field per local guidelines.',
        'Place transducer in a transverse plane at the midaxillary line at the 4th or 5th rib.',
        'Identify ribs with underlying pleura. The first muscle layer above ribs is the serratus anterior. At the level of mid-axillary line, the second beak-shaped muscle layer above the serratus muscles is the latissimus dorsi muscle.',
        'Using an in-line needle approach, direct the needle to the fascial layer between the serratus anterior and latissimus dorsi.',
        'After negative aspiration, hydrodissect the fascial plane with sterile saline.',
        'Once a homogeneous anechoic stripe is observed between the serratus and latissimus muscles, inject approximately 30 mL anesthetic.',
      ],
    },
    pitfall: {
      title: 'Pearls and Pitfalls',
      content: [
        'Increasing volume (by dilution of LA), while staying within safe dose, can enhance spread and efficacy of block.',
        'Ensure you can visualize the lung in your field of view',
        'Be aware of the thoracodorsal artery to avoid accidental puncture.',
        'Be careful performing this block in patients with chronic lung disease, given proximity to lung tissue.',
        'Debate exists between experts on increased risk of LAST from thoracic plane blocks. Several experts advocate for using lower than maximum doses.',
      ],
    },
    illustrations: [
      {
        caption: 'Dermatome and osteome anterior',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/serratusanterior/Serratus+Anterior+Block+Anterior.jpg',
      },
      {
        caption: 'Dermatome and osteome posterior',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/serratusanterior/Serratus+Anterior+Block+Posterior.jpg',
      },
    ],
    photos: [
      {
        caption: 'Probe placement',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/serratusanterior/Picture2.png',
      },
      {
        caption: 'Ultrasound anatomy unlabeled',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/serratusanterior/3.2+Serratus+Anterior+US+plain.jpg',
      },
      {
        caption:
          'Ultrasound anatomy labeled | 1 = Latissimus Dorsi Muscle | 2 = Serratus Anterior Muscle | 3 = Rib | 4 = Pleura',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/serratusanterior/3.2+Serratus+Anterior+US+labeled.jpg',
      },
    ],
    videos: [
      {
        caption: '',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/serratusanterior/serratus_anterior_block+(540p).mp4',
      },
    ],
  },
  {
    name: 'Erector Spinae',
    url: 'erector-spinae',
    author: [
      "Andrew J. Goldsmith, MD, MBA | Brigham and Women's Hospital & Harvard Medical School",
      'Joseph Stegeman, MD | Harvard Affiliated Emergency Medicine Residency',
    ],
    mainImg: '',
    materials: {
      title:
        'Materials (adapt to patient, clinician, and site-specific factors/availability)',
      content: {
        Probe:
          'High-frequency linear probe or curvilinear probe for more depth',
        Needle:
          '80-100 mm, 22 G blunt tip needle. Hyperechoic block needle with tubing',
        volumeOfAnesthetic:
          '30-60 mL (dilute if needed; split dose between 2 syringes as needed)',
        Other:
          '30-50 mL syringe, 10 mL sterile saline (for hydrodissection). Skin prep and PPE. Optional: 1-2 mL 1% lidocaine in separate syringe for skin wheal',
      },
    },
    region: {
      title: 'Region of Analgesia',
      content:
        'Anesthetizes the posterior and lateral chest wall through complete blockade of the dorsal rami (and variable blockade of the ventral rami) that provide both visceral and somatic innervation. There is no motor involvement',
    },
    indications: {
      title: 'Indications',
      content: [
        'Rib fractures (posterior preferred)',
        'Thoracostomy insertion',
        'Herpes Zoster',
        'Posterior thoracic abscesses, burns, lacerations',
        'Renal Colic',
      ],
    },
    contraindications: [
      {
        title: '',
        content: [
          'Overlying infection',
          'Allergy to anesthetic',
          'Anticoagulation (relative)',
        ],
      },
    ],
    positioning: {
      title: 'Patient Positioning',
      content:
        'Seated, facing away from the operator, with a pillow or table to lean on, similar to a lumbar puncture. Alternatively, the patient can be in a lateral decubitus or prone position.',
    },
    procedure: {
      title: 'Procedure',
      content: [
        'Sterilize field per local guidelines.',
        'With patient sitting upright, place probe over the midline thoracic spine in a sagittal orientation at midpoint of desired anesthesia on thoracic spine. Starting at the midline and moving laterally, identify the spinous process, lamina, flat transverse process, and rounded rib.',
        'Insert needle in an in-line approach from the cephalad to caudal approach.',
        'Advance under in-plane visualization such that the tip of the needle rests on the superficial aspect of the transverse process. After negative aspiration, hydrodissect the fascial plane with sterile saline to confirm placement.',
        'Once confirmed, inject anesthetic, visualizing the spread of local anesthetic along the fascial plane.',
      ],
    },
    pitfall: {
      title: 'Pearls and Pitfalls',
      content: [
        'Increasing volume (by diluting LA), while staying within safe dose, can enhance spread and efficacy. Avoid intramuscular injections by ensuring fascial spread.',
        'Use saline hydrodissection to aid in needle location and assure placement within the fascia.',
        'For single fractures or zoster, you can target the vertebra that correspond to the affected rib or dermatome.',
        'With multiple fractures, center the block such that cranial and caudal spread will maximize distribution to the affected dermatomes. Expect slightly more caudal than cranial spread.',
        'Debate exists between experts on increased risk of LAST from thoracic plane blocks. Several experts advocate for using lower than maximum doses.',
      ],
    },
    citations: {
      title: 'Citations',
      content: [
        'Barrios, Andres, et al. “Evaluation of Sensory Mapping of Erector Spinae Plane Block.” Pain Physician, vol. 2020, no. 23, 2020, pp. E289-E295. PubMed. PMID: 32517405',
        'Chin, Ki Jinn, and Kariem El-Boghdadly. “Mechanisms of action of the erector spinae plane (ESP) block: a narrative review.” Canadian Journal of Anesthesia, vol. 68, no. 3, 2021, pp. 387-408. PubMed. 10.1007/s12630-020-01875-2',
        'Hacıbeyoğlu, Gülçin, et al. “Evaluation of the efficacy of erector spinae plane block and intercostal nerve block in the postherpetic neuralgia.” Agri, vol. 32, no. 4, 2020, pp. 208-218. PubMed.',
        'Kot, Pablo, et al. “The erector spinae plane block: a narrative review.” Korean Journal of Anesthesiology, vol. 72, no. 3, 2019, pp. 209-220. PubMed. 10.4097/kja.d.19.00012',
        'White, L., et al. “Erector spinae block versus serratus anterior block in chest wall trauma, which is better?: A response and decision making guide.” The American Journal of Emergency Medicine, vol. 38, no. 10, 2020, pp. 2221-2223. PubMed. doi.org/10.1016/j.ajem.2020.08.004',
        'https://www.statpearls.com/ArticleLibrary/viewarticle/76369',
        'https://www.nysora.com/erector-spinae-plane-block/',
        'http://highlandultrasound.com/erector',
      ],
    },
    illustrations: [
      {
        caption: 'Dermatome and osteome anterior',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/erectorspinae/Elector+Spinae+Block+Anterior.jpg',
      },
      {
        caption: 'Dermatome and osteome posterior',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/erectorspinae/Elector+Spinae+Block+Posterior.jpg',
      },
    ],
    photos: [
      {
        caption: 'Probe Placement Upper',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/erectorspinae/Picture1.png',
      },
      {
        caption: 'Probe Placement Mid',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/erectorspinae/Picture2.png',
      },
      {
        caption: 'Probe Placement Low',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/erectorspinae/Picture3.png',
      },
      {
        caption: 'Ultrasound Anatomy unlabeled',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/erectorspinae/3.3+Erector+Spinae+US+plain.jpg',
      },
      {
        caption:
          'Ultrasound Anatomy labeled | 1 = Trapezius | 2 = Rhomboid | 3 = Erector Spinae | 4 = Transverse Process | 5 = pleura',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/erectorspinae/3.3+Erector+Spinae+US+labeled.jpg',
      },
    ],
    videos: [
      {
        caption: '',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/erectorspinae/1.2.2.2.3.2.+Video+File+%E2%80%93+Erector+Spinae.mp4',
      },
    ],
  },
  {
    name: 'Transverse Abdominus Plane(TAP) Block',
    url: 'tap',
    author: [
      'Marc L. Martel, MD | Hennepin Healthcare & University of Minnesota Medical School',
    ],
    mainImg: '',
    materials: {
      title:
        'Materials (adapt to patient, clinician, and site-specific factors/availability)',
      content: {
        Probe:
          'High-frequency linear probe or curvilinear probe for more depth',
        Needle:
          '50-100 mm, 22 G blunt tip needle. Hyperechoic block needle with tubing',
        volumeOfAnesthetic: '30-40cc',
        Other:
          '30-50 mL syringe, 10 mL sterile saline (for hydrodissection). Skin prep and PPE. Optional: 1-2 mL 1% lidocaine in separate syringe for skin wheal',
      },
    },
    region: {
      title: 'Region of Analgesia',
      content:
        'Anesthetizes the lower abdominal wall, abdominal wall musculature, and parietal peritoneum through the anterior rami of spinal nerves (T7–L1), which includes intercostal nerves (T7–T11), the subcostal nerve, and the iliohypogastric and ilioinguinal nerves. The subcostal TAP block provides coverage from T6-T9 and the traditional/ lateral TAP block covers T10-T12 from the midline to the mid / posterior axillary line ranging from the umbilicus superiorly to the hypogastrium / upper thigh inferiorly. There is no motor involvement',
    },
    indications: {
      title: 'Indications',
      content: [
        'Abdominal Pain',
        'Appendicitis',
        'Pre-operative Pain Relief for abdominal surgeries',
        'Penetrating abdominal trauma requiring local wound exploration',
        'Abdominal wall abscess, lacerations, burns.',
      ],
    },
    contraindications: [
      {
        title: '',
        content: [
          'Allergy to local anesthetic',
          'Overlying infection',
          'Anticoagulation (relative)',
          'Cirrhosis (relative)',
        ],
      },
    ],
    positioning: {
      title: 'Patient Positioning',
      content: 'Supine and exposed from inferior costal margin to iliac crest',
    },
    procedure: {
      title: 'Procedure',
      content: [
        'Sterilize field per local guidelines. ',
        'Place probe transversely in midaxillary line at midpoint between iliac crest and inferior costal margin.',
        'Identify subcutaneous tissue, external oblique muscle, internal oblique muscle, transverse abdominis muscle, and peritoneum.',
        'Using an in-plane approach from medial to lateral, advance needle between internal oblique and transverse abdominis musculature.',
        'After negative aspiration, confirm placement using hydrodissection to open the plane.',
        'Once confirmed, inject full volume of anesthesia, watching spread through plane.',
      ],
    },
    pitfall: {
      title: 'Pearls and Pitfalls',
      content: [
        'Increasing volume (by dilution of LA), while staying within safe dose, can enhance spread and efficacy of block. Avoid intramuscular injections by ensuring fascial spread.',
        'Use a low angle of insertion, given this is a superficial block to avoid entering the peritoneal cavity and risking bowel injury.',
        'Consider for abdominal pain etiologies with somatic involvement; not as effective for visceral pain.',
      ],
    },
    citations: {
      title: 'Citations',
      content: [
        'Mukhtar, Karim. Transversus abdominis plane (TAP) block. JNY School Reg Anesth 12 (2009): 28-33.',
      ],
    },
    illustrations: [
      {
        caption: 'Dermatome subcostal',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/tap/Dermatome+Subcostal+TAP+Block.jpg',
      },
      {
        caption: 'Dermatome mid axillary',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/tap/Dermatome+Mid-axillary+TAP+Block.jpg',
      },
    ],
    photos: [
      {
        caption: 'Probe Placement 1',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/tap/Picture1.png',
      },
      {
        caption: 'Probe Placement 2',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/tap/Picture2.png',
      },
      {
        caption: 'Ultrasound Anatomy unlabeled',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/tap/3.4+TAP+US+lateral+-+plain.jpg',
      },
      {
        caption:
          'Ultrasound Anatomy labeled | 1 = External Oblique | 2 = Internal Oblique | 3 = Transversus Abdominis | 4 = Peritoneal Cavity',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/tap/3.4-TAP+US+lateral+-+labeled.jpg',
      },
    ],
    videos: [
      {
        caption: '',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/tap/tap_blocks+(540p).mp4',
      },
    ],
  },
  {
    name: 'Trigger Point Injection for the Back (Thoracic and Lumbar)',
    url: 'trigger-point-injection-for-the-back-thoracic-and-lumbar',
    mainImg: '',
    materials: {
      title:
        'Materials (adapt to patient, clinician, and site-specific factors/availability)',
      content: {
        Probe: 'High-Frequency Linear probe ',
        Needle: '25-30ga 1.5” beveled needle',
        volumeOfAnesthetic: '10 cc of preferred anesthetic ',
        Other: 'cleaning supplies',
      },
    },
    region: {
      title: 'Region of Analgesia',
      content:
        'A trigger point injection anesthetizes only the muscle tissue that is directly infiltrated. This injection does not affect motor function. ',
    },
    indications: {
      title: 'Indications',
      content: ['Thoracic and lumbar muscle spasm'],
    },
    contraindications: [
      {
        title: '',
        content: ['Overlying infection', 'Allergy to anesthetic'],
      },
    ],
    positioning: {
      title: 'Patient Positioning',
      content:
        'Sitting upright slouched over a table with feet off the side of the bed to allow access to the lower back. Although less desired, the patient may also be prone with the lower back exposed.',
    },
    procedure: {
      title: 'Procedure',
      content: [
        'Sterilize field per local guidelines. ',
        'Use the probe to identify musculature to be injected as well as any vessels or nerves that need to be avoided. Make note of the depth of the pleura and peritoneum',
        'Inject a small amount of anesthetic under the skin and advance the needle under constant aspiration to desired depth. Can be done with or without use of real-time US.',
        'Inject 1-2cc of anesthetic. Withdraw needle almost to skin and re-direct, repeating in a fanning motion through muscle belly until a total of 10cc of anesthetic has been deposited',
        '**Optionally, dry needling may be performed by repeatedly inserting and withdrawing the injection needle into the muscle belly 10-20 times without depositing additional anesthetic in order to break up additional muscle fibers',
      ],
    },
    pitfall: {
      title: 'Pearls and Pitfalls',
      content: [
        'Use ultrasound to know the depth of pleura and/or peritoneum to avoid accidental pneumothorax and/or bowel injury. ',
        'Use tangential 45 degree angle insertion compared perpendicular insertion to avoid damage to deeper structures.',
        'Always aspirate as you are inserting.',
        'Optionally, dry needling may be performed by repeatedly inserting and withdrawing the injection needle into the muscle belly 10-20 times without depositing additional anesthetic in order to break up additional muscle fibers.',
      ],
    },
    citations: {
      title: 'Citations',
      content: [
        'Alvarez, D., and P. Rockwell. “Trigger Points: diagnosis and management.” Am Fam Physician, vol. 65, no. 40, 2002, pp. 653-660.',
        'Garvey, T., et al. “A prospective, randomized, double-blind evaluation of trigger-point injection therapy for low back pain.” Spine, vol. 14, no. 9, 1989, pp. 963-964.',
        'Hammi, Claudia, et al. “Trigger Point Injection.” StatPearls, StatPearls Publishing, Jan 2021, https://www.ncbi.nlm.nih.gov/books/NBK542196/#_NBK542196_pubdet_.',
        'Sikdar, S., and J. Shah. “Novel applications of ultrasound technology to visualize and characterize myofascial trigger points and surrounding soft tissue.” Archives of Physical Medicine and Rehabilitation, vol. 90, no. 11, 2009, pp. 1829-1838.',
        'Wong, Clara S., and Steven H. Wong. “A new look at trigger point injections.” Anesthesiology research and practice, vol. 2012, 2012. 10.1155, 492452.',
        'Botwin, K., et al. “Ultrasound-guided trigger point injections in the cervicothoracic musculature: a new and unreported technique.” Pain Physician, vol. 11, no. 6, 2008, pp. 885-889.',
        'Lavelle, E., et al. “Myofascial trigger points.” Med Clin North Am, vol. 91, no. 2, 2007, pp. 229-239.',
      ],
    },
    videos: [
      {
        caption: '',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/triggerThoracicandLumbar/1.2.2.5.2.3.+Video+file+%E2%80%93+Trigger+point.mp4',
      },
    ],
  },
];

export default torsoDB;
