import type { Figure } from '../types'

export const kwali: Figure = {
  slug: 'kwali',
  name: 'Ladi Kwali',
  nameLines: ['Ladi', 'Kwali'],
  epithet: 'Potter of Abuja',
  born: 1925,
  died: 1984,
  emblemCaption: 'A water pot with a lizard',
  stats: [
    { label: 'Position', value: 'Potter' },
    { label: 'Lifetime', value: 'c.1925-1984' },
    { label: 'Home town', value: 'Kwali' },
    { label: 'Workshop', value: 'Abuja Pottery' },
    { label: 'Joined', value: '1954' },
    { label: 'Known for', value: 'Glazed water pots' },
  ],
  statement:
    'Ladi Kwali was a Gwari potter who joined the government pottery at Abuja in 1954 as its first woman. Her coiled, glazed water pots were shown in London and bought by museums in Europe and America.',
  character:
    'She learned to coil pots from her aunt, as girls in her village did. At Abuja she also learned the wheel and the kiln, but she built her best pieces by hand. She cut lizards, scorpions, fish and crocodiles into the clay.',
  map: {
    heading: 'She worked near the new capital',
    body: 'Kwali is a Gwari village in what is now the Federal Capital Territory. The pottery was at Abuja, the old emirate town about forty kilometres to the north. When the new federal capital took the name Abuja in 1976, the old town was renamed Suleja.',
    region: 'north',
    regionLabel: 'Northern Region, 1960',
    places: [
      { name: 'Kwali', lon: 7.02, lat: 8.88, note: 'Born here about 1925. Pottery in the village was women’s work.', label: 'left' },
      { name: 'Suleja', lon: 7.18, lat: 9.18, note: 'Then called Abuja. The pottery training centre opened here in 1952, and she joined it in 1954.', label: 'left' },
      { name: 'Abuja', lon: 7.49, lat: 9.06, note: 'The new capital, which took the old emirate’s name. A main road and a convention centre are named after her.', label: 'right' },
      { name: 'Zaria', lon: 7.72, lat: 11.08, note: 'Ahmadu Bello University gave her an honorary doctorate in 1977.', label: 'above' },
    ],
  },
  ideasTitle: ['How she', 'Worked'],
  ideasIntro: 'Kwali brought together the village pot and the studio kiln. These are four parts of how she did it.',
  ideas: [
    {
      glyph: 'weave',
      title: 'Coiling',
      body: 'She built a pot from ropes of clay laid in rings, then beat the walls thin from the inside with a flat wooden paddle. Gwari women had made water jars this way for generations.',
    },
    {
      glyph: 'press',
      title: 'Cut and inlaid',
      body: 'She scratched animals into the soft clay and rolled bands of pattern on with small notched cylinders of wood. At Abuja she filled the lines with a pale slip so they showed through the glaze.',
    },
    {
      glyph: 'rays',
      title: 'Stoneware',
      body: 'Village pots were fired in a bonfire of dry grass. At Abuja hers went into a kiln at a far higher heat, in stoneware clay under a green or dark brown glaze. That made them hard and watertight.',
    },
    {
      glyph: 'bridge',
      title: 'The Gwari room',
      body: 'She became an instructor. By 1965 four more Gwari women, Halima Audu, Lami Toto, Assibi Iddo and Kande Ushafa, worked with her in a workshop they called Dakin Gwari, building large pots by hand.',
    },
  ],
  momentsIntro: 'Nine dates from a life that ran from about 1925 to 1984.',
  moments: [
    {
      year: '1925',
      title: 'Born in Kwali',
      body: 'Ladi is born in a Gwari village where women make the pots. The year is an estimate. Her aunt teaches her to coil water jars and cooking pots, and her brother later said her pots often sold before they reached the market.',
      photo: {
        id: 'gwari-jar',
        alt: 'A round earthenware jar with a flared rim, dark at the top and reddish below, with fine incised lines.',
        caption: 'A Gwari water jar from the late twentieth century, now in the Musée des Confluences in Lyon.',
      },
    },
    {
      year: '1950',
      title: 'The emir’s pots',
      body: 'Suleiman Barau, the Emir of Abuja, buys several of her pots for his house. Michael Cardew, an English potter who had worked in the Gold Coast, sees them there.',
    },
    {
      year: '1952',
      title: 'A pottery at Abuja',
      body: 'Cardew is now the colonial government’s Pottery Officer. In April he opens a training centre at Abuja to teach glazed pottery. Its first trainees are all men.',
    },
    {
      year: '1954',
      title: 'The first woman',
      body: 'She joins the centre and learns to throw on a wheel, mix glazes and fire a kiln. She keeps building her large water pots by hand, and in time she teaches the trainees.',
    },
    {
      year: '1958',
      title: 'London',
      body: 'Cardew shows Abuja pottery at the Berkeley Galleries in London in 1958, 1959 and 1962. Her pots draw the most praise, and museums and collectors start to buy them.',
      photo: {
        id: 'pot-york',
        alt: 'A round dark-glazed pot with a flared rim, its sides covered in incised lizards and fish picked out in pale slip.',
        caption: 'One of her stoneware pots, now in the W. A. Ismay collection at York.',
      },
    },
    {
      year: '1961',
      title: 'Demonstrations',
      body: 'She builds pots in front of audiences in Britain, at the art school in Farnham and at Cardew’s own pottery at Wenford Bridge in Cornwall. Over the next few years she also demonstrates in France and Germany.',
    },
    {
      year: '1972',
      title: 'America',
      body: 'She tours American universities with Cardew and his assistant Clement Kofi Athey, on a trip arranged by a group called African Craftsmen in America. She builds pots by hand with no wheel, walking round them as they grow, and appears on television in Tennessee.',
      photo: {
        id: 'chicago-1972',
        alt: 'Kwali in a headwrap, bent over a tall pot on a stand, with people sitting on the ground behind her.',
        caption: 'Building a pot in front of a crowd in Chicago on 14 September 1972, from the Bulletin of the Field Museum.',
      },
    },
    {
      year: '1977',
      title: 'Doctor Kwali',
      body: 'Ahmadu Bello University in Zaria gives her an honorary doctorate. Britain had made her an MBE in 1963. Nigeria gives her the National Order of Merit in 1980 and makes her an Officer of the Order of the Niger in 1981.',
      photo: {
        id: 'portrait',
        alt: 'Kwali in a patterned headwrap, smiling broadly and holding up a pot by its neck, with a medal pinned to her dress.',
        caption: 'Wearing her MBE, so taken in 1963 or later. The photographer is not known. Her portrait on this page is cut from it.',
      },
    },
    {
      year: '1984',
      title: 'Death',
      body: 'She dies on 12 August. A few years earlier the Abuja pottery had been renamed the Ladi Kwali Pottery. Her picture is now on the back of the twenty naira note.',
    },
  ],
  context: {
    heading: 'Craft and the new country',
    body: [
      'The colonial Department of Commerce and Industry set up the Abuja centre to start a glazed-pottery industry in the North. Kwali took its kilns and glazes and used them on a village form, the coiled water jar, and her pots were sold in London as art.',
      'Most of what was written about the pottery at the time came from Cardew and other Europeans. Her own reputation has grown since. In 2025 Tate Modern in London gave her a room of her own in its exhibition of Nigerian modern art.',
    ],
    photo: {
      id: 'tate-2025',
      alt: 'Glazed pots and a lidded dish in glass cases on orange plinths in a gallery.',
      caption: 'Her pots in the exhibition Nigerian Modernism at Tate Modern, London, in 2025.',
    },
    links: [
      { slug: 'murtala', note: 'On the other side of the twenty naira note' },
      { slug: 'bello', note: 'Premier of the Northern Region when she joined the pottery' },
      { slug: 'achebe', note: 'His first novel came out the year her pots were first shown in London' },
    ],
  },
  resources: [
    { kind: 'Book', title: 'A Pioneer Potter', by: 'Michael Cardew, 1988', url: 'https://openlibrary.org/search?q=A+Pioneer+Potter+Michael+Cardew' },
    { kind: 'Article', title: 'Ladi Kwali', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Ladi_Kwali' },
    { kind: 'Article', title: 'Michael Cardew', by: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Michael_Cardew' },
    { kind: 'Place', title: 'York Art Gallery, home of the W. A. Ismay collection', by: 'York Museums Trust', url: 'https://www.yorkartgallery.org.uk/' },
    { kind: 'Archive', title: 'Photographs of her pots', by: 'Wikimedia Commons', url: 'https://commons.wikimedia.org/wiki/Category:Ladi_Kwali' },
  ],
  sources: [
    { title: 'Ladi Kwali, Wikipedia', url: 'https://en.wikipedia.org/wiki/Ladi_Kwali' },
    { title: 'Wall text for Room 3, Nigerian Modernism, Tate Modern, 2025 (photograph)', url: 'https://commons.wikimedia.org/wiki/File:Room_3,_Ladi_Kwali_-_Of_Soil_and_Stone,_Nigerian_Modernism,_Tate_Modern,_London_14.jpg' },
    { title: 'Label for the 1972 tour photographs, Tate Modern, 2025 (photograph)', url: 'https://commons.wikimedia.org/wiki/File:Room_3,_Ladi_Kwali_-_Of_Soil_and_Stone,_Nigerian_Modernism,_Tate_Modern,_London_18.jpg' },
  ],
}
