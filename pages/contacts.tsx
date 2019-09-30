import * as React from 'react';
import ContactRoles from "../pageTemplate/Contacts/ContactRoles";
import MainContacts from '../pageTemplate/Contacts/MainContacts';
import LayoutTitleWithContent from "../components/Layout/LayoutTitleWithContent";
import ContactMap from "../pageTemplate/Contacts/ContactMap";

interface IContactsProps {
  [prop: string]: any
}

const Contacts: React.FC<IContactsProps> = () => {
  return (
    <LayoutTitleWithContent
      titleStyle={{
        mb: 32,
      }}
      title={'Контакты'}>

      <MainContacts/>
      <ContactMap/>
      <ContactRoles/>


    </LayoutTitleWithContent>
  );
};

export default Contacts;
