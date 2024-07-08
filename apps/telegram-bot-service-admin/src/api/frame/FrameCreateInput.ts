import { InputJsonValue } from "../../types";
import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";

export type FrameCreateInput = {
  sequence?: number | null;
  content?: InputJsonValue;
  bot?: BotWhereUniqueInput | null;
};
