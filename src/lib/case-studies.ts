import { AREAS, type AreaSlug } from "@/lib/content";

export type CaseStudyImage = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

export type CaseStudy = {
  slug: string;
  title: string;
  eyebrow: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  summary: string;
  heroLines: string[];
  brief: string[];
  build: string[];
  outcome: string[];
  materials: string[];
  images: CaseStudyImage[];
  serviceLinks: { href: string; label: string }[];
  areaSlugs: AreaSlug[];
  relatedSlugs: string[];
};

export function workPath(slug: string) {
  return `/work/${slug}/`;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "accessible-garden-makeover",
    title: "Accessible garden makeover",
    eyebrow: "Disabled garden makeover",
    seoTitle: "Accessible Garden Makeover Case Study",
    seoDescription:
      "LUNA SEN-Scapes rebuilt a family garden for wheelchair access: level paving, sleeper retainers, shallow steps and a usable outdoor room. Real UK groundworks, not a stock photo.",
    keywords: [
      "accessible garden makeover UK",
      "disabled garden case study",
      "wheelchair garden paving",
      "timber sleeper retaining wall",
      "level patio wheelchair access",
    ],
    summary: "Level paving, sleeper retainers and a garden you can actually move through.",
    heroLines: [
      "The garden had to work for wheels and walkers.",
      "Not a pretty strip you look at from the back door.",
      "Levels, retainers and a soft strip in the same brief.",
    ],
    brief: [
      "The household needed a garden they could get into and move through.",
      "Falls towards the house and soft ground made a wheelchair or walker a fight.",
      "They asked for a level outdoor room, a soft place to sit or play, and a boundary that held.",
      "SEN and disabled use first. Planting after the ground was right.",
    ],
    build: [
      "We stripped the old surface and re-set the levels before any slab went down.",
      "Timber sleeper retainers hold the raised patio and keep the lawn edge true.",
      "Wide, shallow paved steps mark the change of level — not a drop off the patio.",
      "Large-format paving is laid with even joints so wheels do not catch.",
      "A level turf strip sits in the middle of the hard standing for a softer landing.",
      "Close-board fencing and sleeper planters finish the edge so the space reads clearly.",
    ],
    outcome: [
      "A patio you can roll onto from the house.",
      "Steps you can see and use, with room for a graded route if the brief grows.",
      "A garden that stays usable after rain, not a mud patch with new plants in it.",
    ],
    materials: ["Large-format paving", "Timber sleepers", "Artificial turf", "Close-board fencing", "Decorative gravel"],
    images: [
      {
        src: "/work/garden-after.jpg",
        alt: "Finished accessible garden makeover by LUNA SEN-Scapes: raised light-grey patio, timber sleeper retainers, shallow paved steps and a level artificial lawn",
        caption: "Raised patio, sleeper retainers and shallow steps — a change of level you can use.",
        width: 2048,
        height: 945,
      },
      {
        src: "/work/garden-before.jpg",
        alt: "Level grey patio with a central rectangle of artificial grass, timber fence lines and a flush route to the conservatory doors on a UK family plot",
        caption: "A level outdoor room with a soft central strip — no trip line at the doors.",
        width: 1500,
        height: 2000,
      },
      {
        src: "/work/garden-2.jpg",
        alt: "Completed family garden with tall timber close-board fencing, a raised sleeper planter of white gravel and shrubs, and a level artificial lawn",
        caption: "Fence, sleeper planter and level turf — the garden after the ground is finished.",
        width: 738,
        height: 1600,
      },
    ],
    serviceLinks: [
      { href: "/spaces/garden-makeovers/", label: "Disabled garden makeovers" },
      { href: "/spaces/sensory-gardens/", label: "Sensory gardens" },
      { href: "/groundworks/", label: "Groundworks" },
    ],
    areaSlugs: ["wirral", "merseyside", "north-west", "united-kingdom"],
    relatedSlugs: ["sensory-patio-groundworks", "garden-levels-and-steps", "garden-dig-off"],
  },
  {
    slug: "sensory-patio-groundworks",
    title: "Sensory patio and groundworks",
    eyebrow: "Patio & drainage",
    seoTitle: "Sensory Patio & Groundworks Case Study",
    seoDescription:
      "Sandstone and porcelain patio groundworks by LUNA SEN-Scapes: level thresholds, ACO drainage, charcoal picture-frame borders and falls that keep water off the house.",
    keywords: [
      "sandstone patio UK",
      "porcelain patio groundworks",
      "accessible patio drainage",
      "ACO drain patio",
      "sensory patio case study",
    ],
    summary: "Sandstone, porcelain, a drain at the door and a patio that does not pond.",
    heroLines: [
      "A patio is a sensory room if the ground is right.",
      "Flush threshold. Clear edge. Water in the channel.",
      "Sandstone and porcelain on the same specification.",
    ],
    brief: [
      "The family needed a patio they could use every week, not a show surface that ponded.",
      "The door line had to be flush enough for a wheelchair or a walker.",
      "They wanted texture and colour they could read, and an edge they could see.",
      "Drainage had to sit in the brief, not as a later fix.",
    ],
    build: [
      "Indian sandstone is laid in mixed earth tones, staggered, with even joints.",
      "A black ACO channel runs the length of the house so water never sits against the doors.",
      "The paving meets the sliding doors on a level threshold.",
      "Dark cobble setts dress the line between the slabs and a low block retaining wall.",
      "A second finish — large-format porcelain with a charcoal picture-frame border — gives a high-contrast edge.",
      "Falls are written in before the first slab so the surface stays dry enough to use.",
    ],
    outcome: [
      "A patio that works as an outdoor room.",
      "Water in the drain, not on the threshold.",
      "A border you can see — useful for SEN households and anyone who needs a clear edge.",
    ],
    materials: ["Indian sandstone", "Porcelain paving", "Charcoal block border", "ACO drainage channel", "Cobble setts"],
    images: [
      {
        src: "/work/patio.jpg",
        alt: "Newly laid multi-tonal Indian sandstone patio flush with white sliding doors, with a black ACO drainage channel and cobble sett edging by LUNA SEN-Scapes",
        caption: "Sandstone, a level door line and the drain that keeps water off the house.",
        width: 1500,
        height: 2000,
      },
      {
        src: "/work/patio-2.jpg",
        alt: "Level-access light grey porcelain patio with a charcoal picture-frame block border, turf edge and timber fence on a UK family plot",
        caption: "Porcelain with a charcoal frame — contrast you can see, joints wheels can cross.",
        width: 944,
        height: 1240,
      },
    ],
    serviceLinks: [
      { href: "/groundworks/", label: "Patios & groundworks" },
      { href: "/spaces/sensory-gardens/", label: "Sensory gardens" },
      { href: "/spaces/garden-makeovers/", label: "Garden makeovers" },
    ],
    areaSlugs: ["wirral", "cheshire", "north-west", "united-kingdom"],
    relatedSlugs: ["accessible-garden-makeover", "garden-dig-off", "block-paving-access"],
  },
  {
    slug: "sen-safe-fencing",
    title: "SEN-safe timber fencing",
    eyebrow: "Boundaries",
    seoTitle: "SEN-Safe Timber Fencing Case Study",
    seoDescription:
      "SEN-safe timber boundary by LUNA SEN-Scapes: machine-rounded posts, a clear path edge and a garden line without sharp corners on a UK family plot.",
    keywords: [
      "SEN safe fencing UK",
      "rounded timber garden boundary",
      "accessible garden fencing",
      "timber post retaining edge",
      "safe garden boundary case study",
    ],
    summary: "Rounded timber posts that mark the garden without a sharp corner.",
    heroLines: [
      "A boundary the household can read.",
      "No sharp corners on the garden line.",
      "Path stays path. Garden stays garden.",
    ],
    brief: [
      "The plot needed a boundary a SEN child or disabled adult could understand.",
      "A hard fence line with square arrises was the wrong answer for this edge.",
      "The path had to stay clear. The garden had to stay inside.",
      "Family home. Not a school contract.",
    ],
    build: [
      "Machine-rounded timber posts are set in a curve so there is no sharp external corner.",
      "Tops are flat with a small bevel — nothing to catch a hand on.",
      "The posts hold a clear tactile edge between the asphalt path and the planted side.",
      "Shrubs sit behind the timber so the line is soft as well as solid.",
      "The path beside the posts stays level for wheels, walkers and everyday use.",
    ],
    outcome: [
      "A boundary you can feel and see.",
      "Safer edges on a family plot.",
      "The same LUNA SEN-Scapes crew that does the dig and the patio.",
    ],
    materials: ["Machine-rounded timber posts", "Asphalt path", "Soft planting"],
    images: [
      {
        src: "/work/fencing.jpg",
        alt: "Curved SEN-safe garden boundary of machine-rounded vertical timber posts separating a level asphalt path from planting on a UK family plot by LUNA SEN-Scapes",
        caption: "Rounded posts, a curved line, a path that stays clear of the garden.",
        width: 738,
        height: 1600,
      },
    ],
    serviceLinks: [
      { href: "/groundworks/", label: "Fencing & groundworks" },
      { href: "/spaces/safe-spaces/", label: "Safe spaces" },
      { href: "/spaces/garden-makeovers/", label: "Garden makeovers" },
    ],
    areaSlugs: ["wirral", "merseyside", "liverpool", "united-kingdom"],
    relatedSlugs: ["accessible-garden-makeover", "garden-dig-off", "block-paving-access"],
  },
  {
    slug: "garden-dig-off",
    title: "Garden dig off and formation",
    eyebrow: "Dig offs",
    seoTitle: "Garden Dig Off & Formation Case Study",
    seoDescription:
      "Residential garden dig off by LUNA SEN-Scapes: mini excavator, high-tip dumper, spoil away and a clean formation level before paving or play goes in.",
    keywords: [
      "garden dig off UK",
      "garden excavation case study",
      "formation level landscaping",
      "mini excavator garden",
      "site dumper garden clearance",
    ],
    summary: "The formation level — excavator, dumper, spoil away — before any finish.",
    heroLines: [
      "The finish fails if the dig is thin.",
      "We take the old surface off and set a level.",
      "This is the part playground suppliers skip.",
    ],
    brief: [
      "The garden surface was wrong for what had to sit on it.",
      "A wheelchair path, a patio or a play layer cannot go on mud and a guess.",
      "They needed spoil off site, a true formation, and the fence left standing.",
    ],
    build: [
      "A mini excavator breaks out the old ground on a tight family plot.",
      "A high-tip site dumper takes spoil away so the formation stays clean.",
      "We work to a level, not a dip in the middle of the yard.",
      "Existing close-board fencing stays. Access and barrow routes are planned first.",
      "Drainage and paving come after this photo — not instead of it.",
    ],
    outcome: [
      "A clean dig. A level you can build on.",
      "Ready for drainage, paving, turf or inclusive surfacing.",
      "The same crew stays on for the finish.",
    ],
    materials: ["Mini excavator", "High-tip site dumper", "Formation level", "Spoil away"],
    images: [
      {
        src: "/work/dig-off.jpg",
        alt: "LUNA SEN-Scapes garden dig off: yellow high-tip site dumper and mini excavator on excavated wet soil in a fenced UK family garden, ready for formation level",
        caption: "Dumper, excavator, spoil away — formation before the pretty layer.",
        width: 1500,
        height: 2000,
      },
    ],
    serviceLinks: [
      { href: "/groundworks/", label: "Dig offs & drainage" },
      { href: "/spaces/garden-makeovers/", label: "Garden makeovers" },
      { href: "/spaces/playgrounds/", label: "Inclusive playgrounds" },
    ],
    areaSlugs: ["wirral", "merseyside", "north-west", "united-kingdom"],
    relatedSlugs: ["accessible-garden-makeover", "concrete-foundations", "garden-levels-and-steps"],
  },
  {
    slug: "concrete-foundations",
    title: "Concrete floor dig out and foundations",
    eyebrow: "Foundations",
    seoTitle: "Concrete Foundations & Floor Dig Out Case Study",
    seoDescription:
      "Internal concrete floor dig out and foundation works by LUNA SEN-Scapes: mini excavator break-out, blockwork opening and a new formation for an accessible room.",
    keywords: [
      "concrete floor dig out UK",
      "garden room foundations",
      "internal groundworks case study",
      "mini excavator concrete break out",
      "accessible room foundations",
    ],
    summary: "Old concrete out. New formation in. Building and groundworks in one brief.",
    heroLines: [
      "The old slab had to come out.",
      "A usable room needs a true floor.",
      "We dig inside as carefully as we dig a garden.",
    ],
    brief: [
      "The household needed the old concrete floor gone so a level, accessible room could go in.",
      "A new opening to the garden had to land on the right level.",
      "Building works and groundworks sat in one LUNA SEN-Scapes brief.",
    ],
    build: [
      "A mini excavator works inside the footprint to break out the old slab.",
      "Broken concrete is stacked and taken off so the sub-base is visible.",
      "New concrete blockwork forms a clean opening with bi-fold doors to the outside.",
      "Existing brick and the timber rafters stay where they still work.",
      "The formation is left ready for a new pad, insulation and a finished floor.",
    ],
    outcome: [
      "The old floor is gone.",
      "A level room can be built on honest ground.",
      "Gardens and internals are not two different companies.",
    ],
    materials: ["Concrete break-out", "Mini excavator", "Concrete blockwork", "New formation"],
    images: [
      {
        src: "/work/foundations.jpg",
        alt: "Internal concrete floor dig out by LUNA SEN-Scapes: yellow mini excavator, broken slab stacked on the sub-base, new blockwork and bi-fold opening under exposed timber rafters",
        caption: "Break-out and formation inside the building — the pad comes after this.",
        width: 1500,
        height: 2000,
      },
    ],
    serviceLinks: [
      { href: "/building/", label: "Building works" },
      { href: "/groundworks/", label: "Foundations & groundworks" },
      { href: "/spaces/garden-makeovers/", label: "Garden makeovers" },
    ],
    areaSlugs: ["wirral", "merseyside", "cheshire", "united-kingdom"],
    relatedSlugs: ["garden-dig-off", "garden-levels-and-steps", "block-paving-access"],
  },
  {
    slug: "block-paving-access",
    title: "Block paving driveway and access",
    eyebrow: "Access",
    seoTitle: "Block Paving Driveway & Access Case Study",
    seoDescription:
      "Herringbone block paving driveway by LUNA SEN-Scapes: charcoal border, recessed cover and a level arrival route for wheels, walkers and a family car.",
    keywords: [
      "block paving driveway UK",
      "accessible driveway case study",
      "herringbone block paving",
      "level driveway drainage",
      "front access garden groundworks",
    ],
    summary: "Herringbone block, a charcoal border and an arrival route that does not trip.",
    heroLines: [
      "The front of the house is part of the brief.",
      "Wheels, walkers and a car use the same ground.",
      "Drainage is in the paving, not hoped for.",
    ],
    brief: [
      "The household needed a front access that stayed level and usable.",
      "A dropped, ponding drive is a barrier before anyone reaches the garden.",
      "They asked for a finish that would take a car and still work for a wheelchair or walker.",
    ],
    build: [
      "The old surface comes out. Base and falls go in before a block is laid.",
      "Multi-tonal blocks are set in herringbone for strength on a drive.",
      "A double charcoal border holds the edge and gives a line you can see.",
      "A recessed manhole cover sits in the pattern so nobody trips on a proud lid.",
      "The paving runs the side path toward the garage as one access route.",
    ],
    outcome: [
      "An arrival route that does not pond or catch a wheel.",
      "The same groundworks standard we use under a patio or a play area.",
      "Ready for a dropped kerb if the highway still needs one.",
    ],
    materials: ["Herringbone block paving", "Charcoal border", "Recessed cover", "Compacted base"],
    images: [
      {
        src: "/work/driveway.jpg",
        alt: "Completed herringbone block paving driveway by LUNA SEN-Scapes in red and brown tones with a double charcoal border, recessed manhole cover and level route to a red-brick house",
        caption: "Herringbone drive, charcoal frame, cover in the pattern — access first.",
        width: 945,
        height: 1204,
      },
    ],
    serviceLinks: [
      { href: "/groundworks/", label: "Driveways & groundworks" },
      { href: "/spaces/garden-makeovers/", label: "Garden makeovers" },
      { href: "/building/", label: "Building works" },
    ],
    areaSlugs: ["wirral", "cheshire", "ellesmere-port", "united-kingdom"],
    relatedSlugs: ["sensory-patio-groundworks", "sen-safe-fencing", "accessible-garden-makeover"],
  },
  {
    slug: "garden-levels-and-steps",
    title: "Garden levels and brick steps",
    eyebrow: "Changes of level",
    seoTitle: "Garden Levels & Brick Steps Case Study",
    seoDescription:
      "Sloped garden groundworks by LUNA SEN-Scapes: excavated brick step structure, string-line levels and a sandstone patio forming above — with a graded route where steps stay.",
    keywords: [
      "garden steps groundworks",
      "brick garden steps UK",
      "sloped garden levelling",
      "accessible garden change of level",
      "patio steps case study",
    ],
    summary: "A slope turned into structure — brick risers, string lines, patio above.",
    heroLines: [
      "A slope is not a design feature if nobody can use it.",
      "We build the change of level as structure.",
      "Steps stay. A graded route can sit beside them.",
    ],
    brief: [
      "The garden fell away from the house.",
      "A patio on the high ground needed a safe way down, not a drop.",
      "The household needed a change of level they could see and plan around — including a future ramp if needed.",
    ],
    build: [
      "We excavate a rectangular formation in the slope.",
      "Red brick walls go in two skins thick, tied to string lines.",
      "The rear of the pit is tiered — that is the step structure, not a decoration.",
      "A light stone patio is laid on the upper level while the steps are still in the ground.",
      "Levels, a spirit line and a saw on site — the finish waits on the structure.",
    ],
    outcome: [
      "The slope is held.",
      "Steps will land on brick that is already true.",
      "Where steps stay, we add a ramped or graded alternative as part of the same brief.",
    ],
    materials: ["Red brick risers", "Excavated formation", "Sandstone patio", "String-line levels"],
    images: [
      {
        src: "/work/steps.jpg",
        alt: "Garden groundworks in progress by LUNA SEN-Scapes: rectangular excavation lined with red brick step walls, string lines for level, and a light stone patio forming beside a brick house",
        caption: "Brick risers in the slope. Patio above. The pretty layer comes after this.",
        width: 1500,
        height: 2000,
      },
    ],
    serviceLinks: [
      { href: "/groundworks/", label: "Levelling & steps" },
      { href: "/spaces/garden-makeovers/", label: "Garden makeovers" },
      { href: "/building/", label: "Brickwork" },
    ],
    areaSlugs: ["wirral", "merseyside", "north-west", "united-kingdom"],
    relatedSlugs: ["accessible-garden-makeover", "garden-dig-off", "concrete-foundations"],
  },
];

export type CaseStudySlug = (typeof CASE_STUDIES)[number]["slug"];

export function getCaseStudy(slug: string) {
  return CASE_STUDIES.find((study) => study.slug === slug);
}

export function relatedCaseStudies(slug: string) {
  const study = getCaseStudy(slug);
  if (!study) return [];
  return study.relatedSlugs
    .map((related) => getCaseStudy(related))
    .filter((item): item is CaseStudy => Boolean(item));
}

export function caseStudyAreas(study: CaseStudy) {
  return study.areaSlugs
    .map((slug) => AREAS.find((area) => area.slug === slug))
    .filter((area): area is (typeof AREAS)[number] => Boolean(area));
}
