"use client";
import Image from "next/image";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="p-8 space-y-4">
      <Button onClick={() => alert("Primary clicked!")}>
        Add to Cart
      </Button>

      <Button variant="secondary">
        Cancel
      </Button>

      <Button disabled>
        Disabled
      </Button>

      <Button type="submit" variant="primary">
        Submit
      </Button>

      <Button className="w-full">
        Full Width Button
      </Button>
    </main>
  );
}
