import { createClient } from '@/utils/supabase/server'
import MemoryList from './MemoryList'
import NewMemoryForm from './NewMemoryForm'

interface Memory {
  id: string
  title: string
  content: string
  created_at: string
}

export default async function MemoriesPage() {
  const supabase = createClient()

  const { data: memories, error } = await supabase
    .from('memories')
    .select('*')
    .order('created_at', { ascending: false })
    .throwOnError()

  if (error) {
    console.error('Error fetching memories:', error)
    return <div>Error loading memories</div>
  }

  const typedMemories = memories as Memory[] ?? []

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8">
      <h1 className="text-2xl font-bold">My Memories</h1>
      <NewMemoryForm />
      <MemoryList memories={typedMemories} />
    </div>
  )
}
