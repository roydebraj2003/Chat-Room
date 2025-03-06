import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  MessageSquare,
  Users,
  Image,
  Video,
  LogIn,
  UserPlus,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const scrollToFeatures = () => {
    document
      .getElementById("features-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="flex flex-col items-center min-h-screen w-full bg-white dark:bg-gray-950">
      {/* Hero Section (Scrollable) */}
      <div className="w-full min-h-screen px-4 py-16 md:py-24 flex flex-col justify-center items-center gap-7 max-w-5xl mx-auto relative">
        <div className="flex items-center mb-6">
          <div className="h-12 w-12 bg-black dark:bg-white rounded-full flex items-center justify-center mr-4">
            <MessageSquare className="h-6 w-6 text-white dark:text-black" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-black dark:text-white">
            ThreadHive
          </h1>
        </div>

        <h2 className="text-2xl md:text-3xl text-center font-semibold mb-4 text-black dark:text-white">
          Where conversations take flight
        </h2>

        <p className="text-lg md:text-xl text-center text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
          A vibrant chat room where users connect, share images, videos, and
          ideas in dynamic threads. Join the buzz, start conversations, and
          build communities — all in one place. Your voice, your content, your
          hive.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center">
          <Button
            asChild
            size="lg"
            className="bg-black hover:bg-gray-800 text-white w-full dark:bg-white dark:hover:bg-gray-200 dark:text-black"
          >
            <Link to="/signup">
              <UserPlus className="mr-2 h-5 w-5" />
              Sign Up
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full border-black text-black hover:bg-gray-100 dark:border-white dark:text-white dark:hover:bg-gray-800"
          >
            <Link to="/login">
              <LogIn className="mr-2 h-5 w-5" />
              Log In
            </Link>
          </Button>
        </div>

        {/* Scroll Down Indicator */}
        <div
          className="absolute bottom-10 animate-bounce cursor-pointer"
          onClick={scrollToFeatures}
        >
          <ChevronDown className="h-8 w-8 text-black dark:text-white" />
          <span className="sr-only">Scroll down</span>
        </div>
      </div>

      {/* Features Section */}
      <div
        id="features-section"
        className="w-full bg-gray-50 dark:bg-gray-900 py-16 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-black dark:text-white">
            Why join ThreadHive?
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-gray-200 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                    <MessageSquare className="h-6 w-6 text-black dark:text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-black dark:text-white">
                    Dynamic Threads
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Create and join conversations that matter to you with our
                    intuitive threading system.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-black dark:text-white" />
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-black dark:text-white">
                    Community Building
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Connect with like-minded individuals and build lasting
                    relationships in your own hive.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="h-12 w-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mb-4">
                    <div className="flex">
                      <Image className="h-5 w-5 text-black dark:text-white" />
                      <Video className="h-5 w-5 text-black dark:text-white -ml-1" />
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold mb-2 text-black dark:text-white">
                    Rich Media Sharing
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Share images, videos, and more seamlessly within your
                    conversations.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full py-16 px-4 bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-black dark:text-white">
            What our users are saying
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <p className="italic text-gray-600 dark:text-gray-300 mb-4">
                  "ThreadHive has completely changed how I connect with my
                  community. The threading system makes conversations so much
                  more organized!"
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-black dark:text-white">
                      Sarah Johnson
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Community Manager
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-gray-200 dark:border-gray-700">
              <CardContent className="p-6">
                <p className="italic text-gray-600 dark:text-gray-300 mb-4">
                  "I love how easy it is to share media in the threads. My
                  project team has been so much more productive since we started
                  using ThreadHive."
                </p>
                <div className="flex items-center">
                  <div className="h-10 w-10 bg-gray-200 dark:bg-gray-700 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium text-black dark:text-white">
                      Michael Chen
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Tech Lead
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="w-full py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-black dark:text-white">
            Ready to join the hive?
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            Start connecting with others and building your community today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-black hover:bg-gray-800 text-white dark:bg-white dark:hover:bg-gray-200 dark:text-black"
            >
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="h-8 w-8 bg-black dark:bg-white rounded-full flex items-center justify-center mr-2">
                <MessageSquare className="h-4 w-4 text-white dark:text-black" />
              </div>
              <p className="font-semibold text-black dark:text-white">
                ThreadHive
              </p>
            </div>

            <div className="flex space-x-8">
              <Link
                to="/about"
                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                About
              </Link>
              <Link
                to="/privacy"
                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                Terms
              </Link>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-black dark:text-gray-300 dark:hover:text-white"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-center md:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} ThreadHive. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;