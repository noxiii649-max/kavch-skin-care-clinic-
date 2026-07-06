import { Treatment } from '../types';

export const TREATMENTS: Treatment[] = [
  {
    id: 'acne-scar',
    name: 'Acne & Acne Scar',
    category: 'clinical',
    shortDescription: 'Advanced clinical therapy targeting active acne, deep scars, and post-inflammatory pigmentation.',
    longDescription: 'Our comprehensive acne treatment system combines medical dermatology with advanced aesthetic interventions. We target active breakouts, regulate sebum production, and perform state-of-the-art scar resurfacing procedures like microneedling RF, subcision, and customized chemical peels.',
    benefits: [
      'Eliminate active bacterial breakouts and comedones',
      'Reduce deep-pitted acne scars and icepick scarring',
      'Even out skin texture and red/dark post-acne spots',
      'Establish a preventive, science-backed home skincare regimen'
    ],
    duration: '45 - 60 mins',
    symptoms: ['Pustules', 'Cystic Acne', 'Blackheads', 'Atrophic Scars', 'Uneven Texture'],
    iconName: 'Sparkles'
  },
  {
    id: 'hair-fall',
    name: 'Hair Fall & Restoration',
    category: 'hair',
    shortDescription: 'Scientific therapies for pattern baldness, thinning, and hair rejuvenation.',
    longDescription: 'We specialize in treating male/female pattern alopecia, telogen effluvium, and scalp disorders. Utilizing evidence-based treatments such as PRP (Platelet-Rich Plasma) therapy, growth factor micro-injections, and targeted medical prescriptions to revitalize dormant follicles.',
    benefits: [
      'Significant reduction in daily hair shedding',
      'Reactivation of miniaturized hair follicles',
      'Increased hair density, thickness, and volume',
      'Enhanced scalp blood circulation and optimal nourishment'
    ],
    duration: '30 - 45 mins',
    symptoms: ['Excessive Shedding', 'Widening Part', 'Receding Hairline', 'Scalp Visibility'],
    iconName: 'UserRound'
  },
  {
    id: 'pigmentation',
    name: 'Pigmentation Therapy',
    category: 'aesthetic',
    shortDescription: 'Advanced solutions for dark spots, sun damage, and uneven skin tone.',
    longDescription: 'Using premium medical depigmentation agents, microdermabrasion, and skin-brightening lasers, we restore natural radiance. Our approach targets excessive melanin deposits deep in the dermal layers while respecting the skin barrier.',
    benefits: [
      'Brightens hyperpigmented areas and sun spots',
      'Restores uniform, luminous skin complexion',
      'Gently exfoliates dead skin layers with zero downtime',
      'Stimulates cellular turnover for refreshed skin'
    ],
    duration: '40 mins',
    symptoms: ['Sun Damage', 'Dark Spots', 'Age Spots', 'Dull Complexion'],
    iconName: 'Sun'
  },
  {
    id: 'melasma',
    name: 'Melasma Management',
    category: 'clinical',
    shortDescription: 'Specialized dermatological care for hormonal hyperpigmentation.',
    longDescription: 'Melasma requires highly precise, careful management as it is triggered by hormonal changes and UV radiation. Dr. Kriteeka Saini provides specialized dual-action therapies combining medical blocks, customized depigmentation masks (like Tranexamic acid systems), and barrier-repairing protocols.',
    benefits: [
      'Controls overactive melanocytes deep in skin layers',
      'Lightens chronic dark patches on cheeks, nose, and forehead',
      'Safe for all skin types, minimizing rebound hyperpigmentation',
      'Includes tailored UV defense and maintenance strategies'
    ],
    duration: '50 mins',
    symptoms: ['Symmetrical Dark Patches', 'Hormonal Pigment', 'Cheek Discoloration'],
    iconName: 'Layers'
  },
  {
    id: 'fungal-infection',
    name: 'Fungal Infection Care',
    category: 'clinical',
    shortDescription: 'Complete medical eradication of persistent fungal and yeast scalp/skin issues.',
    longDescription: 'Persistent ringworm (Tinea), yeast infections, or dandruff require accurate clinical diagnosis. We focus on absolute eradication through precise oral and topical antimycotics and patient guidelines to prevent recurrence.',
    benefits: [
      'Immediate relief from itching, burning, and scaling',
      'Eradicates root cause fungus, preventing resistance development',
      'Restores healthy natural skin flora and scalp health',
      'Personalized hygiene guidelines to safeguard family members'
    ],
    duration: '20 mins',
    symptoms: ['Ringworm', 'Itching', 'Scaly Patches', 'Athlete\'s Foot', 'Scalp Flakes'],
    iconName: 'ShieldAlert'
  },
  {
    id: 'psoriasis',
    name: 'Psoriasis Management',
    category: 'clinical',
    shortDescription: 'Comprehensive system for chronic plaque, scalp, and systemic psoriasis.',
    longDescription: 'Psoriasis is an autoimmune condition that requires empathetic, systemic care. Our treatment blends premium topical emollients, advanced immunomodulators, and therapeutic counseling to manage flare-ups and restore high quality of life.',
    benefits: [
      'Rapid clearing of silver scales and thick plaques',
      'Significantly reduces skin inflammation and joint discomfort',
      'Empowers patients with long-term remission protocols',
      'Ethical, patient-centric systemic therapy guidelines'
    ],
    duration: '30 mins',
    symptoms: ['Silvery Scales', 'Thick Plaques', 'Skin Redness', 'Severe Itching'],
    iconName: 'Activity'
  },
  {
    id: 'eczema',
    name: 'Eczema & Dermatitis Clinic',
    category: 'clinical',
    shortDescription: 'Gentle, effective treatment for atopic, contact, and seborrheic eczema.',
    longDescription: 'Eczema compromises the skin barrier, leading to dry, intensely itchy patches. We identify specific environmental triggers, recommend customized ceramide-based barrier repairs, and design non-steroidal management programs for sustained comfort.',
    benefits: [
      'Soothes skin irritation and intense itch-scratch cycle',
      'Restores the compromised natural epidermal lipid barrier',
      'Identifies and eliminates allergic triggers in daily life',
      'Safe, tailored treatments for children and adults'
    ],
    duration: '30 mins',
    symptoms: ['Dry Itchy Skin', 'Red Rashes', 'Blisters', 'Flaking Patches'],
    iconName: 'Droplet'
  },
  {
    id: 'vitiligo',
    name: 'Vitiligo Management',
    category: 'clinical',
    shortDescription: 'Evidence-based repigmentation therapy for stable and spreading vitiligo.',
    longDescription: 'We offer compassionate, scientifically backed options for Vitiligo. Incorporating medical repigmentation therapies, targeted immunomodulation, and guidelines for maintaining disease stability to achieve natural skin tone restoration.',
    benefits: [
      'Halts active spread of depigmented skin patches',
      'Stimulates dormant melanocytes to restore natural color',
      'Psychological and emotional support throughout therapy',
      'Durable, modern medical solutions'
    ],
    duration: '30 mins',
    symptoms: ['White Patches', 'Loss of Skin Color', 'Premature Graying of Hair'],
    iconName: 'HeartHandshake'
  },
  {
    id: 'skin-allergy',
    name: 'Skin Allergy Testing & Care',
    category: 'allergy',
    shortDescription: 'Diagnosis and relief for chronic hives, contact dermatitis, and acute allergies.',
    longDescription: 'Chronic urticaria (hives) or unexpected allergic breakouts are thoroughly evaluated. We pinpoint allergens, provide immediate antihistaminic relief, and guide patients on preventive avoidance measures for continuous skin wellness.',
    benefits: [
      'Accurate identification of flare-up triggers',
      'Rapid relief from acute swelling, itching, and hives',
      'Custom allergen avoidance strategy for daily life',
      'Long-term control over chronic skin hypersensitivity'
    ],
    duration: '25 mins',
    symptoms: ['Hives/Urticaria', 'Red Welts', 'Swellings', 'Contact Rashes'],
    iconName: 'ShieldCheck'
  },
  {
    id: 'nail-disorders',
    name: 'Nail Disorders Therapy',
    category: 'clinical',
    shortDescription: 'Expert care for fungal nails, ingrown toenails, and structural dystrophy.',
    longDescription: 'Nail health often reflects systemic wellbeing. We diagnose and manage brittle nails, discolorations, fungal nail infections (onychomycosis), and offer conservative procedures for painful ingrown nails.',
    benefits: [
      'Eliminates deeply embedded stubborn fungal nail infections',
      'Relieves pain and irritation from ingrown toenails',
      'Restores natural sheen, strength, and growth patterns',
      'Clinical evaluation of underlying systemic health indicators'
    ],
    duration: '30 mins',
    symptoms: ['Yellow Thick Nails', 'Ingrown Pain', 'Brittle Split Nails'],
    iconName: 'Hammer'
  },
  {
    id: 'laser-procedures',
    name: 'Laser Procedures',
    category: 'aesthetic',
    shortDescription: 'Gold-standard laser technologies for hair reduction and skin resurfacing.',
    longDescription: 'We use the latest US-FDA approved laser technologies. Offering Laser Hair Reduction (LHR) for smooth hair-free skin, carbon laser peels for instant radiance, and fractional lasers for advanced skin resurfacing.',
    benefits: [
      'Permanent, painless reduction of unwanted face & body hair',
      'Instant celebrity-like glow with carbon laser facials',
      'Resurfaces skin texture with precision and minimal downtime',
      'Safe, controlled energy parameters adjusted for Indian skin'
    ],
    duration: '30 - 90 mins',
    symptoms: ['Unwanted Hair', 'Dull Skin Texture', 'Enlarged Pores', 'Fine Lines'],
    iconName: 'Zap'
  },
  {
    id: 'chemical-peel',
    name: 'Premium Chemical Peels',
    category: 'aesthetic',
    shortDescription: 'Medical-grade peels for targeted exfoliation and radiant skin renewal.',
    longDescription: 'Chemical peeling is a sophisticated science. We utilize premium imported peeling solutions (such as Salicylic, Glycolic, lactic, and yellow peels) custom-selected for your skin tolerance to treat acne, tan, pigment, and fine lines.',
    benefits: [
      'Gently sweeps away superficial hyperpigmentation',
      'Clears deep blackheads and regulates oily skin sheen',
      'Promotes fresh collagen synthesis for younger skin texture',
      'Bespoke peels formulated specifically for sensitive skin types'
    ],
    duration: '30 mins',
    symptoms: ['Sun Tan', 'Superficial Pigment', 'Active Acne', 'Dullness'],
    iconName: 'RefreshCw'
  },
  {
    id: 'anti-ageing',
    name: 'Anti-Ageing & Rejuvenation',
    category: 'aesthetic',
    shortDescription: 'Ethical, age-defying therapies that enhance your natural structure.',
    longDescription: 'Keep your skin youthful, firm, and hydrated. Dr. Kriteeka Saini offers highly customized anti-ageing protocols, incorporating skin boosters, micro-needling collagen induction, and premium medical antioxidants to reduce wrinkles, sagging, and skin laxity.',
    benefits: [
      'Smooths out fine lines, wrinkles, and crow\'s feet',
      'Restores structural firmness and youthful facial volumes',
      'Deep, long-lasting cellular hydration',
      'Natural-looking results with safe, biocompatible therapies'
    ],
    duration: '60 mins',
    symptoms: ['Saggy Skin', 'Fine Lines', 'Volume Loss', 'Dehydrated Skin'],
    iconName: 'Clock'
  },
  {
    id: 'wart-mole-removal',
    name: 'Wart, Tag & Mole Removal',
    category: 'clinical',
    shortDescription: 'Quick, scarless radiofrequency ablation and clinical excision.',
    longDescription: 'Using advanced radiofrequency (RF) cautery, we remove warts, skin tags, and moles painlessly. Under local anesthetic cream, the procedure is extremely quick and leaves minimal to no scabbing or marks.',
    benefits: [
      'Painless, quick 15-minute removal under numbing cream',
      'Leaves absolute clean, scarless healthy skin behind',
      'Prevents spreading of viral warts to other body parts',
      'Histopathology verification for suspicious moles if required'
    ],
    duration: '15 - 30 mins',
    symptoms: ['Skin Tags', 'Viral Warts', 'Unwanted Moles', 'Seaborrheic Keratosis'],
    iconName: 'Scissors'
  }
];
