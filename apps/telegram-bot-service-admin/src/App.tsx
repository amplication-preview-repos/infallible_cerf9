import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { BotList } from "./bot/BotList";
import { BotCreate } from "./bot/BotCreate";
import { BotEdit } from "./bot/BotEdit";
import { BotShow } from "./bot/BotShow";
import { FrameList } from "./frame/FrameList";
import { FrameCreate } from "./frame/FrameCreate";
import { FrameEdit } from "./frame/FrameEdit";
import { FrameShow } from "./frame/FrameShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TelegramBotService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Bot"
          list={BotList}
          edit={BotEdit}
          create={BotCreate}
          show={BotShow}
        />
        <Resource
          name="Frame"
          list={FrameList}
          edit={FrameEdit}
          create={FrameCreate}
          show={FrameShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
