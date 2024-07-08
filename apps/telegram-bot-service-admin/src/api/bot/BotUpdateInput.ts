import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { FrameUpdateManyWithoutBotsInput } from "./FrameUpdateManyWithoutBotsInput";

export type BotUpdateInput = {
  isRunning?: boolean | null;
  name?: string | null;
  token?: string | null;
  user?: UserWhereUniqueInput | null;
  frames?: FrameUpdateManyWithoutBotsInput;
};
