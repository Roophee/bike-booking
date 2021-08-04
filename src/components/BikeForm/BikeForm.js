import React, { useCallback, useState, useMemo } from 'react';
import localforage from 'localforage';
import StyledBikeForm from './style';
import ValidationMessage from '../ValidationMessage';

const BikeForm = props => {
  const { setGetData } = props;
  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [color, setColor] = useState('');
  const [wheelSize, setWheelSize] = useState();
  const [price, setPrice] = useState('');
  const [id, setId] = useState('');
  const [description, setDescription] = useState('');
  const [messageOnValidation, setMessageOnValidation] = useState('');
  const bikeTypes = useMemo(
    () => [
      'road',
      'cruiser',
      'fixed gear',
      'mountain',
      'bmx',
      'touring',
      'recumbent',
      'folding',
      'utility',
    ],
    []
  );
  const clearMessage = useCallback(() => setMessageOnValidation(''), [setMessageOnValidation]);
  const clearForm = useCallback(() => {
    setName('');
    setType('');
    setColor('');
    setId('');
    setDescription('');
    setPrice('');
    setWheelSize('');
  }, [setName, setType, setColor, setId, setDescription, setPrice, setWheelSize]);

  const validateForm = useCallback(() => {
    if (name.length < 5) {
      return 'Name length should be more than 4 characters';
    }
    if (!bikeTypes.includes(type.toLowerCase())) {
      return 'Type of bike is incorrect. There is available types of bikes: road, cruiser, fixed gear, mountain, bmx, touring, recumbent, folding, utility'
    }
    if (color.length < 3) {
      return 'Color length should be more than 3 characters';
    }
    if (Number.parseInt(wheelSize, 10) < 37 || wheelSize > 622) {
      return 'Wheel size should be in range 37-622 millimeters';
    }
    if (id.length !== 13) {
      return 'ID length should be 13-digit number';
    }
    if (Number.parseInt(price, 10) < 0.01) {
      return 'Price should be more then 0.01 UAH/hr.';
    }
    return 'You just added a new bike';
  }, [name, type, price, id, wheelSize, color, bikeTypes]);

  const nameHandler = useCallback(
    event => {
      event.preventDefault();
      if (messageOnValidation) clearMessage();
      setName(event.target.value);
    },
    [setName, messageOnValidation, clearMessage]
  );

  const wheelSizeHandler = useCallback(
    event => {
      event.preventDefault();
      if (messageOnValidation) clearMessage();
      setWheelSize(event.target.value.replace(/\D/g, ''));
    },
    [setWheelSize, messageOnValidation, clearMessage]
  );

  const typeHandler = useCallback(
    event => {
      event.preventDefault();
      if (messageOnValidation) clearMessage();
      setType(event.target.value);
    },
    [setType, messageOnValidation, clearMessage]
  );
  const colorHandler = useCallback(
    event => {
      if (messageOnValidation) clearMessage();
      event.preventDefault();
      setColor(event.target.value);
    },
    [setColor, messageOnValidation, clearMessage]
  );
  const priceHandler = useCallback(
    event => {
      event.preventDefault();
      if (messageOnValidation) clearMessage();
      setPrice(event.target.value.replace(/\D/g, ''));
    },
    [setPrice, messageOnValidation, clearMessage]
  );
  const idHandler = useCallback(
    event => {
      event.preventDefault();
      if (messageOnValidation) clearMessage();
      setId(event.target.value.replace(/\D/g, '').substr(0, 13));
    },
    [setId, messageOnValidation, clearMessage]
  );
  const descriptionHandler = useCallback(
    event => {
      event.preventDefault();
      if (messageOnValidation) clearMessage();
      setDescription(event.target.value);
    },
    [setDescription, messageOnValidation, clearMessage]
  );

  const onSubmitHandler = useCallback(
    event => {
      event.preventDefault();
      const validationResult = validateForm();
      setMessageOnValidation(validationResult);
      if (validationResult === 'You just added a new bike') {
        localforage.setItem(id, {
          name,
          type,
          id,
          color,
          price,
          wheelSize,
          description,
          status: 'available',
        });
        setGetData(true);
        clearForm();
        setTimeout(clearMessage, 4000);
      }
    },
    [
      setGetData,
      validateForm,
      setMessageOnValidation,
      name,
      type,
      id,
      color,
      price,
      wheelSize,
      description,
      clearForm,
      clearMessage,
    ]
  );

  const onClearHandler = useCallback(
    event => {
      event.preventDefault();
      clearMessage();
      clearForm();
    },
    [clearMessage, clearForm]
  );

  return (
    <StyledBikeForm>
      <form>
        <input
          type="text"
          value={name}
          onChange={nameHandler}
          className="bikeForm__inputSm"
          name="name"
          placeholder="Name"
        />
        <input
          type="text"
          onChange={typeHandler}
          value={type}
          className="bikeForm__inputSm"
          name="type"
          placeholder="Type"
        />
        <input
          type="text"
          onChange={colorHandler}
          value={color}
          className="bikeForm__inputSm"
          name="color"
          placeholder="Color"
        />
        <input
          type="text"
          onChange={wheelSizeHandler}
          value={wheelSize}
          className="bikeForm__inputSm"
          name="wheelSize"
          placeholder="Wheel size"
        />
        <input
          type="text"
          onChange={priceHandler}
          value={price}
          className="bikeForm__inputSm"
          name="price"
          placeholder="Price"
        />
        <input
          type="text"
          onChange={idHandler}
          value={id}
          className="bikeForm__inputSm"
          name="id"
          placeholder="ID(slug):XXXXXXXXXXXXX"
        />
        <textarea
          type="text"
          onChange={descriptionHandler}
          value={description}
          className="bikeForm__inputLg"
          name="description"
          placeholder="Description"
        />
        <div>
          <button type="submit" onClick={onSubmitHandler}>
            SAVE
          </button>
          <button type="cancel" onClick={onClearHandler}>
            CLEAR
          </button>
        </div>
        <div className="bikeForm__afterElem" />
      </form>
      {messageOnValidation && <ValidationMessage message={messageOnValidation} />}
    </StyledBikeForm>
  );
};

export default BikeForm;
