"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Users, MessageCircle, CheckCircle } from "lucide-react"
import { useState } from "react"

export function MentorshipRequests() {
  const [viewAllHovered, setViewAllHovered] = useState(false)
  const [acceptHovered, setAcceptHovered] = useState<{ [key: number]: boolean }>({})
  const [messageHovered, setMessageHovered] = useState<{ [key: number]: boolean }>({})

  const mentorshipRequests = [
    {
      id: 1,
      name: "Ananya Singh",
      year: "Final Year",
      field: "Computer Science",
      request:
        "Looking for guidance in transitioning from academia to industry, specifically in software engineering roles.",
      timeAgo: "2 days ago",
      urgent: false,
    },
    {
      id: 2,
      name: "Ridhima Kumar",
      year: "3rd Year",
      field: "Business Administration",
      request: "Seeking mentorship for startup ideas and entrepreneurship journey.",
      timeAgo: "5 days ago",
      urgent: true,
    },
    {
      id: 3,
      name: "Sneha Gupta",
      year: "2nd Year",
      field: "Data Science",
      request: "Need advice on building a strong portfolio and internship opportunities in data science.",
      timeAgo: "1 week ago",
      urgent: false,
    },
  ]

  const handleAcceptHover = (id: number, isHovered: boolean) => {
    setAcceptHovered((prev) => ({ ...prev, [id]: isHovered }))
  }

  const handleMessageHover = (id: number, isHovered: boolean) => {
    setMessageHovered((prev) => ({ ...prev, [id]: isHovered }))
  }

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-[family-name:var(--font-poppins)] flex items-center gap-2">
          <Users className="h-5 w-5 text-primary" />
          Mentorship Requests
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {mentorshipRequests.map((request) => (
          <div key={request.id} className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
            <div className="flex items-start gap-3">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={`/indian-student-headshot-.jpg?key=chdxq&height=40&width=40&query=Indian student headshot ${request.name}`}
                />
                <AvatarFallback className="bg-secondary/20 text-secondary-foreground">
                  {request.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-sm text-card-foreground">{request.name}</h3>
                  <Badge variant="outline" className="text-xs">
                    {request.year}
                  </Badge>
                  {request.urgent && (
                    <Badge variant="destructive" className="text-xs">
                      Urgent
                    </Badge>
                  )}
                </div>

                <p className="text-xs text-muted-foreground">
                  {request.field} • {request.timeAgo}
                </p>

                <p className="text-sm text-card-foreground leading-relaxed">{request.request}</p>

                <div className="flex gap-2 pt-2">
                  <Button
                    size="sm"
                    className="text-xs transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
                    style={{
                      backgroundColor: acceptHovered[request.id] ? "#000000" : undefined,
                      color: acceptHovered[request.id] ? "#ffffff" : undefined,
                      borderColor: acceptHovered[request.id] ? "#000000" : undefined,
                      transform: acceptHovered[request.id] ? "scale(1.02)" : "scale(1)",
                    }}
                    onMouseEnter={() => handleAcceptHover(request.id, true)}
                    onMouseLeave={() => handleAcceptHover(request.id, false)}
                  >
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Accept
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="text-xs transition-all duration-200 shadow-sm hover:shadow-lg cursor-pointer bg-transparent"
                    style={{
                      backgroundColor: messageHovered[request.id] ? "#000000" : "transparent",
                      color: messageHovered[request.id] ? "#ffffff" : undefined,
                      borderColor: messageHovered[request.id] ? "#000000" : undefined,
                      transform: messageHovered[request.id] ? "scale(1.02)" : "scale(1)",
                    }}
                    onMouseEnter={() => handleMessageHover(request.id, true)}
                    onMouseLeave={() => handleMessageHover(request.id, false)}
                  >
                    <MessageCircle className="h-3 w-3 mr-1" />
                    Message
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full transition-all duration-200 cursor-pointer"
          style={{
            backgroundColor: viewAllHovered ? "#000000" : "transparent",
            color: viewAllHovered ? "#ffffff" : undefined,
            borderColor: viewAllHovered ? "#000000" : undefined,
            transform: viewAllHovered ? "scale(1.02)" : "scale(1)",
          }}
          onMouseEnter={() => setViewAllHovered(true)}
          onMouseLeave={() => setViewAllHovered(false)}
        >
          View All Requests
        </Button>
      </CardContent>
    </Card>
  )
}
