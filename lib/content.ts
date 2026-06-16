import {
  Scissors,
  Leaf,
  Snowflake,
  Sprout,
  TreeDeciduous,
  ClipboardList,
  ShieldCheck,
  Star,
  MapPin,
  Award,
  Clock,
  HeartHandshake,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ---------------------------------------------------------------- */
/*  Business info — single source of truth for contact details      */
/* ---------------------------------------------------------------- */

export const BUSINESS = {
  name: 'Rodas Premier Landscaping',
  shortName: 'Rodas Premier',
  legalName: 'Rodas Premier Lawn & Snow Services',
  tagline: 'Transforming Lawns, One Yard at a Time',
  blurb:
    'Lawn maintenance, landscaping, and snow removal solutions to enhance the beauty and safety of your property year-round.',
  phone: '(616) 337-8944',
  phoneHref: 'tel:+16163378944',
  email: 'premierlawncare50@gmail.com',
  emailHref: 'mailto:premierlawncare50@gmail.com',
  area: 'Grand Rapids & West Michigan',
  hours: 'Mon–Sat 8 AM – 6 PM',
};

/* ---------------------------------------------------------------- */
/*  Services                                                         */
/* ---------------------------------------------------------------- */

export type Service = {
  slug: string;
  title: string;
  short: string;
  long: string;
  icon: LucideIcon;
  features: string[];
  image?: string;
  imageAlt?: string;
};

export const SERVICES: Service[] = [
  {
    slug: 'lawn-care',
    title: 'Lawn Care',
    short:
      'Precision mowing, edging, and seasonal upkeep that keeps your property sharp all season long.',
    long: 'We specialize in creating and maintaining beautiful lawns that elevate the look of your home or business. From precision mowing and crisp edging to debris removal and customized care plans, every visit leaves your yard looking pristine — treated like it was our own.',
    icon: Scissors,
    image: '/images/gallery/rodas-045.jpg',
    imageAlt: 'Commercial stand-on mower on a large striped lawn in front of an office building',
    features: [
      'Precision mowing for a clean, even cut',
      'Trimming & edging for sharp, professional lines',
      'Debris removal to keep your lawn pristine',
      'Shrub & hedge trimming',
      'Customized lawn care plans',
    ],
  },
  {
    slug: 'landscaping',
    title: 'Landscaping',
    short:
      'Design, planting, pruning, and seasonal cleanup to make your outdoor space look amazing.',
    long: 'From fresh garden beds to full property refreshes, our landscaping brings structure and beauty to your outdoor space. We handle design, planting, pruning, mulching, and seasonal cleanups — building landscapes that look incredible today and grow more beautiful over time.',
    icon: Leaf,
    image: '/images/gallery/rodas-124.jpg',
    imageAlt: 'Freshly mulched garden bed with a feature tree and ornamental grasses along a curved walkway',
    features: [
      'Landscape design & installation',
      'Planting — trees, shrubs & perennials',
      'Pruning & shaping',
      'Mulching & bed refreshes',
      'Spring & fall seasonal cleanups',
    ],
  },
  {
    slug: 'snow-removal',
    title: 'Snow Removal',
    short:
      'Efficient, reliable snow plowing and de-icing to keep your property safe all winter.',
    long: 'When the snow falls, we show up. Our efficient and reliable snow plowing and de-icing services keep your driveways, walkways, and lots clear and safe through every Michigan winter — with the dependable communication you can plan around.',
    icon: Snowflake,
    image: '/images/gallery/rodas-099.jpg',
    imageAlt: 'Crew member de-icing a snow-covered sidewalk next to a plow truck during a Michigan winter',
    features: [
      'Residential driveway plowing',
      'Commercial lot clearing',
      'Sidewalk & walkway clearing',
      'De-icing & salting',
      'Reliable storm-by-storm response',
    ],
  },
];

/* ---------------------------------------------------------------- */
/*  Why choose us                                                    */
/* ---------------------------------------------------------------- */

export const VALUE_PROPS: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: 'Locally Owned & Operated',
    body: 'Born and raised in West Michigan. We understand our climate, our seasons, and what it takes to keep a property looking its best here.',
    icon: MapPin,
  },
  {
    title: 'Licensed & Insured',
    body: 'Fully licensed and insured for your peace of mind. Professional, accountable work on every single job.',
    icon: ShieldCheck,
  },
  {
    title: '5.0-Star Rated Service',
    body: 'Our customers consistently rate us five stars — for thorough work, fair pricing, and treating every yard like our own.',
    icon: Star,
  },
  {
    title: 'Customized Solutions',
    body: 'Every property is different. We listen first, then tailor a plan that fits your space, your budget, and your goals.',
    icon: ClipboardList,
  },
];

/* ---------------------------------------------------------------- */
/*  Stats                                                            */
/* ---------------------------------------------------------------- */

export const STATS = [
  { value: '5.0', label: 'Customer rating' },
  { value: '9+', label: 'Cities served' },
  { value: 'Year-Round', label: 'Lawn & snow service' },
];

/* ---------------------------------------------------------------- */
/*  Testimonials                                                     */
/* ---------------------------------------------------------------- */

export const TESTIMONIALS = [
  {
    name: 'Mary',
    quote:
      'Wonderful company to work with. He was very conscientious with his work and did a thorough job like it was his own yard. Very professional and kind — I would highly recommend Premier Lawn Care.',
  },
  {
    name: 'Rodger Garrison',
    quote:
      'Rodas Premier Lawn and Snow Service is a reliable, consistent team that will more than meet your expectations. You will be rewarded by having their team’s services working for you.',
  },
  {
    name: 'Digla Mazariegos',
    quote:
      'Rodas Premier Lawn and Snow Services does an amazing job all the time and is always available for any extra clean-ups we need. Highly recommend.',
  },
];

/* ---------------------------------------------------------------- */
/*  Service areas                                                    */
/* ---------------------------------------------------------------- */

export const SERVICE_AREAS = [
  'Grand Rapids',
  'Walker',
  'Jenison',
  'Hudsonville',
  'Plainfield',
  'Ada',
  'Rockford',
  'Wyoming',
  'Kentwood',
];

/* ---------------------------------------------------------------- */
/*  About highlights                                                 */
/* ---------------------------------------------------------------- */

export const ABOUT_HIGHLIGHTS: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: 'Skilled Professionals',
    body: 'An experienced, passionate team of lawn care and landscaping technicians who take pride in every detail.',
    icon: Award,
  },
  {
    title: 'Dependable & On Time',
    body: 'Clear communication and reliable scheduling so you always know when we’ll be there — rain, shine, or snow.',
    icon: Clock,
  },
  {
    title: 'Treated Like Our Own',
    body: 'We care for every property as if it were our own home — that’s the difference our customers notice most.',
    icon: HeartHandshake,
  },
  {
    title: 'Year-Round Partner',
    body: 'Lawn and landscaping in the warm months, snow and ice management in the cold. One trusted crew, all year.',
    icon: TreeDeciduous,
  },
];

/* ---------------------------------------------------------------- */
/*  Gallery — real job photos live in the generated manifest at       */
/*  lib/gallery.ts (GALLERY_IMAGES). Optimized files: public/images/   */
/*  gallery/. Regenerate the manifest after adding/removing photos.    */
/* ---------------------------------------------------------------- */
