"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, UserPlus } from "lucide-react"
import { useState } from "react"

export function NetworkingSection() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const suggestedAlumni = [
    {
      id: 1,
      name: "Priya Sharma",
      batch: "2019",
      role: "Product Manager",
      company: "Infosys",
      commonConnections: 12,
      avatar: "/professional-indian-woman-headshot.png",
    },
    {
      id: 2,
      name: "Arjun Patel",
      batch: "2017",
      role: "Data Scientist",
      company: "Tata Consultancy Services",
      commonConnections: 8,
      avatar: "/professional-indian-man-headshot.png",
    },
    {
      id: 3,
      name: "Kavya Reddy",
      batch: "2020",
      role: "UX Designer",
      company: "Wipro",
      commonConnections: 15,
      avatar: "/professional-indian-woman-headshot.png",
    },
  ]

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-[family-name:var(--font-poppins)]">Suggested Connections</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {suggestedAlumni.map((alumni) => (
          <div
            key={alumni.id}
            className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors"
          >
            <Avatar className="h-12 w-12">
              <AvatarImage src={alumni.avatar || "/placeholder.svg"} />
              <AvatarFallback className="bg-primary/10 text-primary">
                {alumni.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-card-foreground">{alumni.name}</h3>
                <Badge variant="outline" className="text-xs">
                  Class of {alumni.batch}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                {alumni.role} at {alumni.company}
              </p>
              <p className="text-xs text-muted-foreground">{alumni.commonConnections} mutual connections</p>
            </div>

            <div className="flex gap-2">
              <Button
                size="sm"
                variant="outline"
                className="transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-lg cursor-pointer bg-transparent"
                style={{
                  backgroundColor: hoveredButton === `message-${alumni.id}` ? "#000000" : "",
                  color: hoveredButton === `message-${alumni.id}` ? "#ffffff" : "",
                  borderColor: hoveredButton === `message-${alumni.id}` ? "#000000" : "",
                }}
                onMouseEnter={() => setHoveredButton(`message-${alumni.id}`)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                Message
              </Button>
              <Button
                size="sm"
                className="transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg cursor-pointer"
                style={{
                  backgroundColor: hoveredButton === `connect-${alumni.id}` ? "#000000" : "",
                  color: hoveredButton === `connect-${alumni.id}` ? "#ffffff" : "",
                  borderColor: hoveredButton === `connect-${alumni.id}` ? "#000000" : "",
                }}
                onMouseEnter={() => setHoveredButton(`connect-${alumni.id}`)}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <UserPlus className="h-4 w-4 mr-1" />
                Connect
              </Button>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
