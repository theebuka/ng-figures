import type { Figure } from '../types'

export const ojukwu: Figure = {
  slug: 'ojukwu',
  name: 'Odumegwu Ojukwu',
  nameLines: ['Odumegwu', 'Ojukwu'],
  epithet: 'Ikemba of Nnewi',
  born: 1933,
  died: 2011,
  emblemCaption: 'A rising sun',
  stats: [
    { label: 'Position', value: 'Head of state of Biafra' },
    { label: 'Lifetime', value: '1933-2011' },
    { label: 'Home town', value: 'Nnewi' },
    { label: 'Studied at', value: 'Oxford' },
    { label: 'In office', value: '1967-1970' },
    { label: 'Known for', value: 'Declaring Biafra' },
  ],
  statement:
    'Chukwuemeka Odumegwu Ojukwu was military governor of the Eastern Region. On 30 May 1967 he declared it the independent Republic of Biafra, and he led it through thirty months of war.',
  character:
    'His father, Louis, ran a transport business and was one of the richest men in Nigeria. Emeka went to Epsom College and Oxford, then joined the army in 1957 as a recruit, against his father’s wishes. Very few Nigerian soldiers had a degree at the time. People knew him by his beard and his long speeches.',
  map: {
    heading: 'Biafra was the Eastern Region',
    body: 'Biafra took the borders of the Eastern Region, from the Niger to Cameroon and south to the sea. Its first capital was Enugu. Federal troops took the city in October 1967, and the government moved to Umuahia and then to Owerri as the territory shrank.',
    region: 'east',
    regionLabel: 'Eastern Region, 1960',
    places: [
      { name: 'Zungeru', lon: 6.15, lat: 9.81, note: 'Born here on 4 November 1933. Nnamdi Azikiwe was born in the same town.', label: 'above' },
      { name: 'Kano', lon: 8.52, lat: 12.0, note: 'He commanded the battalion here in January 1966 and kept it out of the first coup.', label: 'above' },
      { name: 'Enugu', lon: 7.51, lat: 6.44, note: 'He governed the East from here from January 1966 and declared Biafra here.', label: 'right' },
      { name: 'Umuahia', lon: 7.49, lat: 5.53, note: 'Capital of Biafra from late 1967 to April 1969. His bunker is now part of the war museum.', label: 'right' },
      { name: 'Uli', lon: 6.87, lat: 5.78, note: 'A stretch of road here was Biafra’s last airstrip. He flew out from it in January 1970.', label: 'left' },
      { name: 'Nnewi', lon: 6.91, lat: 6.02, note: 'His family’s home town. He was buried here on 2 March 2012.', label: 'left' },
    ],
  },
  ideasTitle: ['How Biafra', 'Held out'],
  ideasIntro: 'Biafra was blockaded by land and sea within a year. These are four things its government relied on.',
  ideas: [
    {
      glyph: 'gate',
      title: 'Aburi',
      body: 'In January 1967 Ojukwu met Yakubu Gowon and the other military governors at Aburi in Ghana. They agreed to loosen the federation, and each side went home with a different account of what that meant. Ojukwu’s position from then on was “On Aburi we stand”.',
    },
    {
      glyph: 'coins',
      title: 'Its own money',
      body: 'In January 1968 Nigeria replaced its banknotes to make the old ones held in Biafra worthless. Biafra printed its own pound within weeks. The notes showed a palm tree and a rising sun.',
    },
    {
      glyph: 'bridge',
      title: 'The airlift',
      body: 'After Port Harcourt fell in May 1968 the only way in was by air. Church groups and the Red Cross flew food into Uli at night, without lights, from São Tomé and Fernando Po. The same strip took the arms flights.',
    },
    {
      glyph: 'weave',
      title: 'Made at home',
      body: 'Biafran scientists and engineers formed a unit called Research and Production. It built mines and rockets, known as ogbunigwe, and refined petrol in small stills after the refinery was lost.',
    },
  ],
  momentsIntro: 'Nine dates from a life that ran from 1933 to 2011.',
  moments: [
    {
      year: '1933',
      title: 'Born in Zungeru',
      body: 'Chukwuemeka is born in the northern railway town where his father is working. He grows up in Lagos, goes to King’s College, and at twelve is sent to Epsom College in England.',
      photo: {
        id: 'father',
        alt: 'A heavy-set man in a dark suit and tie looking down at the camera.',
        caption: 'His father, Louis Odumegwu Ojukwu, in 1954.',
      },
    },
    {
      year: '1955',
      title: 'Oxford, then Udi',
      body: 'He takes a history degree at Lincoln College, Oxford, and comes home. He turns down a place in his father’s business and joins the colonial service as an assistant district officer at Udi.',
    },
    {
      year: '1957',
      title: 'Joins the army',
      body: 'He enlists at Zaria as a private soldier. He is sent to officer training in England the next year. By 1964 he is a lieutenant colonel commanding the 5th Battalion in Kano.',
    },
    {
      year: '1966',
      title: 'Governor of the East',
      body: 'After the January coup the new head of state, Johnson Aguiyi-Ironsi, makes him military governor of the Eastern Region. Ironsi is killed in a second coup in July. From May to October, mobs and soldiers in the North kill thousands of Easterners, and more than a million flee home.',
      photo: {
        id: 'pilot-1966',
        alt: 'A newspaper front page with the headline Regions abolished by new decree and a photograph of Aguiyi-Ironsi in uniform.',
        caption: 'The West African Pilot of 25 May 1966. Ironsi’s decree ended the regions, and the first killings of Easterners in the North followed within days.',
      },
    },
    {
      year: '1967',
      title: 'Biafra',
      body: 'The Aburi agreement breaks down. On 27 May Gowon divides the East into three states. Three days later Ojukwu declares the Republic of Biafra. Federal troops cross the border on 6 July.',
    },
    {
      year: '1968',
      title: 'Famine',
      body: 'Biafra loses the coast and most of its farmland. By the middle of the year thousands of people are dying of hunger every day, most of them children. Photographs of them reach newspapers and television around the world.',
      photo: {
        id: 'relief-1968',
        alt: 'A print of a photograph, pinned to a board: a relief worker in shorts hands something to a line of men in dark clothes.',
        caption: 'A relief worker with a line of men in Biafra on 7 August 1968. From the Dutch agency Anefo.',
      },
    },
    {
      year: '1969',
      title: 'Ahiara',
      body: 'On 1 June he reads the Ahiara Declaration in a village in Mbaise. It sets out what the Biafran revolution stands for and attacks profiteers on his own side. By then Biafra is a strip of land around Owerri and Uli.',
      photo: {
        id: 'ahiara-1969',
        alt: 'A bearded Ojukwu in a peaked cap and camouflage jacket, smiling among a crowd of officers and men in suits.',
        caption: 'Ojukwu at Ahiara in 1969.',
      },
    },
    {
      year: '1970',
      title: 'Exile',
      body: 'In the second week of January he hands over to his deputy, Philip Effiong, and flies to Ivory Coast. Effiong surrenders within days. Ojukwu stays abroad for twelve years.',
      photo: {
        id: 'portrait-1971',
        alt: 'A bearded Ojukwu in a plain tunic, leaning back on a sofa and looking at the camera.',
        caption: 'Ojukwu around 1971, early in his exile. His portrait on this page is cut from it.',
      },
    },
    {
      year: '1982',
      title: 'Home',
      body: 'President Shehu Shagari pardons him on 18 May and he lands in Nigeria a month later. He loses a Senate race in 1983, and is detained for most of 1984 after the army returns to power. He runs for President in 2003 and 2007. He dies in London on 26 November 2011 and is buried with military honours.',
      photo: {
        id: 'bunker',
        alt: 'A bust of Ojukwu on a white plinth in front of a pink and green two-storey building.',
        caption: 'A bust of Ojukwu outside his wartime bunker in Umuahia, now a museum.',
      },
    },
  ],
  context: {
    heading: 'The war',
    body: [
      'Estimates of the dead run from one million to three million. Most were civilians inside Biafra who starved. Britain and the Soviet Union armed the federal side. France sent arms to Biafra, and Tanzania, Gabon, Ivory Coast and Zambia recognised it.',
      'Ojukwu’s critics say he fought on after the war was lost and turned down a land route for food. His defenders say Easterners had no reason to trust a government that had not protected them in 1966. Both arguments are still made.',
    ],
    photo: {
      id: 'biafra-pound',
      alt: 'A pale blue Biafran one pound note in a museum case, printed with a palm tree and a rising sun.',
      caption: 'A Biafran one pound note.',
    },
    links: [
      { slug: 'gowon', note: 'His opponent in the war' },
      { slug: 'azikiwe', note: 'Backed Biafra, then changed sides in 1969' },
      { slug: 'achebe', note: 'Spoke for Biafra abroad' },
      { slug: 'murtala', note: 'Commanded the federal division on the Niger' },
    ],
  },
  resources: [
    { kind: 'Book', title: 'Because I Am Involved', by: 'Emeka Odumegwu-Ojukwu, 1989', url: 'https://openlibrary.org/search?q=Because+I+Am+Involved+Ojukwu' },
    { kind: 'Book', title: 'The Biafra Story', by: 'Frederick Forsyth, 1969', url: 'https://openlibrary.org/search?q=The+Biafra+Story+Forsyth' },
    { kind: 'Speech', title: 'The Ahiara Declaration', by: '1 June 1969', url: 'https://en.wikipedia.org/wiki/Ahiara_Declaration' },
    { kind: 'Article', title: 'Odumegwu Ojukwu', by: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Odumegwu-Ojukwu' },
    { kind: 'Article', title: 'Nigerian Civil War', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Nigerian_Civil_War' },
    { kind: 'Place', title: 'National War Museum, Umuahia', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/National_War_Museum,_Umuahia' },
    { kind: 'Archive', title: 'Photographs of Ojukwu', by: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/Category:Chukwuemeka_Odumegwu_Ojukwu' },
  ],
  sources: [
    { title: 'Chukwuemeka Odumegwu Ojukwu, Wikipedia', url: 'https://en.wikipedia.org/wiki/Chukwuemeka_Odumegwu_Ojukwu' },
    { title: 'Nigerian Civil War, Wikipedia', url: 'https://en.wikipedia.org/wiki/Nigerian_Civil_War' },
    { title: 'Odumegwu Ojukwu, Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Odumegwu-Ojukwu' },
  ],
}
