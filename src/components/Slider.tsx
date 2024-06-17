import React, { useState } from 'react';
import './Slider.scss';

export type SliderProps = {
  type: 'continuous' | 'discreet';
  subtype: 'single' | 'range';
  numberOfSteps?: number;
  handleSize: 'size_24' | 'size_32';
  onChange: (value: number | [number, number]) => void;
};

const Slider: React.FC<SliderProps> = ({
  type,
  subtype,
  numberOfSteps = 10,
  handleSize,
  onChange,
}) => {
  const [value, setValue] = useState<number | [number, number]>(subtype === 'single' ? 0 : [0, 100]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index?: number) => {
    if (subtype === 'single') {
      const newValue = parseFloat(event.target.value);
      setValue(newValue);
      onChange(newValue);
    } else if (subtype === 'range') {
      const newRange: [number, number] = Array.isArray(value) ? [...value] as [number, number] : [0, 0];
      newRange[index!] = parseFloat(event.target.value);
      setValue(newRange);
      onChange(newRange);
    }
  };

  return (
    <div className={`slider ${handleSize}`}>
      <input
        type="range"
        min={0}
        max={100}
        step={type === 'discreet' ? 100 / numberOfSteps : 1}
        value={typeof value === 'number' ? value : value[0]}
        onChange={(e) => handleChange(e, 0)}
      />
      {subtype === 'range' && (
        <input
          type="range"
          min={0}
          max={100}
          step={type === 'discreet' ? 100 / numberOfSteps : 1}
          value={typeof value === 'number' ? value : value[1]}
          onChange={(e) => handleChange(e, 1)}
        />
      )}
    </div>
  );
};

export default Slider;
