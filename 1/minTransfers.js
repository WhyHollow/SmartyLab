function minTransfers(airports, routes, startingAirport, targetAirport) {
  const graph = {};
  airports.forEach((airport) => (graph[airport] = []));

  routes.forEach((route) => {
    const [from, to] = route;
    if (graph[from]) {
      graph[from].push(to);
    }
  });

  const queue = [[startingAirport, 0]];
  const visited = new Set();

  while (queue.length > 0) {
    const [currentAirport, transfers] = queue.shift();
    if (currentAirport === targetAirport) {
      return transfers;
    }

    if (!visited.has(currentAirport)) {
      visited.add(currentAirport);
      for (const neighbor of graph[currentAirport]) {
        queue.push([neighbor, transfers + 1]);
      }
    }
  }

  return -1;
}

// Тестовые данные
const airports = [
  "BGI",
  "CDG",
  "DEL",
  "DOH",
  "DSM",
  "EWR",
  "EYW",
  "HND",
  "ICN",
  "JFK",
  "LGA",
  "LHR",
  "ORD",
  "SAN",
  "SFO",
  "SIN",
  "TLV",
  "BUD",
];

const routes = [
  ["DSM", "ORD"],
  ["ORD", "BGI"],
  ["BGI", "LGA"],
  ["SIN", "CDG"],
  ["CDG", "SIN"],
  ["CDG", "BUD"],
  ["DEL", "DOH"],
  ["DEL", "CDG"],
  ["TLV", "DEL"],
  ["EWR", "HND"],
  ["HND", "ICN"],
  ["HND", "JFK"],
  ["ICN", "JFK"],
  ["JFK", "LGA"],
  ["EYW", "LHR"],
  ["LHR", "SFO"],
  ["SFO", "SAN"],
  ["SFO", "DSM"],
  ["SAN", "EYW"],
];

const startingAirport = "LGA";
const targetAirport = "SAN";

const result = minTransfers(airports, routes, startingAirport, targetAirport);
console.log(`Минимальное количество пересадок: ${result}`);
