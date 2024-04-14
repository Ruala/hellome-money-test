import React, { useMemo } from "react";
import { Link } from "react-router-dom";

import intl from "intl";

import Container from "components/Container";

import styles from "./Footer.module.scss";

const Footer = () => {
  const { footerMenus, contactUs, contacts, copyright } = intl;

  const Menus = useMemo(
    () =>
      footerMenus.map(({ title, list }) => (
        <div key={title}>
          <h3 className={styles.title}>{title}</h3>
          <ul className={styles.menu}>
            {list.map(({ text, href }) => (
              <li key={text}>
                <Link to={href} className={styles.link}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )),
    [footerMenus],
  );

  const ContactsItems = useMemo(
    () =>
      contacts.map(({ office, address }) => (
        <li key={office} className="py-2">
          <h4 className="">{office}</h4>
          <p className="font-medium whitespace-break-spaces">{address}</p>
        </li>
      )),
    [contacts],
  );

  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          {Menus}
          <div>
            <h3 className={styles.title}>{contactUs}</h3>
            <ul className={styles.contacts}>{ContactsItems}</ul>
          </div>
        </div>
        <p className="font-medium text-center">{copyright}</p>
      </Container>
    </footer>
  );
};

export default Footer;
