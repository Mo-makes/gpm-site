export interface Provider {
  slug: string;
  name: string;
  credentials: string;
  /** Optional honorific shown before the name, e.g. "Dr." */
  honorific?: string;
  title: string;
  isFounder?: boolean;
  bio: string[];
  specialties: string[];
  education?: string[];
  telemedicineUrl?: string;
  imageAlt: string;
  /** Path relative to /public, e.g. "/images/haddio.webp" */
  imageSrc?: string;
  /** CSS object-position for portrait crop, e.g. "center 20%" */
  imageObjectPosition?: string;
}

export function providerDisplayName(provider: Provider): string {
  const prefix = provider.honorific ? `${provider.honorific} ` : "";
  return `${prefix}${provider.name}, ${provider.credentials}`;
}

export const providers: Provider[] = [
  {
    slug: "haddi-ogunsola-md",
    name: "Haddi Ogunsola",
    credentials: "M.D.",
    title: "Medical Director",
    isFounder: true,
    bio: [
      "Haddi Ogunsola is the founder and medical director of Global Pain Management. Board-certified in both Anesthesiology and Pain Medicine, and fellowship-trained as an Interventional Spine Specialist, Ogunsola established the practice in 2013 with a singular mission: to bring compassionate, evidence-based interventional pain care to the communities of Pasadena, Kent Island, Columbia, and Anne Arundel County.",
      "Known for her outstanding bedside manner and exceptional personal touches, Ogunsola believes that every individual deserves a chance to live a better life with less pain. She is dedicated to treating the whole patient — not just the diagnosis — and tailors every treatment plan to the individual's lifestyle, goals, and medical history.",
      "Ogunsola has been recognized as a Maryland Top Doctor (2024) and Women in Medicine honoree (2023). She has given lectures and presentations on chronic pain management and has been interviewed as a subject-matter expert on pain management topics.",
    ],
    specialties: [
      "Interventional pain management",
      "Spinal injections and nerve blocks",
      "Radiofrequency ablation",
      "Medication management",
      "Cancer pain management",
      "Workers' compensation and auto injury care",
    ],
    education: [
      "M.D. — Medical College of Georgia, Augusta, GA",
      "Internship: Internal Medicine — Virginia Commonwealth University Health Center, Richmond, VA",
      "Residency: Anesthesiology — University of Maryland Medical Center / R Adams Cowley Shock Trauma Center, Baltimore, MD",
      "Fellowship: ACGME Accredited Interventional Pain Medicine — University of Maryland Medical Center / R Adams Cowley Shock Trauma Center",
    ],
    telemedicineUrl: "https://doxy.me/drogunsolagpm",
    imageAlt: "Haddi Ogunsola, M.D., Founder of Global Pain Management",
    imageSrc: "/images/haddio.webp",
    imageObjectPosition: "center 28%",
  },
  {
    slug: "nia-valentine-crnp",
    name: "Nia Valentine",
    credentials: "CRNP",
    title: "Certified Registered Nurse Practitioner",
    bio: [
      "Nia Valentine, CRNP, is an ANCC Board-Certified Family Nurse Practitioner specializing in pain management with 15 years of medical experience. Her background spans family medicine, primary care, retail health, school-based health, urgent care, and health insurance assessments. Recognizing pain as a recurring and underaddressed concern for her patients, she made the decision to specialize in pain management.",
      "Nia believes in the mind-body-spirit connection to healing and is committed to helping patients validate their pain and develop collaborative treatment plans tailored to their lives. Her clinical approach incorporates interventional injections, medication management, physical therapy and chiropractic referrals, bracing, lifestyle modifications, nutrition, exercise, and stress management.",
      "Established patients may see Nia for follow-up visits and telemedicine appointments.",
    ],
    specialties: [
      "Chronic pain assessment",
      "Individualized treatment planning",
      "Medication management",
      "Lifestyle and wellness integration",
      "Telemedicine consultations",
    ],
    telemedicineUrl: "https://doxy.me/niavalentinenp",
    imageAlt: "Nia Valentine, CRNP, Nurse Practitioner at Global Pain Management",
    imageSrc: "/images/niav.webp",
  },
  {
    slug: "shannon-wrobel-crnp",
    name: "Shannon Wrobel",
    credentials: "CRNP",
    title: "Certified Registered Nurse Practitioner",
    bio: [
      "Shannon Wrobel, CRNP, is a certified registered nurse practitioner committed to helping patients manage pain and improve their overall quality of life. Shannon brings clinical experience across a range of pain conditions to the Global Pain Management team.",
      "Shannon emphasizes clear communication and collaborative decision-making, ensuring that patients fully understand their options and feel empowered in their care. She provides both new and follow-up evaluations and works closely with the broader clinical team.",
      "Shannon is available for in-person and telemedicine visits for established patients.",
    ],
    specialties: [
      "Pain evaluation and follow-up care",
      "Medication management",
      "Patient education",
      "Telemedicine consultations",
    ],
    telemedicineUrl: "https://doxy.me/shannonwrobelnp",
    imageAlt: "Shannon Wrobel, CRNP, Nurse Practitioner at Global Pain Management",
    imageSrc: "/images/shannonv.webp",
    imageObjectPosition: "center 22%",
  },
  {
    slug: "janet-ascione-crnp",
    name: "Janet Ascione",
    credentials: "CRNP",
    title: "Certified Registered Nurse Practitioner",
    bio: [
      "Janet Ascione, CRNP, is the newest provider to join Global Pain Management. She brings years of pain management experience to patients throughout Pasadena, Kent Island, Columbia, and the greater Anne Arundel County region.",
      "Janet is committed to Global Pain Management's approach to care — listening first, treating the whole patient, and building a treatment plan around each patient's goals and life.",
    ],
    specialties: [
      "Chronic pain management",
      "Patient evaluation and treatment planning",
      "Medication management",
    ],
    imageAlt: "Janet Ascione, CRNP, Nurse Practitioner at Global Pain Management",
    imageSrc: "/images/janeta.webp",
  },
  // TODO: Nicole Small, CRNP — no longer with the practice as of the site rebuild.
  // If she returns or a replacement provider is added, create a new entry here.
];
