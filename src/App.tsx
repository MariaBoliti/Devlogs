import { Routes, Route } from 'react-router-dom'
import seedEntries from './data/entries'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Entry, Mood } from './data/entries'
import Home from './pages/Home'
import About from './pages/About'
import Entries from './pages/Entries'
import NewEntry from './pages/NewEntry'

export default function App() {
  const [entries, setEntries] = useState<Entry[]>(seedEntries)
  const navigate = useNavigate()

  
  function handleAddEntry(title: string, content: string, mood: Mood, tags: string[]) {
    const newEntry: Entry = {
      id: Date.now(),
      title,
      date: new Date().toLocaleDateString('en-US'),
      summary: content,
      mood,                    
      tags,                    
      createdAt: new Date().toISOString(),
    }
    setEntries((prev) => [newEntry, ...prev])
    navigate('/entries')
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} /> 
      <Route path="/entries" element={<Entries entries={entries} />} />
      <Route path="/entries/new" element={<NewEntry onAddEntry={handleAddEntry} />} />
    
    </Routes>
  )
}