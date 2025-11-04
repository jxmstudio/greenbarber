/**
 * Service data structure for The Green Barber
 * Contains service information, FAQs, and content for SEO-optimized pages
 */

export interface Service {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  process: {
    title: string;
    steps: string[];
  };
  faq: {
    question: string;
    answer: string;
  }[];
  pricing: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    id: "tree-removal",
    name: "Tree Removal",
    slug: "tree-removal",
    shortDescription: "Professional tree removal services in Hobart with safe and efficient techniques.",
    description: "Our expert tree removal services in Hobart ensure safe and efficient removal of trees that pose risks to your property or need to be removed for development. We serve Hobart and surrounding suburbs including Battery Point, Sandy Bay, New Town, and Lenah Valley.",
    benefits: [
      "Safe removal of hazardous trees",
      "Professional equipment and techniques",
      "Complete site cleanup",
      "Insured and certified arborists",
      "Emergency tree removal available",
    ],
    process: {
      title: "Our Tree Removal Process",
      steps: [
        "Site assessment and safety evaluation",
        "Obtaining necessary permits (if required)",
        "Strategic planning for safe removal",
        "Professional tree removal using appropriate equipment",
        "Stump removal or grinding (optional)",
        "Complete cleanup and debris removal",
      ],
    },
    faq: [
      {
        question: "How much does tree removal cost in Hobart?",
        answer: "Tree removal costs vary based on tree size, location, complexity, and access. We provide free quotes for all tree removal projects in Hobart. Contact us for a detailed assessment.",
      },
      {
        question: "Do I need a permit for tree removal in Hobart?",
        answer: "Some trees in Hobart require council permits before removal, especially heritage-listed or significant trees. We can help you determine if a permit is needed and assist with the application process.",
      },
      {
        question: "How long does tree removal take?",
        answer: "Most residential tree removals in Hobart can be completed in one day. Larger trees or complex situations may require additional time. We'll provide a timeline during your free quote.",
      },
      {
        question: "Do you remove the stump as well?",
        answer: "Stump removal is available as an additional service. We can either remove the stump completely or grind it down. Stump grinding is often more cost-effective and less disruptive.",
      },
      {
        question: "Are you insured for tree removal?",
        answer: "Yes, we are fully insured with public liability insurance. Your property and our team are protected during all tree removal operations.",
      },
      {
        question: "Can you remove trees close to power lines?",
        answer: "Yes, we have experience working around power lines and follow strict safety protocols. We coordinate with utility companies when necessary to ensure safe operations.",
      },
    ],
    pricing: "Contact us for a free quote. Pricing depends on tree size, location, and complexity.",
    imageAlt: "Professional tree removal service in Hobart, Tasmania",
  },
  {
    id: "stump-grinding",
    name: "Stump Grinding",
    slug: "stump-grinding",
    shortDescription: "Professional stump grinding services throughout Hobart and surrounding areas.",
    description: "Remove unsightly tree stumps safely and efficiently with our professional stump grinding services. We serve Hobart, Battery Point, Sandy Bay, New Town, Lenah Valley, and surrounding suburbs. Our modern equipment grinds stumps below ground level, leaving your yard ready for new landscaping.",
    benefits: [
      "Fast and efficient stump removal",
      "No damage to surrounding areas",
      "Modern grinding equipment",
      "Complete cleanup included",
      "Prevents tree regrowth",
      "Improves property aesthetics",
    ],
    process: {
      title: "Stump Grinding Process",
      steps: [
        "Assessment of stump size and location",
        "Checking for underground utilities",
        "Grinding stump below ground level (typically 15-30cm)",
        "Removing wood chips and debris",
        "Filling hole with soil or mulch (optional)",
        "Final cleanup",
      ],
    },
    faq: [
      {
        question: "How much does stump grinding cost in Hobart?",
        answer: "Stump grinding costs vary based on stump diameter and location. We provide free quotes for all Hobart stump grinding projects. Generally, smaller stumps are more affordable.",
      },
      {
        question: "How deep can you grind a stump?",
        answer: "We typically grind stumps 15-30cm below ground level, which is sufficient for most landscaping needs. Deeper grinding can be arranged if needed for specific projects.",
      },
      {
        question: "What happens to the wood chips?",
        answer: "Wood chips can be removed from your property or left as mulch, depending on your preference. We'll discuss this option during your quote.",
      },
      {
        question: "How long does stump grinding take?",
        answer: "Most stump grinding jobs in Hobart take 30 minutes to 2 hours, depending on stump size. Multiple stumps can be completed in a single visit.",
      },
      {
        question: "Can you grind stumps in tight spaces?",
        answer: "Yes, our equipment can access most areas. We have different-sized grinders for various access situations. We'll assess accessibility during your free quote.",
      },
      {
        question: "Will stump grinding damage my lawn?",
        answer: "Our equipment is designed to minimize impact on surrounding areas. We take care to protect your lawn and landscaping during the grinding process.",
      },
    ],
    pricing: "Contact us for a free quote. Pricing is based on stump diameter and accessibility.",
    imageAlt: "Professional stump grinding service in Hobart, Tasmania",
  },
  {
    id: "crane-work",
    name: "Crane Work",
    slug: "crane-work",
    shortDescription: "Specialized crane-assisted tree work for large and complex projects in Hobart.",
    description: "For large trees or difficult access situations, our crane-assisted tree services provide safe and efficient solutions. We serve Hobart and surrounding areas, handling complex tree removals that require specialized equipment. Crane work is ideal for large trees, trees over structures, or when access is limited.",
    benefits: [
      "Safe removal of large trees",
      "Access to difficult locations",
      "Minimal impact on surrounding areas",
      "Precise control during removal",
      "Faster completion for large projects",
      "Professional crane operators",
    ],
    process: {
      title: "Crane-Assisted Tree Removal Process",
      steps: [
        "Site assessment and access evaluation",
        "Crane placement planning",
        "Securing necessary permits and clearances",
        "Rigging tree sections for controlled removal",
        "Crane-assisted removal of tree sections",
        "Complete cleanup and site restoration",
      ],
    },
    faq: [
      {
        question: "When is crane work necessary for tree removal?",
        answer: "Crane work is recommended for very large trees, trees over structures or obstacles, trees in confined spaces, or when traditional methods pose safety risks. We assess each situation during our free quote.",
      },
      {
        question: "How much does crane work cost in Hobart?",
        answer: "Crane work costs more than standard tree removal due to equipment and operator requirements. We provide detailed quotes after assessing your specific situation. Contact us for a free consultation.",
      },
      {
        question: "Do you need special permits for crane work?",
        answer: "Crane work may require road closures or traffic management in some Hobart locations. We handle all necessary permits and coordinate with local authorities as needed.",
      },
      {
        question: "How long does crane-assisted removal take?",
        answer: "Crane work is often faster than traditional methods for large trees. Most crane-assisted removals are completed in one day, though this depends on tree size and complexity.",
      },
      {
        question: "Is crane work safe?",
        answer: "Yes, when performed by certified professionals. Our team includes certified crane operators and arborists who follow strict safety protocols. We're fully insured for all crane operations.",
      },
      {
        question: "What size trees can be removed with a crane?",
        answer: "Cranes can handle trees of virtually any size. We use appropriately sized cranes for each project, from smaller cranes for residential work to larger cranes for commercial projects.",
      },
    ],
    pricing: "Contact us for a free quote. Crane work pricing depends on tree size, access, and project complexity.",
    imageAlt: "Crane-assisted tree removal service in Hobart, Tasmania",
  },
  {
    id: "tree-pruning",
    name: "Tree Pruning",
    slug: "tree-pruning",
    shortDescription: "Professional tree pruning and trimming services to maintain healthy trees in Hobart.",
    description: "Maintain the health and appearance of your trees with our professional pruning services in Hobart. We offer various pruning techniques including crown reduction, deadwood removal, structural pruning, and formative pruning. Our services cover Hobart, Battery Point, Sandy Bay, New Town, Lenah Valley, and surrounding suburbs.",
    benefits: [
      "Improved tree health and structure",
      "Enhanced safety by removing hazardous branches",
      "Better tree appearance and shape",
      "Increased sunlight penetration",
      "Prevention of disease and pest issues",
      "Expert knowledge of tree biology",
    ],
    process: {
      title: "Our Tree Pruning Process",
      steps: [
        "Assessment of tree health and structure",
        "Identifying pruning objectives",
        "Selecting appropriate pruning techniques",
        "Professional pruning with proper cuts",
        "Removal of pruned branches",
        "Cleanup and disposal of debris",
      ],
    },
    faq: [
      {
        question: "When is the best time to prune trees in Hobart?",
        answer: "Most trees can be pruned year-round in Tasmania's climate. However, some species have optimal pruning times. We'll advise the best time for your specific trees during our assessment.",
      },
      {
        question: "How much does tree pruning cost in Hobart?",
        answer: "Pruning costs vary based on tree size, number of trees, pruning type, and access. We provide free quotes for all pruning projects. Contact us for an assessment.",
      },
      {
        question: "What types of pruning do you offer?",
        answer: "We offer crown reduction, deadwood removal, structural pruning, formative pruning, vista pruning, and hazard reduction pruning. We'll recommend the best approach for your trees.",
      },
      {
        question: "How often should trees be pruned?",
        answer: "Most trees benefit from pruning every 2-3 years, though this varies by species and objectives. Fast-growing trees may need more frequent attention. We'll provide a maintenance schedule during our visit.",
      },
      {
        question: "Can pruning harm my tree?",
        answer: "When done correctly by qualified arborists, pruning benefits trees. Improper pruning can cause damage, which is why professional service is important.",
      },
      {
        question: "Do you clean up after pruning?",
        answer: "Yes, we remove all pruned branches and debris from your property. You can also choose to keep wood chips for mulch if desired.",
      },
      {
        question: "Are you qualified arborists?",
        answer: "Yes, our team includes qualified arborists with certification and extensive experience in tree care. We stay current with best practices and arboricultural standards.",
      },
    ],
    pricing: "Contact us for a free quote. Pricing depends on tree size, pruning type, and number of trees.",
    imageAlt: "Professional tree pruning service in Hobart, Tasmania",
  },
];

export const serviceAreas = [
  "Hobart",
  "Battery Point",
  "Sandy Bay",
  "New Town",
  "Lenah Valley",
  "West Hobart",
  "North Hobart",
  "South Hobart",
  "Mount Stuart",
  "Dynnyrne",
  "Bellerive",
  "Howrah",
  "Tranmere",
  "Rokeby",
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

