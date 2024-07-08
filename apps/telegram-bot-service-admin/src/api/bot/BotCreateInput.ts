import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FrameCreateNestedManyWithoutBotsInput } from "./FrameCreateNestedManyWithoutBotsInput";

export type BotCreateInput = {
  isRunning?: boolean | null;
  name?: string | null;
  token?: string | null;
  user?: UserWhereUniqueInput | null;
  frames?: FrameCreateNestedManyWithoutBotsInput;
};
