"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, Lock, User, Building2, MapPin, Calendar, Briefcase, ArrowLeft } from "lucide-react"

type UserRole = "alumni" | "student" | "admin" | "faculty"

export function LoginForm() {
  const [selectedRole, setSelectedRole] = useState<UserRole>("alumni")
  const [isLogin, setIsLogin] = useState(true)

  const getRoleDisplayName = (role: UserRole) => {
    const roleNames = {
      alumni: "Alumni",
      student: "Student",
      admin: "Admin",
      faculty: "Faculty",
    }
    return roleNames[role]
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-white shadow-2xl border-0">
      <CardHeader className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600 mb-2">
          <User className="w-4 h-4" />
          <span>Logging in as {getRoleDisplayName(selectedRole)}</span>
        </div>
        <CardTitle className="text-2xl font-bold text-balance text-gray-900">Welcome Back!</CardTitle>
        <CardDescription className="text-pretty text-gray-600">{"Let's Stay Connected."}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="role" className="text-gray-700">
            Select Your Role
          </Label>
          <Select value={selectedRole} onValueChange={(value: UserRole) => setSelectedRole(value)}>
            <SelectTrigger className="bg-white border-gray-300">
              <SelectValue placeholder="Choose your role" />
            </SelectTrigger>
            <SelectContent className="bg-white">
              <SelectItem value="alumni">Alumni</SelectItem>
              <SelectItem value="student">Student</SelectItem>
              <SelectItem value="admin">Admin</SelectItem>
              <SelectItem value="faculty">Faculty</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Tabs value={isLogin ? "login" : "signup"} onValueChange={(value) => setIsLogin(value === "login")}>
          <TabsList className="grid w-full grid-cols-2 bg-gray-100">
            <TabsTrigger value="login" className="data-[state=active]:bg-white data-[state=active]:text-gray-900">
              Login
            </TabsTrigger>
            <TabsTrigger value="signup" className="data-[state=active]:bg-white data-[state=active]:text-gray-900">
              Sign Up
            </TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">
                Email / Username
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email or username"
                  className="pl-10 bg-white border-gray-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  className="pl-10 bg-white border-gray-300"
                />
              </div>
            </div>

            <Button
              className="w-full"
              size="lg"
              style={{ backgroundColor: "#2563eb", color: "#ffffff", border: "none" }}
            >
              Login
            </Button>

            <Button variant="link" className="w-full text-sm text-blue-600 hover:text-blue-700">
              Forgot Password?
            </Button>
          </TabsContent>

          <TabsContent value="signup" className="space-y-4 mt-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-700">
                Full Name
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  className="pl-10 bg-white border-gray-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="signup-email" className="text-gray-700">
                Email
              </Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="Enter your email"
                  className="pl-10 bg-white border-gray-300"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="signup-password" className="text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="signup-password"
                  type="password"
                  placeholder="Create a password"
                  className="pl-10 bg-white border-gray-300"
                />
              </div>
            </div>

            {(selectedRole === "alumni" || selectedRole === "student") && (
              <div className="space-y-2">
                <Label htmlFor="batch" className="text-gray-700">
                  Batch/Year
                </Label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    id="batch"
                    type="text"
                    placeholder="e.g., 2020, Class of 2018"
                    className="pl-10 bg-white border-gray-300"
                  />
                </div>
              </div>
            )}

            {selectedRole === "alumni" && (
              <>
                <div className="space-y-2">
                  <Label htmlFor="job" className="text-gray-700">
                    Current Job
                  </Label>
                  <div className="relative">
                    <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="job"
                      type="text"
                      placeholder="Your current position"
                      className="pl-10 bg-white border-gray-300"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-700">
                    Company
                  </Label>
                  <div className="relative">
                    <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your current company"
                      className="pl-10 bg-white border-gray-300"
                    />
                  </div>
                </div>
              </>
            )}

            <div className="space-y-2">
              <Label htmlFor="location" className="text-gray-700">
                Location
              </Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  id="location"
                  type="text"
                  placeholder="Your current location"
                  className="pl-10 bg-white border-gray-300"
                />
              </div>
            </div>

            <Button
              className="w-full"
              size="lg"
              style={{ backgroundColor: "#2563eb", color: "#ffffff", border: "none" }}
            >
              Sign Up
            </Button>
          </TabsContent>
        </Tabs>

        <div className="pt-4 border-t border-gray-200">
          <Button
            variant="outline"
            className="w-full bg-white border-gray-300 text-gray-700 hover:bg-gray-50"
            size="lg"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
