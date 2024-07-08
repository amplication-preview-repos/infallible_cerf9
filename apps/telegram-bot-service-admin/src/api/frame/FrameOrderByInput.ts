import { SortOrder } from "../../util/SortOrder";

export type FrameOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  sequence?: SortOrder;
  content?: SortOrder;
  botId?: SortOrder;
};
