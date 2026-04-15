import { useState } from 'react'
import type { Mood } from '../data/entries'

interface NewEntryFormProps {
  onAddEntry: (title: string, content: string, mood: Mood, tags: string[]) => void
}

export default function NewEntryForm({ onAddEntry }: NewEntryFormProps) {
  // ✅ Added missing state declarations
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [mood, setMood] = useState<Mood>('neutral')
  const [tagsInput, setTagsInput] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // ✅ Added missing validation logic
  const titleError = title.trim() === '' ? 'Title is required' : null
  const contentError = content.trim() === '' ? 'Content is required' : null
  const isValid = !titleError && !contentError

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    if (!isValid) return // ✅ Moved after setSubmitted

    // ✅ Parse tags from comma-separated input
    const tags = tagsInput
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag !== '')

    onAddEntry(title.trim(), content.trim(), mood, tags)

    // ✅ Reset form
    setTitle('')
    setContent('')
    setMood('neutral')
    setTagsInput('')
    setSubmitted(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="entry-title">Title</label>
        <br />
        <input
          id="entry-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          aria-invalid={submitted && !!titleError}
          aria-describedby={submitted && titleError ? 'title-error' : undefined}
        />
        {submitted && titleError && (
          <strong id="title-error" role="alert">{titleError}</strong>
        )}
      </p>

      <p>
        <label htmlFor="entry-mood">Mood</label>
        <br />
        <select
          id="entry-mood"
          value={mood}
          onChange={e => setMood(e.target.value as Mood)}
        >
          <option value="happy">happy</option>
          <option value="curious">curious</option>
          <option value="frustrated">frustrated</option>
          <option value="neutral">neutral</option>
        </select>
      </p>

      <p>
        <label htmlFor="entry-tags">Tags (comma-separated)</label>
        <br />
        <input
          id="entry-tags"
          type="text"
          value={tagsInput}
          onChange={(e) => setTagsInput(e.target.value)}
          placeholder="e.g., work, ideas, reflection"
        />
      </p>

      <p>
        <label htmlFor="entry-content">Content</label>
        <br />
        <textarea
          id="entry-content"
          
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          aria-invalid={submitted && !!contentError}
          aria-describedby={submitted && contentError ? 'content-error' : undefined}
        />
        {submitted && contentError && (
          <strong id="content-error" role="alert">{contentError}</strong>
        )}
      </p>

      <button type="submit" disabled={submitted && !isValid}>
        Save Entry
      </button>
    </form>
  )
}