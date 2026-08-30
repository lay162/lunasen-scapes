import { AREAS, type AreaSlug } from "@/lib/content";

export const LOCAL_SERVICES = [
  { title: "Disabled garden makeovers", href: "/spaces/garden-makeovers/" },
  { title: "Sensory gardens", href: "/spaces/sensory-gardens/" },
  { title: "Inclusive play", href: "/spaces/playgrounds/" },
  { title: "Groundworks", href: "/groundworks/" },
] as const;

export type AreaLocal = {
  headline: string;
  seoTitle: string;
  seoDescription: string;
  heroLines: string[];
  intro: string[];
  highlights: { title: string; href: string; copy: string }[];
  towns: string[];
  relatedSlugs: AreaSlug[];
  containedIn: string;
  geo: { latitude: number; longitude: number };
};

export function areaPath(slug: string) {
  return `/areas/${slug}/`;
}

export const AREA_GROUPS = {
  nations: ["united-kingdom", "england", "scotland", "wales", "northern-ireland"],
  regions: [
    "london",
    "midlands",
    "yorkshire",
    "south-west",
    "south-east",
    "east-of-england",
    "north-east",
    "north-west",
    "merseyside",
    "cheshire",
    "north-wales",
  ],
  towns: ["wirral", "liverpool", "chester", "ellesmere-port", "wallasey", "west-kirby", "neston", "birkenhead"],
} as const;

export const AREA_GROUP_LABELS: Record<keyof typeof AREA_GROUPS, string> = {
  nations: "Nations",
  regions: "English regions, city regions and North Wales",
  towns: "Towns and cities we write for",
};

function services(
  name: string,
  copy: [string, string, string, string],
): AreaLocal["highlights"] {
  return LOCAL_SERVICES.map((service, i) => ({
    title: service.title,
    href: service.href,
    copy: copy[i],
  }));
}

export const AREA_LOCAL: Record<AreaSlug, AreaLocal> = {
  "united-kingdom": {
    headline: "SEN garden makeovers and groundworks across the United Kingdom",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes UK",
    seoDescription:
      "LUNA SEN-Scapes builds disabled garden makeovers, sensory gardens, inclusive play and groundworks across the United Kingdom from a Wirral base.",
    heroLines: [
      "England, Scotland, Wales and Northern Ireland.",
      "We travel from Wirral.",
      "Send the postcode. We will say if a visit makes sense.",
    ],
    intro: [
      "LUNA SEN-Scapes is a UK-wide company, not a Wirral-only crew.",
      "Disabled garden makeovers, sensory gardens, inclusive play and full groundworks sit in one brief.",
      "SEN children, SEN adults and disabled people — anywhere in the United Kingdom.",
    ],
    highlights: services("the United Kingdom", [
      "Rebuild family gardens so wheelchair users, walkers and SEN households can use the outdoor space — anywhere in the UK.",
      "Quiet planting, water, texture and a route that still works in a British winter.",
      "Home playgrounds and safe play areas planned from the dig up, not bolted onto poor ground.",
      "Driveways, fencing, patios, levelling, dig offs and drainage under every finish.",
    ]),
    towns: ["England", "Scotland", "Wales", "Northern Ireland"],
    relatedSlugs: ["england", "scotland", "wales", "northern-ireland", "north-west", "wirral"],
    containedIn: "United Kingdom",
    geo: { latitude: 54.0, longitude: -2.5 },
  },
  england: {
    headline: "Disabled garden makeovers and SEN landscapes in England",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes England",
    seoDescription:
      "LUNA SEN-Scapes builds disabled garden makeovers, sensory gardens, inclusive playgrounds and groundworks throughout England.",
    heroLines: [
      "From the North to the South Coast.",
      "Levels and drainage first so the finish lasts.",
      "Family homes, not school contracts.",
    ],
    intro: [
      "We take England-wide briefs from a Wirral base.",
      "Clay, slope, tight access and wet ground are part of the job, not extras.",
      "Send photos and a postcode from any English county.",
    ],
    highlights: services("England", [
      "Accessible garden rebuilds for disabled and SEN families across England.",
      "Sensory gardens specified for English weather and everyday use, not a show garden.",
      "Inclusive play at home — surfacing, fencing and quiet corners on a real plot.",
      "Driveways, fencing, patios and drainage that carry the garden and the play.",
    ]),
    towns: ["North West", "Yorkshire", "Midlands", "London", "South East", "South West", "East of England", "North East"],
    relatedSlugs: ["united-kingdom", "north-west", "midlands", "london", "south-east", "wirral"],
    containedIn: "United Kingdom",
    geo: { latitude: 52.8, longitude: -1.5 },
  },
  scotland: {
    headline: "SEN gardens, safe play and groundworks in Scotland",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes Scotland",
    seoDescription:
      "LUNA SEN-Scapes builds disabled garden makeovers, sensory gardens, inclusive play and weather-tight groundworks across Scotland.",
    heroLines: [
      "Wet ground and weather-tight drainage.",
      "Levels that stay true through a Scottish winter.",
      "We travel from the Wirral when the brief is right.",
    ],
    intro: [
      "Scotland is on the map for LUNA SEN-Scapes, not an afterthought.",
      "We plan drainage and formation before planting or play goes in.",
      "SEN children, SEN adults and disabled people in family homes and supported living.",
    ],
    highlights: services("Scotland", [
      "Garden makeovers that stay usable in rain — paths, falls and ramps that work.",
      "Sensory gardens built for wind, wet and year-round use.",
      "Inclusive play with surfacing that copes with a long winter.",
      "Dig offs, drainage and driveways specified for Scottish ground.",
    ]),
    towns: ["Central Belt", "Edinburgh", "Glasgow", "Highlands", "Aberdeenshire", "Borders"],
    relatedSlugs: ["united-kingdom", "england", "north-east", "north-west"],
    containedIn: "United Kingdom",
    geo: { latitude: 56.5, longitude: -4.2 },
  },
  wales: {
    headline: "Inclusive play and garden makeovers across Wales",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes Wales",
    seoDescription:
      "LUNA SEN-Scapes builds disabled garden makeovers, sensory gardens, inclusive playgrounds and groundworks across Wales, including North Wales.",
    heroLines: [
      "North Wales, the coast and the wider country.",
      "Same LUNA SEN-Scapes crew as the Wirral jobs.",
      "Send the postcode from anywhere in Wales.",
    ],
    intro: [
      "We already travel into Flintshire and the North Wales coast, and we take wider Welsh briefs.",
      "Coastal drainage, slope and tight villages are normal for us.",
      "Gardens, play and groundworks in one visit window where it makes sense.",
    ],
    highlights: services("Wales", [
      "Disabled garden makeovers for family plots across Wales.",
      "Sensory gardens that hold up in wet, windy coastal weather.",
      "Inclusive play at home — not a school playground contract.",
      "Groundworks, fencing and driveways that make the finish last.",
    ]),
    towns: ["Flintshire", "Denbighshire", "Conwy", "Gwynedd", "Wrexham", "South Wales"],
    relatedSlugs: ["north-wales", "united-kingdom", "cheshire", "wirral", "england"],
    containedIn: "United Kingdom",
    geo: { latitude: 52.3, longitude: -3.7 },
  },
  "northern-ireland": {
    headline: "Disabled garden makeovers and groundworks in Northern Ireland",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes Northern Ireland",
    seoDescription:
      "LUNA SEN-Scapes takes disabled garden makeovers, sensory gardens, inclusive play and groundworks in Northern Ireland where the brief is right.",
    heroLines: [
      "We travel when the plot and the brief are a fit.",
      "Same standard as our UK mainland jobs.",
      "Photos and a postcode first.",
    ],
    intro: [
      "Northern Ireland is part of the LUNA SEN-Scapes coverage, not a separate brand.",
      "We say honestly if a visit is worth the travel.",
      "SEN and disabled households, family homes and supported living.",
    ],
    highlights: services("Northern Ireland", [
      "Garden rebuilds so outdoor space works for wheels, walkers and SEN families.",
      "Sensory gardens specified for real weather, not a catalogue picture.",
      "Inclusive play at home with proper surfacing and fencing.",
      "Drainage, levels and driveways before the pretty layer.",
    ]),
    towns: ["Belfast", "County Antrim", "County Down", "County Armagh", "County Londonderry", "County Tyrone", "County Fermanagh"],
    relatedSlugs: ["united-kingdom", "scotland", "england"],
    containedIn: "United Kingdom",
    geo: { latitude: 54.6, longitude: -6.7 },
  },
  london: {
    headline: "SEN garden makeovers and tight-access groundworks in London",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes London",
    seoDescription:
      "LUNA SEN-Scapes builds disabled garden makeovers, sensory gardens, inclusive play and drainage for tight London plots.",
    heroLines: [
      "Small yards, side returns and level thresholds.",
      "Plant access planned before we quote.",
      "We travel down from the Wirral.",
    ],
    intro: [
      "London gardens fail when the ground and the access are ignored.",
      "We rebuild so a wheelchair, a walker or a SEN child can actually use the yard.",
      "Borough does not matter. The postcode and the photos do.",
    ],
    highlights: services("London", [
      "Disabled garden makeovers on tight London plots — thresholds, falls and a usable path.",
      "Sensory corners that work in a small garden, not a country estate.",
      "Inclusive play scaled to the space, with surfacing that neighbours will live with.",
      "Drainage and levels so a paved yard does not pond against the house.",
    ]),
    towns: ["North London", "South London", "East London", "West London", "Greater London"],
    relatedSlugs: ["south-east", "england", "united-kingdom", "east-of-england"],
    containedIn: "England",
    geo: { latitude: 51.5074, longitude: -0.1278 },
  },
  midlands: {
    headline: "Accessible gardens and inclusive play across the Midlands",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes Midlands",
    seoDescription:
      "LUNA SEN-Scapes builds disabled garden makeovers, sensory gardens, inclusive playgrounds and driveways across the Midlands.",
    heroLines: [
      "Family homes that need the outdoor space to work.",
      "Clay and wet winters planned in.",
      "One crew for garden, play and groundworks.",
    ],
    intro: [
      "The Midlands is a regular travel area for LUNA SEN-Scapes.",
      "We start with how people move, play and sit outside — then we dig.",
      "SEN children, SEN adults and disabled people in ordinary houses.",
    ],
    highlights: services("the Midlands", [
      "Garden makeovers that take a wheelchair or walker from the back door to a usable space.",
      "Sensory gardens for regulation, not just planting lists.",
      "Inclusive play with fencing and sight-lines that keep children safe.",
      "Driveways, patios and drainage as part of the same brief.",
    ]),
    towns: ["Birmingham", "Nottingham", "Leicester", "Derby", "Coventry", "Stoke-on-Trent", "Northampton"],
    relatedSlugs: ["england", "yorkshire", "north-west", "east-of-england", "united-kingdom"],
    containedIn: "England",
    geo: { latitude: 52.4862, longitude: -1.8904 },
  },
  yorkshire: {
    headline: "Disabled garden transformations and groundworks in Yorkshire",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes Yorkshire",
    seoDescription:
      "LUNA SEN-Scapes builds disabled garden makeovers, sensory gardens, inclusive play and groundworks across Yorkshire.",
    heroLines: [
      "Clay, slope and rain handled before planting.",
      "Same quality as our North West jobs.",
      "Send a Yorkshire postcode with photos.",
    ],
    intro: [
      "Yorkshire ground punishes a thin brief.",
      "We level, drain and form first, then we finish the garden or the play.",
      "Family SEN and disabled households across the county.",
    ],
    highlights: services("Yorkshire", [
      "Garden makeovers that stay usable on clay and slope.",
      "Sensory gardens built for wind and wet, not a dry show day.",
      "Inclusive play with surfacing that survives a Yorkshire winter.",
      "Dig offs, drainage and driveways before the finish layer.",
    ]),
    towns: ["Leeds", "Sheffield", "York", "Bradford", "Hull", "Harrogate", "Doncaster"],
    relatedSlugs: ["north-east", "midlands", "north-west", "england", "united-kingdom"],
    containedIn: "England",
    geo: { latitude: 53.8, longitude: -1.55 },
  },
  "south-west": {
    headline: "Accessible gardens and coastal groundworks in the South West",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes South West",
    seoDescription:
      "LUNA SEN-Scapes builds disabled garden makeovers, sensory gardens, inclusive play and coastal drainage across the South West.",
    heroLines: [
      "Coastal drainage and usable paths.",
      "Wheelchair routes that cope with rain and slope.",
      "We travel from the Wirral when the brief is right.",
    ],
    intro: [
      "The South West is part of our UK coverage.",
      "Salt, rain and steep plots change the specification — we write that in.",
      "SEN and disabled families who need the garden to work every week, not once a year.",
    ],
    highlights: services("the South West", [
      "Garden makeovers with ramps, falls and a path you can actually use.",
      "Sensory gardens that hold in wet coastal weather.",
      "Inclusive play specified for family homes, not schools.",
      "Drainage, levels and driveways that keep water off the house.",
    ]),
    towns: ["Bristol", "Cornwall", "Devon", "Somerset", "Dorset", "Gloucestershire", "Wiltshire"],
    relatedSlugs: ["south-east", "wales", "england", "united-kingdom"],
    containedIn: "England",
    geo: { latitude: 50.7, longitude: -3.5 },
  },
  "south-east": {
    headline: "SEN landscapes and disabled garden makeovers in the South East",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes South East",
    seoDescription:
      "LUNA SEN-Scapes builds disabled garden makeovers, sensory gardens, inclusive play and groundworks across the South East.",
    heroLines: [
      "Levels, fencing and play that fit a real plot.",
      "Tight gardens and wider plots both welcome.",
      "Nationwide crew, Wirral base.",
    ],
    intro: [
      "We take South East briefs the same way we take North West ones.",
      "The visit has to be worth it — send photos first.",
      "No school contracts. Family homes and supported living.",
    ],
    highlights: services("the South East", [
      "Disabled garden makeovers with a clear route from the house.",
      "Sensory gardens for everyday regulation, not a one-off show.",
      "Inclusive play that neighbours and planning will live with.",
      "Groundworks and driveways in the same LUNA SEN-Scapes brief.",
    ]),
    towns: ["Kent", "Surrey", "Sussex", "Hampshire", "Berkshire", "Oxfordshire", "Buckinghamshire"],
    relatedSlugs: ["london", "east-of-england", "south-west", "england", "united-kingdom"],
    containedIn: "England",
    geo: { latitude: 51.3, longitude: -0.5 },
  },
  "east-of-england": {
    headline: "Accessible gardens and SEN play in the East of England",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes East of England",
    seoDescription:
      "LUNA SEN-Scapes builds disabled garden makeovers, sensory gardens, inclusive play and groundworks across the East of England.",
    heroLines: [
      "Sensory planting, safe play and proper groundworks.",
      "We travel from the Wirral.",
      "Postcode and photos start the brief.",
    ],
    intro: [
      "The East of England is on our UK map.",
      "Flat, wet and windy plots need drainage written in from day one.",
      "SEN children, SEN adults and disabled people in ordinary houses.",
    ],
    highlights: services("the East of England", [
      "Garden makeovers that stay level and usable after rain.",
      "Sensory gardens specified for wind and open skies.",
      "Inclusive play with surfacing and fencing that last.",
      "Driveways, patios and dig offs as part of the same job.",
    ]),
    towns: ["Norfolk", "Suffolk", "Cambridgeshire", "Essex", "Hertfordshire", "Bedfordshire"],
    relatedSlugs: ["london", "midlands", "south-east", "england", "united-kingdom"],
    containedIn: "England",
    geo: { latitude: 52.4, longitude: 0.5 },
  },
  "north-east": {
    headline: "SEN playgrounds and garden adaptations in the North East",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes North East",
    seoDescription:
      "LUNA SEN-Scapes builds disabled garden makeovers, sensory gardens, inclusive play and driveways across the North East.",
    heroLines: [
      "Built for weather, wheels and everyday family use.",
      "Same crew as our North West jobs.",
      "Send a North East postcode.",
    ],
    intro: [
      "The North East is a travel area we take seriously.",
      "We specify for wind, wet and long winters before we talk planting.",
      "Family SEN and disabled households — not school contracts.",
    ],
    highlights: services("the North East", [
      "Garden makeovers with a path that works in a wheelchair or with a walker.",
      "Sensory gardens that stay usable when the weather turns.",
      "Inclusive play at home with proper surfacing.",
      "Driveways, fencing and drainage in one LUNA SEN-Scapes brief.",
    ]),
    towns: ["Newcastle", "Sunderland", "Durham", "Middlesbrough", "Northumberland", "Teesside"],
    relatedSlugs: ["yorkshire", "scotland", "north-west", "england", "united-kingdom"],
    containedIn: "England",
    geo: { latitude: 54.9783, longitude: -1.6178 },
  },
  "north-west": {
    headline: "SEN garden makeovers and groundworks across the North West",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes North West",
    seoDescription:
      "LUNA SEN-Scapes is based in the Wirral and covers the North West for disabled garden makeovers, sensory gardens, inclusive play and groundworks.",
    heroLines: [
      "Wirral base. North West coverage.",
      "Merseyside, Cheshire, Lancashire and beyond.",
      "One crew for garden, play and ground.",
    ],
    intro: [
      "The North West is our home region, not our only region.",
      "We still travel the rest of the UK. This is simply where we start from.",
      "SEN children, SEN adults and disabled people in family homes.",
    ],
    highlights: services("the North West", [
      "Disabled garden makeovers across the North West — levels, ramps and a garden you can use.",
      "Sensory gardens specified for wet North West weather.",
      "Inclusive play at home, from the dig up.",
      "Driveways, fencing, patios and drainage under every finish.",
    ]),
    towns: ["Wirral", "Liverpool", "Manchester", "Lancashire", "Cumbria", "Cheshire"],
    relatedSlugs: ["wirral", "merseyside", "cheshire", "liverpool", "united-kingdom", "england"],
    containedIn: "England",
    geo: { latitude: 53.4808, longitude: -2.2426 },
  },
  wirral: {
    headline: "SEN garden makeovers and groundworks in Wirral",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes Wirral",
    seoDescription:
      "LUNA SEN-Scapes is based in Wirral. Disabled garden makeovers, sensory gardens, inclusive play and groundworks across the peninsula.",
    heroLines: [
      "Home base. Wirral.",
      "Wallasey to West Kirby, Birkenhead to Neston.",
      "Call for a Wirral site visit.",
    ],
    intro: [
      "Wirral is where LUNA SEN-Scapes is based — and we still work the rest of the UK.",
      "Family playgrounds, disabled garden makeovers and driveways on this peninsula.",
      "Tight terraces and wider coastal plots both get the same groundworks standard.",
    ],
    highlights: services("Wirral", [
      "Disabled garden makeovers from Eastham through to West Kirby and Heswall.",
      "Sensory gardens for SEN children and adults on Wirral family plots.",
      "Inclusive play in the back garden — surfacing, fencing and a quiet corner.",
      "Driveways, fencing, patios, dig offs and drainage across the Wirral.",
    ]),
    towns: ["Eastham", "Birkenhead", "Wallasey", "West Kirby", "Heswall", "Neston", "Bromborough", "New Ferry"],
    relatedSlugs: ["liverpool", "merseyside", "cheshire", "north-wales", "north-west", "wallasey", "birkenhead", "west-kirby"],
    containedIn: "Merseyside",
    geo: { latitude: 53.3727, longitude: -3.0738 },
  },
  liverpool: {
    headline: "Accessible gardens and inclusive play in Liverpool",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes Liverpool",
    seoDescription:
      "LUNA SEN-Scapes builds disabled garden makeovers, sensory gardens, inclusive play and dig offs for Liverpool family homes.",
    heroLines: [
      "Across the city from a Wirral base.",
      "Tight-access terraces and wider plots.",
      "Send a Liverpool postcode with photos.",
    ],
    intro: [
      "Liverpool is a regular LUNA SEN-Scapes run, not a one-off.",
      "We plan spoil, plant and access before we quote.",
      "SEN and disabled households who need the garden to work.",
    ],
    highlights: services("Liverpool", [
      "Garden makeovers that take wheels from the yard door to a usable space.",
      "Sensory gardens in ordinary Liverpool back gardens.",
      "Inclusive play with surfacing that survives city weather.",
      "Dig offs, drainage and driveways in the same brief.",
    ]),
    towns: ["City centre", "South Liverpool", "North Liverpool", "Wavertree", "Allerton", "Crosby", "Bootle"],
    relatedSlugs: ["merseyside", "wirral", "cheshire", "north-west", "birkenhead"],
    containedIn: "Merseyside",
    geo: { latitude: 53.4084, longitude: -2.9916 },
  },
  merseyside: {
    headline: "Inclusive play and garden makeovers across Merseyside",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes Merseyside",
    seoDescription:
      "LUNA SEN-Scapes builds disabled garden makeovers, sensory gardens, inclusive play and groundworks across Merseyside — including Liverpool, Wirral, Sefton, Knowsley and St Helens.",
    heroLines: [
      "Liverpool, Wirral, Sefton, Knowsley and St Helens.",
      "One LUNA SEN-Scapes crew.",
      "Site visits from our Wirral base.",
    ],
    intro: [
      "Merseyside is home ground as well as a travel area.",
      "We do not split the brand by borough. The brief is the brief.",
      "SEN children, SEN adults and disabled people in family homes.",
    ],
    highlights: services("Merseyside", [
      "Disabled garden makeovers across the city region.",
      "Sensory gardens specified for wet Merseyside weather.",
      "Inclusive play at home — not a school contract.",
      "Groundworks, driveways and fencing under every finish.",
    ]),
    towns: ["Liverpool", "Wirral", "Sefton", "Knowsley", "St Helens", "Bootle", "Southport"],
    relatedSlugs: ["liverpool", "wirral", "cheshire", "north-west", "north-wales"],
    containedIn: "England",
    geo: { latitude: 53.41, longitude: -2.98 },
  },
  cheshire: {
    headline: "Disabled garden makeovers and SEN landscapes in Cheshire",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes Cheshire",
    seoDescription:
      "LUNA SEN-Scapes builds disabled garden makeovers, sensory gardens, inclusive play and groundworks for Cheshire family homes, including Chester and Ellesmere Port.",
    heroLines: [
      "Ellesmere Port, Chester, Neston and beyond.",
      "Levelling and drainage before the pretty layer.",
      "Short run from our Wirral base.",
    ],
    intro: [
      "Cheshire is next door to us. We are on these plots often.",
      "Village gardens and town plots get the same specification.",
      "No school contracts. Family and supported homes.",
    ],
    highlights: services("Cheshire", [
      "Garden makeovers so a disabled person can use the outdoor space.",
      "Sensory gardens for SEN children and adults in Cheshire homes.",
      "Inclusive play with fencing, surfacing and a quiet corner.",
      "Driveways, patios, dig offs and drainage across the county.",
    ]),
    towns: ["Chester", "Ellesmere Port", "Neston", "Helsby", "Frodsham", "Northwich", "Warrington edge"],
    relatedSlugs: ["chester", "ellesmere-port", "neston", "wirral", "merseyside", "north-wales", "north-west"],
    containedIn: "England",
    geo: { latitude: 53.2, longitude: -2.6 },
  },
  chester: {
    headline: "SEN gardens and safe play in Chester",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes Chester",
    seoDescription:
      "LUNA SEN-Scapes builds SEN gardens, disabled garden makeovers, inclusive play and groundworks in Chester and the surrounding villages.",
    heroLines: [
      "Chester and the villages around it.",
      "Same groundworks standard as the rest of the UK.",
      "A short hop from our Wirral base.",
    ],
    intro: [
      "Chester jobs sit next to our Wirral and Cheshire work.",
      "We write levels and drainage in before planting or play.",
      "SEN and disabled households, not school contracts.",
    ],
    highlights: services("Chester", [
      "Disabled garden makeovers in Chester and the nearby villages.",
      "Sensory gardens and quieter outdoor rooms.",
      "Inclusive play specified for a family plot.",
      "Groundworks and driveways in the same brief.",
    ]),
    towns: ["Chester", "Upton", "Vicars Cross", "Huntington", "Christleton", "Hoole"],
    relatedSlugs: ["cheshire", "ellesmere-port", "wirral", "north-wales", "neston"],
    containedIn: "Cheshire",
    geo: { latitude: 53.1934, longitude: -2.893 },
  },
  "ellesmere-port": {
    headline: "Garden makeovers, play and driveways in Ellesmere Port",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes Ellesmere Port",
    seoDescription:
      "LUNA SEN-Scapes builds playgrounds, disabled garden makeovers and driveways in Ellesmere Port with straightforward plant and spoil access.",
    heroLines: [
      "Local to our Wirral base.",
      "Plant and spoil access planned in.",
      "Family SEN and disabled households.",
    ],
    intro: [
      "Ellesmere Port is a regular LUNA SEN-Scapes area.",
      "We can often visit without a long run.",
      "Garden, play or driveway — one crew.",
    ],
    highlights: services("Ellesmere Port", [
      "Disabled garden makeovers on Ellesmere Port family plots.",
      "Sensory gardens for everyday use.",
      "Inclusive play with proper surfacing.",
      "Driveways, fencing and drainage in the same job.",
    ]),
    towns: ["Ellesmere Port", "Whitby", "Great Sutton", "Little Sutton", "Overpool"],
    relatedSlugs: ["cheshire", "chester", "wirral", "neston", "merseyside"],
    containedIn: "Cheshire",
    geo: { latitude: 53.2787, longitude: -2.901 },
  },
  wallasey: {
    headline: "Safe play and sensory gardens in Wallasey",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes Wallasey",
    seoDescription:
      "LUNA SEN-Scapes builds safe play areas, sensory gardens and disabled garden makeovers for Wallasey families, including tight-access terraces.",
    heroLines: [
      "Tight-access terraces and wider plots.",
      "Wirral crew. Wallasey jobs.",
      "Call for a local visit.",
    ],
    intro: [
      "Wallasey is on our home peninsula.",
      "We plan barrows, bags and small plant when a lorry will not fit.",
      "SEN and disabled families who need the yard to work.",
    ],
    highlights: services("Wallasey", [
      "Garden makeovers that work on a terrace plot.",
      "Sensory gardens in a small Wallasey garden.",
      "Inclusive play scaled to the space.",
      "Dig offs and drainage without wrecking the street.",
    ]),
    towns: ["Wallasey", "New Brighton", "Liscard", "Seacombe", "Moreton"],
    relatedSlugs: ["wirral", "birkenhead", "liverpool", "merseyside", "west-kirby"],
    containedIn: "Wirral",
    geo: { latitude: 53.4232, longitude: -3.0648 },
  },
  "west-kirby": {
    headline: "Coastal drainage and accessible gardens in West Kirby",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes West Kirby",
    seoDescription:
      "LUNA SEN-Scapes builds accessible gardens, sensory spaces and groundworks in West Kirby and along the west Wirral shoreline.",
    heroLines: [
      "Coastal plots. Serious drainage.",
      "West Wirral shoreline and inland.",
      "Local to our Wirral base.",
    ],
    intro: [
      "West Kirby gardens fail when salt, sand and water are ignored.",
      "We write coastal drainage and levels in from the start.",
      "SEN and disabled households on the west Wirral.",
    ],
    highlights: services("West Kirby", [
      "Accessible garden makeovers that cope with a coastal plot.",
      "Sensory gardens that hold in wind and wet.",
      "Inclusive play with surfacing that lasts by the water.",
      "Levelling, drainage and driveways along the shoreline.",
    ]),
    towns: ["West Kirby", "Hoylake", "Caldy", "Greasby", "Frankby"],
    relatedSlugs: ["wirral", "wallasey", "birkenhead", "neston", "north-wales"],
    containedIn: "Wirral",
    geo: { latitude: 53.373, longitude: -3.184 },
  },
  neston: {
    headline: "SEN gardens and disabled garden makeovers in Neston",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes Neston",
    seoDescription:
      "LUNA SEN-Scapes builds family SEN gardens, disabled garden makeovers and groundworks across Neston and the Dee side of the Wirral.",
    heroLines: [
      "Dee side of the Wirral.",
      "Neston, Parkgate and the villages.",
      "Short run from our Wirral base.",
    ],
    intro: [
      "Neston sits between our Wirral base and Cheshire jobs.",
      "We treat it as home ground.",
      "Family SEN and disabled households only — no school contracts.",
    ],
    highlights: services("Neston", [
      "Disabled garden makeovers on Neston family plots.",
      "Sensory gardens for children and adults.",
      "Inclusive play with fencing and a quiet corner.",
      "Groundworks and driveways on the Dee side.",
    ]),
    towns: ["Neston", "Parkgate", "Little Neston", "Willaston", "Burton"],
    relatedSlugs: ["wirral", "cheshire", "chester", "ellesmere-port", "west-kirby"],
    containedIn: "Cheshire",
    geo: { latitude: 53.292, longitude: -3.063 },
  },
  birkenhead: {
    headline: "Safe play and garden adaptations in Birkenhead",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes Birkenhead",
    seoDescription:
      "LUNA SEN-Scapes builds safe play areas, garden adaptations and dig offs for Birkenhead family homes.",
    heroLines: [
      "Birkenhead family plots.",
      "Access and spoil planned first.",
      "Wirral crew on the ground.",
    ],
    intro: [
      "Birkenhead is minutes from our base.",
      "Terraces and wider gardens get the same specification.",
      "SEN children, SEN adults and disabled people.",
    ],
    highlights: services("Birkenhead", [
      "Garden adaptations so the outdoor space is actually usable.",
      "Sensory gardens in ordinary Birkenhead yards.",
      "Inclusive play with proper surfacing and gates.",
      "Dig offs, drainage and driveways in one job.",
    ]),
    towns: ["Birkenhead", "Oxton", "Prenton", "Tranmere", "Rock Ferry", "Bebington"],
    relatedSlugs: ["wirral", "wallasey", "liverpool", "merseyside", "ellesmere-port"],
    containedIn: "Wirral",
    geo: { latitude: 53.393, longitude: -3.015 },
  },
  "north-wales": {
    headline: "Sensory gardens and groundworks in North Wales",
    seoTitle: "Disabled Garden Makeovers & SEN Landscapes North Wales",
    seoDescription:
      "LUNA SEN-Scapes travels into Flintshire and the North Wales coast for disabled garden makeovers, sensory gardens, inclusive play and groundworks.",
    heroLines: [
      "Flintshire and the North Wales coast.",
      "Same crew as the Wirral jobs.",
      "Send a Welsh postcode with photos.",
    ],
    intro: [
      "North Wales is a regular travel line for us, not a rare add-on.",
      "Coastal drainage and village access are written into the brief.",
      "We still cover the rest of Wales and the UK.",
    ],
    highlights: services("North Wales", [
      "Disabled garden makeovers in Flintshire and along the coast.",
      "Sensory gardens that hold in wet, windy weather.",
      "Inclusive play at home — not a school playground.",
      "Groundworks, fencing and driveways under the finish.",
    ]),
    towns: ["Flint", "Mold", "Deeside", "Holywell", "Prestatyn", "Rhyl", "Colwyn Bay"],
    relatedSlugs: ["wales", "cheshire", "chester", "wirral", "united-kingdom"],
    containedIn: "Wales",
    geo: { latitude: 53.25, longitude: -3.5 },
  },
};

export function getAreaLocal(slug: AreaSlug): AreaLocal {
  return AREA_LOCAL[slug];
}

export function relatedAreas(slug: AreaSlug) {
  return AREA_LOCAL[slug].relatedSlugs
    .map((related) => AREAS.find((area) => area.slug === related))
    .filter((area): area is (typeof AREAS)[number] => Boolean(area));
}

export function areasInGroup(group: keyof typeof AREA_GROUPS) {
  return AREA_GROUPS[group]
    .map((slug) => AREAS.find((area) => area.slug === slug))
    .filter((area): area is (typeof AREAS)[number] => Boolean(area));
}
