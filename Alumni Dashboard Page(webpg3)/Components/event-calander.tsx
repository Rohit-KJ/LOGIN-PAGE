"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, MapPin } from "lucide-react"
import { useState } from "react"

export function EventCalendar() {
  const [hoveredButton, setHoveredButton] = useState<string | null>(null)

  const upcomingEvents = [
    {
      id: 1,
      title: "Alumni Meet 2025",
      date: "Mar 15, 2025",
      time: "6:00 PM",
      location: "Mumbai, India",
      type: "Networking",
      attendees: 156,
    },
    {
      id: 2,
      title: "Tech Talk: AI in Healthcare",
      date: "Mar 22, 2025",
      time: "2:00 PM",
      location: "Bangalore, India",
      type: "Webinar",
      attendees: 89,
    },
    {
      id: 3,
      title: "Career Fair 2025",
      date: "Apr 5, 2025",
      time: "10:00 AM",
      location: "Delhi, India",
      type: "Career",
      attendees: 234,
    },
  ]

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-lg font-[family-name:var(--font-poppins)] flex items-center gap-2">
          <Calendar className="h-5 w-5 text-primary" />
          Upcoming Events
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {upcomingEvents.map((event) => (
          <div key={event.id} className="p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-card-foreground text-sm">{event.title}</h3>
                <Badge variant="secondary" className="text-xs">
                  {event.type}
                </Badge>
              </div>

              <div className="space-y-1 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {event.date}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {event.time}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {event.location}
                </div>
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-xs text-muted-foreground">{event.attendees} attending</span>
                <Button
                  size="sm"
                  variant="outline"
                  className="text-xs transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] shadow-sm hover:shadow-lg cursor-pointer bg-transparent"
                  style={{
                    backgroundColor: hoveredButton === `register-${event.id}` ? "#000000" : "",
                    color: hoveredButton === `register-${event.id}` ? "#ffffff" : "",
                    borderColor: hoveredButton === `register-${event.id}` ? "#000000" : "",
                  }}
                  onMouseEnter={() => setHoveredButton(`register-${event.id}`)}
                  onMouseLeave={() => setHoveredButton(null)}
                >
                  Register
                </Button>
              </div>
            </div>
          </div>
        ))}

        <Button
          variant="ghost"
          className="w-full text-sm transition-all duration-300 ease-in-out transform hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
          style={{
            backgroundColor: hoveredButton === "view-all-events" ? "#000000" : "",
            color: hoveredButton === "view-all-events" ? "#ffffff" : "",
            borderColor: hoveredButton === "view-all-events" ? "#000000" : "",
          }}
          onMouseEnter={() => setHoveredButton("view-all-events")}
          onMouseLeave={() => setHoveredButton(null)}
        >
          View All Events
        </Button>
      </CardContent>
    </Card>
  )
}
