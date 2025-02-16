"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Package, Star } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  rating?: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    description: "High-quality wireless headphones with noise cancellation",
    rating: 4.5
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    description: "Advanced smartwatch with health tracking features",
    rating: 4.8
  },
  {
    id: 3,
    name: "Ultra HD Camera",
    price: 599.99,
    image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80",
    description: "Professional grade digital camera with 4K recording",
    rating: 4.7
  },
  {
    id: 4,
    name: "Gaming Laptop",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&q=80",
    description: "High-performance gaming laptop with RTX graphics",
    rating: 4.9
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&q=80",
    description: "True wireless earbuds with premium sound quality",
    rating: 4.6
  },
  {
    id: 6,
    name: "4K Gaming Monitor",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80",
    description: "Ultra-wide 4K monitor for immersive gaming",
    rating: 4.8
  }
];

export default function Home() {
  const [cart, setCart] = useState<Product[]>([]);
  const { toast } = useToast();

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const removeFromCart = (productId: number) => {
    setCart(cart.filter(item => item.id !== productId));
    toast({
      title: "Removed from cart",
      description: "Item has been removed from your cart.",
      variant: "destructive",
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0); // Now returns a number instead of a string
  };

  return (
    <div className="min-h-screen">
      <Navbar cartItemCount={cart.length} cartTotal={getTotalPrice()} /> {/* Fixed */}

      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-background to-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold">
              Welcome to <span className="text-primary">TechStore</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the latest in technology with our premium selection of gadgets and accessories.
            </p>
            <Button size="lg" className="mt-8" asChild>
              <a href="#products">Shop Now</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className="overflow-hidden group animate-slide-up" style={{
                animationDelay: `${index * 100}ms`
              }}>
                <CardHeader className="p-0">
                  <div className="relative aspect-video">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                      <span className="ml-1 text-sm">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{product.description}</p>
                  <p className="text-2xl font-bold text-primary">${product.price}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  {cart.some(item => item.id === product.id) ? (
                    <Button
                      variant="destructive"
                      className="w-full"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove from Cart
                    </Button>
                  ) : (
                    <Button
                      className="w-full"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
