import { SortOrder } from "../../util/SortOrder";

export type BotOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  isRunning?: SortOrder;
  name?: SortOrder;
  token?: SortOrder;
  userId?: SortOrder;
};
