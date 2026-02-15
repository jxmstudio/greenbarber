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
  image?: string;
}

export const services: Service[] = [
  {
    id: "hedge-trimming",
    name: "Hedge Trimming",
    slug: "hedge-trimming",
    shortDescription: "Professional hedge trimming services throughout Southern Tasmania with precision and care.",
    description: "Keep your hedges looking neat and healthy with our professional hedge trimming services. We serve Dodges Ferry, Carlton Beach, Eagle Hawk Neck, Midway Point, Sorrell, Hobart, Howrah, West Hobart, and throughout Southern Tasmania. Our expert trimming ensures your hedges maintain their shape, health, and aesthetic appeal.",
    benefits: [
      "Precise trimming for clean, uniform appearance",
      "Promotes healthy hedge growth",
      "Maintains proper hedge shape and size",
      "Prevents overgrowth and encroachment",
      "Expert knowledge of hedge species",
      "Complete cleanup included",
    ],
    process: {
      title: "Our Hedge Trimming Process",
      steps: [
        "Assessment of hedge condition and species",
        "Determining optimal trimming schedule",
        "Precision trimming with appropriate tools",
        "Shaping hedges to desired appearance",
        "Removal of trimmings and debris",
        "Final cleanup and disposal",
      ],
    },
    faq: [
      {
        question: "How often should hedges be trimmed in Southern Tasmania?",
        answer: "Most hedges benefit from trimming 2-4 times per year, depending on the species and growth rate. Fast-growing hedges may need more frequent attention. We'll provide a maintenance schedule based on your specific hedge types.",
      },
      {
        question: "What is the best time of year to trim hedges?",
        answer: "The best time varies by species, but generally spring and autumn are ideal. We can advise the optimal timing for your specific hedge types in Tasmania's climate.",
      },
      {
        question: "How much does hedge trimming cost in Southern Tasmania?",
        answer: "Hedge trimming costs vary based on hedge length, height, complexity, and accessibility. We provide free quotes for all hedge trimming projects. Contact us for an assessment.",
      },
      {
        question: "Can you trim hedges that are overgrown?",
        answer: "Yes, we can restore overgrown hedges through careful trimming. For severely overgrown hedges, we may recommend a staged approach to avoid shocking the plants.",
      },
      {
        question: "Do you clean up after hedge trimming?",
        answer: "Yes, we remove all trimmings and debris from your property as part of our service. You can also choose to keep trimmings for composting if desired.",
      },
      {
        question: "What types of hedges do you work with?",
        answer: "We work with all common hedge species found in Southern Tasmania, including conifers, deciduous hedges, and native species. We understand the specific needs of each type.",
      },
    ],
    pricing: "Contact us for a free quote. Pricing depends on hedge length, height, and trimming frequency.",
    imageAlt: "Professional hedge trimming service in Southern Tasmania",
    image: "/treepruning/Attachment.jpeg",
  },
  {
    id: "tree-pruning",
    name: "Tree Pruning and Reductions",
    slug: "tree-pruning",
    shortDescription: "Professional tree pruning and reduction services throughout Southern Tasmania.",
    description: "Maintain the health, safety, and appearance of your trees with our professional tree pruning and reduction services. We offer various techniques including crown reduction, deadwood removal, structural pruning, and formative pruning. Our services cover Dodges Ferry, Carlton Beach, Eagle Hawk Neck, Midway Point, Sorrell, Hobart, Howrah, West Hobart, and throughout Southern Tasmania.",
    benefits: [
      "Improved tree health and structure",
      "Crown reduction to manage tree size",
      "Enhanced safety by removing hazardous branches",
      "Better tree appearance and shape",
      "Increased sunlight penetration",
      "Prevention of disease and pest issues",
      "Expert knowledge of tree biology",
    ],
    process: {
      title: "Our Tree Pruning and Reduction Process",
      steps: [
        "Assessment of tree health, structure, and size",
        "Identifying pruning objectives (health, safety, size reduction)",
        "Selecting appropriate pruning techniques",
        "Professional pruning with proper cuts",
        "Crown reduction when needed to manage tree size",
        "Removal of pruned branches",
        "Cleanup and disposal of debris",
      ],
    },
    faq: [
      {
        question: "What is tree reduction?",
        answer: "Tree reduction involves reducing the overall size of a tree's crown by cutting back branches to suitable growth points. This helps manage tree size while maintaining tree health and structure.",
      },
      {
        question: "When is the best time to prune trees in Southern Tasmania?",
        answer: "Most trees can be pruned year-round in Tasmania's climate. However, some species have optimal pruning times. We'll advise the best time for your specific trees during our assessment.",
      },
      {
        question: "How much does tree pruning and reduction cost in Southern Tasmania?",
        answer: "Pruning and reduction costs vary based on tree size, number of trees, pruning type, and access. We provide free quotes for all pruning projects. Contact us for an assessment.",
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
    imageAlt: "Professional tree pruning and reduction service in Southern Tasmania",
    image: "/treepruning/2E0F9B34-D929-4F70-B4E2-5833C3F1B866.jpeg",
  },
  {
    id: "tree-removal",
    name: "Tree Removal",
    slug: "tree-removal",
    shortDescription: "Professional tree removal services throughout Southern Tasmania with safe and efficient techniques.",
    description: "Our expert tree removal services ensure safe and efficient removal of trees that pose risks to your property or need to be removed for development. We serve Dodges Ferry, Carlton Beach, Eagle Hawk Neck, Midway Point, Sorrell, Hobart, Howrah, West Hobart, and throughout Southern Tasmania.",
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
        question: "How much does tree removal cost in Southern Tasmania?",
        answer: "Tree removal costs vary based on tree size, location, complexity, and access. We provide free quotes for all tree removal projects throughout Southern Tasmania. Contact us for a detailed assessment.",
      },
      {
        question: "Do I need a permit for tree removal?",
        answer: "Some trees in Southern Tasmania require council permits before removal, especially heritage-listed or significant trees. We can help you determine if a permit is needed and assist with the application process.",
      },
      {
        question: "How long does tree removal take?",
        answer: "Most residential tree removals can be completed in one day. Larger trees or complex situations may require additional time. We'll provide a timeline during your free quote.",
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
    imageAlt: "Professional tree removal service with crane in Southern Tasmania",
    image: "/Crane jobs/IMG_2768.jpeg",
  },
  {
    id: "stump-grinding",
    name: "Stump Grinding",
    slug: "stump-grinding",
    shortDescription: "Professional stump grinding services throughout Southern Tasmania.",
    description: "Remove unsightly tree stumps safely and efficiently with our professional stump grinding services. We serve Dodges Ferry, Carlton Beach, Eagle Hawk Neck, Midway Point, Sorrell, Hobart, Howrah, West Hobart, and throughout Southern Tasmania. Our modern equipment grinds stumps below ground level, leaving your yard ready for new landscaping.",
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
        question: "How much does stump grinding cost in Southern Tasmania?",
        answer: "Stump grinding costs vary based on stump diameter and location. We provide free quotes for all stump grinding projects throughout Southern Tasmania. Generally, smaller stumps are more affordable.",
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
        answer: "Most stump grinding jobs take 30 minutes to 2 hours, depending on stump size. Multiple stumps can be completed in a single visit.",
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
    imageAlt: "Professional stump grinding service in Southern Tasmania",
    image: "/Stump grinding : removing /IMG_6335.jpeg",
  },
];

export const serviceAreas = [
  "Dodges Ferry",
  "Carlton Beach",
  "Eagle Hawk Neck",
  "Midway Point",
  "Sorrell",
  "Hobart",
  "Howrah",
  "West Hobart",
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

