import { AnalyticsEvent } from "../model/AnalyticsEvent";
import { Statistic } from "../model/Statistic";

export function aggregateEvents(events: AnalyticsEvent[]): Statistic[] {
  const statisticsMap = events.reduce<{
    [key: string]: Statistic;
  }>((acc, current) => {
    const day = current.timestamp.slice(0, 10);
    const key = `${day}-${current.path}`;
    const count = acc[key] ? acc[key].count + 1 : 1;
    return {
      ...acc,
      [key]: {
        count,
        name: current.name,
        timestamp: day,
        path: current.path,
      },
    };
  }, {});
  return Object.values(statisticsMap);
}
