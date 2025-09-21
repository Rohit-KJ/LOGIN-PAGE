"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"
import { useState } from "react"

export function AlumniDirectory() {
  const [filterHovered, setFilterHovered] = useState(false)
  const [browseAllHovered, setBrowseAllHovered] = useState(false)
  const [viewProfileHovered, setViewProfileHovered] = useState<{ [key: number]: boolean }>({})

  const recentAlumni = [
    {
      id: 1,
      name: "Nakul Mehta",
      batch: "2016",
      role: "Software Architect",
      company: "Amazon",
      location: "Bangalore, India",
    },
    {
      id: 2,
      name: "Rashmi Mahajan",
      batch: "2019",
      role: "Marketing Director",
      company: "Spotify",
      location: "Mumbai, India",
    },
    {
      id: 3,
      name: "Devika Sharma",
      batch: "2021",
      role: "Data Analyst",
      company: "TCS",
      location: "Hyderabad, India",
    },
  ]

  const handleViewProfileHover = (id: number, isHovered: boolean) => {
    setViewProfileHovered((prev) => ({ ...prev, [id]: isHovered }))
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-[family-name:var(--font-poppins)]">Alumni Directory</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search alumni by name, company, or batch..." className="pl-10" />
          </div>
          <Button
            variant="outline"
            size="icon"
            className="transition-all duration-200 shadow-sm hover:shadow-lg cursor-pointer bg-transparent"
            style={{
              backgroundColor: filterHovered ? "#000000" : "transparent",
              color: filterHovered ? "#ffffff" : undefined,
              borderColor: filterHovered ? "#000000" : undefined,
              transform: filterHovered ? "scale(1.02)" : "scale(1)",
            }}
            onMouseEnter={() => setFilterHovered(true)}
            onMouseLeave={() => setFilterHovered(false)}
          >
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        <div className="space-y-3">
          {recentAlumni.map((alumni) => (
            <div
              key={alumni.id}
              className="flex items-center gap-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
            >
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={`/indian-professional-headshot.png?height=40&width=40&query=Indian professional headshot ${alumni.name}`}
                />
                <AvatarFallback className="bg-primary/10 text-primary text-sm">
                  {alumni.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-sm text-card-foreground">{alumni.name}</h3>
                  <Badge variant="outline" className="text-xs">
                    {alumni.batch}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {alumni.role} at {alumni.company}
                </p>
                <p className="text-xs text-muted-foreground">{alumni.location}</p>
              </div>

              <Button
                size="sm"
                variant="outline"
                className="text-xs transition-all duration-200 shadow-sm hover:shadow-lg cursor-pointer bg-transparent"
                style={{
                  backgroundColor: viewProfileHovered[alumni.id] ? "#000000" : "transparent",
                  color: viewProfileHovered[alumni.id] ? "#ffffff" : undefined,
                  borderColor: viewProfileHovered[alumni.id] ? "#000000" : undefined,
                  transform: viewProfileHovered[alumni.id] ? "scale(1.02)" : "scale(1)",
                }}
                onMouseEnter={() => handleViewProfileHover(alumni.id, true)}
                onMouseLeave={() => handleViewProfileHover(alumni.id, false)}
              >
                View Profile
              </Button>
            </div>
          ))}
        </div>

        <Button
          variant="ghost"
          className="w-full transition-all duration-200 cursor-pointer"
          style={{
            backgroundColor: browseAllHovered ? "#000000" : "transparent",
            color: browseAllHovered ? "#ffffff" : undefined,
            borderColor: browseAllHovered ? "#000000" : undefined,
            transform: browseAllHovered ? "scale(1.02)" : "scale(1)",
          }}
          onMouseEnter={() => setBrowseAllHovered(true)}
          onMouseLeave={() => setBrowseAllHovered(false)}
        >
          Browse All Alumni
        </Button>
      </CardContent>
    </Card>
  )
}
