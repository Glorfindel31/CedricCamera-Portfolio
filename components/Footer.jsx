import style from './footer.module.css';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <small className={style['footer_text']}>Copyright 2023 Cedric Florentin</small>
    </footer>
  );
}
