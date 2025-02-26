
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function StockScreener() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sector, setSector] = useState("");

  const stocks = [
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      price: "194.68",
      change: "+1.23",
      sector: "Technology",
      peRatio: "31.5",
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corporation",
      price: "374.58",
      change: "+2.15",
      sector: "Technology",
      peRatio: "36.2",
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      price: "133.97",
      change: "-0.45",
      sector: "Technology",
      peRatio: "25.8",
    },
  ];

  return (
    <Card className="animate-fadeIn">
      <CardHeader>
        <CardTitle>Stock Screener</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-4 mb-6">
          <Input
            placeholder="Search stocks..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Select value={sector} onValueChange={setSector}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select sector" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="technology">Technology</SelectItem>
              <SelectItem value="healthcare">Healthcare</SelectItem>
              <SelectItem value="finance">Finance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Symbol</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Change</TableHead>
                <TableHead>Sector</TableHead>
                <TableHead>P/E Ratio</TableHead>
                <TableHead></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {stocks.map((stock) => (
                <TableRow key={stock.symbol}>
                  <TableCell className="font-medium">{stock.symbol}</TableCell>
                  <TableCell>{stock.name}</TableCell>
                  <TableCell>${stock.price}</TableCell>
                  <TableCell
                    className={
                      stock.change.startsWith("+") ? "text-success" : "text-danger"
                    }
                  >
                    {stock.change}%
                  </TableCell>
                  <TableCell>{stock.sector}</TableCell>
                  <TableCell>{stock.peRatio}</TableCell>
                  <TableCell>
                    <Button variant="outline" size="sm">
                      Add to Watchlist
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
