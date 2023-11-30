import style from '../[imageId]/page.module.css';
import {getLocalPrintingData} from '@utils/gallery-data';
import SelectInputs from './SelectInputs';

function Options({params, ...props}) {
  const {imageId} = params;
  const imageData = getLocalPrintingData().data.find(item => item.asset_id === imageId);

  const options = {
    materiel: ['canvas', 'paper', 'framed'].map(value => ({value, label: value})),
    size: [20, 40, 60].map(value => ({
      value,
      label: `${value}x${Math.floor(value * imageData.aspect_ratio)} cm`,
    })),
    frame: ['Black', 'White', 'Wood'].map(value => ({value, label: value})),
  };

  return (
    <div className={style.options}>
      <h6 className={style['image-title']}>{imageData.filename.replace(/-/g, ' ')}</h6>
      <SelectInputs
        name="materiel"
        options={options.materiel}
        selectedOptions={props.selectedOptions}
        setSelectedOptions={props.setSelectedOptions}
      />
      <SelectInputs
        name="size"
        options={options.size}
        selectedOptions={props.selectedOptions}
        setSelectedOptions={props.setSelectedOptions}
      />
      {props.selectedOptions.materiel === 'framed' && (
        <SelectInputs
          name="frame"
          options={options.frame}
          selectedOptions={props.selectedOptions}
          setSelectedOptions={props.setSelectedOptions}
        />
      )}
      <label htmlFor="showcaseColor">Change the color to match your wall color</label>
      <input
        id="showcaseColor"
        type="color"
        value={props.showcaseColor}
        onChange={event => props.setShowcaseColor(event.target.value)}
      />
      <button className={style.btn}>
        Order {imageData.price.toLocaleString('vn-VN')} VND
      </button>
      <div className={style.accordion}>
        <label htmlFor="description">Description</label>
        <p id="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore qui molestias
          esse voluptatem, eveniet voluptatum magnam explicabo et id doloremque quaerat
          praesentium, officia nesciunt quia accusamus labore. Quis, cumque sequi?
        </p>
      </div>
    </div>
  );
}

export default Options;
