import style from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={style.footer}>
      <small className={style['footer_text']}>
        Copyright 2023, All right reserved | Cedric Florentin
      </small>
    </footer>
  );
}
