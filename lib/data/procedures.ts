export interface Procedure {
  slug: string;
  name: string;
  category: "interventional" | "medication" | "therapy" | "alternative";
  shortDescription: string;
  fullDescription?: string;
  benefits?: string[];
  whatToExpect?: string;
  parentSlug?: string; // for procedures under a parent category
}

export const procedures: Procedure[] = [
  {
    slug: "interventional-injections",
    name: "Interventional Injections",
    category: "interventional",
    shortDescription:
      "Minimally invasive injection-based treatments that deliver anti-inflammatory medication directly to the source of pain.",
    fullDescription:
      "Interventional injections are a cornerstone of modern pain management. Rather than relying solely on oral medications that affect the entire body, these targeted procedures deliver medication — most commonly corticosteroids or local anesthetics — directly to the structures causing pain. This precision approach can provide significant relief with fewer systemic side effects. Our board-certified pain physician performs all procedures using established techniques and appropriate monitoring to ensure your safety and comfort.",
    benefits: [
      "Targeted relief at the pain source",
      "Minimally invasive — most procedures take under 30 minutes",
      "Can provide relief lasting weeks to months",
      "May reduce or eliminate the need for oral pain medications",
      "Often enables participation in physical therapy",
    ],
    whatToExpect:
      "Most injection procedures are performed in our office. You will be positioned comfortably and the target area will be cleaned and numbed. The injection is administered with precision guidance as appropriate for the procedure. You may feel pressure or a brief sting. Afterward, you will rest briefly before being discharged. Most patients can return to light activities the same day.",
  },
  {
    slug: "trigger-point-injections",
    name: "Trigger Point Injections (TPI)",
    category: "interventional",
    parentSlug: "interventional-injections",
    shortDescription:
      "Injections that deactivate tight, painful muscle knots (trigger points) to relieve localized and referred muscle pain.",
    fullDescription:
      "Trigger points are hyperirritable knots within muscle tissue that cause local and referred pain. They can develop after injury, overuse, or chronic tension and are common in the neck, shoulders, back, and hips. Trigger point injections deliver a small amount of local anesthetic — sometimes with an anti-inflammatory agent — directly into the trigger point, causing the muscle to relax and breaking the cycle of pain. Relief can be felt quickly, and many patients experience significant improvement after one or a series of injections.",
    benefits: [
      "Fast-acting relief for muscle pain",
      "Effective for myofascial pain syndrome",
      "Brief procedure with minimal downtime",
      "Can treat multiple sites in a single visit",
    ],
    whatToExpect:
      "The procedure takes just a few minutes. The provider identifies the trigger point by palpation and administers a small injection. You may feel a brief twitch or cramping sensation as the muscle releases. Most patients return to normal activity the same day.",
  },
  {
    slug: "lumbar-epidural-steroid-injections",
    name: "Lumbar Epidural Steroid Injections",
    category: "interventional",
    parentSlug: "interventional-injections",
    shortDescription:
      "Corticosteroid injections into the lumbar epidural space to reduce inflammation and relieve low back and leg pain.",
    fullDescription:
      "Lumbar epidural steroid injections (ESIs) are one of the most commonly performed procedures in pain management. They deliver corticosteroids into the epidural space — the area surrounding the spinal cord and nerve roots — to reduce inflammation and swelling associated with herniated discs, spinal stenosis, and nerve root irritation. This can significantly relieve low back pain, as well as radiating pain (sciatica) that travels into the buttocks and legs.",
    benefits: [
      "Effective for herniated disc and spinal stenosis pain",
      "Relieves both back pain and leg pain (sciatica)",
      "Can provide sustained relief for weeks to months",
      "Often improves the ability to participate in physical therapy",
    ],
    whatToExpect:
      "You will lie comfortably while the physician prepares the injection site. The procedure uses precise anatomical landmark guidance. You may feel pressure or brief discomfort during the injection. The procedure typically takes under 30 minutes from start to finish, and most patients are observed briefly before being discharged.",
  },
  {
    slug: "medial-branch-blocks",
    name: "Medial Branch Blocks",
    category: "interventional",
    parentSlug: "interventional-injections",
    shortDescription:
      "Diagnostic and therapeutic nerve blocks targeting the medial branch nerves that supply the facet joints of the spine.",
    fullDescription:
      "Medial branch blocks are a targeted injection procedure used both to diagnose and to treat facet joint pain — a common source of back and neck pain, especially in patients with arthritis or degenerative joint disease. Local anesthetic is injected near the medial branch nerves that carry pain signals from the facet joints. If you experience significant pain relief after the block, this confirms the facet joints as your pain source and may qualify you for longer-lasting radiofrequency ablation treatment.",
    benefits: [
      "Accurately identifies facet joint as the pain source",
      "Provides immediate temporary relief",
      "Guides eligibility for radiofrequency ablation",
      "Minimally invasive, short procedure",
    ],
    whatToExpect:
      "The block is typically performed at one or more spinal levels. You will lie on your stomach or side while the physician targets the medial branch nerves. Relief from the local anesthetic is usually felt within minutes. You will be asked to assess your pain level over the next several hours to evaluate the diagnostic result.",
  },
  {
    slug: "sacroiliac-joint-injection",
    name: "Sacroiliac Joint Injection",
    category: "interventional",
    parentSlug: "interventional-injections",
    shortDescription:
      "Injection into the sacroiliac joint to diagnose and treat low back and buttock pain originating from SI joint dysfunction.",
    fullDescription:
      "The sacroiliac (SI) joints connect the pelvis to the base of the spine and are a surprisingly common — and frequently overlooked — source of low back and buttock pain. SI joint dysfunction can result from arthritis, injury, pregnancy, or altered gait patterns. An SI joint injection delivers corticosteroid and/or local anesthetic directly into the joint to reduce inflammation and confirm whether the SI joint is the pain generator.",
    benefits: [
      "Accurately diagnoses SI joint as pain source",
      "Reduces inflammation and pain in the joint",
      "Can provide relief lasting weeks to months",
      "Informs further treatment decisions",
    ],
    whatToExpect:
      "You will lie face-down for the procedure. The injection site is cleansed and a small needle is guided into the SI joint. You may feel pressure and brief discomfort. Most patients are discharged within 30 minutes.",
  },
  {
    slug: "radiofrequency-ablation",
    name: "Radiofrequency Ablation",
    category: "interventional",
    parentSlug: "interventional-injections",
    shortDescription:
      "A minimally invasive procedure that uses heat energy to interrupt pain signals from facet joint nerves — providing longer-lasting relief.",
    fullDescription:
      "Radiofrequency ablation (RFA) — also called radiofrequency neurotomy — is a minimally invasive procedure that uses controlled heat generated by radiofrequency energy to disrupt the pain signals transmitted by specific nerves. It is most commonly used for facet joint pain in the neck and back after a positive response to medial branch blocks. The effect of RFA can last from six months to two years or more, making it one of the longest-lasting non-surgical pain relief options available.",
    benefits: [
      "Long-lasting relief — often 6 months to 2+ years",
      "Minimally invasive, no incision required",
      "Outpatient procedure with quick recovery",
      "Can be repeated if pain returns",
    ],
    whatToExpect:
      "The procedure is performed with you lying comfortably. Radiofrequency probes are placed near the targeted nerves using precise anatomical guidance. A short burst of radiofrequency energy is delivered to each probe. The entire procedure typically takes 30–60 minutes. Most patients return to normal activities within a few days.",
  },
  {
    slug: "medication-management",
    name: "Medication Management",
    category: "medication",
    shortDescription:
      "Careful, individualized prescription management for pain using the safest effective medications at appropriate doses.",
    fullDescription:
      "Medication management is a cornerstone of comprehensive pain care. Our providers take a thoughtful, evidence-based approach to prescribing — balancing effective pain control with safety and minimizing side effects. We prescribe from a broad range of pain medications including anti-inflammatories, muscle relaxants, neuropathic agents, and when clinically appropriate, opioid medications under careful monitoring and agreement protocols. We regularly review your medication regimen to ensure it continues to meet your needs and adjust as your condition evolves.",
    benefits: [
      "Individualized prescribing based on your specific condition",
      "Regular monitoring for safety and effectiveness",
      "Combination with non-medication therapies where possible",
      "Coordination with your other healthcare providers",
    ],
    whatToExpect:
      "At your initial visit, you will undergo a thorough review of your current medications, medical history, and pain profile. We will discuss the goals of medication management and any monitoring requirements. Follow-up visits ensure your medications are working as intended and adjusted as needed.",
  },
  {
    slug: "tens-therapy",
    name: "TENS Therapy",
    category: "therapy",
    shortDescription:
      "Transcutaneous electrical nerve stimulation — a non-invasive therapy that uses mild electrical impulses to reduce pain signals.",
    fullDescription:
      "TENS (Transcutaneous Electrical Nerve Stimulation) therapy uses a small device to deliver gentle electrical impulses through electrodes placed on the skin near the area of pain. These impulses are believed to interfere with pain signal transmission to the brain and may stimulate the release of endorphins — the body's natural painkillers. TENS is non-invasive, drug-free, and can be an effective adjunct to other treatments for chronic musculoskeletal and neuropathic pain.",
    benefits: [
      "Non-invasive and drug-free",
      "Can be used at home between office visits",
      "Effective for a wide range of pain conditions",
      "No significant side effects for most patients",
    ],
    whatToExpect:
      "During a TENS session, electrodes are placed on or near the painful area. You will feel a mild tingling or buzzing sensation — not painful. Sessions typically last 20–60 minutes. We will educate you on proper electrode placement and settings for home use.",
  },
  {
    slug: "physical-therapy",
    name: "Physical Therapy",
    category: "therapy",
    shortDescription:
      "Referral-based coordination with licensed physical therapists to restore strength, mobility, and function.",
    fullDescription:
      "Physical therapy is a critical component of comprehensive pain management, especially for musculoskeletal conditions. We coordinate with licensed physical therapists in the community to ensure you receive targeted exercises and modalities that complement your interventional or medication-based treatment. Strengthening the muscles that support injured structures — particularly the spine — can significantly reduce chronic pain and prevent recurrence.",
    benefits: [
      "Improves strength, flexibility, and posture",
      "Reduces recurrence of pain episodes",
      "Teaches self-management strategies",
      "Complements and extends the benefit of injections",
    ],
    whatToExpect:
      "We will provide a detailed referral to a physical therapist appropriate for your condition. Physical therapy programs typically involve an initial evaluation, a series of treatment sessions, and a home exercise program tailored to your goals.",
  },
  {
    slug: "acupuncture",
    name: "Acupuncture",
    category: "alternative",
    shortDescription:
      "Traditional acupuncture therapy to promote the body's natural healing and reduce chronic pain through stimulation of specific points.",
    fullDescription:
      "Acupuncture is a time-honored therapy rooted in traditional Chinese medicine and increasingly supported by modern research for pain management. Thin, sterile needles are inserted at specific anatomical points to stimulate the nervous system, promote blood flow, and encourage the release of the body's natural pain-relieving chemicals. Research supports its effectiveness for a range of conditions including chronic back pain, neck pain, osteoarthritis, and headaches.",
    benefits: [
      "Effective for chronic musculoskeletal pain",
      "Drug-free with minimal side effects",
      "Supports relaxation and stress reduction",
      "Complements other pain management therapies",
    ],
    whatToExpect:
      "Acupuncture sessions involve the gentle insertion of very fine needles at specific points on the body. Most patients experience little to no discomfort. Sessions typically last 30–60 minutes. A series of sessions is usually recommended for optimal results.",
  },
  {
    slug: "biofeedback",
    name: "Biofeedback",
    category: "alternative",
    shortDescription:
      "A mind-body technique that teaches patients to control physiological functions to reduce pain and stress responses.",
    fullDescription:
      "Biofeedback is a technique that uses electronic monitoring to help patients become aware of and learn to control physiological functions — such as heart rate, muscle tension, and skin temperature — that are normally automatic. By learning to regulate these functions, many patients can reduce pain, muscle tension, and the stress response that can amplify chronic pain. Biofeedback is particularly useful for tension headaches, migraine prevention, and chronic musculoskeletal pain.",
    benefits: [
      "Teaches lasting self-regulation skills",
      "Effective for stress-related and tension pain",
      "Drug-free and non-invasive",
      "Improves overall relaxation and coping",
    ],
    whatToExpect:
      "During biofeedback sessions, sensors are placed on your body to measure physiological signals. A therapist guides you through relaxation and mental techniques while you receive real-time feedback on your body's responses. Over time, you learn to replicate these responses independently.",
  },
];
