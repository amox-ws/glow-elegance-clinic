// Complete bilingual services data
export interface ServiceItem {
  id: string;
  titleKey: string;
  descKey: string;
  areas?: { en: string; el: string }[];
  types?: { en: string; el: string }[];
}

export interface ServiceCategory {
  id: string;
  titleKey: string;
  services: ServiceItem[];
}

export const serviceCategories: ServiceCategory[] = [
  {
    id: 'injectable-face',
    titleKey: 'services.category.injectable',
    services: [
      {
        id: 'hyaluronic-acid',
        titleKey: 'services.hyaluronic.title',
        descKey: 'services.hyaluronic.desc',
        areas: [
          { en: 'Lips', el: 'Χείλη' },
          { en: 'Facial Contouring', el: 'Contouring προσώπου' },
          { en: 'Cheekbones (Midface)', el: 'Ζυγωματικά' },
          { en: 'Chin', el: 'Πηγούνι' },
          { en: 'Jawline', el: 'Γωνίες γνάθου' },
          { en: 'Under-eye hollows', el: 'Κάτω οφθαλμική κοιλότητα' },
        ],
      },
      {
        id: 'botox',
        titleKey: 'services.botox.title',
        descKey: 'services.botox.desc',
        areas: [
          { en: 'Face', el: 'Πρόσωπο' },
          { en: 'Neck', el: 'Λαιμός' },
          { en: 'Underarms & palms for hyperhidrosis', el: 'Μασχάλες & παλάμες' },
        ],
      },
      {
        id: 'skin-boosters',
        titleKey: 'services.skinboosters.title',
        descKey: 'services.skinboosters.desc',
      },
      {
        id: 'facial-mesotherapy',
        titleKey: 'services.mesotherapy.title',
        descKey: 'services.mesotherapy.desc',
        types: [
          { en: 'PRP', el: 'PRP' },
          { en: 'Nucleotides', el: 'Νουκλεοτίδια' },
          { en: 'Vitamin blends', el: 'Μείγματα βιταμινών' },
          { en: 'Hyaluronic mesotherapy', el: 'Μεσοθεραπεία υαλουρονικού' },
          { en: 'Antioxidant cocktails', el: 'Αντιοξειδωτικά κοκτέιλ' },
          { en: 'Peptide & amino-acid blends', el: 'Μείγματα πεπτιδίων & αμινοξέων' },
        ],
      },
      {
        id: 'nanosoft-eye',
        titleKey: 'services.nanosoft.title',
        descKey: 'services.nanosoft.desc',
      },
      {
        id: 'filler-dissolving',
        titleKey: 'services.dissolving.title',
        descKey: 'services.dissolving.desc',
      },
      {
        id: 'facial-lipolysis',
        titleKey: 'services.faciallipolysis.title',
        descKey: 'services.faciallipolysis.desc',
        areas: [
          { en: 'Submental lipolysis (Double Chin)', el: 'Υπογενείδια λιπόλυση (Διπλοσάγονο)' },
        ],
      },
      {
        id: 'facial-tightening',
        titleKey: 'services.tightening.title',
        descKey: 'services.tightening.desc',
      },
    ],
  },
  {
    id: 'skin-renewal',
    titleKey: 'services.category.renewal',
    services: [
      {
        id: 'skinpen',
        titleKey: 'services.skinpen.title',
        descKey: 'services.skinpen.desc',
      },
      {
        id: 'fractional-laser',
        titleKey: 'services.laser.title',
        descKey: 'services.laser.desc',
      },
      {
        id: 'microneedling-face',
        titleKey: 'services.microneedlingface.title',
        descKey: 'services.microneedlingface.desc',
      },
      {
        id: 'microneedling-scalp',
        titleKey: 'services.microneedlingscalp.title',
        descKey: 'services.microneedlingscalp.desc',
      },
    ],
  },
  {
    id: 'body-treatments',
    titleKey: 'services.category.body',
    services: [
      {
        id: 'laser-hair-removal',
        titleKey: 'services.laserhair.title',
        descKey: 'services.laserhair.desc',
      },
      {
        id: 'body-lipolysis',
        titleKey: 'services.bodylipolysis.title',
        descKey: 'services.bodylipolysis.desc',
      },
      {
        id: 'cellulite',
        titleKey: 'services.cellulite.title',
        descKey: 'services.cellulite.desc',
      },
    ],
  },
];

// Preview services for homepage (subset)
export const homePreviewServices = [
  'hyaluronic-acid',
  'botox',
  'skin-boosters',
  'skinpen',
  'laser-hair-removal',
  'cellulite',
];
