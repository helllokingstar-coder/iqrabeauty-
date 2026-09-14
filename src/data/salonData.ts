import {
  ServiceItem,
  GalleryItem,
  BlogPost,
  ExpertAdviceArticle,
  Testimonial,
} from '../types';

export const SALON_INFO = {
  name: 'Iqra Beauty Salon',
  tagline: 'Luxury Beauty & Salon',
  subheading: 'Where Beauty Meets Confidence',
  address: '161 M Gulberg III, Lahore, Pakistan',
  landmark: 'Near MM Alam Road & Main Boulevard Gulberg',
  phone: '03036346909',
  phoneFormatted: '0303 6346909',
  phoneInternational: '+923036346909',
  whatsapp: '03036346909',
  whatsappLink: 'https://wa.me/923036346909',
  email: 'concierge@iqrabeautysalon.pk',
  hours: {
    weekdays: 'Monday – Saturday: 10:30 AM – 8:30 PM',
    sunday: 'Sunday: 11:30 AM – 7:00 PM',
  },
  stats: [
    { value: '10+', label: 'Years of Excellence', icon: 'Award' },
    { value: '5,000+', label: 'Happy Clients', icon: 'Users' },
    { value: '25+', label: 'Beauty Services', icon: 'Sparkles' },
    { value: '100%', label: 'Hygiene & Care', icon: 'ShieldCheck' },
  ],
  brandPartners: [
    { name: "L'Oréal Professionnel Paris", logoText: "L'ORÉAL PARIS" },
    { name: 'Olaplex Bond Building', logoText: 'OLAPLEX' },
    { name: 'Kérastase Paris', logoText: 'KÉRASTASE' },
    { name: 'MAC Cosmetics', logoText: 'M·A·C' },
    { name: 'Bobbi Brown New York', logoText: 'BOBBI BROWN' },
    { name: 'Dermalogica Skincare', logoText: 'dermalogica' },
    { name: 'Huda Beauty', logoText: 'HUDABEAUTY' },
    { name: 'Dyson Supersonic Hair Care', logoText: 'dyson' },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  // HAIR SERVICES
  {
    id: 'hair-transformation',
    title: 'Hair Transformation & Styling',
    category: 'hair',
    subtitle: 'Signature cut, bespoke blowout & gloss finish',
    price: 'Rs. 3,500',
    priceNumeric: 3500,
    duration: '60 - 75 mins',
    description:
      'A personalized hair overhaul tailored to your face structure, hair texture, and lifestyle. Includes scalp detox wash, custom cut by a master stylist, and bouncy blowout.',
    benefits: [
      'Tailored face-framing technique',
      'Scalp detoxifying organic wash',
      'Heat protection with Kérastase elixir',
      'Long-lasting voluminous blowout finish',
    ],
    procedureSteps: [
      'Consultation & hair density analysis',
      'Cleansing with specialized clarifying shampoo',
      'Precision structural haircut & texturizing',
      'Dyson ionic blow dry & signature bounce styling',
    ],
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    recommendedFor: 'Anyone desiring a revitalized, bouncy, runway-ready look.',
    aftercareTips: [
      'Avoid washing hair for 48 hours to preserve the style memory',
      'Use sulfate-free shampoo to maintain hydration',
      'Sleep on a silk pillowcase to prevent frizz',
    ],
  },
  {
    id: 'balayage-highlights',
    title: 'Custom Balayage & Highlights',
    category: 'hair',
    subtitle: 'Hand-painted multidimensional tones with Olaplex',
    price: 'Rs. 16,500',
    priceNumeric: 16500,
    duration: '3 - 4 hours',
    description:
      'Artisanal hand-painted sun-kissed gradients, honey caramel or cool ash blondes tailored to your skin undertone with zero harsh lines and Olaplex bond reinforcement.',
    benefits: [
      'Natural, soft grow-out with minimal root maintenance',
      'Custom color toning for warm Pakistani skin tones',
      'Olaplex No. 1 & No. 2 bond rebuilders included',
      'Ultra high-shine gloss toner',
    ],
    procedureSteps: [
      'Skin tone & hair porosity color mapping',
      'Strategic feather-light foil & balayage placement',
      'Color lift monitoring under gentle warm airflow',
      'pH-balancing toner wash & deep molecular mask',
    ],
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    recommendedFor: 'Those wanting seamless dimensional color without harsh demarcation lines.',
    aftercareTips: [
      'Wash with cold or lukewarm water to preserve tone vibrancy',
      'Apply purple or blue toning shampoo once weekly',
      'Schedule a gloss toner refresh every 6-8 weeks',
    ],
  },
  {
    id: 'keratin-treatment',
    title: 'Keratin Smoothing Infusion',
    category: 'hair',
    subtitle: 'Formaldehyde-free frizz elimination & mirror shine',
    price: 'Rs. 14,000',
    priceNumeric: 14000,
    duration: '2.5 - 3 hours',
    description:
      'Tame stubborn frizz, humidity puffiness, and unruly waves. Our premium Brazilian keratin blend seals the cuticle, reducing blow dry time by 60% for up to 4 months.',
    benefits: [
      'Humidity-proof sleekness ideal for Lahore climate',
      'Deep amino acid restoration for brittle fibers',
      'Cuts daily morning styling time in half',
      'Silky touch without flattening natural volume',
    ],
    procedureSteps: [
      'Deep clarifying cleanse to open cuticles',
      'Section-by-section botanical keratin infusion',
      'Blow-drying with gentle heat-activation',
      'Precision thermal sealing at regulated temperature',
    ],
    image:
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80',
    isPopular: false,
    recommendedFor: 'Frizzy, weather-sensitive, or unruly coarse hair.',
    aftercareTips: [
      'Strictly do not tie or wash hair for 72 hours post treatment',
      'Use exclusively sodium-chloride free hair care products',
      'Always dry hair completely after washing',
    ],
  },
  {
    id: 'hair-extensions',
    title: 'Seamless Luxury Hair Extensions',
    category: 'hair',
    subtitle: '100% Remy human hair for instant length & density',
    price: 'Rs. 22,000',
    priceNumeric: 22000,
    duration: '2 - 3 hours',
    description:
      'Experience instant density, volume, and length with discreet invisible tape-in or micro-bead extensions matched flawlessly to your custom shade and texture.',
    benefits: [
      '100% ethically sourced Grade 12A Remy human hair',
      'Featherweight tapes invisible even when hair is tied up',
      'Can be curled, straightened, and styled freely',
      'Reusable hair with easy maintenance',
    ],
    procedureSteps: [
      'Color & density matching consultation',
      'Precision micro-sectioning',
      'Seamless cold-tape adhesive application',
      'Blended cutting & dynamic movement styling',
    ],
    image:
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80',
    isPopular: false,
    recommendedFor: 'Thinning hair, post-partum recovery, or bridal hair glamour.',
    aftercareTips: [
      'Brush gently with a looped extension brush starting from ends',
      'Never apply conditioner directly on the adhesive roots',
      'Braid hair loosely before sleeping',
    ],
  },

  // MAKEUP
  {
    id: 'bridal-makeup-luxury',
    title: 'Luxury Signature Bridal Makeup',
    category: 'bridal',
    subtitle: 'High-definition bridal glam with jewelry setting & dupatta draping',
    price: 'Rs. 25,000',
    priceNumeric: 25000,
    duration: '3 hours',
    description:
      'The crown jewel of Iqra Beauty Salon. Flawless HD airbrush or liquid base that endures tears, bright lights, and 14+ hours of celebrations. Complete with jewelry setting, custom faux mink lashes, and royal dupatta styling.',
    benefits: [
      'Camera-ready waterproof 18-hour wear formula',
      'Customized skin prep with luxury hyaluronic serums',
      'Complete dupatta styling and heavy royal jewelry pinning',
      'Exclusive private bridal dressing suite with refreshments',
    ],
    procedureSteps: [
      'Bridal skin calming and pore-blurring priming',
      'Sculpted multidimensional airbrush base application',
      'Signature eye artistry (classic Arabic, smokey, or soft shimmer)',
      'Bridal hair updo, mathapatti pinning & dupatta draping',
    ],
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    recommendedFor: 'Barat, Walima, and Nikah brides looking for timeless royalty.',
    aftercareTips: [
      'Keep touch-up blotting sheets for the event reception',
      'Use the provided mini touch-up lipstick kit after dinner',
      'Remove gently with oil-based cleansing balm followed by micellar water',
    ],
  },
  {
    id: 'party-makeup-glam',
    title: 'Signature Party & Event Makeup',
    category: 'makeup',
    subtitle: 'Flawless luminous skin, defined eyes & custom lash application',
    price: 'Rs. 7,500',
    priceNumeric: 7500,
    duration: '75 mins',
    description:
      'Whether attending a high-profile wedding, festive soiree, or formal gala, our party makeup delivers a soft-focus radiant complexion, sculpted cheekbones, and captivating eyes.',
    benefits: [
      'Lightweight yet full-coverage sweat-resistant base',
      'Includes premium faux lashes and eyelid design',
      'Tailored lipstick formulation to complement your outfit',
      'Setting spray lock for 10-hour crease-free wear',
    ],
    procedureSteps: [
      'Skin cleansing & cooling eye patch application',
      'Color correcting & luminous foundation blending',
      'Eye design (cut crease, soft glam, or dramatic wing)',
      'Lip contouring & illuminating setting mist',
    ],
    image:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    recommendedFor: 'Wedding guests, birthdays, red carpet events, and parties.',
    aftercareTips: [
      'Use a clean tissue to blot excess oil rather than rubbing',
      'Gently peel false lashes from the outer corner inward',
      'Hydrate skin with a calming sheet mask after removal',
    ],
  },
  {
    id: 'engagement-mehndi-makeup',
    title: 'Engagement & Mehndi Glam',
    category: 'makeup',
    subtitle: 'Vibrant, youthful, dewy look with fresh floral hair accents',
    price: 'Rs. 15,000',
    priceNumeric: 15000,
    duration: '2 hours',
    description:
      'Celebrate your vibrant pre-wedding festivities with glowing, sunkissed aesthetics. Features playful color palettes, glass-skin finish, and fresh floral jewelry / braid integration.',
    benefits: [
      'Dewy glass-skin illumination',
      'Fresh floral gajra & paranda styling',
      'Smudge-proof waterproof dance-ready formula',
      'Contoured yet youthful aesthetic',
    ],
    procedureSteps: [
      'Moisture surge primer & glow drops',
      'Soft sunset eye pigments with subtle gold leaf',
      'Peachy cream blush & highlighter melt',
      'Traditional or modern braided hairstyle with fresh flowers',
    ],
    image:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80',
    isPopular: false,
    recommendedFor: 'Mehndi brides, Mayun functions, and intimate Engagement ceremonies.',
    aftercareTips: [
      'Avoid excessive touching during dancing and ceremonies',
      'Keep hair accessories pinned until end of celebration',
    ],
  },

  // SKIN CARE
  {
    id: 'hydra-facial-deluxe',
    title: 'Deluxe Clinical Hydra Facial',
    category: 'skincare',
    subtitle: '7-step medical-grade vortex extraction & hyaluronic infusion',
    price: 'Rs. 6,500',
    priceNumeric: 6500,
    duration: '60 mins',
    description:
      'The gold standard in non-invasive skin rejuvenation. Removes blackheads, dead cells, and environmental pollution from Lahore air while pumping high-potency antioxidants and peptides deep into dermal layers.',
    benefits: [
      'Instant glass-skin glow with zero downtime',
      'Painless vortex suction of blackheads & clogged sebum',
      'Cryo-cooling skin tightener to shrink pores',
      'LED photo-rejuvenation therapy included',
    ],
    procedureSteps: [
      'Deep ultrasonic pore cleansing & lymphatic drain',
      'Gentle glycolic & salicylic acid peel exfoliation',
      'Vortex extraction of deep debris and oil',
      'Antioxidant serum infusion & LED collagen light',
    ],
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    recommendedFor: 'Dull skin, congested pores, uneven texture, pre-event brightness.',
    aftercareTips: [
      'Wear SPF 50+ sunscreen diligently for 7 days post-treatment',
      'Avoid heavy makeup for 24 hours to let serums penetrate fully',
      'Refrain from steam rooms and saunas for 48 hours',
    ],
  },
  {
    id: 'glow-radiance-treatment',
    title: 'Royal 24K Gold Glow Treatment',
    category: 'skincare',
    subtitle: 'Cellular rejuvenation with 24K pure gold leaf and botanical collagen',
    price: 'Rs. 8,500',
    priceNumeric: 8500,
    duration: '75 mins',
    description:
      'Indulge in pure luxury. Real 24-karat micro-colloidal gold flakes stimulate microcirculation, accelerate cellular turnover, and impart a luminous, youthful firmness.',
    benefits: [
      'Improves elasticity and smooths fine expression lines',
      'Reduces melanin clusters for noticeable brightening',
      'Deeply soothing for fatigued, stressed complexion',
      'Leaves skin silky, lifted, and iridescent',
    ],
    procedureSteps: [
      'Aromatherapy botanical cleansing',
      'Diamond microdermabrasion buffer',
      'Application of 24K pure gold sheets & ultrasound massage',
      'Firming collagen peel-off mask & peptide shield',
    ],
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
    isPopular: false,
    recommendedFor: 'Brides, mothers of the bride, and anyone celebrating milestones.',
    aftercareTips: [
      'Hydrate internally with 8-10 glasses of water daily',
      'Apply hyaluronic moisturizer morning and night',
    ],
  },
  {
    id: 'deep-cleansing-derma',
    title: 'Derma Clarity Deep Cleansing',
    category: 'skincare',
    subtitle: 'Targeted clarifying facial for acne-prone and congested skin',
    price: 'Rs. 4,500',
    priceNumeric: 4500,
    duration: '50 mins',
    description:
      'A specialized treatment formulated by our aesthetic specialists to calm breakouts, balance sebum production, and thoroughly purify congested pores without causing redness.',
    benefits: [
      'Calms inflammation with tea tree & zinc actives',
      'High-frequency anti-bacterial ozone wand',
      'Balances sebum without stripping essential lipids',
      'Smooths rough, bumpy skin texture',
    ],
    procedureSteps: [
      'Purifying herbal steam & enzyme exfoliant',
      'Manual and suction micro-extraction',
      'High-frequency anti-microbial wand treatment',
      'Soothing green tea & sulfur cooling mask',
    ],
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80',
    isPopular: false,
    recommendedFor: 'Oily, acne-prone, or humidity-clogged skin.',
    aftercareTips: [
      'Change your pillowcase tonight to a fresh clean one',
      'Do not pick or touch your face with unwashed hands',
    ],
  },

  // NAILS
  {
    id: 'luxury-spa-mani-pedi',
    title: 'Royal Rose Spa Manicure & Pedicure',
    category: 'nails',
    subtitle: 'Warm rose milk soak, scrub, paraffin wrap & polish',
    price: 'Rs. 3,500',
    priceNumeric: 3500,
    duration: '75 mins',
    description:
      'An oasis of bliss for tired hands and feet. Includes botanical rose milk soaks, organic pink Himalayan salt exfoliation, warm paraffin wax softening wraps, cuticle detailing, and high-shine polish.',
    benefits: [
      'Relieves foot fatigue and improves peripheral circulation',
      'Deeply softens cracked heels and dry cuticles',
      'Warm paraffin mask locks in moisture for weeks',
      'Extended hand and calf acupressure massage',
    ],
    procedureSteps: [
      'Petal-infused rose milk foot and hand soak',
      'Dead-skin callus smoothing & salt buffing',
      'Warm therapeutic paraffin wax envelopment',
      'Relaxing massage followed by breathable OPI polish',
    ],
    image:
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    recommendedFor: 'Self-care Saturdays, pre-event prep, or weekly maintenance.',
    aftercareTips: [
      'Allow 20 minutes for polish to fully dry before wearing closed shoes',
      'Apply cuticle oil every night before bed',
    ],
  },
  {
    id: 'gel-sculpted-nails',
    title: 'Gel Nail Extensions & Custom Art',
    category: 'nails',
    subtitle: 'Chip-free long-lasting nail architecture with hand-drawn art',
    price: 'Rs. 5,500',
    priceNumeric: 5500,
    duration: '90 mins',
    description:
      'Transform your nails with lightweight yet durable polygel or hard gel extensions. Choose from French ombré, chrome glaze, marble stone textures, or delicate crystal embellishments.',
    benefits: [
      'Zero chipping or peeling for up to 4 weeks',
      'Natural-looking apex and comfortable lightweight feel',
      'Reinforces weak, brittle natural nails',
      'Unlimited bespoke designer nail art choices',
    ],
    procedureSteps: [
      'Dry Russian manicure cuticle prep',
      'Nail tip extension & arch sculpting',
      'UV/LED curing with medical-grade hypoallergenic gel',
      'Hand-painted artistic design & diamond gloss top coat',
    ],
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80',
    isPopular: true,
    recommendedFor: 'Anyone wanting flawless, Instagram-worthy durable nails.',
    aftercareTips: [
      'Wear gloves when doing household cleaning with chemicals',
      'Do not use your nails as tools to open cans or boxes',
      'Schedule infills every 3 to 4 weeks to maintain nail health',
    ],
  },

  // SPA & RELAXATION
  {
    id: 'aromatherapy-body-massage',
    title: 'Aromatherapy Stress Relief Massage',
    category: 'spa',
    subtitle: 'Full body Swedish & deep-tissue fusion with warm essential oils',
    price: 'Rs. 7,000',
    priceNumeric: 7000,
    duration: '60 mins',
    description:
      'Release accumulated mental tension and muscular stiffness. Our certified female therapists use warm sweet almond oil infused with organic lavender, rose, and ylang-ylang.',
    benefits: [
      'Alleviates chronic neck, shoulder, and lower back stiffness',
      'Lowers cortisol levels and promotes restorative sleep',
      'Stimulates lymphatic drainage to detoxify the body',
      'Conducted in private sound-isolated treatment rooms',
    ],
    procedureSteps: [
      'Aromatherapy scent selection & pressure preference check',
      'Warm herbal compress application along spine',
      'Customized medium to firm pressure massage strokes',
      'Calming scalp acupressure & warm towel finish',
    ],
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80',
    isPopular: false,
    recommendedFor: 'Tension, fatigue, bridal stress, and full mind-body relaxation.',
    aftercareTips: [
      'Drink plenty of warm water throughout the day to flush released toxins',
      'Take a warm shower 2 hours after the massage to absorb essential oils',
    ],
  },
  {
    id: 'velvet-body-polish',
    title: 'Velvet Rose & Almond Body Polish',
    category: 'spa',
    subtitle: 'Full-body exfoliation and warm whipped shea butter envelopment',
    price: 'Rs. 6,000',
    priceNumeric: 6000,
    duration: '60 mins',
    description:
      'Say goodbye to uneven skin tone and dry patches. A luxurious treatment that buffs away dead skin cells with cane sugar and rosehips, followed by a warm velvet cream wrap.',
    benefits: [
      'Restores baby-soft smoothness from head to toe',
      'Evens out tan lines and sun discoloration',
      'Ideal pre-bridal treatment 2 days before wedding events',
      'Leaves an intoxicating, subtle floral aroma on skin',
    ],
    procedureSteps: [
      'Warm mist hydro-rinse',
      'Full body circular scrub with rosehip & brown sugar',
      'Vichy-style thermal shower rinse',
      'Rich warm shea butter and argan oil glaze massage',
    ],
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
    isPopular: false,
    recommendedFor: 'Brides, vacation preparation, and whole-body renewal.',
    aftercareTips: [
      'Avoid direct intense sun exposure for 24 hours',
      'Continue moisturizing with lotion daily while skin is damp',
    ],
  },
];

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Regal Barat Bridal Makeover',
    category: 'bridal',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80',
    description: 'Traditional crimson velvet bridal styling with luminous gold shimmer lids and intricate mathapatti placement.',
    stylist: 'Lead Artist Zainab',
  },
  {
    id: 'gal-2',
    title: 'Dimensional Honey Caramel Balayage',
    category: 'hair',
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80',
    description: 'Seamless balayage transition on natural dark espresso hair, finished with soft Hollywood waves.',
    stylist: 'Master Colorist Sara',
  },
  {
    id: 'gal-3',
    title: 'Glass Skin Hydra Dermabrasion',
    category: 'skin',
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80',
    description: 'Immediate dewy radiance following our 7-step Deluxe Hydra Facial with LED therapy.',
    stylist: 'Aesthetician Dr. Ayesha',
  },
  {
    id: 'gal-4',
    title: 'Rose Quartz & Chrome French Nails',
    category: 'nails',
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1000&q=80',
    description: 'Almond gel extensions adorned with micro-pearls and iridescent chrome glaze.',
    stylist: 'Nail Artist Hina',
  },
  {
    id: 'gal-5',
    title: 'Gulberg Salon Private Dressing Suite',
    category: 'salon',
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1000&q=80',
    description: 'Our luxurious private bridal dressing sanctuary featuring custom Hollywood mirrors and velvet pink lounge chairs.',
    stylist: 'Iqra Beauty Salon Lahore',
  },
  {
    id: 'gal-6',
    title: 'Dewy Reception Soft Glam',
    category: 'makeup',
    image:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80',
    description: 'Monochromatic rose-toned makeup with diffused eyeliner and sculpted contours for an evening gala.',
    stylist: 'Senior Artist Mahnoor',
  },
  {
    id: 'gal-7',
    title: 'Modern Walima Pastel Bridal',
    category: 'bridal',
    image:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=1000&q=80',
    description: 'Mint and silver bridal palette paired with champagne glow and softly pinned side-swept locks.',
    stylist: 'Lead Artist Zainab',
  },
  {
    id: 'gal-8',
    title: 'Glossy Brunette Hair Revival',
    category: 'hair',
    image:
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=80',
    description: 'Post-Keratin mirror gloss showing total elimination of frizz and restoration of natural shine.',
    stylist: 'Master Stylist Rida',
  },
  {
    id: 'gal-9',
    title: 'Aromatherapy & Facial Lounge',
    category: 'salon',
    image:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80',
    description: 'Peaceful private treatment pods illuminated by ambient warm candlelight and soothing soundscapes.',
    stylist: 'Iqra Beauty Salon Lahore',
  },
  {
    id: 'gal-10',
    title: 'Smokey Kohl Evening Makeup',
    category: 'makeup',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1000&q=80',
    description: 'Velvety matte skin accompanied by classic smudged charcoal eyeliner and nude velvet lips.',
    stylist: 'Senior Artist Mahnoor',
  },
  {
    id: 'gal-11',
    title: 'Pastel Floral Bridal Nail Art',
    category: 'nails',
    image:
      'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&w=1000&q=80',
    description: 'Hand-painted 3D miniature blossom petals sealed beneath chip-proof crystal topcoat.',
    stylist: 'Nail Artist Hina',
  },
  {
    id: 'gal-12',
    title: '24K Gold Luxury Facial Glow',
    category: 'skin',
    image:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=1000&q=80',
    description: 'Immediate rejuvenation and tight, lifted cheek contouring following our signature 24K gold foil ritual.',
    stylist: 'Aesthetician Dr. Ayesha',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    slug: 'best-hair-salon-services-lahore',
    title: 'Best Hair Salon Services in Lahore: What to Expect',
    category: 'Hair',
    date: 'February 12, 2026',
    readTime: '6 min read',
    author: {
      name: 'Sara Khan',
      role: 'Creative Hair Director',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    excerpt:
      'From customized balayage techniques to restorative Olaplex rituals, discover the standards of luxury hair salons in Lahore and how to select the right salon in Gulberg.',
    content: [
      'Lahore has long been celebrated as the beauty capital of Pakistan, where grooming and hair aesthetics are deeply cherished traditions. However, the modern salon experience in Gulberg III has transitioned from simple haircuts to comprehensive hair science.',
      'When visiting a premier salon, your session should never begin with scissors in hand. A certified master stylist always begins with a 15-minute diagnostic consultation, examining your scalp health, moisture levels, prior dye history, and natural hair density.',
      'At Iqra Beauty Salon, we exclusively partner with world-renowned hair houses including L\'Oréal Professionnel, Kérastase Paris, and Olaplex. This ensures that even high-lift lightening and structural chemical transformations protect your hair bonds rather than causing split ends.',
      'What to expect on your first visit: a complimentary aromatic beverage, tailored product recommendations, a relaxing head massage during your clarifying shampoo, and heat styling with Dyson precision tools.',
    ],
    featuredImage: '/color_salon_hair.jpg',
    tags: ['Hair Salon Lahore', 'Gulberg Beauty', 'Hair Trends', 'Luxury Salon'],
  },
  {
    id: 'blog-2',
    slug: 'complete-guide-bridal-makeup-lahore',
    title: 'Complete Guide to Bridal Makeup in Lahore',
    category: 'Bridal',
    date: 'February 05, 2026',
    readTime: '8 min read',
    author: {
      name: 'Zainab Tariq',
      role: 'Head Bridal Makeup Artist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
    excerpt:
      'Navigating your bridal journey for Barat, Walima, and Mehndi: tips on trial sessions, HD vs Airbrush formulas, dupata setting, and timeline planning.',
    content: [
      'Your wedding day is one of the most photographed moments of your life. In Lahore, where celebrations span multiple days from Mehndi to Barat and Walima, each event calls for a distinct aesthetic.',
      'Barat looks traditionally embrace timeless royal grandeur: classic red or deep maroons, gilded cut-creases, sculpted cheekbones, and flawless mathapatti placement. The base must be high-definition and transfer-proof to withstand warm hall lighting and heartfelt hugs.',
      'For Walima, we see a dramatic shift toward modern soft glam: champagne hues, pastel silvers, dewy glass skin, and effortless Hollywood waves that look chic from 2 feet away and through 4K wedding cinematography.',
      'Pro Bridal Tip: Book your bridal salon slot at least 3 to 6 months in advance, especially during the peak Lahore winter wedding season (October to March). Always plan your arrival time at the salon at least 4.5 hours before your stage entry time.',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    tags: ['Bridal Makeup Lahore', 'Pakistani Bride', 'Walima Makeup', 'Barat Look'],
  },
  {
    id: 'blog-3',
    slug: 'balayage-vs-highlights-hair-color',
    title: 'Balayage vs Highlights: Which Hair Color Is Right for You?',
    category: 'Hair Color',
    date: 'January 28, 2026',
    readTime: '5 min read',
    author: {
      name: 'Sara Khan',
      role: 'Creative Hair Director',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    excerpt:
      'Understand the key differences between traditional foil highlights and modern hand-painted balayage, maintenance routines, and undertones for Pakistani hair.',
    content: [
      'Choosing between balayage and highlights is one of the most common dilemmas clients bring to our chairs at Iqra Beauty Salon. While both techniques introduce light and contrast to your hair, the application and maintenance are entirely different.',
      'Traditional highlights use aluminum foils right up to the root, creating a structured, uniform pattern of lightened strands. They provide high contrast and bright lift, but will require root touch-ups every 6 to 8 weeks as your dark roots grow in.',
      'Balayage (the French word meaning "to sweep") is a freehand painting technique. Color is applied lightly near the roots and intensifies toward the mid-lengths and ends. This mimics how sunlight naturally kisses hair, resulting in a gentle grow-out that can easily last 4 to 6 months without maintenance.',
      'For naturally deep Pakistani hair textures (levels 2 to 4), we love formulating warm honey, mocha, hazelnut, and soft caramel balayage that harmonize gracefully with warm olive undertones.',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
    tags: ['Balayage Lahore', 'Hair Color', 'Olaplex', 'Highlights'],
  },
  {
    id: 'blog-4',
    slug: '10-essential-hair-care-tips-healthy-hair',
    title: '10 Essential Hair Care Tips for Healthy Hair',
    category: 'Hair Treatments',
    date: 'January 19, 2026',
    readTime: '6 min read',
    author: {
      name: 'Rida Asif',
      role: 'Senior Hair Care Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    excerpt:
      'Combat seasonal humidity and hard water damage in Lahore with these 10 salon-tested hair care rules for radiant, resilient hair.',
    content: [
      'Living in Lahore presents unique challenges for hair health: fluctuating seasons, urban smog, intense summer heat, and alkaline tap water. Maintaining silkiness requires deliberate habits.',
      '1. Install a shower filter: Lahore municipal and ground water often contains dissolved minerals that cause hair dullness and brassy discoloration in blondes and lightened hair.',
      '2. Never skip thermal heat protectant: Applying a protective barrier before using hair dryers or flat irons prevents keratin structural breakdown.',
      '3. Incorporate weekly hair masking: Standard conditioner coats the outer cuticle, while a protein and lipid mask penetrates deep into the inner cortex.',
      '4. Switch to silk or satin pillowcases: Friction against cotton creates micro-tears in strands, leading to morning frizz and breakage.',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80',
    tags: ['Healthy Hair', 'Hair Care Tips', 'Lahore Salon', 'Hair Repair'],
  },
  {
    id: 'blog-5',
    slug: 'hydra-facial-benefits-glowing-skin',
    title: 'Hydra Facial Benefits for Glowing Skin',
    category: 'Facials',
    date: 'January 12, 2026',
    readTime: '5 min read',
    author: {
      name: 'Dr. Ayesha Malik',
      role: 'Clinical Aesthetician',
      avatar: 'https://images.unsplash.com/photo-1594824813689-d04b31a896cf?auto=format&fit=crop&w=200&q=80',
    },
    excerpt:
      'Why the 7-step clinical hydra facial has become Lahore\'s favorite pre-event skin treatment for glass skin with zero recovery downtime.',
    content: [
      'If you have ever felt that traditional facial extraction was too painful or left your skin red and blotchy for days, the modern Hydra Facial is your answer.',
      'Hydra Facial technology utilizes a patented spiral vortex suction tip. While traditional extractions squeeze pores manually, vortex suction gently dislodges blackheads, dead cellular buildup, and trapped makeup particles while simultaneously bathing the dermis in soothing botanical elixirs.',
      'Key benefits include immediate skin plumping, diminished pore size appearance, refined texture, and an irresistible dewiness that makes makeup glide on like silk.',
      'At Iqra Beauty Salon Gulberg, our Deluxe Hydra Facial integrates cold cryo-tightening hammers and red/blue LED light therapy to calm redness and stimulate collagen synthesis.',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
    tags: ['Hydra Facial', 'Glass Skin', 'Skincare Lahore', 'Glow Treatment'],
  },
  {
    id: 'blog-6',
    slug: 'prepare-skin-before-wedding',
    title: 'How to Prepare Your Skin Before Your Wedding',
    category: 'Skincare',
    date: 'January 04, 2026',
    readTime: '7 min read',
    author: {
      name: 'Dr. Ayesha Malik',
      role: 'Clinical Aesthetician',
      avatar: 'https://images.unsplash.com/photo-1594824813689-d04b31a896cf?auto=format&fit=crop&w=200&q=80',
    },
    excerpt:
      'A 6-month aesthetic calendar for future brides: from medical-grade facials to diet, hydration, and safe skincare transitions.',
    content: [
      'Great bridal makeup begins months before wedding week with healthy skin underneath. No foundation in the world looks as breathtaking as properly exfoliated, deeply hydrated skin.',
      '6 Months Before: Consult with an aesthetician. Start any intensive acne clearing or hyperpigmentation treatments now. Never introduce strong retinol or chemical peels in the final month before your wedding.',
      '3 Months Before: Schedule regular monthly hydra facials and scalp care treatments to boost cellular turnover and maintain balanced oil production.',
      '1 Week Before: Complete your final gentle hydrating facial, body polish, and threading. Avoid trying brand new skincare samples or serums in the last 72 hours to prevent allergic breakouts.',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
    tags: ['Pre Bridal Care', 'Bridal Skin', 'Wedding Prep', 'Iqra Beauty Salon Gulberg'],
  },
  {
    id: 'blog-7',
    slug: 'manicure-vs-gel-nails-guide',
    title: 'Manicure vs Gel Nails: Which One Should You Choose?',
    category: 'Nails',
    date: 'December 28, 2025',
    readTime: '4 min read',
    author: {
      name: 'Hina Qureshi',
      role: 'Senior Nail Artist',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    },
    excerpt:
      'Compare longevity, nail health, nail art versatility, and aftercare between regular spa polish and hard gel enhancements.',
    content: [
      'Having manicured hands is the ultimate finishing touch to any polished ensemble. But when booking at Iqra Beauty Salon, should you choose a classic spa manicure or long-wear gel extensions?',
      'Classic Manicure: Perfect for women who prefer a natural feel and like switching shades every week. It includes exfoliation, cuticle grooming, and standard polish that air-dries. It lasts 5 to 7 days before slight chipping occurs.',
      'Gel Nails: Cured under a specialized LED light, gel polish bonds to the nail plate, resulting in an impenetrable high-gloss shine that lasts 3 to 4 weeks without a single scratch or chip. It allows for creative 3D art, French tips, and lengthening extensions.',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80',
    tags: ['Gel Nails', 'Spa Manicure', 'Nail Art', 'Gulberg Salon'],
  },
  {
    id: 'blog-8',
    slug: 'keratin-hair-treatment-benefits-aftercare',
    title: 'Keratin Hair Treatment: Benefits, Aftercare & Results',
    category: 'Hair Treatments',
    date: 'December 20, 2025',
    readTime: '6 min read',
    author: {
      name: 'Sara Khan',
      role: 'Creative Hair Director',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    },
    excerpt:
      'Everything you need to know about smoothing protein treatments: formaldehyde safety, timeline, and shampoo rules.',
    content: [
      'Humidity in Lahore during monsoon and summer months can turn sleek hair into a halo of frizzy curls within minutes of stepping outside. A professional keratin infusion reconstructs the hair cortex by sealing gaps in damaged cuticles.',
      'At Iqra Beauty Salon, we strictly employ modern formaldehyde-free keratin formulas that deliver glassy softness without harsh fumes or flat, lifeless pin-straight stiffness.',
      'The Crucial 72-Hour Rule: Following your salon session, keep hair straight and free of hair ties, clips, or pins for three full days. Always sleep on a smooth pillowcase and wash strictly with sulfate-free salon shampoos.',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=80',
    tags: ['Keratin Treatment', 'Hair Frizz', 'Hair Smoothing', 'Lahore Hair Care'],
  },
  {
    id: 'blog-9',
    slug: 'best-facial-treatments-glowing-skin',
    title: 'Best Facial Treatments for Glowing Skin',
    category: 'Facials',
    date: 'December 14, 2025',
    readTime: '5 min read',
    author: {
      name: 'Dr. Ayesha Malik',
      role: 'Clinical Aesthetician',
      avatar: 'https://images.unsplash.com/photo-1594824813689-d04b31a896cf?auto=format&fit=crop&w=200&q=80',
    },
    excerpt:
      'From 24K pure gold leaf to micro-exfoliating fruit enzyme peels, discover which facial treatment matches your specific skin concerns.',
    content: [
      'Not all skin types require the same facial regimen. What brightens dry, mature skin can trigger congestion in teenage or sensitive skin.',
      'For Dry & Dehydrated Skin: Opt for our Deluxe Hydra Facial with Hyaluronic Infusion. It replenishes essential moisture at the cellular level.',
      'For Pigmentation & Sun Damage: Our 24K Gold Glow Treatment combined with Vitamin C ampoules breaks down dull dead surface cells and stimulates renewal.',
      'For Congested T-Zones: Our Derma Clarity treatment uses high-frequency currents to clear acne-causing bacteria and balance oil production.',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=80',
    tags: ['Facial Treatments', 'Glowing Skin', 'Skin Health', 'Iqra Beauty Salon Gulberg'],
  },
  {
    id: 'blog-10',
    slug: 'party-makeup-tips-long-lasting-look',
    title: 'Party Makeup Tips for a Long-Lasting Look',
    category: 'Makeup',
    date: 'December 07, 2025',
    readTime: '5 min read',
    author: {
      name: 'Mahnoor Tariq',
      role: 'Senior Makeup Artist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
    excerpt:
      'Pro makeup artist techniques for sweat-proof foundation, transfer-proof lipstick, and creaseless eye makeup that lasts all night.',
    content: [
      'Pakistani wedding events often last 6 to 8 hours with warm stage lights and vibrant dancing. Ensuring your makeup stays intact requires layered preparation.',
      '1. Skin Prep is Key: Don\'t over-moisturize right before foundation. Use a water-based gel moisturizer and wait 5 minutes for full absorption before applying a pore-gripping primer.',
      '2. Fine Powder Setting: Instead of baking with heavy translucent powder under the eyes, use a damp beauty sponge with finely milled powder and press gently.',
      '3. The Double-Lock Setting Technique: Spritz your face with a hydrating mist after powder, then finish with a long-wear polymer setting spray once mascara and lipstick are complete.',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80',
    tags: ['Party Makeup', 'Long Lasting Makeup', 'Makeup Tips', 'Lahore Events'],
  },
  {
    id: 'blog-11',
    slug: 'bridal-hair-styling-ideas-pakistani-brides',
    title: 'Bridal Hair Styling Ideas for Pakistani Brides',
    category: 'Bridal',
    date: 'November 29, 2025',
    readTime: '6 min read',
    author: {
      name: 'Zainab Tariq',
      role: 'Head Bridal Makeup Artist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    },
    excerpt:
      'From traditional braided parandas to textured royal buns and cascading Hollywood waves, explore top bridal hair trends in Pakistan.',
    content: [
      'Bridal hair styling in Pakistan must accomplish two vital tasks: looking magnificent on camera and providing a secure foundation to support heavy embroidered dupattas and antique jewelry.',
      'The Regal Low Bun: The classic choice for Barat brides. Provides a firm anchor for heavy dupatta pins and allows prominent display of ornate chokers and jhumkas.',
      'Textured Floral Braid: Immensely popular for Mehndi and Mayun events. Intertwined with fragrant jasmine (motia) or roses, pearls, and traditional colorful parandas.',
      'Hollywood Waves: The contemporary favorite for Walima brides wearing pastel ensembles. Creates an editorial, red-carpet presence that balances modern silhouettes.',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=900&q=80',
    tags: ['Bridal Hair', 'Pakistani Bride', 'Hair Styling', 'Dupatta Setting'],
  },
  {
    id: 'blog-12',
    slug: 'how-often-should-you-get-a-facial',
    title: 'How Often Should You Get a Facial?',
    category: 'Facials',
    date: 'November 22, 2025',
    readTime: '4 min read',
    author: {
      name: 'Dr. Ayesha Malik',
      role: 'Clinical Aesthetician',
      avatar: 'https://images.unsplash.com/photo-1594824813689-d04b31a896cf?auto=format&fit=crop&w=200&q=80',
    },
    excerpt:
      'Learn about skin cell turnover cycles and how to build a monthly facial routine tailored to your skin type and age.',
    content: [
      'A common question we hear at our Gulberg salon is: "How frequently should I get a professional facial?"',
      'The scientific answer depends on your skin\'s natural cellular turnover rate. For young, healthy skin, new skin cells form and travel to the surface every 28 to 35 days. As we mature, this cycle slows down to 45 or even 60 days.',
      'For general maintenance and radiance, a professional clinical facial once every 4 weeks is optimal. For acute concerns like severe congestion or pre-bridal radiance, a course of 3 facials spaced 2 weeks apart delivers noticeable compounding improvements.',
    ],
    featuredImage:
      'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=900&q=80',
    tags: ['Facial Routine', 'Skin Health', 'Iqra Beauty Salon Lahore', 'Skincare Advice'],
  },
];

export const EXPERT_ADVICE_ARTICLES: ExpertAdviceArticle[] = [
  {
    id: 'adv-1',
    title: 'How to Choose the Right Hair Color for Your Skin Tone',
    category: 'Hair Color',
    author: {
      name: 'Sara Khan',
      title: 'Creative Hair Director & Master Colorist',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
      experience: '12+ Years Experience',
    },
    excerpt:
      'Unlock the secrets of warm vs cool undertones to select hair shades that illuminate your complexion rather than washing you out.',
    keyTakeaways: [
      'Check wrist vein color: greenish indicates warm undertones, bluish indicates cool undertones.',
      'Warm Pakistani skin looks sensational in rich toffee, caramel, chestnut, and cinnamon balayage.',
      'Avoid ash platinum blondes if your natural undertone is deep warm golden, as it creates an ashy gray cast.',
      'Always consult with our colorists at Iqra Beauty Salon Gulberg for a strand test before major tonal transitions.',
    ],
    fullGuide: [
      'Hair color is not one-size-fits-all. When selecting a new hue, matching your hair color to your natural skin undertone creates harmony.',
      'Understanding Warm Undertones: If gold jewelry flatters you more than silver, and your skin tans easily with golden hues, you have warm undertones. Rich mocha, milk chocolate, warm honey, and copper balayage will highlight your eyes and make your skin glow.',
      'Cool Undertones: If you have rosy or pinkish undertones, cool espresso, dark chocolate, and beige champagne blondes neutralize redness and provide clean contrast.',
    ],
    image:
      'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=80',
    readTime: '4 min read',
  },
  {
    id: 'adv-2',
    title: '7 Essential Hair Care Tips for Healthy, Shiny Hair',
    category: 'Hair Care',
    author: {
      name: 'Rida Asif',
      title: 'Senior Hair Care Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      experience: '8+ Years Experience',
    },
    excerpt:
      'Salon-approved daily habits that shield your hair cuticles from pollution, thermal damage, and brittle breakage.',
    keyTakeaways: [
      'Never brush wet hair with a standard paddle brush; use a wide-tooth comb or wet detangler starting from the ends.',
      'Lower flat iron heat to below 185°C (365°F) to prevent permanent keratin protein denaturation.',
      'Apply hair oil (argan, jojoba, or rosemary) only to mid-lengths and ends, never to congested scalp roots.',
      'Book a trim every 8 to 10 weeks to prevent split ends from migrating upward.',
    ],
    fullGuide: [
      'Glossy hair is a reflection of a healthy, closed cuticle layer. When hair cuticles lie flat and smooth, they reflect light like a mirror.',
      'The Cold Water Rinse Secret: Finish every shampoo session with 30 seconds of cool or cold water. Cold temperatures contract the cuticles, locking in conditioning agents and boosting immediate shine.',
      'Scalp Stimulation: Spend 3 minutes each night gently massaging your scalp in circular motions to boost capillary blood flow to hair follicles.',
    ],
    image:
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80',
    readTime: '5 min read',
  },
  {
    id: 'adv-3',
    title: 'How to Prepare Your Skin Before Bridal Makeup',
    category: 'Bridal Beauty',
    author: {
      name: 'Zainab Tariq',
      title: 'Lead Bridal Artist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      experience: '14+ Years Experience',
    },
    excerpt:
      'The exact skincare checklist every Pakistani bride must follow in the 48 hours leading up to her big day.',
    keyTakeaways: [
      'Do not wax, thread, or bleach face skin within 48 hours of bridal makeup application.',
      'Hydrate with water and electrolyte coconut water; dry dehydrated skin absorbs foundation unevenly.',
      'Avoid heavy salty snacks the night before to prevent under-eye fluid retention and puffiness.',
      'Arrive at Iqra Beauty Salon on your wedding day with cleanly washed, dry hair and bare, moisturized skin.',
    ],
    fullGuide: [
      'Bridal makeup is artistry painted on a canvas. The smoother and calmer that canvas is, the more breathtaking the makeup will look under 4K lenses.',
      'Thread and wax appointments should be done 3 to 4 days prior. This allows any micro-redness or bumps to completely dissipate before foundation application.',
      'Sleep is non-negotiable. Strive for 8 hours of uninterrupted sleep the night before Barat. Use a silk eye mask to wake up refreshed.',
    ],
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=80',
    readTime: '6 min read',
  },
  {
    id: 'adv-4',
    title: 'How to Make Your Makeup Last All Day',
    category: 'Makeup Prep',
    author: {
      name: 'Mahnoor Tariq',
      title: 'Senior Makeup Artist',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
      experience: '9+ Years Experience',
    },
    excerpt:
      'Master the secret micro-layering technique that prevents foundation creasing, patchiness, and unwanted shine.',
    keyTakeaways: [
      'Thoroughly remove surface oil and prep with an alcohol-free balancing toner.',
      'Apply foundation in wafer-thin sheer layers rather than one thick layer.',
      'Set high-movement zones (smile lines and under eyes) with finely milled translucent powder.',
      'Seal with a dual hydration and polymer setting spray.',
    ],
    fullGuide: [
      'Longevity in makeup is achieved through chemistry and adhesion. Thick, heavy layers of makeup slide off the skin because oils push them away.',
      'Thin, pressed layers bonded with high-grade fixing spray withstand moisture, humidity, and hours of wear. Keep oil-blotting sheets handy in your clutch for quick midday refreshes without disturbing your powder.',
    ],
    image:
      'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=900&q=80',
    readTime: '4 min read',
  },
  {
    id: 'adv-5',
    title: 'Best Skincare Routine for Glowing Skin',
    category: 'Skin Care',
    author: {
      name: 'Dr. Ayesha Malik',
      title: 'Consultant Dermatologist & Aesthetician',
      avatar: 'https://images.unsplash.com/photo-1594824813689-d04b31a896cf?auto=format&fit=crop&w=200&q=80',
      experience: '11+ Years Experience',
    },
    excerpt:
      'A simple, scientifically grounded morning and evening routine that strengthens your skin barrier and restores true luminosity.',
    keyTakeaways: [
      'Morning: Gentle cleanser, Vitamin C antioxidant serum, Hyaluronic acid, broad-spectrum SPF 50+.',
      'Evening: Double cleanse (oil balm then water cleanser), gentle chemical exfoliant (2x weekly), barrier ceramide cream.',
      'Consistency trumps complicated 10-step routines every time.',
      'Pair home care with a clinical facial once a month to reset pore health.',
    ],
    fullGuide: [
      'True skin radiance comes from an intact, healthy lipid barrier that can retain moisture and reflect light.',
      'Lahore\'s climate requires protecting against environmental pollution and UV radiation. Vitamin C in the morning neutralizes free radicals, while mineral or hybrid SPF prevents pigmentation and premature photo-aging.',
    ],
    image:
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=900&q=80',
    readTime: '5 min read',
  },
  {
    id: 'adv-6',
    title: 'Facial & Hair Treatment Aftercare Essentials',
    category: 'Aftercare',
    author: {
      name: 'Dr. Ayesha Malik',
      title: 'Consultant Dermatologist & Aesthetician',
      avatar: 'https://images.unsplash.com/photo-1594824813689-d04b31a896cf?auto=format&fit=crop&w=200&q=80',
      experience: '11+ Years Experience',
    },
    excerpt:
      'Extend the life of your salon investments with these professional aftercare protocols for facials, hair color, and keratin.',
    keyTakeaways: [
      'After facials: Avoid direct sun, intense workouts, and makeup for 24 hours.',
      'After hair color: Wash with cool water and sulfate-free shampoo to lock color molecules.',
      'After keratin: Keep hair straight, untied, and dry for 72 hours.',
      'Drink 2-3 liters of water to flush metabolic debris following body massages.',
    ],
    fullGuide: [
      'The work done in the salon chair is only 50% of the equation; the remaining 50% lies in how you treat your skin and hair over the following 72 hours.',
      'Respect the settling period: color oxidizes, keratin bonds solidify, and newly exfoliated skin pores calm down. By following these basic guidelines, your salon results will last twice as long.',
    ],
    image:
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=900&q=80',
    readTime: '4 min read',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Ayesha Raza',
    location: 'Gulberg III, Lahore',
    rating: 5,
    service: 'Bridal Makeover Package (Barat & Walima)',
    review:
      'Iqra Beauty Salon made me look and feel like absolute royalty on my wedding day! Zainab and her team were so patient, professional, and attentive. My makeup didn’t budge a single millimeter even after 12 hours of photos and emotional moments. The private bridal suite was pure luxury.',
    clientImage:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    date: 'February 2026',
  },
  {
    id: 't-2',
    clientName: 'Maham Siddiqui',
    location: 'DHA Phase 5, Lahore',
    rating: 5,
    service: 'Custom Balayage & Olaplex Treatment',
    review:
      'I was so terrified of coloring my dark hair, but Sara Khan did a caramel balayage that completely transformed my look without any damage! My hair is actually softer than before thanks to their Olaplex protocol. Hands down the best hair salon in Lahore.',
    clientImage:
      'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    date: 'January 2026',
  },
  {
    id: 't-3',
    clientName: 'Sanam Qureshi',
    location: 'Model Town, Lahore',
    rating: 5,
    service: 'Deluxe Hydra Facial & Spa Manicure',
    review:
      'The hygiene standards here are impeccable. You get your own sterile tools, warm rose water soaks, and the hydra facial gave me that coveted Korean glass-skin glow right before my sister’s engagement. The staff is so warm and respectful.',
    clientImage:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    date: 'January 2026',
  },
  {
    id: 't-4',
    clientName: 'Dr. Fatima Tariq',
    location: 'Cantt, Lahore',
    rating: 5,
    service: 'Aromatherapy Massage & Hair Cut',
    review:
      'As a physician with hectic hospital hours, stepping into Iqra Beauty Salon feels like an instant sanctuary of calm. The aromatherapy massage dissolved all my shoulder tension, followed by a precision haircut with Dyson styling. Worth every single rupee.',
    clientImage:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    date: 'December 2025',
  },
  {
    id: 't-5',
    clientName: 'Zehra Bilal',
    location: 'Johar Town, Lahore',
    rating: 5,
    service: 'Gel Nails & Party Glam Makeup',
    review:
      'Their nail art is unmatched in Lahore! Hina did gorgeous almond gel nails with chrome finish that lasted 4 weeks without chipping. The party makeup was dewy, elegant, and photographed beautifully.',
    clientImage:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    date: 'December 2025',
  },
  {
    id: 't-6',
    clientName: 'Alizeh Hashmi',
    location: 'Gulberg II, Lahore',
    rating: 5,
    service: 'Keratin Smoothing & Glow Facial',
    review:
      'My frizzy hair has never been this manageable! Washing and blow-drying used to take me 45 minutes; now it takes 10 minutes and looks like a salon blowout every single day. The team at Gulberg III is fabulous.',
    clientImage:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    date: 'November 2025',
  },
];

export const SALON_TEAM = [
  {
    name: 'Zainab Tariq',
    role: 'Creative Director & Lead Bridal Artist',
    experience: '14+ Years Experience',
    bio: 'Renowned for signature Pakistani bridal makeovers, royal dupatta draping, and flawless HD skin artistry.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Sara Khan',
    role: 'Master Hair Stylist & Color Educator',
    experience: '12+ Years Experience',
    bio: 'Certified with L’Oréal Paris & Olaplex. Specializes in bespoke balayage, corrective color, and precision cutting.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Dr. Ayesha Malik',
    role: 'Consultant Clinical Aesthetician',
    experience: '11+ Years Experience',
    bio: 'Passionate about medical-grade skin rejuvenation, Hydra Facials, and personalized acne and anti-aging treatments.',
    image: 'https://images.unsplash.com/photo-1594824813689-d04b31a896cf?auto=format&fit=crop&w=400&q=80',
  },
  {
    name: 'Mahnoor Tariq',
    role: 'Senior Makeup & Hairstyling Specialist',
    experience: '9+ Years Experience',
    bio: 'Expert in contemporary party glam, modern event looks, Hollywood waves, and traditional floral braided hairstyles.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
];
