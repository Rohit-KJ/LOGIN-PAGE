"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, Calendar, Users, LogOut } from "lucide-react"
import { useState } from "react"

export function QuickActions() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const actions = [
    { label: "Update Profile", icon: User, variant: "default" as const },
    { label: "View Events", icon: Calendar, variant: "outline" as const },
    { label: "Find Mentors", icon: Users, variant: "outline" as const },
    { label: "Logout", icon: LogOut, variant: "ghost" as const },
  ]

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-[family-name:var(--font-poppins)]">Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {actions.map((action) => (
          <Button
            key={action.label}
            variant={action.variant}
            size="sm"
            className="w-full justify-start transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-lg cursor-pointer"
            style={{
              backgroundColor: hoveredButton === action.label ? "#000000" : "",
              color: hoveredButton === action.label ? "#ffffff" : "",
              borderColor: hoveredButton === action.label ? "#000000" : "",
            }}
            onMouseEnter={() => setHoveredButton(action.label)}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <action.icon className="h-4 w-4 mr-2" />
            {action.label}
          </Button>
        ))}
      </CardContent>
    </Card>
  )
}
