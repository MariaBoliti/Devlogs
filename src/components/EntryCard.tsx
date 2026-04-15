import type { Entry } from '../data/entries'
 
function  EntryCard({ entry }: { entry: Entry}) {
    return (
        <article>
 
            <h3>{entry.title}</h3>
            <time dateTime={entry.createdAt}>
                {new Date(entry.createdAt).toLocaleDateString()}
                </time>
            <p>{entry.summary}</p>
 { entry.tags.map(tag => (
    <span key={tag}> # {tag}</span>
 ))}
        </article>
    )
}
 
export default EntryCard