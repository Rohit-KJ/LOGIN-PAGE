import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageCircle, Share2, Calendar, Briefcase } from "lucide-react"

export function ActivityFeed() {
  const activities = [
    {
      id: 1,
      type: "event",
      title: "Upcoming Event: Alumni Meet 2025",
      description:
        "Join us for the annual alumni gathering in New York City. Network with fellow graduates and share your experiences.",
      time: "2 hours ago",
      icon: Calendar,
      badge: "Event",
      badgeVariant: "default" as const,
    },
    {
      id: 2,
      type: "job",
      title: "New Job Posted by Alumni – Google India",
      description:
        "Senior Product Manager position available. Looking for experienced professionals with 5+ years in product management.",
      time: "5 hours ago",
      icon: Briefcase,
      badge: "Job",
      badgeVariant: "secondary" as const,
    },
    {
      id: 3,
      type: "achievement",
      title: "Sarah Johnson promoted to VP of Engineering",
      description:
        "Congratulations to Sarah Johnson (Class of 2015) on her promotion to Vice President of Engineering at Microsoft.",
      time: "1 day ago",
      icon: Heart,
      badge: "Achievement",
      badgeVariant: "outline" as const,
    },
  ]

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-xl font-[family-name:var(--font-poppins)]">Activity Feed</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {activities.map((activity) => (
          <div key={activity.id} className="border-b border-border last:border-b-0 pb-6 last:pb-0">
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 p-2 rounded-full">
                <activity.icon className="h-5 w-5 text-primary" />
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-center gap-2">
                  <Badge variant={activity.badgeVariant}>{activity.badge}</Badge>
                  <span className="text-sm text-muted-foreground">{activity.time}</span>
                </div>

                <h3 className="font-semibold text-card-foreground font-[family-name:var(--font-poppins)]">
                  {activity.title}
                </h3>

                <p className="text-sm text-muted-foreground leading-relaxed">{activity.description}</p>

                <div className="flex items-center gap-4 pt-2">
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <Heart className="h-4 w-4 mr-1" />
                    Like
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <MessageCircle className="h-4 w-4 mr-1" />
                    Comment
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-primary">
                    <Share2 className="h-4 w-4 mr-1" />
                    Share
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
