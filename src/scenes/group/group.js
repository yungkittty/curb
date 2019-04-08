import React from "react";
import ButtonIconFloat from "../../components/button-icon-float";
import ImageUser from "../../components/image-user";
import ImageGroup from "../../components/image-group";

const Group = () => (
  <React.Fragment>
    <ImageUser userId="5ca42db0270b88001c11814c" size="small" placeholderColor="#f2f2f2" />
    <ImageUser userId="5ca42db0270b88001c11814c" size="medium" placeholderColor="#f2f2f2" />
    <ImageUser userId="5ca42db0270b88001c11814c" size="large" placeholderColor="#f2f2f2" />
    <ImageGroup groupId="5ca9a3eacbea51001c2b0ad6" size="small" placeholderColor="#f2f2f2" />
    <ImageGroup groupId="5ca9a3eacbea51001c2b0ad6" size="medium" placeholderColor="#f2f2f2" />
    <ImageGroup groupId="5ca9a3eacbea51001c2b0ad6" size="large" placeholderColor="#f2f2f2" />
    <ButtonIconFloat icon="plus" onClick={() => undefined} />
  </React.Fragment>
);

export default Group;
