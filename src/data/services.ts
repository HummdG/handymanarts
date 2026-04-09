export interface Service {
  slug: string
  name: string
  shortDescription: string
  longDescription: string
  iconKey: string
  heroImage: string
  whatWeOffer: string[]
  whoItsFor: string[]
  whyUs: string[]
  faq: { question: string; answer: string }[]
  metaTitle: string
  metaDescription: string
  keywords: string[]
}

export const SERVICES: Service[] = [
  {
    slug: 'painting-and-decorating',
    name: 'Painting & Decorating',
    shortDescription:
      'Interior painting, feature walls, ceilings and woodwork. Clean, precise results with minimal disruption.',
    longDescription:
      'Professional painting and decorating in Notting Hill W11 by Handyman Arts. Whether you need a full room repaint, a bold feature wall, or careful touch-up work, we deliver a clean, professional finish on time.',
    iconKey: 'paint',
    heroImage:
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1400&q=80&auto=format&fit=crop',
    whatWeOffer: [
      'Full room repaints — walls, ceilings and woodwork',
      'Feature walls and decorative finishes',
      'Touch-up and patch repair work',
      'Careful preparation, filling and sanding',
      'Exterior painting and weatherproofing',
      'Coving, skirting board and door frame painting',
    ],
    whoItsFor: [
      'Homeowners refreshing their living spaces',
      'Landlords preparing rental properties for new tenants',
      'Tenants undertaking end-of-tenancy improvements',
      'Property managers maintaining managed buildings',
    ],
    whyUs: [
      'Clean, dust-sheeted work — your home is left spotless',
      'High-quality Dulux Trade and Farrow & Ball finishes',
      'Punctual, no-fuss service',
      'Free colour consultation on request',
    ],
    faq: [
      {
        question: 'How long does a room take to paint?',
        answer:
          "A standard bedroom typically takes one day. Larger rooms or those requiring prep work may take two days. We'll give you an accurate estimate when we quote.",
      },
      {
        question: 'Do I need to move my furniture?',
        answer:
          "We'd ask you to clear smaller items. We cover all remaining furniture and flooring with dust sheets to keep your home clean.",
      },
      {
        question: 'What paint brands do you use?',
        answer:
          "We use Dulux Trade and Farrow & Ball ranges. You're welcome to supply your own paint — just let us know in advance.",
      },
      {
        question: 'Can you help me choose colours?',
        answer:
          "Absolutely. We're happy to advise on colour choices and can bring sample pots to help you decide.",
      },
    ],
    metaTitle: 'Painting & Decorating Notting Hill W11 | Handyman Arts',
    metaDescription:
      'Professional painting and decorating in Notting Hill W11 & West London. Clean, precise results by Handyman Arts. Free call-out & estimate. Call 079 00 33 66 43.',
    keywords: [
      'painting and decorating notting hill',
      'decorator w11',
      'painter notting hill',
      'interior painting west london',
    ],
  },
  {
    slug: 'tiling',
    name: 'Tiling',
    shortDescription:
      'Expert wall and floor tiling for bathrooms, kitchens and living areas. Clean grout lines, precise cuts.',
    longDescription:
      'Expert tiling services in Notting Hill W11. From bathroom walls to kitchen splashbacks and floor tiles, Handyman Arts delivers precise, beautifully finished tile work tailored to your space.',
    iconKey: 'tile',
    heroImage:
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=1400&q=80&auto=format&fit=crop',
    whatWeOffer: [
      'Bathroom wall and floor tiling',
      'Kitchen splashbacks and worktop surrounds',
      'Hallway and living room floor tiling',
      'Re-grouting and silicone replacement',
      'Tile removal and surface preparation',
      'Mosaic and decorative tile installation',
    ],
    whoItsFor: [
      'Homeowners renovating bathrooms or kitchens',
      'Landlords upgrading rental properties',
      'Property developers seeking reliable tradespeople',
      'Anyone needing a professional tile refresh',
    ],
    whyUs: [
      'Precise cuts and consistent grout lines',
      'Wide experience with large-format and decorative tiles',
      'Full surface preparation for a long-lasting result',
      'Tidy, respectful of your home',
    ],
    faq: [
      {
        question: 'How long does tiling a bathroom take?',
        answer:
          'A standard bathroom typically takes 2–3 days including wall and floor tiling, grouting and silicone sealing.',
      },
      {
        question: 'Can you remove old tiles before tiling?',
        answer:
          'Yes — tile removal and surface preparation are part of our service. We assess the wall condition before starting.',
      },
      {
        question: 'Do I need to supply tiles?',
        answer:
          "You're welcome to supply your own tiles, or we can advise on suppliers. We always recommend ordering 10% extra for cuts and breakages.",
      },
    ],
    metaTitle: 'Tiling Services Notting Hill W11 | Handyman Arts',
    metaDescription:
      'Professional tiling in Notting Hill W11 & West London. Bathrooms, kitchens, floors and walls. Free call-out & estimate by Handyman Arts.',
    keywords: [
      'tiling notting hill',
      'tiler w11',
      'bathroom tiling west london',
      'floor tiling notting hill',
    ],
  },
  {
    slug: 'plumbing-repairs',
    name: 'Plumbing Repairs',
    shortDescription:
      'Fast, reliable plumbing repairs for leaking taps, running toilets, pipe issues and more.',
    longDescription:
      'Fast and reliable plumbing repairs in Notting Hill W11 by Handyman Arts. We specialise in small to medium plumbing jobs — from a dripping tap to a running toilet or minor pipe leak — delivered with clean, dependable workmanship.',
    iconKey: 'plumbing',
    heroImage:
      'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1400&q=80&auto=format&fit=crop',
    whatWeOffer: [
      'Leaking tap repair and replacement',
      'Running toilet diagnosis and fix',
      'Under-sink pipe repairs and connections',
      'Radiator bleeding and valve replacement',
      'Shower head and mixer tap fitting',
      'Waste pipe blockage clearance',
    ],
    whoItsFor: [
      'Homeowners with niggling plumbing problems',
      'Landlords needing swift repairs between tenancies',
      'Tenants with urgent drips or leaks',
      'Property managers responding to maintenance requests',
    ],
    whyUs: [
      'Same-day appointments often available',
      'Clean, tidy work — no mess left behind',
      'Honest assessment — we only fix what needs fixing',
      'Competitive rates with no hidden call-out charges',
    ],
    faq: [
      {
        question: 'Do you do emergency plumbing?',
        answer:
          'We handle urgent plumbing repairs and aim to respond quickly. Call or WhatsApp us and we\'ll advise on availability.',
      },
      {
        question: 'Can you replace a full tap?',
        answer:
          'Yes — tap replacement including supply and fitting is a common job for us. We carry standard fittings and can source specific products if needed.',
      },
      {
        question: 'Do you handle boilers or gas work?',
        answer:
          'We do not carry out gas or boiler work — these require a Gas Safe registered engineer. We can recommend trusted local specialists.',
      },
    ],
    metaTitle: 'Plumbing Repairs Notting Hill W11 | Handyman Arts',
    metaDescription:
      'Fast plumbing repairs in Notting Hill W11 & West London. Leaking taps, running toilets, pipe issues. Free call-out. Call Handyman Arts: 079 00 33 66 43.',
    keywords: [
      'plumber notting hill',
      'plumbing repairs w11',
      'leaking tap notting hill',
      'plumbing handyman west london',
    ],
  },
  {
    slug: 'cctv-installation',
    name: 'CCTV Installation',
    shortDescription:
      'Professional security camera installation for homes, rentals and small businesses. Discreet and fully tested.',
    longDescription:
      'Professional CCTV installation in Notting Hill W11 by Handyman Arts. We deliver clean, discreet installations with properly positioned cameras, tidy cable management and full system testing so you can monitor your property with confidence.',
    iconKey: 'cctv',
    heroImage:
      'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1400&q=80&auto=format&fit=crop',
    whatWeOffer: [
      'HD and 4K camera installation (wired and wireless)',
      'Doorbell camera and video intercom fitting',
      'Cable routing and management for a tidy finish',
      'DVR/NVR setup and configuration',
      'Mobile app setup for remote monitoring',
      'System testing and full walkthrough on completion',
    ],
    whoItsFor: [
      'Homeowners wanting to improve security',
      'Landlords protecting rental properties',
      'Small business owners monitoring premises',
      'Anyone needing peace of mind while away',
    ],
    whyUs: [
      'Cameras positioned for optimal coverage',
      'Concealed cabling for a professional look',
      'We test every camera and walk you through the system',
      'Compatible with major smart home platforms',
    ],
    faq: [
      {
        question: 'Do I need to buy the cameras myself?',
        answer:
          'You can supply your own cameras or we can recommend and supply suitable equipment. We work with all major brands.',
      },
      {
        question: 'Will you drill holes in my walls?',
        answer:
          'Cable routing may require drilling depending on the layout. We always discuss the approach with you beforehand and make good after.',
      },
      {
        question: 'Can you set up remote viewing on my phone?',
        answer:
          'Yes — app setup and configuration for remote viewing is included. We walk you through how to use everything before we leave.',
      },
    ],
    metaTitle: 'CCTV Installation Notting Hill W11 | Handyman Arts',
    metaDescription:
      'Professional CCTV installation in Notting Hill W11 & West London. Home and business security cameras, fully tested. Free call-out by Handyman Arts.',
    keywords: [
      'cctv installation notting hill',
      'security camera fitting w11',
      'cctv installer west london',
      'home security notting hill',
    ],
  },
  {
    slug: 'smart-home-installation',
    name: 'Smart Home Installation',
    shortDescription:
      'Video doorbells, smart lighting, automation and more. Future-proof your home with expert installation.',
    longDescription:
      'Professional smart home installation in London by Handyman Arts. We help homeowners, landlords and businesses upgrade their properties with reliable smart technology — improving security, convenience and energy efficiency.',
    iconKey: 'smart',
    heroImage:
      'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1400&q=80&auto=format&fit=crop',
    whatWeOffer: [
      'Video doorbell installation (Ring, Nest, Arlo)',
      'Smart lighting setup (Philips Hue, LIFX)',
      'Smart thermostat fitting (Nest, Hive, Tado)',
      'Automated blinds and curtain track installation',
      'Smart speaker and display mounting',
      'Integration with Alexa, Google Home and Apple HomeKit',
    ],
    whoItsFor: [
      'Homeowners wanting a more connected home',
      'Landlords adding smart features to attract tenants',
      'Property managers upgrading managed buildings',
      'Businesses improving office security and efficiency',
    ],
    whyUs: [
      'Brand-agnostic advice — we recommend what suits you',
      'Clean installation with concealed wiring where possible',
      'Full setup, testing and demonstration on completion',
      'Support for all major smart home ecosystems',
    ],
    faq: [
      {
        question: 'Do I need to buy the devices first?',
        answer:
          'You can supply your own devices or we can advise on the best products for your needs and budget before we visit.',
      },
      {
        question: 'Will my smart doorbell work with my existing intercom?',
        answer:
          'This depends on your current setup. We assess compatibility during quoting and will advise on any additional hardware needed.',
      },
      {
        question: 'Can you connect everything to one app?',
        answer:
          'Where possible, yes. We can integrate compatible devices into a single platform like Google Home or Apple HomeKit for a unified experience.',
      },
    ],
    metaTitle: 'Smart Home Installation London | Handyman Arts',
    metaDescription:
      'Professional smart home installation in London & Notting Hill W11. Video doorbells, smart lighting, thermostats. Free estimate by Handyman Arts.',
    keywords: [
      'smart home installation london',
      'smart doorbell fitting notting hill',
      'smart lighting installer w11',
      'home automation west london',
    ],
  },
  {
    slug: 'picture-hanging',
    name: 'Picture Hanging',
    shortDescription:
      'Artwork, mirrors, gallery walls and heavy frames hung securely with accurate alignment.',
    longDescription:
      'Professional picture hanging in Notting Hill W11. From a single statement mirror to a full gallery wall, Handyman Arts ensures every piece is level, safely fixed and beautifully presented.',
    iconKey: 'frame',
    heroImage:
      'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=1400&q=80&auto=format&fit=crop',
    whatWeOffer: [
      'Single pictures, prints and paintings',
      'Large and heavy mirrors with appropriate fixings',
      'Gallery wall planning and installation',
      'Floating shelves and display ledges',
      'Artwork on plasterboard, brick and concrete walls',
      'Picture rail hooks and hanging systems',
    ],
    whoItsFor: [
      'Homeowners wanting a perfectly arranged wall',
      'Renters needing careful, damage-minimised hanging',
      'Interior designers requiring precise installation',
      'Offices and commercial spaces displaying artwork',
    ],
    whyUs: [
      'Always plumb, level and securely fixed',
      'We use the right fixings for every wall type',
      'Minimal wall damage — small, tidy holes only',
      'No job too small or too intricate',
    ],
    faq: [
      {
        question: 'Can you hang heavy mirrors?',
        answer:
          'Yes — we use appropriate fixings (cavity anchors, rawlbolts or direct masonry fixings) based on wall type and mirror weight.',
      },
      {
        question: 'Can you hang things on plasterboard?',
        answer:
          'Absolutely. We use specialist cavity wall fixings rated for the weight of your item to ensure a secure, lasting result.',
      },
      {
        question: 'Can you help plan a gallery wall layout?',
        answer:
          "Yes — we're happy to help arrange multiple pieces for a balanced, visually pleasing display before any fixings go in.",
      },
    ],
    metaTitle: 'Picture Hanging Notting Hill W11 | Handyman Arts',
    metaDescription:
      'Professional picture hanging in Notting Hill W11 & West London. Artwork, mirrors and gallery walls hung securely and precisely. Free call-out by Handyman Arts.',
    keywords: [
      'picture hanging notting hill',
      'mirror fitting w11',
      'gallery wall installation west london',
      'picture hanging service london',
    ],
  },
  {
    slug: 'jet-washing',
    name: 'Jet Washing',
    shortDescription:
      'Professional pressure washing for patios, driveways, paths and exterior surfaces.',
    longDescription:
      'Professional jet washing in Notting Hill W11 by Handyman Arts. We restore patios, paths, driveways and exterior walls to their best — removing years of grime, moss and algae safely and thoroughly.',
    iconKey: 'water',
    heroImage:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&q=80&auto=format&fit=crop',
    whatWeOffer: [
      'Patio and terrace cleaning',
      'Driveway and pathway pressure washing',
      'Garden wall and boundary fence cleaning',
      'Exterior brickwork and render cleaning',
      'Decking cleaning and preparation',
      'Steps and communal area washing',
    ],
    whoItsFor: [
      'Homeowners preparing outdoor spaces for summer',
      'Landlords maintaining exterior presentation',
      'Property managers keeping communal areas clean',
      'Anyone with slippery, algae-covered surfaces',
    ],
    whyUs: [
      'Professional-grade equipment for a thorough clean',
      'Safe for all common surface types',
      'Removes moss, algae, grime and staining',
      'Available year-round',
    ],
    faq: [
      {
        question: 'Will jet washing damage my patio?',
        answer:
          'We adjust pressure to suit the surface type. Natural stone, porcelain and concrete each require different settings — we know the difference.',
      },
      {
        question: 'How long does a patio take?',
        answer:
          'A typical medium-sized patio takes 2–4 hours. We can give a more accurate estimate based on your specific area.',
      },
      {
        question: 'Do you add a sealant after cleaning?',
        answer:
          "We can apply a patio sealant or biocide treatment after cleaning to prevent algae regrowth — just ask when booking.",
      },
    ],
    metaTitle: 'Jet Washing Notting Hill W11 | Handyman Arts',
    metaDescription:
      'Professional jet washing in Notting Hill W11 & West London. Patios, driveways, paths and exterior cleaning. Free call-out by Handyman Arts.',
    keywords: [
      'jet washing notting hill',
      'pressure washing w11',
      'patio cleaning west london',
      'driveway cleaning notting hill',
    ],
  },
  {
    slug: 'tv-wall-mounting',
    name: 'TV Wall Mounting',
    shortDescription:
      'Professional TV installation on any wall type. Cable management included for a clean finish.',
    longDescription:
      'Professional TV wall mounting in Notting Hill W11 by Handyman Arts. We mount any size TV safely and securely, with tidy cable management for a clean, built-in look.',
    iconKey: 'tv',
    heroImage:
      'https://images.unsplash.com/photo-1601944179066-29786cb9d32a?w=1400&q=80&auto=format&fit=crop',
    whatWeOffer: [
      'Fixed and tilting bracket installation',
      'Full-motion articulated arm mounting',
      'Cable concealment and management',
      'HDMI and aerial cable routing',
      'TV mounting on any wall type (plasterboard, brick, concrete)',
      'Old bracket removal and wall making-good',
    ],
    whoItsFor: [
      'Homeowners upgrading their living room setup',
      'Landlords furnishing rental properties',
      'Anyone who wants a professional, tidy result',
    ],
    whyUs: [
      'Your TV is level, centred and rock-solid',
      'Cables hidden inside the wall or in a trunking',
      'We bring all fixings, anchors and tools',
      'Quick, clean job — usually under 2 hours',
    ],
    faq: [
      {
        question: 'Can you mount a TV on a plasterboard wall?',
        answer:
          'Yes — we use specialist cavity wall anchors rated for the weight of your TV. We always find studs where possible for maximum security.',
      },
      {
        question: 'Can you hide the cables?',
        answer:
          'Yes — we can route cables inside the wall cavity or use surface-mounted trunking for a tidy finish. This is included in our standard service.',
      },
      {
        question: 'Do I need to supply the bracket?',
        answer:
          "You can supply your own bracket or we can advise on and supply the right one for your TV size and wall type.",
      },
    ],
    metaTitle: 'TV Wall Mounting Notting Hill W11 | Handyman Arts',
    metaDescription:
      'Professional TV wall mounting in Notting Hill W11 & West London. All wall types, cable management included. Book online with Handyman Arts.',
    keywords: [
      'tv wall mounting notting hill',
      'tv mounting service w11',
      'tv bracket installation west london',
      'tv fitting notting hill',
    ],
  },
  {
    slug: 'furniture-assembly',
    name: 'Furniture Assembly',
    shortDescription:
      'Flat-pack and self-assembly furniture built quickly, correctly and safely.',
    longDescription:
      'Flat-pack furniture assembly in Notting Hill W11 by Handyman Arts. We assemble IKEA, Argos, Wayfair and all major brands quickly and correctly — saving you the frustration and ensuring everything is safe and solid.',
    iconKey: 'furniture',
    heroImage:
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1400&q=80&auto=format&fit=crop',
    whatWeOffer: [
      'Wardrobes, bed frames and chest of drawers',
      'Flat-pack desks, shelving units and bookcases',
      'Dining tables and chairs',
      'TV units and media furniture',
      'Office furniture and storage',
      'All major brands: IKEA, Argos, Wayfair, Made and more',
    ],
    whoItsFor: [
      'Homeowners after a new delivery',
      'Tenants moving into a new property',
      'Landlords furnishing rental properties',
      'Anyone short on time or patience',
    ],
    whyUs: [
      'Fast, efficient assembly with professional tools',
      'Everything checked for stability and safety',
      'Packaging removed and disposed of on request',
      'Happy to assemble multiple items in one visit',
    ],
    faq: [
      {
        question: 'How long does flat-pack assembly take?',
        answer:
          'A wardrobe typically takes 1–2 hours. Smaller items like a chest of drawers may take 30–45 minutes. We can give you a time estimate when you share the item details.',
      },
      {
        question: 'Can you assemble multiple items at once?',
        answer:
          "Absolutely — it's often more cost-effective to book one visit for several items rather than individual appointments.",
      },
      {
        question: 'What if parts are missing from my flatpack?',
        answer:
          "We'll identify any missing parts and advise you. We carry some common fixings but for brand-specific parts you'd need to contact the retailer.",
      },
    ],
    metaTitle: 'Furniture Assembly Notting Hill W11 | Handyman Arts',
    metaDescription:
      'Flat-pack furniture assembly in Notting Hill W11 & West London. IKEA, Argos, Wayfair and more. Quick, safe, professional. Free call-out by Handyman Arts.',
    keywords: [
      'furniture assembly notting hill',
      'flat pack assembly w11',
      'ikea assembly west london',
      'furniture builder notting hill',
    ],
  },
  {
    slug: 'carpentry-and-joinery',
    name: 'Carpentry & Joinery',
    shortDescription:
      'Bespoke carpentry, shelving, door repairs, skirting boards and more. Quality craftsmanship throughout.',
    longDescription:
      'Professional carpentry and joinery in Notting Hill W11 by Handyman Arts. From custom shelving and boxing-in to door repairs and skirting board installation, we bring quality craftsmanship to every wooden job.',
    iconKey: 'carpentry',
    heroImage:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1400&q=80&auto=format&fit=crop',
    whatWeOffer: [
      'Custom shelving and alcove shelving',
      'Door hanging, adjustment and lock fitting',
      'Skirting board and architrave installation',
      'Stud wall construction',
      'Boxing-in pipework and awkward spaces',
      'Wooden flooring fitting and repair',
    ],
    whoItsFor: [
      'Homeowners wanting bespoke storage or joinery',
      'Landlords maintaining wooden fixtures and fittings',
      'Property developers needing reliable carpentry',
      'Anyone with a specific woodwork requirement',
    ],
    whyUs: [
      'Quality materials and proper joinery techniques',
      'Custom work fitted precisely to your space',
      'Doors that open, close and latch as they should',
      'Clean, painted-ready finishes',
    ],
    faq: [
      {
        question: 'Can you build alcove shelving?',
        answer:
          'Yes — alcove shelving and storage is a speciality. We measure, build and fit shelves that look built-in and are rated for your load requirements.',
      },
      {
        question: 'Can you repair a door that won\'t close properly?',
        answer:
          "Absolutely. We diagnose and fix sticking, dropping and binding doors — usually caused by hinges, swelling or settlement — without needing to replace the door.",
      },
      {
        question: 'Do you do loft hatches or access panels?',
        answer:
          "Yes — loft hatch installation and access panel fitting are part of our carpentry range.",
      },
    ],
    metaTitle: 'Carpentry & Joinery Notting Hill W11 | Handyman Arts',
    metaDescription:
      'Professional carpentry and joinery in Notting Hill W11 & West London. Shelving, doors, skirting boards and more. Free call-out by Handyman Arts.',
    keywords: [
      'carpentry notting hill',
      'joiner w11',
      'carpenter west london',
      'shelving installation notting hill',
    ],
  },
  {
    slug: 'odd-jobs-and-repairs',
    name: 'Odd Jobs & Repairs',
    shortDescription:
      'No job too small. Locks, hinges, dripping taps, leaky gutters, minor repairs and household fixes.',
    longDescription:
      "Professional odd jobs and home repairs in Notting Hill W11 by Handyman Arts. We handle the small jobs that pile up — stiff locks, loose hinges, dripping taps, cracked tiles, leaky gutters and everything in between. If it needs fixing, we can help.",
    iconKey: 'tools',
    heroImage:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1400&q=80&auto=format&fit=crop',
    whatWeOffer: [
      'Lock and hinge repair or replacement',
      'Minor electrical fixes (light fittings, switches)',
      'Gutter repair and clearing',
      'Draught-proofing doors and windows',
      'Fence post and gate repair',
      'Miscellaneous household repairs and improvements',
    ],
    whoItsFor: [
      'Homeowners with a list of small jobs',
      'Busy professionals who need someone reliable',
      'Older residents needing home maintenance help',
      'Landlords keeping properties well-maintained',
    ],
    whyUs: [
      'One call for multiple jobs in a single visit',
      'Honest, practical advice — we only do what\'s needed',
      'Nothing too trivial or too fiddly',
      'Trusted by hundreds of local residents',
    ],
    faq: [
      {
        question: 'Can I give you a list of small jobs?',
        answer:
          "Yes — that's exactly how many customers use us. Book a half-day or full day and we work through your list efficiently.",
      },
      {
        question: 'Do you do electrical work?',
        answer:
          'We handle minor electrical tasks like fitting light fittings, replacing switches and installing light switches. For full rewires or consumer unit work, we recommend a certified electrician.',
      },
      {
        question: 'Is there a minimum booking?',
        answer:
          'We charge a minimum of one hour. Most small jobs take 30 minutes to 2 hours, so one visit usually covers several items on your list.',
      },
    ],
    metaTitle: 'Odd Jobs & Repairs Notting Hill W11 | Handyman Arts',
    metaDescription:
      'Odd jobs and home repairs in Notting Hill W11 & West London. Locks, hinges, gutters, minor repairs and more. Free call-out by Handyman Arts.',
    keywords: [
      'odd jobs notting hill',
      'handyman repairs w11',
      'home repairs west london',
      'odd job man notting hill',
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

export function getServiceSlugs(): string[] {
  return SERVICES.map((s) => s.slug)
}
