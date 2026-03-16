import { Track, FeaturedItem } from './types';

export const RADIO_CONFIG = {
  name: 'Rádio Sebastián',
  streamUrl: 'http://stream.zeno.fm/ueoubhhgiortv',
  metadataUrl: 'https://api.zeno.fm/mounts/metadata/subscribe/ueoubhhgiortv',
  zenoLink: 'https://zeno.fm/radio/radio-sebastian/',
  email: 'radiosebastian565@gmail.com',
  instagram: 'https://www.instagram.com/radiosebastian_sk',
  logo: '/logo.png',
  credit: 'https://petrvurm.cz/?utm_source=radio_sebastian&utm_medium=web&utm_campaign=footer_credit',
  creditName: 'Petr Vurm',
};

export const PLAYLIST_DATA: Track[] = [
  { id: '1', artist: 'Dua Lipa', title: 'Houdini' },
  { id: '2', artist: 'The Weeknd', title: 'Blinding Lights' },
  { id: '3', artist: 'Miley Cyrus', title: 'Flowers' },
  { id: '4', artist: 'Harry Styles', title: 'As It Was' },
  { id: '5', artist: 'Taylor Swift', title: 'Anti-Hero' },
  { id: '6', artist: 'Ed Sheeran', title: 'Bad Habits' },
  { id: '7', artist: 'Tiësto', title: 'The Business' },
  { id: '8', artist: 'David Guetta', title: 'I\'m Good (Blue)' },
  { id: '9', artist: 'Calvin Harris', title: 'Miracle' },
  { id: '10', artist: 'Raye', title: 'Escapism.' },
  { id: '11', artist: 'SZA', title: 'Kill Bill' },
  { id: '12', artist: 'Olivia Rodrigo', title: 'Vampire' },
  { id: '13', artist: 'Doja Cat', title: 'Paint The Town Red' },
  { id: '14', artist: 'Peggy Gou', title: '(It Goes Like) Nanana' },
  { id: '15', artist: 'Fred again..', title: 'Adore U' },
];

export const FEATURED_CONTENT: FeaturedItem[] = [
  {
    id: 'europa2',
    title: 'Vystúpenie v Europa 2',
    description: 'Rádio Sebastián v éteri najpočúvanejšieho rádia pre mladých.',
    link: 'https://podmaz.sk/podcast/ranna-show-sketch-bros/1268996237-nabonzoval-ma-policajtom-za-protismer-rannashow-04.03.2026',
    type: 'podcast',
    date: '04.03.2026'
  },
  {
    id: 'reportaz',
    title: 'Návšteva v rádiu',
    description: 'Pozrite si reportáž z našich priestorov a nahliadnite do zákulisia vysielania.',
    link: 'https://drive.google.com/file/d/1yyekjw75A6Ikv-guvnQB6O-5_S5uPEbu/view',
    type: 'video'
  }
];

export const ABOUT_TEXT = `
Rádio Sebastián je moderné slovenské online rádio, ktoré vám prináša tie najväčšie hity 24 hodín denne, 7 dní v týždni. Naším cieľom je vytvoriť priestor pre kvalitnú hudbu a pozitívnu energiu, ktorú môžete mať so sebou kdekoľvek.

Sme rádio, ktoré počúva svojich poslucháčov. Naša dramaturgia je postavená na aktuálnych svetových trendoch, ale nezabúdame ani na overené klasiky, ktoré formovali hudobnú scénu.

Vysielame nonstop, bez zbytočných rečí, s dôrazom na čistý hudobný zážitok. Pridajte sa k našej komunite a nechajte sa unášať rytmom Rádia Sebastián.
`;
