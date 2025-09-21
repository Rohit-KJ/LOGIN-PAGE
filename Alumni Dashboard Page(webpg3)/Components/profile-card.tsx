import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { MapPin, Briefcase, Calendar, Edit } from "lucide-react"

export function ProfileCard() {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4">
          <Avatar className="h-24 w-24 border-4 border-primary/20">
            <AvatarImage src="/professional-indian-man-headshot.png" />
            <AvatarFallback className="text-2xl font-semibold bg-primary/10 text-primary">TG</AvatarFallback>
          </Avatar>
        </div>
        <h2 className="text-2xl font-bold text-card-foreground font-[family-name:var(--font-poppins)]">Tanmay Garg</h2>
        <Badge variant="secondary" className="w-fit mx-auto">
          Class of 2018
        </Badge>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Briefcase className="h-4 w-4" />
            <span>Senior Software Engineer</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4" />
            <span>Google Inc.</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>San Francisco, CA</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 py-4 border-t border-border">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">156</div>
            <div className="text-xs text-muted-foreground">Connections</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">23</div>
            <div className="text-xs text-muted-foreground">Events</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">8</div>
            <div className="text-xs text-muted-foreground">Mentees</div>
          </div>
        </div>

        <Button
          className="w-full hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg"
          size="sm"
        >
          <Edit className="h-4 w-4 mr-2" />
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  )
}
