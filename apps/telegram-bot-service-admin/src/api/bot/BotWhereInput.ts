import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FrameListRelationFilter } from "../frame/FrameListRelationFilter";

export type BotWhereInput = {
  id?: StringFilter;
  isRunning?: BooleanNullableFilter;
  name?: StringNullableFilter;
  token?: StringNullableFilter;
  user?: UserWhereUniqueInput;
  frames?: FrameListRelationFilter;
};
