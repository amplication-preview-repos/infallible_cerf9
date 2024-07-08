import { User } from "../user/User";
import { Frame } from "../frame/Frame";

export type Bot = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  isRunning: boolean | null;
  name: string | null;
  token: string | null;
  user?: User | null;
  frames?: Array<Frame>;
};
