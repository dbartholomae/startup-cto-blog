import { AnalyticsEvent } from "../AnalyticsEvent";
import { DBEvent } from "./DBEvent";
import { createScatter } from "./createScatter";

export async function saveEvent(event: AnalyticsEvent) {
  const oneYearInSeconds = 60 * 60 * 24 * 365;
  const ttl = Math.floor(
    new Date(event.timestamp).getTime() / 1000 + oneYearInSeconds
  );

  const scatter = createScatter();
  await DBEvent.create({ ...event, scatter, ttl });
}