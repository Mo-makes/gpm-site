export interface Testimonial {
  id: string;
  quote: string;
  reviewerInitials: string;
  reviewerDisplay: string;
  rating: number;
  date?: string;
  source?: string;
}

// All testimonials sourced verbatim from patient reviews. Quotes are preserved
// exactly as published; only reviewer initials are shown for privacy.
export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "I would absolutely recommend the office for your pain management needs. The doctors and staff have always been professional, there is never a long wait to be seen and the appointments are as long or as short as needed to assess all of your personal needs. I have been a patient here for many years, and I have never had a complaint.",
    reviewerInitials: "R.R.",
    reviewerDisplay: "R.R.",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Being a chronic pain sufferer and having a pain doctor and clinic who truly is there to help and not judge you for asking for a change of medicine or different doses or even needing a video call will make you happy. The staff here is wonderful — thank you for taking my word and just doing what a pain doctor should do.",
    reviewerInitials: "J.M.",
    reviewerDisplay: "J.M.",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "I'm a long-time follower of Dr. Ogunsola. I would probably have had 10 surgeries if I had not found her. The staff is pleasant and fun, too. Clean atmosphere. They really care about your health.",
    reviewerInitials: "C.H.",
    reviewerDisplay: "C.H.",
    rating: 5,
  },
  {
    id: "4",
    quote:
      "It was my first time coming there - great staff, they treat you like family. Thank you all very much for helping me.",
    reviewerInitials: "D.M.",
    reviewerDisplay: "D.M.",
    rating: 5,
  },
  {
    id: "5",
    quote:
      "My first initial visit went perfectly. The nurses and the staff were really polite, and my provider was a Godsend! She was very polite and takes time to see her patients. I am happy with Global Pain Management.",
    reviewerInitials: "T.B.",
    reviewerDisplay: "T.B.",
    rating: 5,
  },
  {
    id: "6",
    quote:
      "I thought my first appointment was going to be a bad experience. It was totally different. The staff at the office was very nice and attentive. My provider was very pleasant and courteous. She even made me laugh. Thank you everyone for making my experience a nice one. My condition has improved and I'm not in as much pain as I was.",
    reviewerInitials: "S.C.",
    reviewerDisplay: "S.C.",
    rating: 5,
  },
  {
    id: "7",
    quote:
      "I absolutely have had nothing but positive experiences with everyone. I've been going to Global Pain Management for over a year and would highly recommend them to anyone suffering from chronic pain.",
    reviewerInitials: "S.H.",
    reviewerDisplay: "S.H.",
    rating: 5,
  },
  {
    id: "8",
    quote:
      "The doctors as well as the staff are compassionate, helpful, and knowledgeable. They always take the time to listen and formulate a treatment plan together, making adjustments when necessary. They go above and beyond.",
    reviewerInitials: "K.M.",
    reviewerDisplay: "K.M.",
    rating: 5,
  },
];
