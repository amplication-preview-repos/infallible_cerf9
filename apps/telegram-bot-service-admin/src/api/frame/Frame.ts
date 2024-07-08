import { JsonValue } from "type-fest";
import { Bot } from "../bot/Bot";

export type Frame = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  sequence: number | null;
  content: JsonValue;
  bot?: Bot | null;
};
