import {TiArrowSortedDown} from 'react-icons/ti';

export default function MenuOpen() {
  return (
    <>
      <input type="checkbox" className={style.input} />
      <div className={style.arrow}>
        <TiArrowSortedDown />
      </div>
    </>
  );
}
