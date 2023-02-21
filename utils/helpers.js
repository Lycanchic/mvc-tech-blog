module.exports = {
    format_date: date => {
      // const month = date.getMonth() + 1;
      // const day = date.getDate();
      // const year = date.getFullYear();
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear}`;
    }
  };