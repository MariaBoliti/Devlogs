import type {Entry} from '../data/entries'
import EntryCard from '../components/EntryCard'
import { Link } from 'react-router-dom'
 
 interface EntriesProps {
  entries: Entry[]
}
 
 
function Entries ({entries}: EntriesProps){
   return( 
   <>
   
<Link to="/About">Go to About Page</Link>
<Link to="/">Go to Home</Link>
 
 
    <h2>All Entries ({entries.length})</h2>


   {entries.length === 0 && <p>Post An Entry!</p>}
 
    {entries.map((entry) => (
          <EntryCard key={entry.id} entry={entry} />
        ))}
 
 
   
    </>
   )
}
 
export default Entries
 