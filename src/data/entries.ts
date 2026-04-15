export type Mood = 'happy'| 'curious' | 'frustrated'| 'neutral'

export interface Entry{
    id: number;
    title: string;
    date: string;
    summary: string;
    mood: Mood ;
    tags: string [];
createdAt: string  

// full ISO timestamp
};
const seedEntries: Entry [] = [
 
{
    id: 1,
    title: 'set up my Devlog project',
    date: '03/06/2026',
    summary: 'Scaffolded a Vite + React + TypeScript app.',
    mood: 'happy',
    tags: ['vite', 'react', 'typescript'],
    createdAt: '2025-06-01T09:00:00.000Z'
},
{
    id: 2,
    title: 'Tea Guest Today',
    date: '03/06/2026',
    summary: 'We talked with Cara Degraff!',
    mood: 'happy',
    tags: ['social', 'guest'],
    createdAt: '2025-06-03T14:30:00.000Z'
},
{
    id: 3,
    title: 'I drank h20',
    date: '03/06/2026',
    summary: 'I drank water which is a miracle!!!',
    mood: 'curious',
    tags: ['health', 'hydration'],
    createdAt: '2025-06-04T10:15:00.000Z'
},
{
    id: 4,
    title: 'I am tired',
    date: '03/06/2026',
    summary: 'So sleepy eepy',
    mood: 'neutral',
    tags: ['sleep', 'energy'],
    createdAt: '2025-06-05T20:45:00.000Z'
}
 
 
]
 
export default seedEntries