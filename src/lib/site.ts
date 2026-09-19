export const site = {
  name: 'Poo Patrol',
  legalName: 'Poo Patrol Pet Waste Removal LLC',
  tagline: 'We clean it so you can enjoy it!',
  phone: '937-441-4132',
  phoneHref: 'tel:+19374414132',
  smsHref: 'sms:+19374414132',
  domain: 'PooPatrolPet.com',
  address: { street: '3206 US 68 S', city: 'Bellefontaine', state: 'OH', zip: '43311' },
  facebook: 'https://www.facebook.com/profile.php?id=100095276811327',
  owner: 'Hannah',
  towns: [
    'Bellefontaine', 'Indian Lake', 'West Liberty', 'Raymond', 'Marysville',
    'Plain City', 'Dublin', 'Hilliard', 'Worthington', 'Westerville',
  ],
  counties: 'Logan, Union and Champaign counties and the northwest side of Columbus',
};

export const services = [
  {
    id: 'pet-waste',
    title: 'Pet waste removal',
    icon: 'paw',
    body: "Weekly or every other week, we scoop the whole yard, bag it, and haul it away if you'd like. Full-service means we do it all, not just the easy spots.",
    price: 'Haul-away <b>$5</b> per visit · otherwise bagged and left in your trash',
  },
  {
    id: 'power-washing',
    title: 'Power washing',
    icon: 'nozzle',
    body: 'Hog barns, driveways, sidewalks, siding, decks and commercial lots. Same truck, same crew, a lot more water.',
    price: 'Quoted per job · residential and commercial',
  },
  {
    id: 'gutters',
    title: 'Gutter cleaning',
    icon: 'gutter',
    body: 'Leaves and debris out, downspouts flushed, before the freeze turns a clog into a problem.',
    price: 'Quoted per house',
  },
  {
    id: 'leaves',
    title: 'Leaf & fall cleanup',
    icon: 'leaf',
    body: 'Curb, flower beds and lawn cleared; sticks and branches picked up; yard left looking clean and sharp for the season.',
    price: 'Quoted per yard',
  },
  {
    id: 'mowing',
    title: 'Mowing & trimming',
    icon: 'grass',
    body: 'Add it to your scoop visit and the yard gets done in one stop, on the same day, by the same people.',
    price: 'Quoted per yard',
  },
  {
    id: 'snow',
    title: 'Snow blowing',
    icon: 'snow',
    body: "Driveways and walks cleared after a storm so you're not out there before work.",
    price: 'Quoted per driveway',
  },
] as const;

export const plans = [
  {
    title: 'Weekly scoop',
    best: true,
    points: ['Same day every week', 'Whole yard, every visit', 'Text the morning of'],
  },
  {
    title: 'Every other week',
    best: false,
    points: ['Good for one dog or a big yard', 'Whole yard, every visit', 'Text the morning of'],
  },
  {
    title: 'One-time cleanup',
    best: false,
    points: ['Spring catch-up or moving day', 'Before a party or a showing', 'No commitment'],
  },
];

export const extras = [
  { amount: '$5', text: "Haul-away per visit. Otherwise it's bagged and left in your trash can." },
  { amount: '+$50', text: 'Per month for yards over 12,000 sq ft.' },
  { amount: '$40', text: "Start-up or restart fee for weekly and every-other-week service if it's been three weeks or more." },
];

export const steps = [
  { title: 'Tell us about the yard', body: "Call, text or fill out the form. Town, yard size, how many dogs. We'll give you a price on the spot." },
  { title: 'Pick a day', body: 'Weekly or every other week. We show up the same day each week so the yard never gets ahead of you.' },
  { title: 'Get a text', body: "One the morning of, and one when we're on our way. Gate latched? Dog inside? You'll have time." },
  { title: 'Enjoy the yard', body: 'Every pile, every visit, bagged and gone. Bill at the end of the month by Zelle, cash, card or check.' },
];

// Placeholders until real reviews are pulled from the Facebook page (with permission).
export const reviews = [
  { quote: "A real customer's words go here: what they were dealing with, what changed, whether they'd recommend us.", who: 'First name · Town', sample: true },
  { quote: 'Second real review. Power-washing customers count too: a barn, a driveway, a storefront.', who: 'First name · Town', sample: true },
  { quote: "Third real review. Short is fine. 'They showed up every Tuesday for a year' says more than a paragraph.", who: 'First name · Town', sample: true },
];
