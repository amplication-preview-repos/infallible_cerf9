import { InputJsonValue } from "../../types";
import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";

export type FrameUpdateInput = {
  sequence?: number | null;
  content?: InputJsonValue;
  bot?: BotWhereUniqueInput | null;
};
