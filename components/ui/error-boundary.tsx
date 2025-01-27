'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ReactNode } from "react"
import React from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallback?: ReactNode
}

interface ErrorCardProps {
  title?: string
  description?: string
  retry?: () => void
  error?: Error
}

export function ErrorCard({ 
  title = "Something went wrong", 
  description = "An error occurred while processing your request",
  retry,
  error
}: ErrorCardProps) {
  return (
    <Card className="w-full max-w-md mx-auto mt-8">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
        {error?.message && (
          <p className="mt-2 text-sm text-red-500">{error.message}</p>
        )}
      </CardContent>
      <CardFooter>
        {retry && (
          <Button onClick={retry}>Try again</Button>
        )}
      </CardFooter>
    </Card>
  )
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  { hasError: boolean; error: Error | undefined }
> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false, error: undefined }
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <ErrorCard 
          error={this.state.error}
          retry={() => this.setState({ hasError: false, error: undefined })}
        />
      )
    }

    return this.props.children
  }
}
