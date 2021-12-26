import { useEffect, useRef } from 'react';
import classes from './AutoGrowingTextarea.module.css';

const AutoGrowingTextarea = ({ value='', onChange, placeholder='', className='', textareaClassName='', name }) => {
  const textarea = useRef();
  useEffect(() => {
    if (textarea.current) {
      if (!value) {
        textarea.current.value = '';
      } else {
        textarea.current.value = value;
      }
    }
  }, [value]);
  return (
    <div className={[classes.Container, classes.Stacked, className].join(' ')}>
      <textarea
        ref={textarea}
        placeholder={placeholder}
        className={[classes.Textarea, textareaClassName].join(' ')}
        value={value}
        onChange={(e) => {
          e.target.parentNode.dataset.value = e.target.value;
          if (onChange) onChange(e);
        }}
        name={name}
      ></textarea>
    </div>
  );
};

export default AutoGrowingTextarea;
