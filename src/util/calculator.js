const calculate = (input) => {
    try {
      //eval function using (Easy way)
      return eval(input);
    } catch (error) {
      return 'Error';
    }
  };
  
  export default calculate;
  