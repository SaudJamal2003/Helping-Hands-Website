
export function convertSqlDateToFormattedDate(sqlDate) {
    // Parse the SQL date string
    const parsedDate = new Date(sqlDate);
  
    // Array of month names
    const monthNames = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
  
    // Get the month, day, and year
    const month = monthNames[parsedDate.getMonth()];
    const day = parsedDate.getDate();
    const year = parsedDate.getFullYear();
  
    // Format the date
    const formattedDate = `${month} ${day}, ${year}`;
  
    return formattedDate;
  }

  