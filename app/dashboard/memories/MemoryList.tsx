'use client'

import { memo } from 'react'
import { Card } from '@/components/ui/card'
import { format } from 'date-fns'

interface Memory {
  id: string
  title: string
  content: string
  created_at: string
}

function MemoryList({ memories = [] }: { memories: Memory[] }) {
  if (!memories.length) {
    return (
      <Card className="p-4">
        <p className="text-center text-gray-500">No memories yet</p>
      </Card>
    )
  }

  return (
    <div className="space-y-4">
      {memories.map((memory) => (
        <Card key={memory.id} className="p-4 hover:shadow-lg transition-shadow">
          <h3 className="text-lg font-semibold">{memory.title}</h3>
          <p className="text-sm text-gray-600 whitespace-pre-wrap">{memory.content}</p>
          <p className="text-xs text-gray-400 mt-2">
            Created: {format(new Date(memory.created_at), 'PPP')}
          </p>
        </Card>
      ))}
    </div>
  )
}

export default memo(MemoryList)
