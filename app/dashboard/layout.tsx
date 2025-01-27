'use client'

import { ErrorBoundary } from "@/components/ui/error-boundary"
import { Suspense } from "react"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingSpinner size="lg" />}>
        <div className="container mx-auto p-4 space-y-8">
          {children}
        </div>
      </Suspense>
    </ErrorBoundary>
  )
}
