import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BOT_TITLE_FIELD } from "../bot/BotTitle";

export const FrameList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Frames"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="sequence" source="sequence" />
        <TextField label="content" source="content" />
        <ReferenceField label="Bot" source="bot.id" reference="Bot">
          <TextField source={BOT_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
