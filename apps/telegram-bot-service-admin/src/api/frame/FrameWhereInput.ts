import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BotWhereUniqueInput } from "../bot/BotWhereUniqueInput";

export type FrameWhereInput = {
  id?: StringFilter;
  sequence?: IntNullableFilter;
  content?: JsonFilter;
  bot?: BotWhereUniqueInput;
};
