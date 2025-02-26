
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function PortfolioOverview() {
  const portfolio = {
    totalValue: "$125,432.67",
    dayChange: "+$1,234.56",
    dayChangePercent: "+0.98%",
    holdings: [
      { symbol: "AAPL", allocation: 25, value: "$31,358.17" },
      { symbol: "MSFT", allocation: 20, value: "$25,086.53" },
      { symbol: "GOOGL", allocation: 15, value: "$18,814.90" },
      { symbol: "AMZN", allocation: 15, value: "$18,814.90" },
      { symbol: "TSLA", allocation: 25, value: "$31,358.17" },
    ],
  };

  return (
    <div className="space-y-4">
      <Card className="animate-fadeIn">
        <CardHeader>
          <CardTitle>Portfolio Value</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold">{portfolio.totalValue}</div>
          <div className="mt-2 text-sm text-success">
            {portfolio.dayChange} ({portfolio.dayChangePercent})
          </div>
        </CardContent>
      </Card>

      <Card className="animate-fadeIn">
        <CardHeader>
          <CardTitle>Holdings</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {portfolio.holdings.map((holding) => (
              <div key={holding.symbol} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{holding.symbol}</span>
                  <span>{holding.value}</span>
                </div>
                <Progress value={holding.allocation} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
