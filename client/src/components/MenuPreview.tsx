import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Link } from "wouter";

interface ClassicPizza {
  id: number;
  name: string;
  description: string;
  slicePrice: string;
  price12: string;
  price18: string;
  image: string;
  alt: string;
}

interface SicilianPizza {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  alt: string;
}

export default function MenuPreview() {
  const classicPizzas: ClassicPizza[] = [
    {
      id: 1,
      name: "Classic Cheese",
      description: "Organic tomatoes, mozzarella",
      slicePrice: "$4.00",
      price12: "$21.00",
      price18: "$27.00",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Classic cheese pizza with melted mozzarella"
    },
    {
      id: 2,
      name: "Margherita",
      description: "Organic tomatoes, fresh mozzarella, basil",
      slicePrice: "$4.75",
      price12: "$23.00",
      price18: "$31.00",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Margherita pizza with fresh basil and mozzarella"
    },
    {
      id: 3,
      name: "Pepperoni",
      description: "Organic tomatoes, mozzarella, beef pepperoni",
      slicePrice: "$5.00",
      price12: "$24.00",
      price18: "$33.00",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Pepperoni pizza with premium pepperoni slices"
    }
  ];

  const sicilianPizzas: SicilianPizza[] = [
    {
      id: 1,
      name: "Sicilian Classic",
      description: "Organic tomatoes, mozzarella, basil",
      price: "$33.00",
      image: "https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Sicilian classic pizza with thick crust"
    },
    {
      id: 2,
      name: "Sicilian Pepperoni",
      description: "Organic tomatoes, mozzarella, beef pepperoni, basil",
      price: "$38.00",
      image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600",
      alt: "Sicilian pepperoni pizza with thick crust"
    }
  ];

  return (
    <section id="menu" className="py-16 bg-warm-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-pizza-green mb-4">
            Our Popular Pizzas
          </h2>
        </div>

        {/* Classic New York Pizza Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-pizza-green mb-8 text-center">
            Classic New York Pizza
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {classicPizzas.map((pizza) => (
              <Card key={pizza.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img
                  src={pizza.image}
                  alt={pizza.alt}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-pizza-green mb-2">{pizza.name}</h4>
                  <p className="text-gray-600 text-sm mb-4">{pizza.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">Slice:</span>
                      <span className="text-lg font-bold text-pizza-red">{pizza.slicePrice}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">12":</span>
                      <span className="text-lg font-bold text-pizza-red">{pizza.price12}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">18":</span>
                      <span className="text-lg font-bold text-pizza-red">{pizza.price18}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sicilian Square Pies Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-pizza-green mb-8 text-center">
            Sicilian Square Pies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sicilianPizzas.map((pizza) => (
              <Card key={pizza.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img
                  src={pizza.image}
                  alt={pizza.alt}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold text-pizza-green mb-2">{pizza.name}</h4>
                  <p className="text-gray-600 text-sm mb-4">{pizza.description}</p>
                  <div className="text-center">
                    <span className="text-2xl font-bold text-pizza-red">{pizza.price}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link href="/menu">
            <Button className="bg-pizza-red text-white px-8 py-4 text-lg font-semibold hover:bg-red-700 shadow-lg h-auto">
              View Full Menu
              <ExternalLink className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
