import { AlumniNavigation } from "@/components/alumni-navigation"
import { ProfileCard } from "@/components/profile-card"
import { QuickActions } from "@/components/quick-actions"
import { ActivityFeed } from "@/components/activity-feed"
import { NetworkingSection } from "@/components/networking-section"
import { EventCalendar } from "@/components/event-calendar"
import { DonationSection } from "@/components/donation-section"
import { AlumniDirectory } from "@/components/alumni-directory"
import { MentorshipRequests } from "@/components/mentorship-requests"

export default function AlumniDashboard() {
  return (
    <div className="min-h-screen geometric-bg">
      <AlumniNavigation />

      <main className="container mx-auto px-4 py-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column - Profile & Quick Actions */}
          <div className="lg:col-span-3 space-y-6">
            <ProfileCard />
            <QuickActions />
          </div>

          {/* Center Column - Activity Feed */}
          <div className="lg:col-span-6 space-y-6">
            <ActivityFeed />
            <NetworkingSection />
          </div>

          {/* Right Column - Calendar & Additional Sections */}
          <div className="lg:col-span-3 space-y-6">
            <EventCalendar />
            <DonationSection />
          </div>
        </div>

        {/* Bottom Section - Directory & Mentorship */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <AlumniDirectory />
          <MentorshipRequests />
        </div>
      </main>
    </div>
  )
}
