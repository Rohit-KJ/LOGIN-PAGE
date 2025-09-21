import { Button } from "@/components/ui/button"
import { Home, Calendar, Users, Heart, Mail } from "lucide-react"

export function AlumniNavigation() {
  const navItems = [
    { label: "Home", icon: Home, active: true },
    { label: "Events", icon: Calendar },
    { label: "Mentorship", icon: Users },
    { label: "Donations", icon: Heart },
    { label: "Contact", icon: Mail },
  ]

  return (
    <nav className="bg-card border-b border-border shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="font-bold text-xl text-primary font-[family-name:var(--font-poppins)]">Alumni Portal</div>

            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Button
                  key={item.label}
                  variant={item.active ? "default" : "ghost"}
                  size="sm"
                  className="flex items-center gap-2 font-medium"
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm">
              Notifications
            </Button>
            <Button variant="ghost" size="sm">
              Profile
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
