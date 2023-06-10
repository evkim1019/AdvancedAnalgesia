const otherMskDB = [
  {
    name: 'Hematoma Block for Humerus Fractures',
    url: 'hematoma-block-for-humerus-fractures',
    illustration: '',
    materials: {
      title:
        'Materials (adapt to patient, clinician, and site-specific factors/availability)',
      content: {
        Probe: 'Optional; high-frequency linear probe, if US is used',
        Needle: "18-22 G, 1.5' long beveled/sharp tip needle",
        'Volume of Anesthetic':
          '10-20 mL (bupivacaine relatively contraindicated; lidocaine preferred)',
        Other: '10-20 mL syringe; skin prep and PPE',
      },
    },
    region: {
      title: 'Region of Analgesia',
      content:
        'Anesthetizes the fracture area and some superficial skin around the fracture site. There is no motor involvement.',
    },
    indications: {
      title: 'Indications',
      content: ['Humerus fractures and/or closed reductions.'],
    },
    contraindications: [
      {
        title: '',
        content: [
          'Allergy to local anesthetic',
          'Overlying infection',
          'Anticoagulation (relative)',
        ],
      },
    ],
    positioning: {
      title: 'Patient Positioning',
      content:
        'Seated or supine, with area of fracture accessible for ultrasound and injection',
    },
    procedure: {
      title: 'Procedure',
      content: [
        'Sterilize field per local guidelines.',
        'Identify fracture site by palpation or on ultrasound through direct visualization.',
        'Insert needle on the lateral aspect of the arm to avoid neurovascular structures. With US, use in-plane approach to guide needle to the fracture site. If using palpation, enter where deformity is palpated and advance until bone is contacted.',
        'Aspirate blood to confirm needle within hematoma; once confirmed, inject anesthetic.',
      ],
    },
    pitfall: {
      title: 'Pearls and Pitfall',
      content: [
        'If not getting blood using blind/palpation technique, consider using US for direct visualization of fracture.',
        'Do not use bupivacaine; hematoma blocks carry increased risk of LAST.',
      ],
    },
    citations: {
      title: 'Citations',
      content: [
        'https://advanced-analgesia.s3.amazonaws.com/upperextremity+/humerus/Picture1.png',
      ],
    },
    photos: [
      {
        caption: 'US anatomy unlabeled',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/humerus+hematoma+block/6.1+Humerus+hematoma+US+plain.jpg',
      },
      {
        caption: 'US anatomy labeled | 1 =  Intact Bone Cortex | 2 = Area of Fracture ',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/humerus+hematoma+block/6.1+Humerus+hematoma+US+labeled.jpg',
      },
    ],
  },

  {
    name: 'Hematoma Block for Ankle Fractures',
    url: 'hematoma-block-for-ankle-fractures',
    illustration: '',
    materials: {
      title:
        'Materials (adapt to patient, clinician, and site-specific factors/availability)',
      content: {
        Probe: 'Optional; high-frequency linear probe, if US is used',
        Needle: "18-22 G, 1.5' long beveled/sharp tip needle",
        'Volume of Anesthetic':
          '10-20 mL (bupivacaine relatively contraindicated; lidocaine preferred)',
        Other: '10-20 mL syringe; skin prep and PPE',
      },
    },
    region: {
      title: 'Region of Analgesia',
      content:
        'Anesthetizes the ankle joint and local structures. There is no motor involvement.',
    },
    indications: {
      title: 'Indications',
      content: ['Ankle fractures and/or closed reductions.'],
    },
    contraindications: [
      {
        title: '',
        content: [
          'Allergy to local anesthetic',
          'Overlying infection',
          'Anticoagulation (relative)',
        ],
      },
    ],
    positioning: {
      title: 'Patient Positioning',
      content:
        'Seated or supine, medial aspect of ankle exposed to identify tibialis anterior and medial malleolus',
    },
    procedure: {
      title: 'Procedure',
      content: [
        'Sterilize field per local guidelines.',
        'In landmark-based technique, tibial injection is Tibialis anterior tendon performed between medial malleolus and tibialis anterior tendon. If fibular involvement, additional injection can be performed on the anterior-lateral aspect of the lateral malleolus.',
        'In US technique, start in the transverse orientation between the tibialis anterior and medial malleolus,and scan to visualize the fracture.',
        'Under direct visualization, advance the needle to the fracture.',
        'n both landmark and US-guided approaches, aspirate blood to confirm needle within hematoma; once confirmed, inject anesthetic.',
      ],
    },
    pitfall: {
      title: 'Pearls and Pitfall',
      content: [
        'Reductions can often be performed with hematoma blocks alone, avoiding the need for conscious sedation.',
        'For displaced fractures, US is rarely required; injection can be done by visualization or palpation.',
        'If tibia and fibula are both fractured, consider hematoma blocks of both bones.',
        'Do not use bupivacaine; hematoma blocks carry increased risk of LAST.',
      ],
    },
    citations: {
      title: 'Citations',
      content: [
        'https://advanced-analgesia.s3.amazonaws.com/upperextremity+/humerus/Picture1.png',
      ],
    },
    photos: [
      {
        caption: 'Anatomy | Yellow = Medial Malleolus | Brown = Lateral Malleolus | Teal = Tibialis Anterior Tendon',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/ankle+hematoma+block/6.2+Hematoma+-+ankle+photo.jpg',
      },
    ],
  },

  {
    name: 'Hematoma Block for Wrist Fractures',
    url: 'hematoma-block-for-wrist-fractures',
    illustration: '',
    materials: {
      title:
        'Materials (adapt to patient, clinician, and site-specific factors/availability)',
      content: {
        Probe: 'Optional; high-frequency linear probe, if US is used',
        Needle: "18-22 G, 1.5' long beveled/sharp tip needle",
        'Volume of Anesthetic':
          '10-20 mL (bupivacaine relatively contraindicated; lidocaine preferred)',
        Other: '10-20 mL syringe; skin prep and PPE',
      },
    },
    region: {
      title: 'Region of Analgesia',
      content:
        'Anesthetizes the fracture site and surrounding structures. There is no motor involvement distally.',
    },
    indications: {
      title: 'Indications',
      content: [
        'Distal radius and/or ulna fracture/dislocations',
        'Closed reductions',
      ],
    },
    contraindications: [
      {
        title: '',
        content: [
          'Allergy to local anesthetic',
          'Overlying infection',
          'Anticoagulation (relative)',
        ],
      },
    ],
    positioning: {
      title: 'Patient Positioning',
      content:
        'Position of comfort, with area of fracture easily accessible, usually with dorsal surface up',
    },
    procedure: {
      title: 'Procedure',
      content: [
        'Sterilize field per local guidelines.',
        'Identify fracture site through palpation and/or ultrasound.',
        'Orient probe in transverse view to visualize fracture. Insert needle on dorsal aspect of wrist, to avoid neurovascular structures. Using an in-plane approach, guide needle into fracture site.',
        'Aspirate blood to confirm needle within hematoma; once confirmed, inject anesthetic.',
      ],
    },
    pitfall: {
      title: 'Pearls and Pitfall',
      content: [
        'Reductions can often be performed with hematoma blocks alone, avoiding need for conscious sedation.',
        'If not getting blood using blind/palpation technique, consider using US for direct visualization of fracture.',
        'Do not use bupivacaine; hematoma blocks carry increased risk of LAST.',
      ],
    },
    citations: {
      title: 'Citations',
      content: [
        'Bear, David M., et al. “Hematoma block versus sedation for the reduction of distal radius fractures in children.” Journal of and Surgery, vol. 40, no. 1, 2015, pp. 57-61. PubMed, https://pubmed.ncbi.nlm.nih.gov/25306504/. Accessed 8 June 2021.',
        'Fathi, Marzieh, et al. “Ultrasound-guided hematoma block in distal radial fracture reduction: a randomised clinical trial.” Journal of Emergency Medicine, vol. 32, no. 6, 2015, pp. 474-77. PubMed, https://pubmed.ncbi.nlm.nih.gov/25016389/. Accessed 8 6 2021.',
        'Gottlieb, Michael. “Ultrasound-guided Hematoma Block for Distal Radial and Ulnar Fractures.” Journal of Emergency Medicine, vol. 48, no. 3, 2015, pp. 310-312. Journal of Emergency Medicine, https://www.jem-journal.com/article/S0736-4679(14)01103-2/fulltext. Accessed 8 6 2021.',
        'Maleitzke, Tazio. “Haematoma block: a safe method for pre-surgical reduction of distal radius fractures.” Journal of orthopaedic surgery and research, vol. 15, no. 1, 2020, p. 351. PubMed, https://pubmed.ncbi.nlm.nih.gov/32843043/. Accessed 8 6 2021.',
        "McGee, Douglas L., and James R. Roberts. “Local and Topical Anesthesia.” Roberts and Hedges' Clinical Procedures in Emergency Medicine, by Jerris R. Hedges, 6th ed. ed., Elsevier Saunders, 2014, pp. 532-533.",
        'Reichman, Eric. Emergency Medicine Procedures. 3rd ed., New York, McGraw-Hill, 2019. Access Emergency Medicine, https://accessemergencymedicine.mhmedical.com/content.aspx?bookid=2498&sectionid=201298196. Accessed 8 June 2021.',
        'Siebelt, Michiel. “Ultrasound-Guided Nerve Blocks as Analgesia for Nonoperative Management of Distal Radius Fractures-Two Consecutive Randomized Controlled Trials.” Journal of Orthopaedic Trauma, vol. 33, no. 4, 2019, pp. e124-e130. https://pubmed.ncbi.nlm.nih.gov/, https://pubmed.ncbi.nlm.nih.gov/. Accessed 8 6 2021.',
        'Tseng, Ping-Tao, et al. “Hematoma block or procedural sedation and analgesia, which is the most effective method of anesthesia in reduction of displaced distal radius fracture?” Journal of Orthopedic Surgery and Research, vol. 13, no. 1, 2018, p. 62. PubMed, https://pubmed.ncbi.nlm.nih.gov/29580286/. Accessed 8 6 2021.',
      ],
    },
    photos: [
      {
        caption: 'US Probe Position',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/hematoma+block+wrist/6.3+Hematoma+wrist+photo.jpg',
      },
      {
        caption: 'US anatomy unlabeled',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/hematoma+block+wrist/6.3+Hematoma+wrist+US+plain.jpg',
      },
      {
        caption: 'US anatomy labeled | 1 =  Intact Bone Cortex | 2 = Area of Fracture',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/hematoma+block+wrist/6.3+Hematoma+wrist+US+labeled.jpg',
      },
    ],
  },

  {
    name: 'Trigger Point Injection (TPI) Thoracic and Lumbar Muscles',
    url: 'trigger-point-injection-and-lumbar-muscles',
    illustration: '',
    materials: {
      title:
        'Materials (adapt to patient, clinician, and site-specific factors/availability)',
      content: {
        Probe: '',
        Needle: '25-27 G, 1.5” long beveled/sharp tip needle',
        'Volume of Anesthetic': '10-20 mL',
        Other: '10-20 mL syringe. Skin prep and PPE',
      },
    },
    region: {
      title: 'Region of Analgesia',
      content:
        'Anesthetizes the muscle tissue that is directly infiltrated. There is no motor involvement.',
    },
    indications: {
      title: 'Indications',
      content: ['Back pain', 'Thoracic and lumbar muscle spasm'],
    },
    contraindications: [
      {
        title: '',
        content: ['Overlying infection', 'Allergy to local anesthetic'],
      },
    ],
    positioning: {
      title: 'Patient Positioning',
      content:
        'Patient lying prone with back exposed, or seated with back exposed; if seated, have patient lean forward to improve comfort and decrease movement during injections',
    },
    procedure: {
      title: 'Procedure',
      content: [
        'Trigger points are focal hyperirritable areas in a band of skeletal muscle. Identify trigger points by palpating affected area. Trigger points include areas that have maximal tenderness and are often associated with feeling a tight band or knot of muscle. In general, multiple trigger points are injected during this procedure to obtain maximal pain relief.',
        'Sterilize field per local guidelines.',
        'Advance needle into trigger point, injecting 2-4 mL anesthetic. Increase the efficacy of the trigger point injection (TPI) by fanning injection throughout the area, nearly withdrawing the needle from skin and redirecting it to multiple planes. Repeat for each identified trigger point.',
        'On lumbar musculature, injections may be done perpendicular to the skin and a 1.5’’ needle can be advanced to the hub. On thoracic musculature, extra attention must be paid to needle depth in order to avoid inadvertent lung puncture. Consider injecting at a 45°-60° angle and performing shallower injections in areas where there is risk for pneumothorax.',
        'Repeat injections until all anesthetic is used.',
      ],
    },
    pitfall: {
      title: 'Pearls and Pitfall',
      content: [
        'For additional safety, US can be used to determine depth of pleura and/or peritoneum and avoid accidental pneumothorax or bowel injury.',
        "Dry needling by rapidly and repeatedly “pistoning” the needle deeper and more shallow (without exiting the skin) around the trigger point may also help. Dry needling can be performed after depositing LA, or without LA. Dry needling can also be done in patients in whom LA is contraindicated or to additional trigger points once you've reached LA limits.",
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
    photos: [
      {
        caption: 'Trigger Point Injection Areas | Teal = Common thoracic Trigger Point Injection sites | Purple = Line delineates 12th rib, above which there is increased risk of PTX | Yellow = Common lumbar TPI sites | Orange = DO NOT INJECT; risk of injury to sciatic nerve',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/trigger+point+injection+thoracic+and+lumbar+/6.4+TPI+Thoracic+-+trigger+points.jpg',
      },
      {
        caption: 'Needle placement, gluteal Trigger Point Injection',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/trigger+point+injection+thoracic+and+lumbar+/6.4+TPI+Thoracic+-+gluteal+needle+place.jpg',
      },
      {
        caption: 'Needle placement, lower back Trigger Point Injection',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/trigger+point+injection+thoracic+and+lumbar+/6.4+TPI+Thoracic+-+lower+back+needle+place.jpg',
      },
    ],
    videos: [
      {
        caption: '',
        url: 'https://advanced-analgesia.s3.amazonaws.com/torso/triggerThoracicandLumbar/1.2.2.5.2.3.+Video+file+%E2%80%93+Trigger+point.mp4',
      },
    ],
  },

  {
    name: 'Trigger Point Injection Cervical and Trapezius',
    url: 'trigger-point-injection-cervical-and-trapezius',
    illustration: '',
    materials: {
      title:
        'Materials (adapt to patient, clinician, and site-specific factors/availability)',
      content: {
        Probe: '',
        Needle: '25-27 G, 1.5” long beveled/sharp tip needle',
        'Volume of Anesthetic':
          '2-3 mL per side if cervical; 2-4 mL per side if trapezius',
        Other: '10-20 mL syringe. Skin prep and PPE',
      },
    },
    region: {
      title: 'Region of Analgesia',
      content:
        'Anesthetizes only the muscle tissue that is directly infiltrated. There is no motor involvement.',
    },
    indications: {
      title: 'Indications',
      content: [
        'Cervical and trapezius muscle spasm',
        'Headache',
        'Dental pain / facial pain / trigeminal neuralgia',
      ],
    },
    contraindications: [
      {
        title: '',
        content: ['Overlying infection', 'Allergy to local anesthetic'],
      },
    ],
    positioning: {
      title: 'Patient Positioning',
      content:
        'Cervical TPI: Seated upright, with chin lifted and head facing forward',
    },
    positioning2: {
      title: 'Patient Positioning',
      content:
        'Trapezius TPI: Seated or prone, with neck and upper back exposed',
    },
    procedure: {
      title: 'Procedure',
      content: [
        'Sterilize field per local guidelines.',
        'Cervical',
        'In contrast to other TPIs, these are consistently done in the same area without palpating for trigger points. Palpate cervical spine, identifying area between C4-C6, in mid posterior neck; many clinicians leave thumb in midline for orientation ',
        "Insert needle into paracervical musculature, 1-2' lateral of midline perpendicular to skin and parallel to the floor (inferior angling risks pneumothorax).",
        "Needle is inserted 1-1.5' in a smooth motion (contrary to other trigger points, do not fan injection or perform dry needling).",
        'Aspirate, then inject 2-3 mL anesthetic.',
        'Cervical TPIs are typically done as a single shot, bilaterally.',
        'Cervical TPIs are often combined with occipital nerve blocks for headache relief.',
        'Trapezius',
        'Trigger points are focal hyperirritable areas in a band of skeletal muscle. Identify trigger points by palpating the affected area. Trigger points include areas of maximal tenderness and are often associated with feeling a tight band or knot of muscle.',
        'Insert needle at 45°-60° angle relative to the skin, being cautious of depth to reduce risk of inadvertent pneumothorax.',
        'Can pinch trapezius trigger points between 4 fingers and thumb and direct the needle between the fingers and thumb into the trigger point. This affords better needle control and decreased PTX risk, but increases risk of needle stick injury.',
        'Inject 2-4 mL anesthetic, fanning injection throughout the area.',
        'Repeat for each identified trigger point.',
      ],
    },
    pitfall: {
      title: 'Pearls and Pitfall',
      content: [
        'Cervical and trapezius TPIs both carry risk of pneumothorax; be cognizant of needle angles and consent patients to this risk.',
        'Cervical TPI has shown benefit for facial and dental pain, in addition to headache and neck pain.',
        'For additional safety, US can be used to determine depth of pleura and avoid accidental pneumothorax when performing trapezius or cervical TPIs.',
      ],
    },
    citations: {
      title: 'Citations',
      content: [
        'Alvarez, D., and P. Rockwell. “Trigger Points: diagnosis and management.” Am Fam Physician, vol. 65, no. 40, 2002, pp. 653-660.',
        'Hammi, Claudia, et al. “Trigger Point Injection.” StatPearls, StatPearls Publishing, Jan 2021, https://www.ncbi.nlm.nih.gov/books/NBK542196/#_NBK542196_pubdet_.',
        'Sikdar, S., and J. Shah. “Novel applications of ultrasound technology to visualize and characterize myofascial trigger points and surrounding soft tissue.” Archives of Physical Medicine and Rehabilitation, vol. 90, no. 11, 2009, pp. 1829-1838.',
        'Tsai, C., et al. “Remote effects of dry needling on the irritability of the myofascial trigger point in the upper trapezius muscle.” American Journal of Physical Medicine and Rehabilitation, vol. 89, no. 2, 2010, pp. 133-140.',
        'Wong, Clara S., and Steven H. Wong. “A new look at trigger point injections.” Anesthesiology research and practice, vol. 2012, 2012. 10.1155, 492452.',
        'Botwin, K., et al. “Ultrasound-guided trigger point injections in the cervicothoracic musculature: a new and unreported technique.” Pain Physician, vol. 11, no. 6, 2008, pp. 885-889.',
        'Lavelle, E., et al. “Myofascial trigger points.” Med Clin North Am, vol. 91, no. 2, 2007, pp. 229-239.',
      ],
    },
    photos: [
      {
        caption: 'Paracervical Trigger Point Injection Needle Placement',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/trigger+point+injection+cervical+and+trapezius/6.5+TPI+Cervical+-+paracervical+needle+place.jpg',
      },
      {
        caption: 'Trapezius Trigger Point Injection Needle Placement',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/trigger+point+injection+cervical+and+trapezius/6.5+TPI+Cervical+-+trapezius+needle+place.jpg',
      },
      {
        caption: 'Common trapezius TPI sites',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/trigger+point+injection+cervical+and+trapezius/6.5+TPI+Cervical+-+trapezius+labeled.jpg',
      },
    ],
    videos: [
      {
        caption: '',
        url: 'https://advanced-analgesia.s3.amazonaws.com/headandneck/triggerpointCervicalandTrapezius/1.2.2.5.2.3.+Video+file+%E2%80%93+Trigger+point.mp4',
      },
    ],
  },

  {
    name: 'Knee Injection',
    url: 'knee-injection',
    illustration: '',
    materials: {
      title:
        'Materials (adapt to patient, clinician, and site-specific factors/availability)',
      content: {
        Probe: 'Optional; high-frequency linear probe, if US is used',
        Needle: "18-22 G, 1.5' long beveled/sharp tip needle",
        'Volume of Anesthetic':
          '10 mL; consider addition of 40 mg/1 mL of triamcinolone to LA',
        Other: '10 mL syringe. Skin prep and PPE',
      },
    },
    region: {
      title: 'Region of Analgesia',
      content:
        'Local anesthesia at injection site is used to anesthetize the skin, subdermal tissue, and the joint capsule, although additional anesthetic may be injected into the articular space for general knee joint analgesia if desired. There is no motor involvement.',
    },
    indications: {
      title: 'Indications',
      content: [
        'Diagnosis of joint infection or inflammatory process, such as gout',
        'Therapeutic intra-articular injections',
      ],
    },
    contraindications: [
      {
        title: '',
        content: [
          'Allergy to local anesthetic',
          'Overlying infection',
          'Known bacteremia (relative)',
          'Anticoagulation (relative)',
        ],
      },
    ],
    positioning: {
      title: 'Patient Positioning',
      content:
        'Supine or seated, with affected knee slightly flexed and positioned closest to operator; US should be on opposite side of patient, screen facing operator.',
    },
    procedure: {
      title: 'Procedure',
      content: [
        'Full sterile prep with sterile gloves, probe cover, and drape is recommended.',
        'Place linear transducer in prepatellar fossa in longitudinal direction, with probe marker positioned caudally.',
        'Identify patella, then slide probe cephalad to visualize patella, femur, quadriceps femoris tendon, and fat pad.',
        'An effusion will appear as an anechoic fluid collection deep to fat pad.',
        'For anesthetic injection, a lateral to medial in-plane technique is recommended.',
        'With linear probe in prepatellar fossa, rotate probe marker (clockwise) to patient’s right to obtain a transverse view of the prepatellar space.',
        'Inject a small amount of local anesthetic to create skin wheal just lateral to US transducer (the projected entry point for joint arthrocentesis), making sure to anesthetize down to the joint capsule.',
        'TUsing 10 mL (or larger) syringe attached to 18 G needle, enter the skin in plane at site of anesthesia, just lateral to the probe at a shallow angle.',
        'The needle should traverse between the iliotibial band (superiorly) and vastus lateralis (inferiorly) without risk for vascular puncture; advance directly under the probe for visualization of the needle.',
        'Gently aspirate synovial fluid, with needle tip being visualized within the fluid collection, to confirm entrance into the joint space.',
        'Inject anesthetic.',
      ],
    },
    pitfall: {
      title: 'Pearls and Pitfall',
      content: [
        'Evaluate with US prior to sterilizing your field.',
        'Iodine can be transferred into joint space and produce an inflammatory reaction. If used, wipe off in a sterile fashion prior to procedure, or use alternative skin prep.',
        'Ultrasound the non-affected suprapatellar space for comparison.',
        "Consider alternate approach with significant pain or inability to aspirate synovial fluid ('dry tap').",
        'The synovial membrane, articular capsule, and periosteum have extensive nerve fiber supply and are exceptionally sensitive.',
      ],
    },
    citations: {
      title: 'Citations',
      content: [
        'Alvarez, D., and P. Rockwell. “Trigger Points: diagnosis and management.” Am Fam Physician, vol. 65, no. 40, 2002, pp. 653-660.',
        'Hammi, Claudia, et al. “Trigger Point Injection.” StatPearls, StatPearls Publishing, Jan 2021, https://www.ncbi.nlm.nih.gov/books/NBK542196/#_NBK542196_pubdet_.',
        'Sikdar, S., and J. Shah. “Novel applications of ultrasound technology to visualize and characterize myofascial trigger points and surrounding soft tissue.” Archives of Physical Medicine and Rehabilitation, vol. 90, no. 11, 2009, pp. 1829-1838.',
        'Tsai, C., et al. “Remote effects of dry needling on the irritability of the myofascial trigger point in the upper trapezius muscle.” American Journal of Physical Medicine and Rehabilitation, vol. 89, no. 2, 2010, pp. 133-140.',
        'Wong, Clara S., and Steven H. Wong. “A new look at trigger point injections.” Anesthesiology research and practice, vol. 2012, 2012. 10.1155, 492452.',
        'Botwin, K., et al. “Ultrasound-guided trigger point injections in the cervicothoracic musculature: a new and unreported technique.” Pain Physician, vol. 11, no. 6, 2008, pp. 885-889.',
        'Lavelle, E., et al. “Myofascial trigger points.” Med Clin North Am, vol. 91, no. 2, 2007, pp. 229-239.',
      ],
    },
    photos: [
      {
        caption: 'Probe Placement',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/knee+injection/6.6+Knee+injection+-+probe+place.jpg',
      },
      {
        caption: 'US Anatomy Longitudinal View unlabeled',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/knee+injection/6.6+Knee+injection+-+sagittal+US+plain.jpg',
      },
      {
        caption: 'US Anatomy Longitudinal View labeled | 1 = Patella | 2 = Quadriceps Tendon | 3 = Femur',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/knee+injection/6.6+Knee+injection+-+sagittal+US+labeled.jpg',
      },
      {
        caption: 'US Anatomy Transerve View unlabeled',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/knee+injection/6.6+Knee+injection+-+transverse+US+plain.jpg',
      },
      {
        caption: 'US Anatomy Transerve View labeled | 1 = Patella | 2 = Quadriceps Tendon | 3 = Femur',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/knee+injection/6.6+Knee+injection+-+transverse+US+labeled.jpg',
      },
    ],
  },

  {
    name: 'Shoulder Injection',
    url: 'shoulder-injection',
    illustration: '',
    materials: {
      title:
        'Materials (adapt to patient, clinician, and site-specific factors/availability)',
      content: {
        Probe: 'Optional; high-frequency linear probe, if US is used',
        Needle:
          "18-22 G, long beveled/sharp tip needle or 22 G, 3.5' spinal needle",
        'Volume of Anesthetic':
          '10-20 mL; consider addition of 40 mg/1 mL of triamcinolone to LA',
        Other:
          '10-20 mL syringe. Full sterile prep and PPE. Optional: 1-2 mL 1% lidocaine in separate syringe for skin wheal',
      },
    },
    region: {
      title: 'Region of Analgesia',
      content:
        'Intra-articular glenohumeral joint injection provides anesthesia to the entire shoulder joint. There is no motor involvement.',
    },
    indications: {
      title: 'Indications',
      content: [
        'Diagnosis of joint infection or inflammatory process, such as gout',
        'Therapeutic intra-articular injections',
        'Anesthesia for closed shoulder reduction',
      ],
    },
    contraindications: [
      {
        title: '',
        content: [
          'Allergy to local anesthetic',
          'Overlying infection',
          'Known bacteremia (relative)',
          'Anticoagulation (relative)',
        ],
      },
    ],
    positioning: {
      title: 'Patient Positioning',
      content: 'Seated, facing away from operator',
    },
    procedure: {
      title: 'Procedure',
      content: [
        'Full sterile prep with sterile gloves, probe cover, and drape is recommended.',
        'Place US system in front of the patient. Palpate the patient’s scapular spine and to identify the basic surface anatomy.',
        'Using the low-frequency curvilinear or linear probe with probe marker toward patient’s left, align the probe parallel to bed. Place probe just inferior to scapular spine and slowly move laterally until humeral head, glenohumeral joint, and scapular spine are clearly visualized',
        'Using M-mode marker or needle guidance line, center the glenohumeral joint on screen',
        'Insert needle tip parallel to probe, just under scapular spine. While advancing needle, gently aspirate until synovial fluid is obtained. If performing intra-articular analgesia, inject preferred anesthetic at this point. Using 10 mL (or larger) syringe attached to 18 G needle, enter skin in plane at site of anesthesia, just lateral to probe, at a shallow angle.',
      ],
    },
    pitfall: {
      title: 'Pearls and Pitfall',
      content: [
        'Evaluate with US prior to sterilizing your field.',
        'Iodine can be transferred into joint space and produce an inflammatory reaction. If used, wipe off in a sterile fashion prior to procedure, or use alternative skin prep.',
        'Compare affected shoulder to unaffected shoulder to identify smaller effusions.',
        'An in-plane approach can also be used by advancing the needle from lateral to medial until you enter the glenohumeral joint.',
        'US can help identify dislocations and/or confirm successful joint reductions.',
      ],
    },
    citations: {
      title: 'Citations',
      content: [
        'Alvarez, D., and P. Rockwell. “Trigger Points: diagnosis and management.” Am Fam Physician, vol. 65, no. 40, 2002, pp. 653-660.',
        'Hammi, Claudia, et al. “Trigger Point Injection.” StatPearls, StatPearls Publishing, Jan 2021, https://www.ncbi.nlm.nih.gov/books/NBK542196/#_NBK542196_pubdet_.',
        'Sikdar, S., and J. Shah. “Novel applications of ultrasound technology to visualize and characterize myofascial trigger points and surrounding soft tissue.” Archives of Physical Medicine and Rehabilitation, vol. 90, no. 11, 2009, pp. 1829-1838.',
        'Tsai, C., et al. “Remote effects of dry needling on the irritability of the myofascial trigger point in the upper trapezius muscle.” American Journal of Physical Medicine and Rehabilitation, vol. 89, no. 2, 2010, pp. 133-140.',
        'Wong, Clara S., and Steven H. Wong. “A new look at trigger point injections.” Anesthesiology research and practice, vol. 2012, 2012. 10.1155, 492452.',
        'Botwin, K., et al. “Ultrasound-guided trigger point injections in the cervicothoracic musculature: a new and unreported technique.” Pain Physician, vol. 11, no. 6, 2008, pp. 885-889.',
        'Lavelle, E., et al. “Myofascial trigger points.” Med Clin North Am, vol. 91, no. 2, 2007, pp. 229-239.',
      ],
    },
    photos: [
      {
        caption: 'Probe Placement for Out of Plane Injection',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/shoulder+injection/6.7+Shoulder+probe+place.jpg',
      },
      {
        caption: 'Ultrasound anatomy unlabeled',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/shoulder+injection/6.7+Shoulder+US+plain.jpg',
      },
      {
        caption: 'Ultrasound Anatomy showing in-plane lateral needle approach Labeled | 1 = Deltoid | 2 = Glenoid | 3 = Infraspinatus Muscle | 4 = Humeral Head ',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/shoulder+injection/6.7+Shoulder+US+labeled.jpg',
      },
    ],
    videos: [
      {
        caption: '',
        url: 'https://advanced-analgesia.s3.amazonaws.com/headandneck/triggerpointCervicalandTrapezius/1.2.2.5.2.3.+Video+file+%E2%80%93+Trigger+point.mp4',
      },
    ],
  },

  {
    name: 'Hip Injection',
    url: 'hip-injection',
    illustration: '',
    materials: {
      title:
        'Materials (adapt to patient, clinician, and site-specific factors/availability)',
      content: {
        Probe: 'Curvilinear or high-frequency linear probe for shallower depth',
        Needle: '22 G, 3.5-5” spinal needle',
        'Volume of Anesthetic':
          '3-10 mL; consider addition of 40 mg/1 mL of triamcinolone to LA',
        Other: '10 mL syringe. Full sterile prep and PPE',
      },
    },
    region: {
      title: 'Region of Analgesia',
      content:
        'Local anesthesia at injection site anesthetizes skin and subdermal tissue; injection provides analgesia to the hip joint. There is no motor involvement.',
    },
    indications: {
      title: 'Indications',
      content: [
        'Diagnosis of joint infection or inflammatory process, such as gout',
        'Therapeutic intra-articular injections',
      ],
    },
    contraindications: [
      {
        title: '',
        content: [
          'Allergy to local anesthetic',
          'Overlying infection',
          'Known bacteremia (relative)',
          'Anticoagulation (relative)',
        ],
      },
    ],
    positioning: {
      title: 'Patient Positioning',
      content:
        'Supine, with knee slightly flexed and hip mildly internally rotated. US machine should be on opposite side, with screen facing operator.',
    },
    procedure: {
      title: 'Procedure',
      content: [
        'Full sterile prep with sterile gloves, probe cover, and drape is recommended.',
        'Palpate femoral artery and place transducer in a parallel plane to inguinal ligament so vessels are visualized, with probe marker toward patient’s right side.',
        'Rotate probe so probe marker points to umbilicus.',
        'Visualize the femoral head and neck, acetabulum, iliofemoral ligament and anterior synovial recess',
        'Sterilize field per local guidelines, sterile drape open at anterior affected hip, probe fitted with sterile sheath.',
        'Image affected hip as above, and inject 3-5 mL local anesthetic about 1 cm caudal to probe.',
        'Using an in-plane technique, enter skin at 30° angle, aiming at anterior recess',
        'Advance needle slowly until tip passes under ligament, then gently aspirate synovial fluid.',
      ],
    },
    pitfall: {
      title: 'Pearls and Pitfall',
      content: [
        'Evaluate with US prior to sterilizing your field.',
        'Iodine can be transferred into joint space and produce an inflammatory reaction. If used, wipe off in a sterile fashion prior to procedure, or use alternative skin prep.',
        'Evaluate the opposite side to compare the amount of fluid.',
        'Femoral vessels are medial and should be identified prior to arthrocentesis.',
        'Classic criterion for hip effusion in an adult is an anechoic or hypoechoic fluid stripe > 5 mm located under the iliofemoral ligament, or 2 mm of asymmetry as compared to the unaffected hip.',
      ],
    },
    citations: {
      title: 'Citations',
      content: [
        'Alvarez, D., and P. Rockwell. “Trigger Points: diagnosis and management.” Am Fam Physician, vol. 65, no. 40, 2002, pp. 653-660.',
        'Hammi, Claudia, et al. “Trigger Point Injection.” StatPearls, StatPearls Publishing, Jan 2021, https://www.ncbi.nlm.nih.gov/books/NBK542196/#_NBK542196_pubdet_.',
        'Sikdar, S., and J. Shah. “Novel applications of ultrasound technology to visualize and characterize myofascial trigger points and surrounding soft tissue.” Archives of Physical Medicine and Rehabilitation, vol. 90, no. 11, 2009, pp. 1829-1838.',
        'Tsai, C., et al. “Remote effects of dry needling on the irritability of the myofascial trigger point in the upper trapezius muscle.” American Journal of Physical Medicine and Rehabilitation, vol. 89, no. 2, 2010, pp. 133-140.',
        'Wong, Clara S., and Steven H. Wong. “A new look at trigger point injections.” Anesthesiology research and practice, vol. 2012, 2012. 10.1155, 492452.',
        'Botwin, K., et al. “Ultrasound-guided trigger point injections in the cervicothoracic musculature: a new and unreported technique.” Pain Physician, vol. 11, no. 6, 2008, pp. 885-889.',
        'Lavelle, E., et al. “Myofascial trigger points.” Med Clin North Am, vol. 91, no. 2, 2007, pp. 229-239.',
      ],
    },
    photos: [
      {
        caption: 'Probe Placement',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/hip+injection/6.8+Hip+injection+probe+place.jpg',
      },
      {
        caption: 'Ultrasound anatomy unlabeled',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/hip+injection/6.8+Hip+injection+US+plain.jpg',
      },
      {
        caption: 'Ultrasound Anatomy Labeled | 1 = Femur | 2 = Synovial Space',
        url: 'https://advanced-analgesia.s3.amazonaws.com/othermsk/hip+injection/6.8+Hip+injection+US+labeled.jpg',
      },
    ],
    videos: [
      {
        caption: '',
        url: 'https://advanced-analgesia.s3.amazonaws.com/headandneck/triggerpointCervicalandTrapezius/1.2.2.5.2.3.+Video+file+%E2%80%93+Trigger+point.mp4',
      },
    ],
  },
];

export default otherMskDB;
