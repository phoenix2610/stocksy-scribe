
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

export function MarketOverview() {
  const indices = [
    { name: "S&P 500", value: "4,783.45", change: "+1.2%", positive: true },
    { name: "NASDAQ", value: "15,973.12", change: "+1.5%", positive: true },
    { name: "DOW", value: "37,305.16", change: "-0.3%", positive: false },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-3">
      {indices.map((index) => (
        <Card key={index.name} className="animate-fadeIn">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{index.name}</CardTitle>
            {index.positive ? (
              <TrendingUp className="h-4 w-4 text-success" />
            ) : (
              <TrendingDown className="h-4 w-4 text-danger" />
            )}
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{index.value}</div>
            <p
              className={`text-xs ${
                index.positive ? "text-success" : "text-danger"
              }`}
            >
              {index.change}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
