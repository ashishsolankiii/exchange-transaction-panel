import debounce from 'lodash.debounce';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { InputGroup, FormControl } from "react-bootstrap";

export function useDebounce(callback, timer = 2000) {
  const ref = useRef();

  useEffect(() => {
    ref.current = callback;
  }, [callback]);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };

    return debounce(func, timer);
  }, [timer]);

  return debouncedCallback;
}

function DebouncedTextInput({
  onChange,
  disabled,
  label = 'Text Input',
  placeholder = 'Enter text here',
  className = '',
  style = {},
  value = '',
  duration = 1000,
}) {
  const [inputValue, setInputValue] = useState(value);

  const debouncedRequest = useDebounce(() => {
    onChange(inputValue);
  }, duration);

  const handleSearch = (e) => {
    setInputValue(e.target.value);
    debouncedRequest();
  };

  return (
    <InputGroup className="justify-content-end">
      <FormControl
        type="text"
        value={inputValue}
        onChange={handleSearch}
        placeholder="Search here"
        className='mb-5'
      />
    </InputGroup>

  );
}

export default DebouncedTextInput;
