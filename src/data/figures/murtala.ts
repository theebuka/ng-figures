import type { Figure } from '../types'

export const murtala: Figure = {
  slug: 'murtala',
  name: 'Murtala Muhammed',
  nameLines: ['Murtala', 'Muhammed'],
  epithet: 'With immediate effect',
  born: 1938,
  died: 1976,
  emblemCaption: 'A centre mark',
  stats: [
    { label: 'Position', value: 'Head of state' },
    { label: 'Lifetime', value: '1938-1976' },
    { label: 'Home town', value: 'Kano' },
    { label: 'Trained at', value: 'Sandhurst' },
    { label: 'In office', value: '1975-1976' },
    { label: 'Known for', value: 'Choosing Abuja' },
  ],
  statement:
    'Murtala Muhammed ruled Nigeria for six and a half months. In that time his government created seven states, chose Abuja as the new capital and set a date to hand power to civilians.',
  character:
    'He was a signals officer from an old Kano family, quick-tempered, with a hard record in the civil war. As head of state he stayed in his own house in Ikoyi and drove to work through Lagos traffic without an escort. His announcements ended with the words “with immediate effect”, and the phrase stuck to him.',
  map: {
    heading: 'He moved the capital',
    body: 'Lagos was crowded, on the coast and in Yoruba country. A panel under Justice Akinola Aguda looked for a site near the middle of the map that belonged to no large group. It chose about 8,000 square kilometres around the small town of Abuja. Muhammed announced the move on 3 February 1976. The government did not arrive until December 1991.',
    region: 'north',
    regionLabel: 'Northern Region, 1960',
    places: [
      { name: 'Kano', lon: 8.52, lat: 12.0, note: 'Born in the old city on 8 November 1938 and buried here.', label: 'above' },
      { name: 'Zaria', lon: 7.72, lat: 11.08, note: 'He finished at Government College here, now Barewa College, in 1957.', label: 'left' },
      { name: 'Abeokuta', lon: 3.345, lat: 7.156, note: 'The mutiny of 29 July 1966 began at the barracks here. He directed the coup from Lagos.', label: 'left' },
      { name: 'Asaba', lon: 6.73, lat: 6.2, note: 'His division killed hundreds of civilian men and boys here in October 1967, then failed three times to cross the Niger to Onitsha.', label: 'right' },
      { name: 'Abuja', lon: 7.49, lat: 9.06, note: 'The site his government chose for the new capital.', label: 'right' },
      { name: 'Lagos', lon: 3.39, lat: 6.455, note: 'He was shot in his car in Ikoyi on 13 February 1976.', label: 'below' },
    ],
  },
  ideasTitle: ['What he', 'Changed'],
  ideasIntro: 'Muhammed had 199 days in office. These are four things his government did with them.',
  ideas: [
    {
      glyph: 'gate',
      title: 'The purge',
      body: 'He removed all twelve of Gowon’s state governors in his first week. Over the next months more than 10,000 civil servants, judges, police and lecturers were retired or dismissed, many without a hearing. The public cheered. The civil service lost much of its confidence.',
    },
    {
      glyph: 'weave',
      title: 'Nineteen states',
      body: 'On 3 February 1976 he added seven states to Gowon’s twelve. Several of the new ones answered old demands from minority peoples for a state of their own.',
    },
    {
      glyph: 'rays',
      title: 'A new capital',
      body: 'The same broadcast named the Abuja area as the future federal capital. The land was taken from three states and given to no one of them.',
    },
    {
      glyph: 'bridge',
      title: 'A date to leave',
      body: 'On 1 October 1975 he set out five stages that would end with elections and a handover on 1 October 1979. He appointed fifty people to draft a constitution. His successor kept to the date.',
    },
  ],
  momentsIntro: 'Nine dates from a life that ran from 1938 to 1976.',
  moments: [
    {
      year: '1938',
      title: 'Born in Kano',
      body: 'Murtala Ramat Muhammed is born into a family of Islamic judges in the Kurawa quarter. His uncle Inuwa Wada later becomes minister of defence.',
    },
    {
      year: '1959',
      title: 'Sandhurst',
      body: 'He joins the army after school and trains at the Royal Military Academy at Sandhurst. He is commissioned into the signals in 1961 and serves with the United Nations force in the Congo.',
    },
    {
      year: '1966',
      title: 'The July coup',
      body: 'The January coup kills the Sardauna and other northern leaders. Muhammed, a lieutenant colonel of twenty-seven, is one of the officers who lead the answer to it on 29 July. He wants the North to leave Nigeria. Civil servants and diplomats talk the officers out of it, and Gowon becomes head of state.',
    },
    {
      year: '1967',
      title: 'The Mid-West and Asaba',
      body: 'He raises the 2nd Division and drives the Biafran army out of the Mid-West in September. In Asaba in October his troops shoot hundreds of civilians. His three attempts to cross the Niger cost many of his own men, and he gives up the command in 1968.',
    },
    {
      year: '1974',
      title: 'Commissioner',
      body: 'He becomes a brigadier in 1971. Gowon makes him federal Commissioner for Communications in August 1974, and he keeps his army post as Inspector of Signals.',
      photo: {
        id: 'civilian-1975',
        alt: 'Muhammed in an embroidered cap and patterned robe, looking past the camera.',
        caption: 'Muhammed out of uniform in 1975.',
      },
    },
    {
      year: '1975',
      title: 'Head of state',
      body: 'Younger officers remove Gowon on 29 July and ask Muhammed to take over. He names Olusegun Obasanjo as his deputy. He cancels the disputed 1973 census and begins dismissing officials.',
      photo: {
        id: 'with-obasanjo',
        alt: 'Two officers in uniform and peaked caps walking side by side.',
        caption: 'With Olusegun Obasanjo, his chief of staff, in 1975.',
      },
    },
    {
      year: '1976',
      title: 'Addis Ababa',
      body: 'On 11 January he tells a summit of African leaders that Nigeria backs the MPLA government in Angola. President Ford of the United States had written to African leaders urging them not to. Muhammed calls the letter an insult and says Africa has come of age.',
      photo: {
        id: 'with-ajoke',
        alt: 'Muhammed and his wife standing together indoors in matching patterned robes.',
        caption: 'With his wife, Ajoke, at home in Lagos in 1975.',
      },
    },
    {
      year: '1976',
      title: 'States and a capital',
      body: 'On 3 February he announces the seven new states and the move to Abuja. It is his last major broadcast.',
      photo: {
        id: 'aso-rock',
        alt: 'A large bare rock rising behind trees and a green golf course.',
        caption: 'Aso Rock in Abuja, photographed in 2015.',
      },
    },
    {
      year: '1976',
      title: 'Friday 13 February',
      body: 'Soldiers led by Lieutenant Colonel Buka Suka Dimka open fire on his car in morning traffic near the Federal Secretariat. Muhammed, his aide and his driver are killed. He is thirty-seven. The coup fails by the afternoon.',
      photo: {
        id: 'state-car',
        alt: 'A black Mercedes saloon with a small flag on the wing, roped off inside a museum gallery.',
        caption: 'The car he was killed in, at the National Museum in Lagos.',
      },
    },
  ],
  context: {
    heading: 'After him',
    body: [
      'Obasanjo took over and kept the timetable. Elections were held in 1979 and Shehu Shagari was sworn in as President on 1 October. It was the first time a Nigerian military government had handed power to civilians.',
      'His reputation rests on those 199 days. The killings at Asaba had little public attention in Nigeria for decades. His face is on the twenty naira note, and the main airport in Lagos carries his name.',
    ],
    photo: {
      id: 'airport',
      alt: 'The inside of an airport terminal with a high ceiling, check-in desks and rows of seats.',
      caption: 'Murtala Muhammed International Airport in Lagos, photographed in 2019.',
    },
    links: [
      { slug: 'gowon', note: 'He helped bring Gowon to power in 1966 and replaced him in 1975' },
      { slug: 'bello', note: 'The Sardauna, whose killing set off the July coup' },
      { slug: 'ojukwu', note: 'His division fought Biafra on the Niger' },
      { slug: 'awolowo', note: 'Turned down a seat on his constitution committee' },
      { slug: 'kwali', note: 'On the other side of the twenty naira note' },
    ],
  },
  resources: [
    { kind: 'Book', title: 'The Asaba Massacre: Trauma, Memory, and the Nigerian Civil War', by: 'S. Elizabeth Bird and Fraser Ottanelli, 2017', url: 'https://openlibrary.org/search?q=The+Asaba+Massacre+Bird+Ottanelli' },
    { kind: 'Article', title: 'Murtala Ramat Mohammed', by: 'Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Murtala-Ramat-Mohammed' },
    { kind: 'Article', title: '1975 Nigerian coup', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/1975_Nigerian_coup_d%27%C3%A9tat' },
    { kind: 'Article', title: 'Federal Capital Territory', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Federal_Capital_Territory_(Nigeria)' },
    { kind: 'Place', title: 'Nigerian National Museum, Lagos', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Nigerian_National_Museum' },
    { kind: 'Archive', title: 'Photographs of Muhammed', by: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/Category:Murtala_Mohammed' },
  ],
  sources: [
    { title: 'Murtala Muhammed, Wikipedia', url: 'https://en.wikipedia.org/wiki/Murtala_Muhammed' },
    { title: 'Asaba massacre, Wikipedia', url: 'https://en.wikipedia.org/wiki/Asaba_massacre' },
    { title: 'Murtala Ramat Mohammed, Encyclopaedia Britannica', url: 'https://www.britannica.com/biography/Murtala-Ramat-Mohammed' },
  ],
}
