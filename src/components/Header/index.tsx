import { Breadcrumbs, Link, TextField, Typography, Box, Button } from "@mui/material";
import { Form } from "react-bootstrap";
import styles from "./header.module.scss";

export default function Header() {
  return (
    <>
      <Box className={styles.container}>
      <div>
        <img
          src='https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'
          alt=''
        />
      </div>

      <div>
      <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button >Search</Button>
          </Form>
      </div>

      <div  >
        <Breadcrumbs className={styles.container__items}>
          <Link  className={styles.container__items} underline='none'  href='/'>
            Home
          </Link>
          <Link
            underline='none'
            className={styles.container__items}
            href='/pokedex'
          >
            Pokédex
          </Link>
          <Link underline='none'  className={styles.container__items} href='/'>
            About 
          </Link>
        </Breadcrumbs>
      </div>
      </Box>
    </>
  );
}
