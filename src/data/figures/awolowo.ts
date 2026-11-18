import type { Figure } from '../types'

export const awolowo: Figure = {
  slug: 'awolowo',
  name: 'Obafemi Awolowo',
  nameLines: ['Obafemi', 'Awolowo'],
  epithet: 'The Sage',
  born: 1909,
  died: 1987,
  emblemCaption: 'A cocoa pod',
  stats: [
    { label: 'Position', value: 'Premier of the West' },
    { label: 'Lifetime', value: '1909-1987' },
    { label: 'Home town', value: 'Ikenne' },
    { label: 'Party', value: 'Action Group' },
    { label: 'In office', value: '1954-1959' },
    { label: 'Known for', value: 'Free primary school' },
  ],
  statement:
    'Obafemi Awolowo was the first Premier of the Western Region. In January 1955 his government made primary school free for every child in the region.',
  character:
    'His father died when he was eleven and he paid for the rest of his own schooling. He worked as a teacher, a clerk, a reporter, a produce trader and a union organiser before he qualified as a lawyer in London at thirty-seven. People called him Awo.',
  map: {
    heading: 'He governed from Ibadan',
    body: 'The Western Region ran from the edge of Lagos to the Niger. Its capital was Ibadan and most of its income came from cocoa. Awolowo was born in the small Remo town of Ikenne, built his law practice and his newspaper in Ibadan, and was sent to prison in Calabar, on the far side of the country.',
    region: 'west',
    regionLabel: 'Western Region, 1960',
    places: [
      { name: 'Ikenne', lon: 3.71, lat: 6.87, note: 'Born here on 6 March 1909. He died at his house here in 1987 and is buried in the town.', label: 'below' },
      { name: 'Ibadan', lon: 3.9, lat: 7.39, note: 'Capital of the Western Region. He founded the Nigerian Tribune here in 1949 and was Premier from 1954 to 1959.', label: 'left' },
      { name: 'Owo', lon: 5.587, lat: 7.196, note: 'The Action Group held its first public conference here in April 1951.', label: 'right' },
      { name: 'Ile-Ife', lon: 4.56, lat: 7.48, note: 'Home of the University of Ife, which his party’s government founded. It was renamed after him in 1987.', label: 'above' },
      { name: 'Lagos', lon: 3.38, lat: 6.455, note: 'He led the opposition in the federal parliament from 1959 and ran the finance ministry from 1967 to 1971.', label: 'left' },
      { name: 'Calabar', lon: 8.32, lat: 4.95, note: 'He was held in prison here from 1963 until the army released him in August 1966.', label: 'right' },
    ],
  },
  ideasTitle: ['How he', 'Governed'],
  ideasIntro: 'Awolowo ran the Western Region for seven years, first as leader of government business and then as Premier. These are four things that government did.',
  ideas: [
    {
      glyph: 'steps',
      title: 'Free primary school',
      body: 'Fees ended on 17 January 1955. About 457,000 children were in primary school in the region the year before. About 811,000 turned up that year, and education took the largest share of the budget.',
    },
    {
      glyph: 'coins',
      title: 'Cocoa money',
      body: 'The region’s marketing board bought cocoa from farmers at a fixed price and sold it abroad for more. Awolowo’s government spent the difference on schools, clinics, roads and industry. Cocoa House in Ibadan, 26 storeys high, was built from the same funds and opened in 1965.',
    },
    {
      glyph: 'rays',
      title: 'Television',
      body: 'Western Nigeria Television began broadcasting from Ibadan on 31 October 1959. It was the first television service in Nigeria and it used the slogan First in Africa.',
    },
    {
      glyph: 'bridge',
      title: 'A federal Nigeria',
      body: 'His 1947 book Path to Nigerian Freedom argued that Nigeria’s peoples were too different to be ruled from one centre. He wanted each large group to have its own state inside a federation. The 1954 constitution set up three regions with their own governments.',
    },
  ],
  momentsIntro: 'Nine dates from a life that ran from 1909 to 1987.',
  moments: [
    {
      year: '1909',
      title: 'Born in Ikenne',
      body: 'Obafemi Awolowo is born to a farmer and sawyer who was one of the town’s first Christians. His father dies of smallpox in 1920. The boy does odd jobs to stay in school.',
    },
    {
      year: '1944',
      title: 'London',
      body: 'He takes a commerce degree by correspondence, then sails to London to read law. He is called to the bar at the Inner Temple on 19 November 1946. While there he helps found Egbe Omo Oduduwa, a Yoruba cultural society, and writes Path to Nigerian Freedom.',
    },
    {
      year: '1951',
      title: 'The Action Group',
      body: 'He starts the Nigerian Tribune in Ibadan in 1949. Two years later he launches the Action Group to contest the first elections in the West. The party wins and he becomes leader of government business.',
    },
    {
      year: '1954',
      title: 'Premier',
      body: 'A new constitution turns Nigeria into a federation on 1 October and Awolowo becomes the first Premier of the Western Region. Free primary school and free medical treatment for children follow within months.',
      photo: {
        id: 'premiers-1958',
        from: 'azikiwe',
        alt: 'Five leaders in robes and suits standing in a row outside a white building.',
        caption: 'Lagos, December 1958. Awolowo is on the left, next to Nnamdi Azikiwe, Abubakar Tafawa Balewa, E. M. L. Endeley and Ahmadu Bello.',
      },
    },
    {
      year: '1959',
      title: 'The federal election',
      body: 'He hands the premiership to his deputy, Samuel Akintola, and runs for Prime Minister. He campaigns across the North by helicopter. The Action Group comes third and he becomes Leader of the Opposition.',
      photo: {
        id: 'sokoto-1959',
        alt: 'Awolowo and a group of party men in robes standing in dry grass beside a grey helicopter.',
        caption: 'With his campaign helicopter at an Action Group rally in Sokoto, 1959. Photograph by Eliot Elisofon.',
      },
    },
    {
      year: '1962',
      title: 'The party splits',
      body: 'Awolowo and Akintola fall out over whether to work with the federal government. A fight breaks out in the Western House of Assembly in May and the federal government declares a state of emergency. Awolowo is placed under restriction.',
      photo: {
        id: 'coat-of-arms',
        alt: 'Awolowo in a white agbada, cap and glasses standing beside a large Nigerian coat of arms.',
        caption: 'Beside the national coat of arms, early 1960s.',
      },
    },
    {
      year: '1963',
      title: 'Ten years for treason',
      body: 'He is charged with plotting to overthrow the federal government. In September a Lagos court convicts him of treasonable felony and gives him ten years. His eldest son, Segun, had died in a car crash during the trial.',
      photo: {
        id: 'pilot-1963',
        alt: 'A newspaper front page with the headline Awolowo jailed 10 years, above rows of small portraits of the men convicted with him.',
        caption: 'The West African Pilot of 12 September 1963, the morning after the sentence.',
      },
    },
    {
      year: '1966',
      title: 'Released',
      body: 'After the second coup of 1966 the new head of state, Yakubu Gowon, frees him in August. In 1967 he becomes federal Commissioner for Finance and vice-chairman of the Federal Executive Council. He pays for the civil war without foreign loans and resigns in 1971.',
      photo: {
        id: 'portrait-nln',
        alt: 'An older Awolowo in round glasses, a gold cap and a pale blue agbada, looking at the camera.',
        caption: 'A colour portrait from later in his life, held by the National Library of Nigeria. The date is not recorded.',
      },
    },
    {
      year: '1979',
      title: 'Two runs for President',
      body: 'He founds the Unity Party of Nigeria and comes second to Shehu Shagari in 1979. He challenges the result in the Supreme Court and loses. He loses to Shagari again in 1983 and dies at Ikenne on 9 May 1987.',
      photo: {
        id: 'ikenne-museum',
        alt: 'A low white building with a red roof edge and a sign reading Obafemi Awolowo Museum.',
        caption: 'The Obafemi Awolowo Museum in Ikenne, photographed in 2016.',
      },
    },
  ],
  context: {
    heading: 'The opposition',
    body: [
      'After 1959 the federal government was a coalition of the Northern People’s Congress and the NCNC. The Action Group was the only large party outside it, and Awolowo used parliament to attack the government’s defence pact with Britain and its spending.',
      'When his party split in 1962 the federal government backed Akintola’s side. Awolowo’s trial and imprisonment left the West without the leader most of its voters had chosen. The violence around the Western election of 1965 was one of the reasons the army gave for its coup the following January.',
    ],
    photo: {
      id: 'cocoa-house',
      alt: 'A tall, slightly curved office tower rising above trees and a busy road.',
      caption: 'Cocoa House in Ibadan, photographed in 2015. It was the tallest building in Nigeria when it opened.',
    },
    links: [
      { slug: 'azikiwe', note: 'Led the NCNC, his rival in the South' },
      { slug: 'gowon', note: 'Freed him in 1966 and made him finance commissioner' },
      { slug: 'balewa', note: 'Prime Minister when he was tried' },
      { slug: 'bello', note: 'Led the NPC, which he campaigned against in the North' },
      { slug: 'ransome-kuti', note: 'An NCNC organiser in his region' },
    ],
  },
  resources: [
    { kind: 'Book', title: 'Awo: The Autobiography of Chief Obafemi Awolowo', by: 'Obafemi Awolowo, 1960', url: 'https://openlibrary.org/search?q=Awo+autobiography+of+Chief+Obafemi+Awolowo' },
    { kind: 'Book', title: 'Path to Nigerian Freedom', by: 'Obafemi Awolowo, 1947', url: 'https://openlibrary.org/search?q=Path+to+Nigerian+Freedom+Awolowo' },
    { kind: 'Article', title: 'Obafemi Awolowo', by: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Obafemi-Awolowo' },
    { kind: 'Article', title: 'Action Group', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Action_Group_(Nigeria)' },
    { kind: 'Place', title: 'Cocoa House, Ibadan', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Cocoa_House' },
    { kind: 'Place', title: 'Obafemi Awolowo University, Ile-Ife', by: 'oauife.edu.ng', url: 'https://oauife.edu.ng/' },
    { kind: 'Archive', title: 'Photographs of Awolowo', by: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/Category:Obafemi_Awolowo' },
  ],
  sources: [
    { title: 'Obafemi Awolowo, Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Obafemi-Awolowo' },
    { title: 'Obafemi Awolowo, Wikipedia', url: 'https://en.wikipedia.org/wiki/Obafemi_Awolowo' },
    { title: 'Action Group, Wikipedia', url: 'https://en.wikipedia.org/wiki/Action_Group_(Nigeria)' },
  ],
}
