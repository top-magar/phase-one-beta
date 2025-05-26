"use client"

import { useState } from "react"
import {
  Calendar,
  Home,
  Clock,
  Users,
  Settings,
  Plus,
  Sparkles,
  Facebook,
  Instagram,
  MoreHorizontal,
  Heart,
  MessageCircle,
  Share,
  CheckCircle,
  ImageIcon,
  Video,
  FileText,
  BarChart3,
  Target,
  Zap,
  Globe,
  Eye,
  Edit3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"

const navigationItems = [
  { title: "Dashboard", icon: Home, isActive: true },
  { title: "Schedule", icon: Clock },
  { title: "Content", icon: FileText },
  { title: "Analytics", icon: BarChart3 },
  { title: "Accounts", icon: Users },
  { title: "Settings", icon: Settings },
]

const scheduledPosts = [
  {
    id: 1,
    content:
      "🎉 Exciting news! Our new winter collection is launching this Friday. Get ready for amazing deals and cozy styles perfect for Kathmandu weather! #WinterCollection #Nepal #Fashion",
    platform: "facebook",
    scheduledTime: "2:00 PM",
    date: "Today",
    status: "scheduled",
    engagement: { likes: 0, comments: 0, shares: 0 },
    image: "/placeholder.svg?height=60&width=60",
    type: "image",
  },
  {
    id: 2,
    content:
      "Beautiful sunrise from Kathmandu valley this morning! ☀️ Starting the day with gratitude and positive energy. What's inspiring you today? #Kathmandu #Morning #Inspiration",
    platform: "instagram",
    scheduledTime: "6:00 AM",
    date: "Tomorrow",
    status: "scheduled",
    engagement: { likes: 0, comments: 0, shares: 0 },
    image: "/placeholder.svg?height=60&width=60",
    type: "image",
  },
  {
    id: 3,
    content:
      "Customer testimonial: 'Best service in town! Professional, reliable, and always delivers on time.' Thank you for trusting us with your business! 🙏 #CustomerLove #Testimonial #Nepal",
    platform: "facebook",
    scheduledTime: "11:00 AM",
    date: "Dec 28",
    status: "published",
    engagement: { likes: 47, comments: 12, shares: 8 },
    image: "/placeholder.svg?height=60&width=60",
    type: "text",
  },
]

const connectedAccounts = [
  {
    platform: "Facebook",
    icon: Facebook,
    status: "connected",
    followers: "2,847",
    handle: "@phaseonenepal",
    color: "bg-blue-600",
    engagement: "6.8%",
    lastPost: "2 hours ago",
  },
  {
    platform: "Instagram",
    icon: Instagram,
    status: "connected",
    followers: "1,923",
    handle: "@phaseonenepal",
    color: "bg-gradient-to-r from-purple-500 to-pink-500",
    engagement: "8.2%",
    lastPost: "5 hours ago",
  },
]

const quickStats = [
  {
    title: "Total Reach",
    value: "12.4K",
    change: "+18%",
    changeType: "positive",
    icon: Globe,
    color: "text-blue-600",
  },
  {
    title: "Engagement Rate",
    value: "7.5%",
    change: "+2.3%",
    changeType: "positive",
    icon: Heart,
    color: "text-teal-600",
  },
  {
    title: "Posts This Week",
    value: "8",
    change: "+33%",
    changeType: "positive",
    icon: FileText,
    color: "text-orange-500",
  },
  {
    title: "Scheduled Posts",
    value: "15",
    change: "5 today",
    changeType: "neutral",
    icon: Clock,
    color: "text-purple-600",
  },
]

export default function Dashboard() {
  const [aiContent, setAiContent] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)

  const handleAiGenerate = async () => {
    setIsGenerating(true)
    // Simulate AI generation
    setTimeout(() => {
      setAiContent(
        "🌟 Transform your business with innovative solutions designed for Nepal's growing market! Join over 1,000+ local businesses already thriving with our platform. Perfect for entrepreneurs ready to scale! 🚀 #Innovation #Nepal #Business #Entrepreneurship #Growth #LocalBusiness",
      )
      setIsGenerating(false)
    }, 2500)
  }

  return (
    <SidebarProvider>
      <div className="flex h-screen w-full bg-gray-50/50">
        <Sidebar className="border-r border-gray-200/60">
          <SidebarHeader className="border-b border-gray-200/60 p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold text-lg shadow-lg">
                P1
              </div>
              <div>
                <h2 className="font-semibold text-gray-900 text-lg">Phase One</h2>
                <p className="text-sm text-gray-500">Social Media Hub</p>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent className="p-4">
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton
                        isActive={item.isActive}
                        className="w-full justify-start gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200"
                      >
                        <item.icon className="h-5 w-5" />
                        {item.title}
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Quick Actions */}
            <div className="mt-8 p-4 bg-gradient-to-br from-teal-50 to-blue-50 rounded-xl border border-teal-100">
              <h3 className="font-medium text-gray-900 mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                  <Zap className="h-4 w-4 mr-2 text-teal-600" />
                  AI Content Ideas
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
                  <Target className="h-4 w-4 mr-2 text-orange-500" />
                  Schedule Campaign
                </Button>
              </div>
            </div>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1">
          <header className="flex h-16 items-center gap-4 border-b border-gray-200/60 bg-white/80 backdrop-blur-sm px-6">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-6" />
            <div className="flex-1">
              <h1 className="text-xl font-semibold text-gray-900">Good morning! 👋</h1>
              <p className="text-sm text-gray-500">Here's what's happening with your social media today.</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Calendar className="h-4 w-4 mr-2" />
                View Calendar
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white shadow-sm">
                <Plus className="h-4 w-4 mr-2" />
                Create Post
              </Button>
            </div>
          </header>

          <main className="flex-1 overflow-auto p-6 space-y-6">
            {/* Quick Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickStats.map((stat, index) => (
                <Card key={index} className="border-0 shadow-sm bg-white/60 backdrop-blur-sm">
                  <CardContent className="p-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                      </div>
                      <div className={`p-3 rounded-xl bg-gray-50 ${stat.color}`}>
                        <stat.icon className="h-6 w-6" />
                      </div>
                    </div>
                    <div className="flex items-center mt-3">
                      <span
                        className={`text-xs font-medium ${
                          stat.changeType === "positive"
                            ? "text-green-600"
                            : stat.changeType === "negative"
                              ? "text-red-600"
                              : "text-gray-500"
                        }`}
                      >
                        {stat.change}
                      </span>
                      <span className="text-xs text-gray-500 ml-1">
                        {stat.changeType !== "neutral" ? "from last week" : ""}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
              {/* AI Content Composer */}
              <Card className="xl:col-span-2 border-0 shadow-sm bg-white/60 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-teal-500 to-teal-600">
                      <Sparkles className="h-5 w-5 text-white" />
                    </div>
                    AI-Powered Content Composer
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Let our AI help you create engaging content that resonates with your Nepalese audience
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <Textarea
                      placeholder="Describe what you want to post about, or let AI generate content for you..."
                      value={aiContent}
                      onChange={(e) => setAiContent(e.target.value)}
                      className="min-h-[140px] resize-none border-gray-200 focus:border-teal-500 focus:ring-teal-500/20"
                    />
                    {aiContent && (
                      <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                        {aiContent.length}/280 characters
                      </div>
                    )}
                  </div>

                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="border-gray-200">
                        <ImageIcon className="h-4 w-4 mr-2" />
                        Add Image
                      </Button>
                      <Button variant="outline" size="sm" className="border-gray-200">
                        <Video className="h-4 w-4 mr-2" />
                        Add Video
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        onClick={handleAiGenerate}
                        disabled={isGenerating}
                        className="bg-gradient-to-r from-teal-500 to-teal-600 text-white border-0 hover:from-teal-600 hover:to-teal-700 shadow-sm"
                      >
                        <Sparkles className="h-4 w-4 mr-2" />
                        {isGenerating ? "Generating..." : "AI Assist ✨"}
                      </Button>
                      <Button className="bg-blue-600 hover:bg-blue-700 shadow-sm">Schedule Post</Button>
                    </div>
                  </div>

                  {isGenerating && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-teal-500 border-t-transparent"></div>
                        AI is crafting your content...
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Connected Accounts */}
              <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg">Connected Accounts</CardTitle>
                  <CardDescription>Manage your social media platforms</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {connectedAccounts.map((account) => (
                    <div
                      key={account.platform}
                      className="p-4 border border-gray-100 rounded-xl bg-white/50 hover:bg-white/80 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className={`p-2.5 rounded-xl ${account.color} shadow-sm`}>
                            <account.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{account.platform}</p>
                            <p className="text-sm text-gray-500">{account.handle}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Active
                        </Badge>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="text-gray-500">Followers</p>
                          <p className="font-semibold text-gray-900">{account.followers}</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Engagement</p>
                          <p className="font-semibold text-gray-900">{account.engagement}</p>
                        </div>
                      </div>

                      <div className="mt-3 pt-3 border-t border-gray-100">
                        <p className="text-xs text-gray-500">Last post: {account.lastPost}</p>
                      </div>
                    </div>
                  ))}

                  <Button
                    variant="outline"
                    className="w-full border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Connect New Account
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Scheduled Posts */}
            <Card className="border-0 shadow-sm bg-white/60 backdrop-blur-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-lg">Upcoming Scheduled Posts</CardTitle>
                    <CardDescription>Your content pipeline for the next few days</CardDescription>
                  </div>
                  <Button variant="outline" className="border-gray-200">
                    <Calendar className="h-4 w-4 mr-2" />
                    View Calendar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {scheduledPosts.map((post) => (
                    <div
                      key={post.id}
                      className="flex items-start gap-4 p-4 border border-gray-100 rounded-xl hover:bg-white/50 transition-all duration-200 group"
                    >
                      <div className="flex-shrink-0">
                        <div
                          className={`p-2.5 rounded-xl ${
                            post.platform === "facebook"
                              ? "bg-blue-600"
                              : "bg-gradient-to-r from-purple-500 to-pink-500"
                          } shadow-sm`}
                        >
                          {post.platform === "facebook" ? (
                            <Facebook className="h-4 w-4 text-white" />
                          ) : (
                            <Instagram className="h-4 w-4 text-white" />
                          )}
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <Badge
                              variant={post.status === "published" ? "default" : "secondary"}
                              className={
                                post.status === "published" ? "bg-green-100 text-green-700 border-green-200" : ""
                              }
                            >
                              {post.status}
                            </Badge>
                            <span className="text-sm text-gray-500">
                              {post.date} at {post.scheduledTime}
                            </span>
                          </div>
                          <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <Edit3 className="h-4 w-4" />
                            </Button>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>

                        <p className="text-sm text-gray-900 mb-3 line-clamp-2">{post.content}</p>

                        {post.status === "published" && (
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <Heart className="h-3 w-3 text-red-500" />
                              {post.engagement.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageCircle className="h-3 w-3 text-blue-500" />
                              {post.engagement.comments}
                            </span>
                            <span className="flex items-center gap-1">
                              <Share className="h-3 w-3 text-green-500" />
                              {post.engagement.shares}
                            </span>
                          </div>
                        )}
                      </div>

                      {post.image && (
                        <div className="flex-shrink-0">
                          <img
                            src={post.image || "/placeholder.svg"}
                            alt="Post preview"
                            className="w-16 h-16 rounded-lg object-cover border border-gray-200"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-gray-100">
                  <Button
                    variant="outline"
                    className="w-full border-dashed border-gray-300 hover:border-blue-400 hover:bg-blue-50"
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Schedule New Post
                  </Button>
                </div>
              </CardContent>
            </Card>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
