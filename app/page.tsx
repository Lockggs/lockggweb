import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Shield, Users, Zap, GamepadIcon, Crown, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-purple-800/30 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <GamepadIcon className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">Lock GG</span>
            </div>
            <Button asChild className="bg-purple-600 hover:bg-purple-700">
              <Link href="https://discord.gg/lockgg" target="_blank" rel="noopener noreferrer">
                Join Discord
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
            The Future of Free Scripts
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Lock GG</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Step into the next level of gaming with Lock GG, home to RF24's #1 free script—designed by the best, for the
            best. Whether you're looking to gain an edge, optimize performance, or experience a seamless gameplay boost,
            we've got you covered!
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg"
            >
              <Link href="https://discord.gg/lockgg" target="_blank" rel="noopener noreferrer">
                Join Discord & Get Started
                <ExternalLink className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Lock GG */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Why Choose Lock GG?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Zap className="h-8 w-8 text-purple-400" />
                  <CheckCircle className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Top-Tier Free Scripts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Crafted for maximum efficiency and unbeatable performance.</p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-purple-400" />
                  <CheckCircle className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Undetectable & Secure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">Play with confidence, knowing you're always ahead of the game.</p>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Users className="h-8 w-8 text-purple-400" />
                  <CheckCircle className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Dedicated Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Our team is always ready to assist, ensuring your experience is smooth and hassle-free.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Available Scripts */}
      <section className="py-16 px-4 bg-black/20">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Available Scripts for Other Games</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-xl">HIDE N SEEK EXTREME</CardTitle>
                <CardDescription className="text-purple-200">
                  Outsmart seekers, enhance strategy, and stay hidden like a pro.
                </CardDescription>
              </CardHeader>
              <CardContent />
            </Card>

            <Card className="bg-gradient-to-br from-blue-900/50 to-cyan-900/50 border-blue-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white text-xl">FISCH</CardTitle>
                <CardDescription className="text-blue-200">
                  Reel in the biggest catches with precision and strategy.
                </CardDescription>
              </CardHeader>
              <CardContent />
            </Card>
          </div>
        </div>
      </section>

      {/* Premium Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <Crown className="h-16 w-16 text-yellow-400" />
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">Looking for More? Unlock Premium Benefits!</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              For those who want to elevate their experience to elite status, we offer a premium RF24 script that
              delivers exclusive features and advanced customization. Join our Discord and open a ticket to access the
              premium version today!
            </p>
            <Card className="bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border-yellow-600/30 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-yellow-400 mb-4">Premium RF24 Script</h3>
                <ul className="text-left text-gray-300 space-y-2 mb-6 max-w-md mx-auto">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Exclusive features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Advanced customization
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    Early access to updates
                  </li>
                </ul>
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700"
                >
                  <Link href="https://discord.gg/lockgg" target="_blank" rel="noopener noreferrer">
                    Get Premium Access
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Your journey to superior gaming starts NOW! 🚀
          </h2>
          <p className="text-xl text-gray-300 mb-8">Join us and take control of the field!</p>
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg"
          >
            <Link href="https://discord.gg/lockgg" target="_blank" rel="noopener noreferrer">
              Join Discord Community
              <ExternalLink className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-800/30 bg-black/40 backdrop-blur-sm py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <GamepadIcon className="h-6 w-6 text-purple-400" />
            <span className="text-xl font-bold text-white">Lock GG</span>
          </div>
          <p className="text-gray-400 mb-4">The Future of Free Scripts</p>
          <div className="flex justify-center space-x-6">
            <Link
              href="https://discord.gg/lockgg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              Discord: discord.gg/lockgg
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
