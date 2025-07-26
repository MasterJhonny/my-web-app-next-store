import Link from "next/link";
import { Button } from "@/components/button";
import { Sun, Heart } from "lucide-react";

function Header() {
  return (
    <header className="border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2">
              <div
                className="w-6 h-6 bg-white"
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              ></div>
              <span className="text-xl font-bold">TIENDA</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="/"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/new"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Nuevo Producto
              </Link>
              <Link
                href="/products/1"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Proveedores
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Blog
              </Link>
              <Link
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-300 hover:text-white"
            >
              <Sun className="h-5 w-5" />
            </Button>
            <Button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-md flex items-center space-x-2">
              <Heart className="h-4 w-4 fill-current" />
              <span>Sponsor</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
