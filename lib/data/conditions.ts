export interface Condition {
  slug: string;
  name: string;
  shortDescription: string;
  fullContent?: {
    intro: string;
    whatItIs: string;
    howWeTreat: string;
    symptoms?: string[];
    treatments?: string[];
  };
}

export const conditions: Condition[] = [
  {
    slug: "back-pain-management",
    name: "Back Pain",
    shortDescription:
      "From herniated discs to chronic lower back pain, we offer targeted treatments to restore your mobility and comfort.",
    fullContent: {
      intro:
        "Back pain is one of the most common reasons people seek medical care — and one of the most undertreated. At Global Pain Management, we have specialized in diagnosing and treating back pain since 2013, helping patients in Pasadena, Kent Island, Columbia, and across Anne Arundel County get back to living their lives.",
      whatItIs:
        "Back pain can range from a dull, constant ache to a sudden, sharp sensation that leaves you unable to move. It may be acute (lasting a few days to weeks) or chronic (persisting for three months or more). Common causes include herniated or bulging discs, degenerative disc disease, spinal stenosis, facet joint arthritis, and muscle or ligament strains. The lumbar spine (lower back) is the most frequently affected region, but thoracic and cervical (mid- and upper-back) pain are also common. Left untreated, chronic back pain can significantly impair your daily function, sleep, and overall quality of life.",
      howWeTreat:
        "Our approach begins with a thorough evaluation — reviewing your history, conducting a physical exam, and in many cases reviewing imaging. We then build an individualized treatment plan that may include lumbar epidural steroid injections to reduce inflammation around compressed nerve roots, medial branch blocks to diagnose and treat facet joint pain, radiofrequency ablation for longer-lasting facet pain relief, trigger point injections for muscle-related pain, medication management, and referrals for physical therapy when appropriate. Our goal is to reduce your pain, restore your function, and avoid unnecessary surgery wherever possible.",
      symptoms: [
        "Aching or stiffness along the spine",
        "Sharp, localized pain after lifting or sudden movement",
        "Pain that radiates from the back into the buttock or leg (sciatica)",
        "Inability to stand straight without pain",
        "Muscle spasms in the lower back",
        "Decreased range of motion",
      ],
      treatments: [
        "Lumbar epidural steroid injections",
        "Medial branch blocks",
        "Radiofrequency ablation",
        "Trigger point injections",
        "Medication management",
        "Physical therapy coordination",
      ],
    },
  },
  {
    slug: "pain-management",
    name: "Chronic Pain Management",
    shortDescription:
      "Comprehensive, board-certified pain management for complex and long-term pain conditions — individualized to your life.",
    fullContent: {
      intro:
        "Chronic pain affects millions of Americans and can profoundly disrupt work, relationships, sleep, and mental health. At Global Pain Management, we take a holistic, evidence-based approach to diagnosing and treating chronic pain — combining interventional procedures, medication management, and supportive therapies to help you regain control of your life.",
      whatItIs:
        "Chronic pain is broadly defined as pain lasting longer than three months. Unlike acute pain, which serves as a warning signal, chronic pain can persist long after the original injury or illness has healed — or may have no identifiable cause at all. It can affect any part of the body and varies greatly in intensity. Common chronic pain conditions we treat include back and neck pain, arthritis, neuropathy, headaches and migraines, fibromyalgia, cancer pain, and pain following surgery or injury. Chronic pain is a complex medical condition that deserves the same level of specialist attention as any other serious diagnosis.",
      howWeTreat:
        "We start every patient relationship with a comprehensive evaluation to understand the nature, severity, and impact of your pain. From there, we build a customized treatment plan that may evolve over time as we learn what works best for you. Our interventional options — including nerve blocks, epidural injections, and radiofrequency ablation — can provide significant and lasting relief. When appropriate, we combine these with carefully managed medication protocols, TENS therapy, acupuncture, biofeedback, and coordination with physical therapists. We also offer telemedicine follow-up visits for established patients, making ongoing care more convenient.",
      symptoms: [
        "Pain lasting more than three months",
        "Pain that disrupts sleep, work, or daily activities",
        "Pain unresponsive to over-the-counter treatments",
        "Fatigue, mood changes, or depression related to pain",
        "Pain that has spread beyond the original injury site",
      ],
      treatments: [
        "Comprehensive pain evaluation",
        "Interventional injections and nerve blocks",
        "Radiofrequency ablation",
        "Medication management",
        "TENS therapy",
        "Acupuncture and biofeedback",
        "Telemedicine follow-up",
      ],
    },
  },
  {
    slug: "workers-compensation-pain-management",
    name: "Workers' Compensation Injuries",
    shortDescription:
      "Experienced workers' comp pain management with proper documentation and coordination for injured workers in Maryland.",
    fullContent: {
      intro:
        "If you were injured at work, getting the right medical care — documented correctly — is essential for your recovery and your claim. Global Pain Management has extensive experience treating workers' compensation patients throughout Maryland, providing expert pain management with the thorough documentation your case requires.",
      whatItIs:
        "Workers' compensation injuries are those that occur in the course of employment. They range from acute traumas — like a fall, a lifting injury, or repetitive stress — to occupational illnesses that develop over time. Common work-related pain conditions include back and spinal injuries, shoulder and neck strains, carpal tunnel syndrome, knee injuries, and chronic pain resulting from cumulative trauma. Managing workers' comp cases requires not only excellent clinical care but also careful, accurate documentation that supports your claim and communicates your functional limitations to your employer and insurer.",
      howWeTreat:
        "We accept workers' compensation cases and work directly with adjusters and case managers to streamline your care. Your treatment plan will be based on your specific injury and functional goals and may include interventional injections, medication management, TENS therapy, and referrals for physical therapy or other specialist services. We provide clear, thorough documentation of your diagnoses, treatment responses, and work restrictions at every stage. Our goal is to help you recover as fully as possible while navigating the workers' comp process with as little stress as possible.",
      symptoms: [
        "Acute pain following a workplace injury",
        "Chronic pain from repetitive-use injuries",
        "Radiating pain from spinal or nerve injuries",
        "Loss of strength or range of motion",
        "Pain preventing return to work",
      ],
      treatments: [
        "Workers' compensation case management coordination",
        "Interventional pain injections",
        "Functional capacity documentation",
        "Medication management",
        "Physical therapy referral and coordination",
        "TENS therapy",
      ],
    },
  },
  {
    slug: "auto-accident-injury-pain-management",
    name: "Auto Accident Injuries",
    shortDescription:
      "Specialized treatment for pain resulting from motor vehicle accidents, including whiplash, back injuries, and nerve pain.",
    fullContent: {
      intro:
        "Motor vehicle accidents can cause serious musculoskeletal injuries that may not fully manifest until days after the collision. At Global Pain Management, we specialize in evaluating and treating auto accident injuries with the clinical expertise and documentation your personal injury case may require.",
      whatItIs:
        "Auto accident injuries frequently involve the cervical spine (neck), thoracic spine, and lumbar spine, as well as soft tissue structures, nerves, and joints. Whiplash is among the most common, resulting from the rapid back-and-forth motion of the neck during impact. Other common injuries include herniated discs, facet joint injuries, nerve compression, shoulder injuries, and traumatic headaches. The adrenaline released during an accident can mask pain initially — which is why it's important to be evaluated promptly even if you feel okay at the scene.",
      howWeTreat:
        "We conduct a thorough post-accident evaluation to identify all injury sites and create a comprehensive treatment plan. Our interventional options for auto injuries include cervical and lumbar epidural steroid injections, medial branch blocks, trigger point injections, and radiofrequency ablation for longer-term relief. We coordinate care with your primary care provider, physical therapists, and — when needed — your attorney. All clinical findings and treatment responses are documented in a manner consistent with personal injury case standards in Maryland.",
      symptoms: [
        "Neck pain or stiffness following an accident",
        "Headaches that started after the collision",
        "Back pain, especially in the lower back",
        "Radiating pain, numbness, or tingling into the arms or legs",
        "Shoulder or jaw pain",
        "Difficulty concentrating or sleep disruption",
      ],
      treatments: [
        "Post-accident pain evaluation",
        "Cervical and lumbar injections",
        "Medial branch blocks",
        "Radiofrequency ablation",
        "Trigger point injections",
        "Medication management",
        "Personal injury documentation",
      ],
    },
  },
  {
    slug: "neck-and-shoulder-pain",
    name: "Neck & Shoulder Pain",
    shortDescription:
      "Expert evaluation and minimally invasive treatment for neck stiffness, cervical disc problems, and shoulder pain.",
    fullContent: {
      intro:
        "Neck and shoulder pain are among the most common musculoskeletal complaints we treat at Global Pain Management. Whether your pain stems from a cervical disc problem, a degenerative joint condition, or a soft-tissue injury, our board-certified specialists in Pasadena, Columbia, and across Maryland use targeted, minimally invasive approaches to relieve your pain and restore your movement.",
      whatItIs:
        "The cervical spine consists of seven vertebrae that support the head and protect the spinal cord while allowing a wide range of motion — making it inherently vulnerable to injury and degeneration. Neck pain most commonly arises from cervical disc herniation, where a disc bulges or ruptures and places pressure on nearby nerve roots; cervical facet joint arthropathy, where the small stabilizing joints of the spine become inflamed and arthritic; or cervical stenosis, a narrowing of the spinal canal that compresses the spinal cord or nerve roots. Shoulder pain often overlaps with cervical conditions and can also originate from rotator cuff tears, shoulder impingement syndrome, acromioclavicular joint arthritis, or referred pain from the neck. Postural strain from prolonged desk work, poor ergonomics, and prior trauma — including whiplash — are common contributing factors. Without appropriate treatment, cervical and shoulder pain can lead to progressive neurological symptoms, chronic headaches, and significant limitations in daily life.",
      howWeTreat:
        "Treatment begins with a thorough clinical evaluation including history, physical examination, and review of any available imaging. We then design an individualized plan that may include cervical epidural steroid injections to reduce inflammation around compressed nerve roots, cervical medial branch blocks to pinpoint facet joint pain, and radiofrequency ablation for longer-lasting facet pain relief. Trigger point injections address myofascial components of neck and shoulder pain, while intra-articular shoulder joint injections can reduce inflammation within the shoulder capsule. We combine these interventions with medication management and physical therapy coordination to help restore full function and prevent recurrence.",
      symptoms: [
        "Neck stiffness or reduced range of motion",
        "Pain radiating from the neck into the shoulder, arm, or hand",
        "Numbness or tingling in the fingers",
        "Headaches originating at the base of the skull",
        "Muscle weakness in the arm or grip",
        "Shoulder aching, clicking, or pain with overhead movement",
      ],
      treatments: [
        "Cervical epidural steroid injections",
        "Cervical medial branch blocks",
        "Radiofrequency ablation",
        "Trigger point injections",
        "Intra-articular shoulder joint injections",
        "Medication management",
        "Physical therapy coordination",
      ],
    },
  },
  {
    slug: "headaches-and-migraines",
    name: "Headaches & Migraines",
    shortDescription:
      "Chronic headache and migraine management including trigger point injections and medication protocols.",
    fullContent: {
      intro:
        "Chronic headaches and migraines are far more than inconveniences — they are debilitating neurological events that can strip away your ability to work, care for your family, and enjoy daily life. At Global Pain Management, we offer specialized, evidence-based treatment for patients across Maryland who suffer from frequent or severe headaches that have not responded adequately to primary care management.",
      whatItIs:
        "Headaches are broadly categorized as primary (arising without an underlying structural cause) or secondary (caused by another condition). The most common primary headache disorders are migraine, tension-type headache, and cluster headache. Migraines affect roughly one in seven adults and are characterized by moderate to severe throbbing head pain — often unilateral — that is worsened by physical activity and associated with nausea, light sensitivity, and sound sensitivity. Up to one-third of migraine sufferers experience an aura, which may include visual disturbances, tingling, or temporary speech difficulty. Cervicogenic headaches, a commonly overlooked secondary type, originate from structures in the cervical spine — particularly the upper facet joints and occipital nerves — and can mimic migraines closely. Tension-type headaches produce a bilateral, pressure-like sensation and are frequently driven by myofascial trigger points in the neck, scalp, and shoulder musculature. Chronic daily headache, defined as headache occurring fifteen or more days per month, often involves a combination of headache types and may include medication-overuse headache as a complicating factor.",
      howWeTreat:
        "Our approach integrates interventional procedures with carefully tailored medication management. Greater occipital nerve blocks and trigger point injections targeting the neck, scalp, and temporalis muscles can interrupt the pain cycle and provide both diagnostic and therapeutic benefit. For cervicogenic headaches, cervical medial branch blocks and radiofrequency ablation address the underlying facet joint source. Sphenopalatine ganglion blocks offer rapid relief for cluster headaches and certain migraines. Preventive medication protocols — including anticonvulsants, beta-blockers, and CGRP-pathway therapies — are prescribed when headache frequency warrants prophylaxis. We also counsel patients on trigger identification and lifestyle modifications that can meaningfully reduce headache burden.",
      symptoms: [
        "Moderate to severe throbbing or pulsating head pain",
        "Headache on one or both sides of the head",
        "Nausea or vomiting during a headache episode",
        "Sensitivity to light, sound, or smell",
        "Visual aura or other neurological symptoms before headache onset",
        "Headaches triggered by stress, hormonal changes, or certain foods",
        "Neck pain or stiffness associated with headache",
      ],
      treatments: [
        "Greater occipital nerve blocks",
        "Trigger point injections (scalp, cervical, temporalis)",
        "Sphenopalatine ganglion blocks",
        "Cervical medial branch blocks and radiofrequency ablation",
        "Preventive medication management",
        "Acute rescue medication protocols",
        "Trigger identification and lifestyle counseling",
      ],
    },
  },
  {
    slug: "arthritis-and-osteoarthritis",
    name: "Arthritis & Osteoarthritis",
    shortDescription:
      "Joint pain relief and anti-inflammatory treatments for arthritis affecting the spine, knees, hips, and hands.",
    fullContent: {
      intro:
        "Arthritis is one of the leading causes of chronic pain and disability in the United States, affecting more than 54 million adults. At Global Pain Management, we help patients throughout Maryland live more active, comfortable lives by targeting the specific joints responsible for their pain with interventional treatments that go beyond what oral medications alone can offer.",
      whatItIs:
        "Arthritis is an umbrella term for more than 100 conditions involving joint inflammation, but the two most common forms seen in a pain management practice are osteoarthritis (OA) and inflammatory arthritis (such as rheumatoid arthritis). Osteoarthritis is a degenerative joint disease caused by the progressive breakdown of articular cartilage — the smooth cushioning tissue that lines the ends of bones within a joint. As cartilage erodes, bone rubs against bone, producing pain, stiffness, and eventual deformity. OA most commonly affects the knees, hips, hands, and spine, where it manifests as facet joint arthropathy or sacroiliac joint degeneration. Risk factors include age, obesity, prior joint injury, and repetitive mechanical stress. Inflammatory arthritis involves immune-mediated attack on joint tissue and is characterized by warmth, swelling, and systemic symptoms in addition to pain. Both forms can be progressive, and effective management requires an individualized approach that addresses the type, severity, and functional impact of the arthritis.",
      howWeTreat:
        "Our interventional pain management approach to arthritis focuses on providing meaningful relief at the joint level while supporting overall function. Intra-articular corticosteroid injections reduce joint inflammation and are highly effective for acute flares in the knee, hip, shoulder, and sacroiliac joints. Viscosupplementation with hyaluronic acid can restore lubrication to the osteoarthritic knee and provide extended relief between flares. For spinal arthritis affecting the facet joints, medial branch blocks confirm the diagnosis and radiofrequency ablation of the medial branch nerves can provide six to eighteen months of significant pain relief. Sacroiliac joint injections and radiofrequency ablation address SI joint arthritis, a frequently missed source of low back and buttock pain. We complement these procedures with medication management and coordinate with rheumatologists and orthopedic surgeons when indicated.",
      symptoms: [
        "Aching joint pain that worsens with activity and improves with rest",
        "Morning stiffness lasting more than thirty minutes",
        "Swelling, warmth, or tenderness around a joint",
        "Crepitus (grinding or clicking sensation) during joint movement",
        "Decreased range of motion and joint flexibility",
        "Joint deformity in advanced stages",
        "Low back or buttock pain from spinal or sacroiliac joint arthritis",
      ],
      treatments: [
        "Intra-articular corticosteroid injections",
        "Viscosupplementation (hyaluronic acid) for knee osteoarthritis",
        "Medial branch blocks and radiofrequency ablation",
        "Sacroiliac joint injections and RFA",
        "Medication management",
        "Physical therapy and activity modification coordination",
      ],
    },
  },
  {
    slug: "sciatica",
    name: "Sciatica & Lower Body Pain",
    shortDescription:
      "Targeted nerve block and injection therapy for sciatic nerve pain radiating from the low back into the legs.",
    fullContent: {
      intro:
        "Sciatica is one of the most recognizable and often most disabling forms of nerve pain — the sharp, burning, or electric sensation that travels from the low back through the buttock and down the leg. At Global Pain Management, our specialists have years of experience diagnosing the exact source of sciatic pain and delivering precise, minimally invasive treatments that bring lasting relief to patients throughout Maryland.",
      whatItIs:
        "The sciatic nerve is the largest nerve in the human body, formed by nerve roots exiting the lumbar and sacral spine (L4 through S3) and traveling through the pelvis and down each leg to the foot. Sciatica is not a diagnosis in itself but a symptom complex caused by irritation or compression of one or more of these nerve roots. The most common cause is a herniated lumbar disc, in which the inner gel of a spinal disc ruptures and presses directly on a nerve root, triggering the characteristic radiating pain. Lumbar spinal stenosis — narrowing of the spinal canal due to arthritic overgrowth of bone spurs and ligaments — is a leading cause in older adults and may produce leg pain and weakness that worsens with walking (neurogenic claudication). Piriformis syndrome, in which the piriformis muscle in the buttock compresses the sciatic nerve, can mimic disc-related sciatica and is frequently underdiagnosed. Degenerative disc disease and spondylolisthesis (slippage of one vertebra over another) are additional structural causes. Without treatment, chronic sciatic compression can cause progressive neurological deficits including persistent leg weakness, foot drop, and bowel or bladder dysfunction.",
      howWeTreat:
        "Accurate diagnosis is the foundation of effective sciatica treatment. We use targeted physical examination combined with imaging review to identify the exact level and mechanism of nerve compression. Lumbar transforaminal epidural steroid injections deliver anti-inflammatory medication directly to the affected nerve root, often providing substantial relief within days. Interlaminar epidural injections are another option when multiple levels are involved. For piriformis syndrome, ultrasound- or fluoroscopy-guided piriformis muscle injections relax the compressing muscle and decompress the nerve. When pain is driven by facet or sacroiliac joint pathology, we address those sources with targeted injections and, if appropriate, radiofrequency ablation. Medication management supports the treatment plan, and we coordinate physical therapy for core stabilization and nerve mobilization exercises.",
      symptoms: [
        "Sharp, burning, or electric pain radiating from the buttock into the leg",
        "Pain that extends below the knee, often into the calf or foot",
        "Numbness or tingling along the back of the thigh and lower leg",
        "Muscle weakness in the hip, thigh, or foot",
        "Pain that worsens with sitting, coughing, or bearing down",
        "Leg pain that is worse than the associated back pain",
        "Difficulty walking extended distances due to leg heaviness or cramping",
      ],
      treatments: [
        "Lumbar transforaminal epidural steroid injections",
        "Interlaminar epidural steroid injections",
        "Piriformis muscle injections",
        "Selective nerve root blocks",
        "Sacroiliac joint injections",
        "Medication management",
        "Physical therapy coordination",
      ],
    },
  },
  {
    slug: "joint-pain",
    name: "Joint Pain",
    shortDescription:
      "Comprehensive care for knee, wrist, foot, and ankle pain using both interventional and conservative therapies.",
    fullContent: {
      intro:
        "Joint pain — whether in the knee, hip, ankle, wrist, or foot — can make even the simplest movements feel difficult and can profoundly affect your independence and quality of life. At Global Pain Management, we evaluate joint pain comprehensively and offer a range of interventional options designed to reduce inflammation, restore function, and delay or avoid surgical intervention.",
      whatItIs:
        "Joints are the points where two or more bones meet, held together by ligaments and surrounded by a synovial capsule that produces lubricating fluid. Joint pain can arise from multiple overlapping mechanisms: mechanical wear and cartilage degradation (osteoarthritis), inflammatory disease (rheumatoid or psoriatic arthritis), acute injury (ligament tears, meniscal damage), bursitis, tendinopathy, gout or pseudogout, or referred pain from adjacent spinal levels. The knee is the most frequently affected joint in pain management practice, followed by the hip, shoulder, ankle, and smaller joints of the hand and foot. Obesity, prior injury, occupational demands, and genetic predisposition all raise the risk of developing chronic joint pain. Joint pain is often compounded by surrounding muscle weakness and guarding, which further limits range of motion and accelerates joint deterioration. A thorough evaluation is essential to differentiate the primary cause and identify any correctable contributing factors.",
      howWeTreat:
        "Our treatment approach to joint pain is guided by the specific joint affected, the underlying cause, and the patient's functional goals. Intra-articular corticosteroid injections are a first-line interventional option for inflamed joints throughout the body, providing targeted anti-inflammatory relief. For the knee, viscosupplementation (hyaluronic acid injections) can improve joint lubrication and reduce pain in osteoarthritic joints with cartilage loss. Genicular nerve blocks and radiofrequency ablation offer a longer-lasting option for knee pain by interrupting the sensory nerves supplying the knee joint capsule, with research showing pain relief lasting twelve months or more in appropriate candidates. Hip joint injections and greater trochanteric bursa injections address hip-region pain. Ankle and foot joint injections, guided by ultrasound or fluoroscopy, provide targeted relief for subtalar, tibiotalar, and metatarsophalangeal joint pain. All interventional procedures are coordinated with physical therapy to maximize functional recovery.",
      symptoms: [
        "Aching or throbbing pain localized to a specific joint",
        "Swelling, warmth, or redness over the joint",
        "Stiffness that is worst in the morning or after prolonged rest",
        "Reduced range of motion and difficulty with weight-bearing",
        "Locking, catching, or giving way of the joint",
        "Pain that disrupts sleep or limits walking",
      ],
      treatments: [
        "Intra-articular corticosteroid injections",
        "Viscosupplementation (knee)",
        "Genicular nerve blocks and radiofrequency ablation",
        "Hip joint and greater trochanteric bursa injections",
        "Ankle and foot joint injections",
        "Medication management",
        "Physical therapy coordination",
      ],
    },
  },
  {
    slug: "muscle-pain",
    name: "Muscle Pain",
    shortDescription:
      "Trigger point injections and targeted therapy for myofascial pain, muscle spasms, and soft tissue injuries.",
    fullContent: {
      intro:
        "Muscle pain and myofascial conditions are among the most prevalent yet underrecognized sources of chronic pain. At Global Pain Management, we specialize in identifying the trigger points and muscular imbalances driving your pain and delivering treatments that provide rapid, meaningful relief — helping patients across Maryland return to the activities they value.",
      whatItIs:
        "Myofascial pain syndrome (MPS) is a chronic pain disorder characterized by the presence of myofascial trigger points — hyperirritable, taut bands within a muscle that are painful on compression and produce a predictable pattern of referred pain to distant sites. Common areas affected include the trapezius, rhomboids, levator scapulae, piriformis, quadratus lumborum, and thoracic paraspinal muscles. Trigger points develop in response to acute muscle overload, repetitive low-grade strain, poor posture, psychological stress, or following injury or surgery. Their referred pain patterns can mimic nerve root compression, joint pathology, or even visceral disease, making diagnosis challenging without specialized examination. Beyond MPS, acute muscle pain from spasm, strain, and overuse is extraordinarily common, particularly in the low back, neck, and shoulder girdle. Fibromyalgia — a central sensitization syndrome characterized by widespread musculoskeletal pain, fatigue, sleep disruption, and cognitive symptoms — shares features with myofascial pain but requires a distinct management approach. Muscle pain left untreated tends to perpetuate itself through a cycle of guarding, weakness, and further trigger point formation.",
      howWeTreat:
        "Trigger point injections (TPIs) are a highly effective intervention for MPS, delivering a small volume of local anesthetic directly into the trigger point to inactivate it, interrupt the pain cycle, and restore normal muscle function. We identify trigger points through careful palpation and patient-reported pain patterns, then inject the most clinically significant points in a single, well-tolerated session. Dry needling — the insertion of a thin needle into a trigger point without injectate — is an alternative technique when indicated. TENS (transcutaneous electrical nerve stimulation) therapy provides additional non-pharmacological pain relief between visits. Medication management with muscle relaxants, anti-inflammatories, low-dose tricyclics, or other appropriate agents addresses the central and peripheral components of muscle pain. We coordinate with physical therapists to address the postural deficits and movement dysfunctions that perpetuate myofascial pain.",
      symptoms: [
        "Deep, aching muscle pain in a specific region",
        "Palpable knots or taut bands within muscles",
        "Referred pain to distant areas when a trigger point is pressed",
        "Muscle stiffness or reduced range of motion",
        "Pain that worsens with sustained posture or repetitive activity",
        "Fatigue, sleep disruption, or mood changes associated with pain",
        "Headaches originating from neck and shoulder muscle tension",
      ],
      treatments: [
        "Trigger point injections",
        "Dry needling",
        "TENS therapy",
        "Medication management",
        "Physical therapy and postural rehabilitation coordination",
        "Ergonomic and activity modification counseling",
      ],
    },
  },
  {
    slug: "facial-pain",
    name: "Facial Pain",
    shortDescription:
      "Evaluation and treatment for trigeminal neuralgia, TMJ-related pain, and other facial pain syndromes.",
    fullContent: {
      intro:
        "Facial pain is among the most severe and distressing pain conditions a person can experience. Many patients suffer for years before receiving an accurate diagnosis and effective treatment. At Global Pain Management, we have expertise in the spectrum of facial pain disorders and offer targeted interventional therapies that can dramatically reduce the frequency and severity of painful episodes.",
      whatItIs:
        "Facial pain encompasses a group of distinct but sometimes overlapping conditions involving the face, jaw, teeth, and skull base. Trigeminal neuralgia (TN) is the most severe, characterized by sudden, brief, electric shock-like pain triggered by light touch — such as eating, speaking, or brushing teeth — and affecting one or more branches of the trigeminal nerve (cranial nerve V). TN is most commonly caused by vascular compression of the trigeminal nerve root near the brainstem. Atypical trigeminal neuralgia and persistent idiopathic facial pain produce a more constant, burning quality of pain without a clear structural cause. Temporomandibular joint (TMJ) disorders produce pain in the jaw joint and surrounding muscles and are associated with clicking, locking, bruxism, and referred pain to the ear and temple. Post-herpetic neuralgia (PHN) following herpes zoster reactivation in the trigeminal distribution causes chronic burning, stabbing facial pain that can persist for years. Paroxysmal hemicrania, SUNCT syndrome, and other rare trigeminal autonomic cephalalgias round out the spectrum. Accurate classification of the facial pain syndrome is essential because each condition responds to distinct pharmacological and interventional treatments.",
      howWeTreat:
        "Pharmacological management is the cornerstone of trigeminal neuralgia treatment, with carbamazepine and oxcarbazepine as first-line anticonvulsants; gabapentinoids, tricyclic antidepressants, and baclofen are alternatives for patients who cannot tolerate first-line agents. When medications are insufficient or produce intolerable side effects, interventional procedures offer important options. Peripheral trigeminal nerve blocks targeting the supraorbital, infraorbital, or mental nerve branches provide both diagnostic clarity and therapeutic relief. Sphenopalatine ganglion (SPG) blocks — delivered intranasally with a catheter or via a lateral approach — are highly effective for cluster headaches, paroxysmal hemicrania, and some facial pain syndromes. Occipital nerve blocks address pain at the skull base and are useful for cervicogenic headaches that radiate to the face. For TMJ-related pain, intra-articular injections and trigger point injections of the masseter and temporalis muscles reduce joint inflammation and myofascial tension. We collaborate with oral and maxillofacial surgeons and neurologists when a multidisciplinary approach is warranted.",
      symptoms: [
        "Sudden, severe electric shock-like pain in the face, cheek, or jaw",
        "Pain triggered by touch, chewing, speaking, or cold air",
        "Chronic burning or aching pain on one side of the face",
        "Jaw pain, clicking, or limited mouth opening",
        "Pain near the ear, temple, or behind the eye",
        "Facial pain following a shingles outbreak",
        "Facial pain episodes accompanied by eye tearing or nasal congestion",
      ],
      treatments: [
        "Peripheral trigeminal nerve blocks",
        "Sphenopalatine ganglion (SPG) blocks",
        "Occipital nerve blocks",
        "Intra-articular TMJ injections",
        "Masseter and temporalis trigger point injections",
        "Anticonvulsant and analgesic medication management",
        "Multidisciplinary coordination with neurology and oral surgery",
      ],
    },
  },
  {
    slug: "cancer-pain",
    name: "Cancer Pain",
    shortDescription:
      "Compassionate, specialized pain management for cancer patients seeking comfort and quality of life.",
    fullContent: {
      intro:
        "Cancer pain deserves the same level of expert, specialized attention as any other complex pain condition — and effective pain control is a fundamental component of quality oncologic care. At Global Pain Management, we partner with oncologists and palliative care teams throughout Maryland to provide compassionate, evidence-based pain management that helps cancer patients live with greater comfort and dignity.",
      whatItIs:
        "Pain is one of the most common and feared symptoms of cancer, affecting up to seventy percent of patients with advanced disease. Cancer pain is rarely a single, uniform experience — it is a dynamic, multidimensional condition driven by several distinct mechanisms operating simultaneously. Nociceptive pain arises when the tumor directly invades or compresses surrounding tissues, organs, or bones. Bone metastases produce a particularly severe form of pain driven by osteolysis, periosteal stretch, and local inflammatory mediators; they are among the most common sources of cancer-related pain in patients with breast, prostate, and lung malignancies. Neuropathic pain occurs when cancer or its treatment damages peripheral or central nervous system structures, producing burning, stabbing, or electric pain with associated numbness and hypersensitivity. Chemotherapy-induced peripheral neuropathy (CIPN) is a common treatment-related cause of neuropathic pain in the hands and feet. Procedural pain from biopsies, port placements, and surgical interventions adds to the total pain burden. The concept of 'total pain' — recognizing that a patient's pain experience is amplified by psychological distress, existential suffering, and social isolation — underscores the importance of compassionate, whole-person care.",
      howWeTreat:
        "Our approach to cancer pain is comprehensive and individualized, guided by the WHO analgesic ladder and adapted to each patient's cancer type, stage, functional status, and personal goals. Pharmacological management with opioid and non-opioid analgesics, adjuvant medications (anticonvulsants, antidepressants, corticosteroids), and bisphosphonates for bone pain forms the foundation of care. When systemic medications alone are insufficient or produce unacceptable side effects, interventional procedures can dramatically improve comfort. Celiac plexus neurolysis is highly effective for upper abdominal pain from pancreatic cancer or other retroperitoneal malignancies. Superior hypogastric plexus blocks address pelvic cancer pain. Intercostal and paravertebral nerve blocks relieve thoracic wall pain from rib metastases or post-thoracotomy pain syndrome. Intrathecal drug delivery (spinal pump) systems allow high doses of opioid and non-opioid analgesics to be delivered directly to the spinal cord at a fraction of the systemic dose, maximizing pain relief while minimizing side effects. We coordinate closely with the patient's oncologist and palliative care team to ensure seamless, integrated care throughout the treatment journey.",
      symptoms: [
        "Persistent aching, pressure, or gnawing pain at the tumor site",
        "Severe bone pain, especially with movement or weight-bearing",
        "Burning, stabbing, or electric neuropathic pain",
        "Numbness or hypersensitivity in the hands and feet (CIPN)",
        "Episodic breakthrough pain superimposed on baseline pain",
        "Pain that disrupts sleep, appetite, or mood",
        "Abdominal or pelvic pain from visceral tumor involvement",
      ],
      treatments: [
        "Comprehensive opioid and non-opioid medication management",
        "Celiac plexus neurolysis for abdominal cancer pain",
        "Superior hypogastric plexus blocks for pelvic pain",
        "Intercostal and paravertebral nerve blocks",
        "Intrathecal drug delivery (spinal pump) systems",
        "Adjuvant analgesic protocols (anticonvulsants, corticosteroids)",
        "Palliative care and oncology co-management",
      ],
    },
  },
];
