const Form = ({ CALL_FUNCTION }) => {
  return (
    <>
      <h1 data-testid="text-form">Halaman Form</h1>

      <p>Selamat data di Halaman Form</p>
      
      <button onClick={() => CALL_FUNCTION()}>Submit</button>
    </>
  );
};

export default Form;
