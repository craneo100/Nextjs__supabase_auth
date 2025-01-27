'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function handleCreateMemory(formData: FormData) {
  const title = formData.get('title') as string
  const content = formData.get('content') as string
  
  if (!title || !content) {
    throw new Error('Title and content are required')
  }

  const supabase = createClient()

  const { error } = await supabase
    .from('memories')
    .insert([{ title, content }])
    .select()
    .single()

  if (error) {
    console.error('Error creating memory:', error)
    throw new Error('Failed to create memory')
  }

  revalidatePath('/dashboard/memories')
}
