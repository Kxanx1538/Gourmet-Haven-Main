/*import { text } from '@fortawesome/fontawesome-svg-core'; */
import FormField from './FormField';
import { useState, useEffect, useCallback } from 'react';


//const [serverResponse, setServerResponse] = useState('');

const BookingForm = ({
  availableTimes,
  dispatchOnDateChange,
  submitData
}) => {
  const invalidNameErrorMessage = 'Please enter a valid name';
  const invalidEmailErrorMessage = 'Please enter a valid email address';
  const invalidPhoneNumerErrorMessage = 'Please enter a valid phone number (e.g., 123-456-7890)';
  const minimumDate = new Date().toISOString().split('T')[0];
  const defaultTime = availableTimes[0];
  const minimumNumberOfGuests = 1;
  const maximumNumberOfGuests = 200;
  const occasions = ['Birthday', 'Engagement', 'Wedding', 'Mothers Day', 'Graduation', 'Anniversary'];
  const invalidDateErrorMessage = 'Please choose a valid date';
  const invalidTimeErrorMessage = 'Please choose a valid time';
  const invalidOccasionErrorMessage = 'Please choose a valid occasion';
  const invalidNumberOfGuestsErrorMessage = 'Please enter your number of guest';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [date, setDate] = useState(minimumDate);
  const [time, setTime] = useState(defaultTime);
  const [
    numberOfGuests, 
    setNumberGuests
  ] = useState(minimumNumberOfGuests);
  const [occasion, setOccasion] = useState(occasions[0]);
  const [comments, setComment] = useState ('');

  const isDateValid = useCallback(() => date !== '', [date]);
  const isTimeValid = useCallback(() => time !== '', [time]);
  const isNumberOfGuestsValid = useCallback(() => {
    const guests = Number(numberOfGuests);
    return guests >= minimumNumberOfGuests && guests <= maximumNumberOfGuests;
  }, [numberOfGuests, minimumNumberOfGuests, maximumNumberOfGuests]);
  const isOccasionValid = useCallback(() => occasion !== '', [occasion]);
  const isPhoneNumberValid = useCallback(() => /^\d{3}-\d{3}-\d{4}$/.test(phoneNumber), [phoneNumber]);
  const isNameValid = useCallback(() => name !== '', [name]);
  const isEmailValid = useCallback(() => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), [email]);



  const isFormValid = useCallback (() => 
    isNameValid()
    && isEmailValid()
    && isPhoneNumberValid()
    && isDateValid() 
    && isTimeValid() 
    && isNumberOfGuestsValid() 
    && isOccasionValid(),

    [isNameValid,
      isEmailValid,
      isPhoneNumberValid,
      isDateValid,
      isTimeValid,
      isNumberOfGuestsValid,
      isOccasionValid]
    );

  const handleDateChange = e => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  const handleTimeChange = e => setTime(e.target.value);

  const handleFormSubmit = e => {
    e.preventDefault();
    submitData({ name, email, phoneNumber, date, time, numberOfGuests, occasion, comments});
  };
  
  useEffect(() => {
    const submitData = async () => {
      try {
        const response = await fetch('/netlify/functions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name, email, phoneNumber, date, time, numberOfGuests, occasion, comments })
        });

        if (response.ok) {
          // Reservation and email sending were successful
          const data = await response.json();
          console.log(data); // Optionally, do something with the response data
        } else {
          // Handle the case where the serverless function encountered an error
          throw new Error('An error occurred while submitting the form.');
        }
      } catch (error) {
        // Handle any network or general error
        console.error(error);
      }
    };

    if (isFormValid()) {
      submitData();
    }
  }, [name, email, phoneNumber, date, time, numberOfGuests, occasion, comments, isFormValid]);



  /*try {
    const response = await fetch('/Users/ayishetuibrahim/Desktop/React-Projects/the-Little-Lemon-Project/netlify/reserveTable1.js', {
      method: 'POST',
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      const data = await response.json();
      setServerResponse(data.message);
    } else {
      setServerResponse('Reservation failed. Please try again later.');
    }
  } catch (error) {
    setServerResponse('An error occurred while processing your reservation. Please try again later.');
  }
 };*/

  //const isNameValid = () => name !== '';
  //const isEmailValid = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);


  return (
    <form 
    method="POST"
    name ="booking-form"
    netlify
    onSubmit={handleFormSubmit}
    >
      <input type="hidden" name="form-name" value="name_of_my_form" />
      <div className="dining-options">
        <div className="option">
          <input
          type="radio"
          id="indoor-dining"
          name="dining-option"
          value="Indoor Dining"
          checked={occasion === 'Indoor Dining'}
          onChange={(e) => setOccasion(e.target.value)}
          />
          <label htmlFor="indoor-dining">Indoor Dining</label>
        </div>
        <div className="option">
          <input
          type="radio"
          id="outdoor-dining"
          name="dining-option"
          value="Outdoor Dining"
          checked={occasion === 'Outdoor Dining'}
          onChange={(e) => setOccasion(e.target.value)}/>
          <label htmlFor="outdoor-dining">Outdoor Dining</label>
        </div>
      </div>

      <FormField
        label="Name"
        htmlFor="booking-name"
        hasError={!isNameValid()}
        errorMessage={invalidNameErrorMessage}
      >
        <input
          type="text"
          id="booking-name"
          name="booking-name"
          value={name}
          required={true}
          onChange={(e) => setName(e.target.value)}
        />
      </FormField>

      <FormField
        label="Email"
        htmlFor="booking-email"
        hasError={!isEmailValid()}
        errorMessage={invalidEmailErrorMessage}
      >
        <input
          type="email"
          id="booking-email"
          name="booking-email"
          value={email}
          required={true}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormField>

      <FormField
        label="Phone Number"
        htmlFor="booking-phone-number"
        hasError={!isPhoneNumberValid()}
        errorMessage={invalidPhoneNumerErrorMessage}
      >
        <input
          type="tel"
          id="booking-phone-number"
          name="booking-phone-number"
          value={phoneNumber}
          required={true}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </FormField>


      <FormField 
        label="Date" 
        htmlFor="booking-date" 
        hasError={!isDateValid()} 
        errorMessage={invalidDateErrorMessage}
      >
        <input 
          type="date" 
          id="booking-date" 
          name="booking-date" 
          min={minimumDate} 
          value={date} 
          required={true} 
          onChange={handleDateChange}
        />
      </FormField>

      <FormField 
        label="Time" 
        htmlFor="booking-time" 
        hasError={!isTimeValid()} 
        errorMessage={invalidTimeErrorMessage}
      >
        <select 
          id="booking-time" 
          name="booking-time" 
          value={time} 
          required={true} 
          onChange={handleTimeChange}
        >
          {availableTimes.map(times => 
            <option data-testid="booking-time-option" key={times}>
              {times}
            </option>
          )}
        </select>
      </FormField>
      <FormField 
        label="Number of Diners" 
        htmlFor="booking-number-guests" 
        hasError={!isNumberOfGuestsValid()} 
        errorMessage={invalidNumberOfGuestsErrorMessage}
      >
        <input 
          type="number" 
          id="booking-number-guests" 
          name="booking-number-guests" 
          value={numberOfGuests} 
          min={minimumNumberOfGuests} 
          max={maximumNumberOfGuests} 
          required={true} 
          onChange={e => setNumberGuests(e.target.value)}
        />
      </FormField>
      <FormField 
        label="Occasion" 
        htmlFor="booking-occasion" 
        hasError={!isOccasionValid()} 
        errorMessage={invalidOccasionErrorMessage}
      >
        <select 
          id="booking-occasion" 
          name="booking-occasion" 
          value={occasion} 
          required={true} 
          onChange={e => setOccasion(e.target.value)}
        >
          {occasions.map(occasion => 
            <option data-testid="booking-occasion-option" key={occasion}>
              {occasion}
            </option>
          )}
        </select>
      </FormField>

      <FormField
        label="Special Request"
        htmlFor="booking-comments"
        hasError={false}
        errorMessage={''}
      >
        <textarea
          id="booking-comments"
          name="booking-comments"
          placeholder="Add your request"
          value={comments}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
      </FormField>

      <button 
        className="button-primary" 
        type="submit" 
        disabled={!isFormValid()}
      >
        Submit your Reservation
      </button>
    </form>
  );
};

export default BookingForm;
