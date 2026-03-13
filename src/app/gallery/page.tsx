import { Metadata } from "next";
import Image from "next/image";
import { ContactStrip } from "@/components/common/ContactStrip";

export const metadata: Metadata = {
  title: "Gallery | The Green Barber",
  description:
    "View our work across Southern Tasmania — tree removal, crane jobs, stump grinding, tree pruning, and hedge trimming. Professional results by The Green Barber.",
  openGraph: {
    title: "Gallery | The Green Barber",
    description:
      "Browse photos of our professional tree services throughout Southern Tasmania.",
    type: "website",
  },
};

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

const images: GalleryImage[] = [
  // Crane jobs
  {
    src: "/Crane jobs/IMG_2768.jpeg",
    alt: "Crane-assisted tree removal in Southern Tasmania",
    category: "Tree Removal",
  },
  {
    src: "/Crane jobs/IMG_4873.jpeg",
    alt: "Crane operation for large tree removal",
    category: "Tree Removal",
  },
  {
    src: "/Crane jobs/IMG_5300.png",
    alt: "Professional crane job by The Green Barber",
    category: "Tree Removal",
  },
  {
    src: "/Crane jobs/9013A140-0892-43D6-AABA-CA431A2FE66C.jpeg",
    alt: "Crane-assisted tree removal, Southern Tasmania",
    category: "Tree Removal",
  },
  {
    src: "/Crane jobs/Resized_20240910_131001_1725952583657.jpeg",
    alt: "Large tree removal with crane equipment",
    category: "Tree Removal",
  },
  // Tree removal
  {
    src: "/Tree removal/IMG_6649.jpeg",
    alt: "Tree removal service in Southern Tasmania",
    category: "Tree Removal",
  },
  {
    src: "/Tree removal/IMG_6651.jpeg",
    alt: "Professional tree removal completed",
    category: "Tree Removal",
  },
  {
    src: "/Tree removal/IMG_7279.jpeg",
    alt: "Hazardous tree removal by certified arborists",
    category: "Tree Removal",
  },
  // Stump grinding
  {
    src: "/stump-grinding-removing/IMG_6335.jpeg",
    alt: "Stump grinding in progress, Southern Tasmania",
    category: "Stump Grinding",
  },
  {
    src: "/stump-grinding-removing/IMG_6337.jpeg",
    alt: "Stump removal completed — clean result",
    category: "Stump Grinding",
  },
  // Tree pruning
  {
    src: "/treepruning/2E0F9B34-D929-4F70-B4E2-5833C3F1B866.jpeg",
    alt: "Tree pruning and crown reduction, Southern Tasmania",
    category: "Tree Pruning",
  },
  {
    src: "/treepruning/51ff7759-c77b-4edf-80bd-49a748404a43.jpeg",
    alt: "Professional tree pruning by qualified arborists",
    category: "Tree Pruning",
  },
  {
    src: "/treepruning/Attachment.jpeg",
    alt: "Tree pruning service in Southern Tasmania",
    category: "Tree Pruning",
  },
];

const categories = ["All", ...Array.from(new Set(images.map((img) => img.category)))];

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <section className="text-white py-16 md:py-24 relative overflow-hidden bg-layered-gradient">
        <div className="absolute inset-0 pattern-organic opacity-40" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-block mb-4">
            <div className="h-1 w-16 bg-white/30 mx-auto rounded-full" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Work</h1>
          <p className="text-xl text-gray-100 max-w-2xl">
            A selection of completed jobs across Southern Tasmania — from large crane removals to
            precise pruning and stump grinding.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
            role="list"
            aria-label="Gallery of completed tree service jobs"
          >
            {images.map((image, index) => (
              <div
                key={index}
                role="listitem"
                className="group relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3] shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={index < 6 ? "eager" : "lazy"}
                />
                {/* Category badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-sm font-medium text-white">{image.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactStrip />
    </>
  );
}
